import { cloneDeep, take, takeRight } from "lodash/fp"
import { validate } from "./validate"
import { _load } from "./load"
import { apiWrapper, events, joinKey } from "../common"
import { permission } from "../authApi/permissions"
import { BadRequestError } from "../common/errors"
import { getRecordInfo } from "./recordInfo"
import { initialiseChildren } from "./initialiseChildren"
import { getExactNodeForKey } from "../templateApi/hierarchy"

export const save = app => async (record, context) =>
  apiWrapper(
    app,
    events.recordApi.save,
    record.isNew
      ? permission.createRecord.isAuthorized(record.key)
      : permission.updateRecord.isAuthorized(record.key),
    { record },
    _save,
    app,
    record,
    context,
    false
  )

export const _save = async (app, record, context, skipValidation = false) => {
  const recordClone = cloneDeep(record)
  if (!skipValidation) {
    const validationResult = await validate(app)(recordClone, context)
    if (!validationResult.isValid) {
      await app.publish(events.recordApi.save.onInvalid, {
        record,
        validationResult,
      })
      throw new BadRequestError(
        `Save : Record Invalid : ${JSON.stringify(validationResult.errors)}`
      )
    }
  }

  const recordNode = getExactNodeForKey(app.hierarchy)(record.key)

  recordClone.nodeKey = recordNode.nodeKey()

  if (recordClone.isNew) {
    if (!recordNode) throw new Error("Cannot find node for " + record.key)

    // FILES
    // await app.datastore.createFolder(files)
    delete recordClone.isNew
    await app.datastore.createJson(record.key, recordClone)
    await app.publish(events.recordApi.save.onRecordCreated, {
      record: recordClone,
    })
  } else {
    const oldRecord = await _load(app, record.key)
    await app.datastore.updateJson(record.key, recordClone)
    await app.publish(events.recordApi.save.onRecordUpdated, {
      old: oldRecord,
      new: recordClone,
    })
  }

  const returnedClone = cloneDeep(recordClone)
  returnedClone.isNew = false
  return returnedClone
}
