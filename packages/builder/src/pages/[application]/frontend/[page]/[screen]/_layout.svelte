<script>
  import { onMount } from "svelte"
  import { params, leftover } from "@sveltech/routify"
  import { store } from "builderStore"

  // Get any leftover params not caught by Routifys params store.
  const componentIds = $leftover.split("/").filter(id => id !== "")

  // It's a screen, set it to that screen
  if ($params.screen !== "page-layout") {
    store.setCurrentScreen(decodeURI($params.screen))

    // There are leftover stuff, like IDs, so navigate the components and find the ID and select it.
    if ($leftover) {
      // Get the correct screen children.
      const screenChildren = $store.pages[$params.page]._screens.find(
        screen => screen.name === $params.screen
      ).props._children
      findComponent(componentIds, screenChildren)
    }
  } else {
    // It's a page, so set the screentype to page.
    store.setScreenType("page")

    // There are leftover stuff, like IDs, so navigate the components and find the ID and select it.
    if ($leftover) {
      findComponent(componentIds, $store.pages[$params.page].props._children)
    }
  }

  // Find Component with ID and continue
  function findComponent(ids, children) {
    // Setup stuff
    let componentToSelect
    let currentChildren = children

    // Loop through each ID
    ids.forEach(id => {
      // Find ID and select it
      componentToSelect = currentChildren.find(child => child._id === id)

      // Update childrens array to selected components children
      currentChildren = componentToSelect._children
    })

    // Select Component!
    store.selectComponent(componentToSelect)
  }
</script>

<slot />
