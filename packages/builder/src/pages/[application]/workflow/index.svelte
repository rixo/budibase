<!-- <script>
import flowy from "flowy"
import "flowy/engine/index.css"

// for Parcel
import pngs from './assets/*.png'
import svgs from './assets/*.svg'
const images = { ...pngs, ...svgs }

document.addEventListener('DOMContentLoaded', function () {
  var rightcard = false
  var tempblock
  var tempblock2
  document.getElementById('blocklist').innerHTML = `
      <div class="blockelem create-flowy noselect">
        <input type="hidden" name="blockelemtype" class="blockelemtype" value="1">
        <div class="grabme"><img src="${images.grabme}"></div>
        <div class="blockin">
          <div class="blockico"><span></span><img src="${images.eye}"></div>
          <div class="blocktext">
            <p class="blocktitle">New visitor</p>
            <p class="blockdesc">Triggers when somebody visits a specified page</p>
          </div>
        </div>
      </div>
      <div class="blockelem create-flowy noselect">
        <input type="hidden" name="blockelemtype" class="blockelemtype" value="2">
        <div class="grabme"><img src="${images.grabme}"></div>
        <div class="blockin">
          <div class="blockico"><span></span><img src="${images.action}"></div>
          <div class="blocktext">
            <p class="blocktitle">Action is performed</p>
            <p class="blockdesc">Triggers when somebody performs a specified action</p>
          </div>
        </div>
      </div>
      <div class="blockelem create-flowy noselect">
        <input type="hidden" name="blockelemtype" class="blockelemtype" value="3">
        <div class="grabme"><img src="${images.grabme}"></div>
        <div class="blockin">
          <div class="blockico"><span></span><img src="${images.time}"></div>
          <div class="blocktext">
            <p class="blocktitle">Time has passed</p>
            <p class="blockdesc">Triggers after a specified amount of time</p>
          </div>
        </div>
      </div>
      <div class="blockelem create-flowy noselect">
        <input type="hidden" name="blockelemtype" class="blockelemtype" value="4">
        <div class="grabme"><img src="${images.grabme}"></div>
        <div class="blockin">
          <div class="blockico"><span></span><img src="${images.error}"></div>
          <div class="blocktext">
            <p class="blocktitle">Error prompt</p>
            <p class="blockdesc">Triggers when a specified error happens</p>
          </div>
        </div>
      </div>
    `
  flowy(document.getElementById('canvas'), drag, release, snapping)
  function addEventListenerMulti(type, listener, capture, selector) {
    var nodes = document.querySelectorAll(selector)
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].addEventListener(type, listener, capture)
    }
  }
  function snapping(drag, first) {
    var grab = drag.querySelector('.grabme')
    grab.parentNode.removeChild(grab)
    var blockin = drag.querySelector('.blockin')
    blockin.parentNode.removeChild(blockin)
    if (drag.querySelector('.blockelemtype').value == '1') {
      drag.innerHTML += `
          <div class='blockyleft'>
            <img src='${images.eyeblue}'>
            <p class='blockyname'>New visitor</p>
          </div>
          <div class='blockyright'><img src='${images.more}'></div>
          <div class='blockydiv'></div>
          <div class='blockyinfo'>When a <span>new visitor</span> goes to <span>Site 1</span></div>
        `
    } else if (drag.querySelector('.blockelemtype').value == '2') {
      drag.innerHTML += `
          <div class='blockyleft'>
            <img src='${images.actionblue}'>
            <p class='blockyname'>Action is performed</p>
          </div>
          <div class='blockyright'><img src='${images.more}'></div>
          <div class='blockydiv'></div>
          <div class='blockyinfo'>When <span>Action 1</span> is performed</div>
        `
    } else if (drag.querySelector('.blockelemtype').value == '3') {
      drag.innerHTML += `
          <div class='blockyleft'>
            <img src='${images.timeblue}'>
            <p class='blockyname'>Time has passed</p>
          </div>
          <div class='blockyright'><img src='${images.more}'></div>
          <div class='blockydiv'></div>
          <div class='blockyinfo'>When <span>10 seconds</span> have passed</div>
        `
    } else if (drag.querySelector('.blockelemtype').value == '4') {
      drag.innerHTML += `
          <div class='blockyleft'>
            <img src='${images.errorblue}'>
            <p class='blockyname'>Error prompt</p>
          </div>
          <div class='blockyright'><img src='${images.more}'></div>
          <div class='blockydiv'></div>
          <div class='blockyinfo'>When <span>Error 1</span> is triggered</div>
        `
    } else if (drag.querySelector('.blockelemtype').value == '5') {
      drag.innerHTML += `
          <div class='blockyleft'>
            <img src='${images.databaseorange}'>
            <p class='blockyname'>New database entry</p>
          </div>
          <div class='blockyright'><img src='${images.more}'></div>
          <div class='blockydiv'></div>
          <div class='blockyinfo'>Add <span>Data object</span> to <span>Database 1</span></div>
        `
    } else if (drag.querySelector('.blockelemtype').value == '6') {
      drag.innerHTML += `
          <div class='blockyleft'>
            <img src='${images.databaseorange}'>
            <p class='blockyname'>Update database</p>
          </div>
          <div class='blockyright'><img src='${images.more}'></div>
          <div class='blockydiv'></div>
          <div class='blockyinfo'>Update <span>Database 1</span></div>
        `
    } else if (drag.querySelector('.blockelemtype').value == '7') {
      drag.innerHTML += `
          <div class='blockyleft'>
            <img src='${images.actionorange}'>
            <p class='blockyname'>Perform an action</p>
          </div>
          <div class='blockyright'><img src='${images.more}'></div>
          <div class='blockydiv'></div><div class='blockyinfo'>Perform <span>Action 1</span></div>
        `
    } else if (drag.querySelector('.blockelemtype').value == '8') {
      drag.innerHTML += `
          <div class='blockyleft'>
            <img src='${images.twitterorange}'>
            <p class='blockyname'>Make a tweet</p>
          </div>
          <div class='blockyright'><img src='${images.more}'></div>
          <div class='blockydiv'></div>
          <div class='blockyinfo'>Tweet <span>Query 1</span> with the account <span>@alyssaxuu</span></div>
        `
    } else if (drag.querySelector('.blockelemtype').value == '9') {
      drag.innerHTML += `
          <div class='blockyleft'>
            <img src='${images.logred}'>
            <p class='blockyname'>Add new log entry</p>
          </div>
          <div class='blockyright'><img src='${images.more}'></div>
          <div class='blockydiv'></div>
          <div class='blockyinfo'>Add new <span>success</span> log entry</div>
        `
    } else if (drag.querySelector('.blockelemtype').value == '10') {
      drag.innerHTML += `
          <div class='blockyleft'>
            <img src='${images.logred}'>
            <p class='blockyname'>Update logs</p>
          </div>
          <div class='blockyright'><img src='${images.more}'></div>
          <div class='blockydiv'></div>
          <div class='blockyinfo'>Edit <span>Log Entry 1</span></div>
        `
    } else if (drag.querySelector('.blockelemtype').value == '11') {
      drag.innerHTML += `
          <div class='blockyleft'>
            <img src='${images.errorred}'>
            <p class='blockyname'>Prompt an error</p>
          </div>
          <div class='blockyright'><img src='${images.more}'></div>
          <div class='blockydiv'></div>
          <div class='blockyinfo'>Trigger <span>Error 1</span></div>
        `
    }
    return true
  }
  function drag(block) {
    block.classList.add('blockdisabled')
    tempblock2 = block
  }
  function release() {
    if (tempblock2) {
      tempblock2.classList.remove('blockdisabled')
    }
  }
  var disabledClick = function () {
    document.querySelector('.navactive').classList.add('navdisabled')
    document.querySelector('.navactive').classList.remove('navactive')
    this.classList.add('navactive')
    this.classList.remove('navdisabled')
    if (this.getAttribute('id') == 'triggers') {
      document.getElementById('blocklist').innerHTML = `
          <div class="blockelem create-flowy noselect">
            <input type="hidden" name="blockelemtype" class="blockelemtype" value="1">
            <div class="grabme"><img src="${images.grabme}"></div>
            <div class="blockin">
              <div class="blockico"><span></span><img src="${images.eye}"></div>
              <div class="blocktext">
                <p class="blocktitle">New visitor</p>
                <p class="blockdesc">Triggers when somebody visits a specified page</p>
              </div>
            </div>
          </div>
          <div class="blockelem create-flowy noselect">
            <input type="hidden" name="blockelemtype" class="blockelemtype" value="2">
            <div class="grabme"><img src="${images.grabme}"></div>
            <div class="blockin">
              <div class="blockico"><span></span><img src="${images.action}"></div>
              <div class="blocktext">
                <p class="blocktitle">Action is performed</p>
                <p class="blockdesc">Triggers when somebody performs a specified action</p>
              </div>
            </div>
          </div>
          <div class="blockelem create-flowy noselect">
            <input type="hidden" name="blockelemtype" class="blockelemtype" value="3">
            <div class="grabme"><img src="${images.grabme}"></div>
            <div class="blockin">
              <div class="blockico"><span></span><img src="${images.time}"></div>
              <div class="blocktext">
                <p class="blocktitle">Time has passed</p>
                <p class="blockdesc">Triggers after a specified amount of time</p>
              </div>
            </div>
          </div>
          <div class="blockelem create-flowy noselect">
            <input type="hidden" name="blockelemtype" class="blockelemtype" value="4">
            <div class="grabme"><img src="${images.grabme}"></div>
            <div class="blockin">
              <div class="blockico"><span></span><img src="${images.error}"></div>
              <div class="blocktext">
                <p class="blocktitle">Error prompt</p>
                <p class="blockdesc">Triggers when a specified error happens</p>
              </div>
            </div>
          </div>
        `
    } else if (this.getAttribute('id') == 'actions') {
      document.getElementById('blocklist').innerHTML = `
        <div class="blockelem create-flowy noselect">
          <input type="hidden" name="blockelemtype" class="blockelemtype" value="5">
          <div class="grabme"><img src="${images.grabme}"></div>
          <div class="blockin">
            <div class="blockico"><span></span><img src="${images.database}"></div>
            <div class="blocktext">
              <p class="blocktitle">New database entry</p>
              <p class="blockdesc">Adds a new entry to a specified database</p>
            </div>
          </div>
        </div>
        <div class="blockelem create-flowy noselect">
          <input type="hidden" name="blockelemtype" class="blockelemtype" value="6">
          <div class="grabme"><img src="${images.grabme}"></div>
          <div class="blockin">
            <div class="blockico"><span></span><img src="${images.database}"></div>
            <div class="blocktext">
              <p class="blocktitle">Update database</p>
              <p class="blockdesc">Edits and deletes database entries and properties</p>
            </div>
          </div>
        </div>
        <div class="blockelem create-flowy noselect">
          <input type="hidden" name="blockelemtype" class="blockelemtype" value="7">
          <div class="grabme"><img src="${images.grabme}"></div>
          <div class="blockin">
            <div class="blockico"><span></span><img src="${images.action}"></div>
            <div class="blocktext">
              <p class="blocktitle">Perform an action</p>
              <p class="blockdesc">Performs or edits a specified action</p>
            </div>
          </div>
        </div>
        <div class="blockelem create-flowy noselect">
          <input type="hidden" name="blockelemtype" class="blockelemtype" value="8">
          <div class="grabme"><img src="${images.grabme}"></div>
          <div class="blockin">
            <div class="blockico"><span></span><img src="${images.twitter}"></div>
            <div class="blocktext">
              <p class="blocktitle">Make a tweet</p>
              <p class="blockdesc">Makes a tweet with a specified query</p>
            </div>
          </div>
        </div>
      `
    } else if (this.getAttribute('id') == 'loggers') {
      document.getElementById('blocklist').innerHTML = `
          <div class="blockelem create-flowy noselect">
            <input type="hidden" name="blockelemtype" class="blockelemtype" value="9">
            <div class="grabme"><img src="${images.grabme}"></div>
            <div class="blockin">
              <div class="blockico"><span></span><img src="${images.log}"></div>
              <div class="blocktext">
                <p class="blocktitle">Add new log entry</p>
                <p class="blockdesc">Adds a new log entry to this project</p>
              </div>
            </div>
          </div>
          <div class="blockelem create-flowy noselect">
            <input type="hidden" name="blockelemtype" class="blockelemtype" value="10">
            <div class="grabme"><img src="${images.grabme}"></div>
            <div class="blockin">
              <div class="blockico"><span></span><img src="${images.log}"></div>
              <div class="blocktext">
                <p class="blocktitle">Update logs</p>
                <p class="blockdesc">Edits and deletes log entries in this project</p>
              </div>
            </div>
          </div>
          <div class="blockelem create-flowy noselect">
            <input type="hidden" name="blockelemtype" class="blockelemtype" value="11">
            <div class="grabme"><img src="${images.grabme}"></div>
            <div class="blockin">
              <div class="blockico"><span></span><img src="${images.error}"></div>
              <div class="blocktext">
                <p class="blocktitle">Prompt an error</p>
                <p class="blockdesc">Triggers a specified error</p>
              </div>
            </div>
          </div>
        `
    }
  }
  addEventListenerMulti('click', disabledClick, false, '.side')
  document.getElementById('close').addEventListener('click', function () {
    if (rightcard) {
      rightcard = false
      document.getElementById('properties').classList.remove('expanded')
      setTimeout(function () {
        document.getElementById('propwrap').classList.remove('itson')
      }, 300)
      tempblock.classList.remove('selectedblock')
    }
  })

  document.getElementById('removeblock').addEventListener('click', function () {
    flowy.deleteBlocks()
  })
  var aclick = false
  var noinfo = false
  var beginTouch = function (event) {
    aclick = true
    noinfo = false
    if (event.target.closest('.create-flowy')) {
      noinfo = true
    }
  }
  var checkTouch = function (event) {
    aclick = false
  }
  var doneTouch = function (event) {
    if (event.type === 'mouseup' && aclick && !noinfo) {
      if (
        !rightcard &&
        event.target.closest('.block') &&
        !event.target.closest('.block').classList.contains('dragging')
      ) {
        tempblock = event.target.closest('.block')
        rightcard = true
        document.getElementById('properties').classList.add('expanded')
        document.getElementById('propwrap').classList.add('itson')
        tempblock.classList.add('selectedblock')
      }
    }
  }
  addEventListener('mousedown', beginTouch, false)
  addEventListener('mousemove', checkTouch, false)
  addEventListener('mouseup', doneTouch, false)
  addEventListenerMulti('touchstart', beginTouch, false, '.block')
})

</script>
  <div id="navigation">
    <div id="leftside">
      <div id="details">
        <div id="back"><img src="assets/arrow.svg" /></div>
        <div id="names">
          <p id="title">Your automation pipeline</p>
          <p id="subtitle">Marketing automation</p>
        </div>
      </div>
    </div>
    <div id="centerswitch">
      <div id="leftswitch">Diagram view</div>
      <div id="rightswitch">Code editor</div>
    </div>
    <div id="buttonsright">
      <div id="discard">Discard</div>
      <div id="publish">Publish to site</div>
    </div>
  </div>
  <div id="leftcard">
    <div id="closecard">
      <img src="assets/closeleft.svg" />
    </div>
    <p id="header">Blocks</p>
    <div id="search">
      <img src="assets/search.svg" />
      <input type="text" placeholder="Search blocks" />
    </div>
    <div id="subnav">
      <div id="triggers" class="navactive side">Triggers</div>
      <div id="actions" class="navdisabled side">Actions</div>
      <div id="loggers" class="navdisabled side">Loggers</div>
    </div>
    <div id="blocklist">
      <div class="blockelem create-flowy noselect">
        <input
          type="hidden"
          name="blockelemtype"
          class="blockelemtype"
          value="1"
        />
        <div class="grabme">
          <img src="assets/grabme.svg" />
        </div>
        <div class="blockin">
          <div class="blockico">
            <span></span>
            <img src="assets/eye.svg" />
          </div>
          <div class="blocktext">
            <p class="blocktitle">New visitor</p>
            <p class="blockdesc">
              Triggers when somebody visits a specified page
            </p>
          </div>
        </div>
      </div>
      <div class="blockelem create-flowy noselect">
        <input
          type="hidden"
          name="blockelemtype"
          class="blockelemtype"
          value="2"
        />
        <div class="grabme">
          <img src="assets/grabme.svg" />
        </div>
        <div class="blockin">
          <div class="blockico">
            <span></span>
            <img src="assets/action.svg" />
          </div>
          <div class="blocktext">
            <p class="blocktitle">Action is performed</p>
            <p class="blockdesc">
              Triggers when somebody performs a specified action
            </p>
          </div>
        </div>
      </div>
      <div class="blockelem create-flowy noselect">
        <input
          type="hidden"
          name="blockelemtype"
          class="blockelemtype"
          value="3"
        />
        <div class="grabme">
          <img src="assets/grabme.svg" />
        </div>
        <div class="blockin">
          <div class="blockico">
            <span></span>
            <img src="assets/time.svg" />
          </div>
          <div class="blocktext">
            <p class="blocktitle">Time has passed</p>
            <p class="blockdesc">Triggers after a specified amount of time</p>
          </div>
        </div>
      </div>
      <div class="blockelem create-flowy noselect">
        <input
          type="hidden"
          name="blockelemtype"
          class="blockelemtype"
          value="4"
        />
        <div class="grabme">
          <img src="assets/grabme.svg" />
        </div>
        <div class="blockin">
          <div class="blockico">
            <span></span>
            <img src="assets/error.svg" />
          </div>
          <div class="blocktext">
            <p class="blocktitle">Error prompt</p>
            <p class="blockdesc">Triggers when a specified error happens</p>
          </div>
        </div>
      </div>
    </div>
    <div id="footer">
      <a href="https://github.com/alyssaxuu/flowy/" target="_blank">GitHub</a>
      <span>·</span>
      <a
        href="https://twitter.com/alyssaxuu/status/1199724989353730048"
        target="_blank"
        >Twitter</a
      >
      <span>·</span>
      <a href="https://alyssax.com" target="_blank"
        ><p>Made with</p>
        <img src="assets/heart.svg" />
        <p>by</p>
        Alyssa X</a
      >
    </div>
  </div>
  <div id="propwrap">
    <div id="properties">
      <div id="close">
        <img src="assets/close.svg" />
      </div>
      <p id="header2">Properties</p>
      <div id="propswitch">
        <div id="dataprop">Data</div>
        <div id="alertprop">Alerts</div>
        <div id="logsprop">Logs</div>
      </div>
      <div id="proplist">
        <p class="inputlabel">Select database</p>
        <div class="dropme">Database 1 <img src="assets/dropdown.svg" /></div>
        <p class="inputlabel">Check properties</p>
        <div class="dropme">All<img src="assets/dropdown.svg" /></div>
        <div class="checkus">
          <img src="assets/checkon.svg" />
          <p>Log on successful performance</p>
        </div>
        <div class="checkus">
          <img src="assets/checkoff.svg" />
          <p>Give priority to this block</p>
        </div>
      </div>
      <div id="divisionthing"></div>
      <div id="removeblock">Delete blocks</div>
    </div>
  </div>
  <div id="canvas"></div>

  <style>
  body, html {
    margin: 0px;
    padding: 0px;
    overflow: hidden;
    background-image: url(assets/tile.png);
    background-repeat: repeat;
    background-size: 30px 30px;
    background-color: #FBFBFB;
    height: 100%;
}
#navigation {
    height: 71px;
    background-color: #FFF;
    border: 1px solid #E8E8EF;
    width: 100%;
    display: table;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    z-index: 9
}
#back {
    width: 40px;
    height: 40px;
    border-radius: 100px;
    background-color: #F1F4FC;
    text-align: center;
    display: inline-block;
    vertical-align: top;
    margin-top: 12px;
    margin-right: 10px
}
#back img {
    margin-top: 13px;
}
#names {
    display: inline-block;
    vertical-align: top;
}
#title {
    font-family: Roboto;
    font-weight: 500;
    font-size: 16px;
    color: #393C44;
    margin-bottom: 0px;
}
#subtitle {
    font-family: Roboto;
    color: #808292;
    font-size: 14px;
    margin-top: 5px;
}
#leftside {
    display: inline-block;
    vertical-align: middle;
    margin-left: 20px;
}
#centerswitch {
    position: absolute;
    width: 222px;
    left: 50%;
    margin-left: -111px;
    top: 15px;
}
#leftswitch {
    border: 1px solid #E8E8EF;
    background-color: #FBFBFB;
    width: 111px;
    height: 39px;
    line-height: 39px;
    border-radius: 5px 0px 0px 5px;
    font-family: Roboto;
    color: #393C44;
    display: inline-block;
    font-size: 14px;
    text-align: center;
}
#rightswitch {
    font-family: Roboto;
    color: #808292;
    border-radius: 0px 5px 5px 0px;
    border: 1px solid #E8E8EF;
    height: 39px;
    width: 102px;
    display: inline-block;
    font-size: 14px;
    line-height: 39px;
    text-align: center;
    margin-left: -5px;
}
#discard {
    font-family: Roboto;
    font-weight: 500;
    font-size: 14px;
    color: #A6A6B3;
    width: 95px;
    height: 38px;
    border: 1px solid #E8E8EF;
    border-radius: 5px;
    text-align: center;
    line-height: 38px;
    display: inline-block;
    vertical-align: top;
    transition: all .2s cubic-bezier(.05,.03,.35,1);
}
#discard:hover {
    cursor: pointer;
    opacity: .7;
}
#publish {
    font-family: Roboto;
    font-weight: 500;
    font-size: 14px;
    color: #FFF;
    background-color: #217CE8;
    border-radius: 5px;
    width: 143px;
    height: 38px;
    margin-left: 10px;
    display: inline-block;
    vertical-align: top;
    text-align: center;
    line-height: 38px;
    margin-right: 20px;
    transition: all .2s cubic-bezier(.05,.03,.35,1);
}
#publish:hover {
    cursor: pointer;
    opacity: .7;
}
#buttonsright {
    float: right;
    margin-top: 15px;
}
#leftcard {
    width: 363px;
    background-color: #FFF;
    border: 1px solid #E8E8EF;
    box-sizing: border-box;
    padding-top: 85px;
    padding-left: 20px;
    height: 100%;
    position: absolute;
    z-index: 2;
}
#search input {
    width: 318px;
    height: 40px;
    background-color: #FFF;
    border: 1px solid #E8E8EF;
    box-sizing: border-box;
    box-shadow: 0px 2px 8px rgba(34,34,87,0.05);
    border-radius: 5px;
    text-indent: 35px;
    font-family: Roboto;
    font-size: 16px;
}
::-webkit-input-placeholder { /* Edge */
  color: #C9C9D5;
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: #C9C9D5
}

::placeholder {
  color: #C9C9D5;
}
#search img {
    position: absolute; 
    margin-top: 10px;
    width: 18px;
    margin-left: 12px;
}
#header {
    font-size: 20px;
    font-family: Roboto;
    font-weight: bold;
    color: #393C44;
}
#subnav {
    border-bottom: 1px solid #E8E8EF;
    width: calc(100% + 20px);
    margin-left: -20px;
    margin-top: 10px;
}
.navdisabled {
    transition: all .3s cubic-bezier(.05,.03,.35,1);
}
.navdisabled:hover {
    cursor: pointer;
    opacity: .5;
}
.navactive {
    color: #393C44!important;
}
#triggers {
    margin-left: 20px;
    font-family: Roboto;
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    color: #808292;
    width: calc(88% / 3);
    height: 48px;
    line-height: 48px;
    display: inline-block;
    float: left;
}
.navactive:after {
    display: block;
    content: "";
    width:  100%;
    height: 4px;
    background-color: #217CE8;
    margin-top: -4px;
}
#actions {
    display: inline-block;
    font-family: Roboto;
    font-weight: 500;
    color: #808292;
    font-size: 14px;
    height: 48px;
    line-height: 48px;
    width: calc(88% / 3);
    text-align: center;
    float: left;
}
#loggers {
    width: calc(88% / 3);
    display: inline-block;
    font-family: Roboto;
    font-weight: 500;
    color: #808292;
    font-size: 14px;
    height: 48px;
    line-height: 48px;
    text-align: center;
}
#footer {
    position: absolute;
    left: 0;
    padding-left: 20px;
    line-height: 40px;
    bottom: 0;
    width: 362px;
    border: 1px solid #E8E8EF;
    height: 67px;
    box-sizing: border-box;
    background-color: #FFF;
    font-family: Roboto;
    font-size: 14px;
}
#footer a {
    text-decoration: none;
    color: #393C44;
    transition: all .2s cubic-bezier(.05,.03,.35,1);
}
#footer a:hover {
    opacity: .5;
}
#footer span {
    color: #808292;
}
#footer p {
    display: inline-block;
    color: #808292;
}
#footer img {
    margin-left: 5px;
    margin-right: 5px;
}
.blockelem:first-child {
    margin-top: 20px
}
.blockelem {
    padding-top: 10px;
    width: 318px;
    border: 1px solid transparent;
    transition-property: box-shadow, height;
    transition-duration: .2s;
    transition-timing-function: cubic-bezier(.05,.03,.35,1);
    border-radius: 5px;
    box-shadow: 0px 0px 30px rgba(22, 33, 74, 0);
    box-sizing: border-box;
}
.blockelem:hover {
    box-shadow: 0px 4px 30px rgba(22, 33, 74, 0.08);
    border-radius: 5px;
    background-color: #FFF;
    cursor: pointer;
}
.grabme, .blockico {
    display: inline-block;
}
.grabme {
    margin-top: 10px;
    margin-left: 10px;
    margin-bottom: -14px;
    width: 15px;
}
#blocklist {
    height: calc(100% - 220px);
    overflow: auto;
}
#proplist {
    height: calc(100% - 305px);
    overflow: auto;
    margin-top: -30px;
    padding-top: 30px;
}
.blockin {
    display: inline-block;
    vertical-align: top;
    margin-left: 12px;
}
.blockico {
    width: 36px;
    height: 36px;
    background-color: #F1F4FC;
    border-radius: 5px;
    text-align: center;
    white-space: nowrap;
}
.blockico span {
    height: 100%;
    width: 0px;
    display: inline-block;
    vertical-align: middle;
}
.blockico img {
    vertical-align: middle;
    margin-left: auto;
    margin-right: auto;
    display: inline-block;
}
.blocktext {
    display: inline-block;
    width: 220px;
    vertical-align: top;
    margin-left: 12px
}
.blocktitle {
    margin: 0px!important;
    padding: 0px!important;
    font-family: Roboto;
    font-weight: 500;
    font-size: 16px;
    color: #393C44;
}
.blockdesc {
    margin-top: 5px;
    font-family: Roboto;
    color: #808292;
    font-size: 14px;
    line-height: 21px;
}
.blockdisabled {
    background-color: #F0F2F9;
    opacity: .5;
}
#closecard {
    position: absolute;
    margin-left: 340px;
    background-color: #FFF;
    border-radius: 0px 5px 5px 0px;
    border-bottom: 1px solid #E8E8EF;
    border-right: 1px solid #E8E8EF;
    border-top: 1px solid #E8E8EF;
    width: 53px;
    height: 53px;
    text-align: center; 
    z-index: 10;
}
#closecard img {
    margin-top: 15px
}
#canvas {
    position: absolute;
    width: calc(100% - 361px);
    height: calc(100% - 71px);
    top: 71px;
    left: 361px;
    z-index: 0;
    overflow: auto;
}
#propwrap {
    position: absolute;
    right: 0;
    top: 0;
    width: 311px;
    height: 100%;
    padding-left: 20px;
    overflow: hidden;
    z-index: -2;
}
#properties {
    position: absolute;
    height: 100%;
    width: 311px;
    background-color: #FFF;
    right: -150px;
    opacity: 0;
    z-index: 2;
    top: 0px;
    box-shadow: -4px 0px 40px rgba(26, 26, 73, 0);
    padding-left: 20px;
    transition: all .25s cubic-bezier(.05,.03,.35,1);
}
.itson {
    z-index: 2!important;
}
.expanded {
    right: 0!important;
    opacity: 1!important;
    box-shadow: -4px 0px 40px rgba(26, 26, 73, 0.05);
        z-index: 2;
}
#header2 {
    font-size: 20px;
    font-family: Roboto;
    font-weight: bold;
    color: #393C44;
    margin-top: 101px;
}
#close {
    margin-top: 100px;
    position: absolute;
    right: 20px;
    z-index: 9999;
    transition: all .25s cubic-bezier(.05,.03,.35,1);
}
#close:hover {
    cursor: pointer;
    opacity: .7;
}
#propswitch {
    border-bottom: 1px solid #E8E8EF;
    width: 331px;
    margin-top: 10px;
    margin-left: -20px;
    margin-bottom: 30px;
}
#dataprop {
    font-family: Roboto;
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    color: #393C44;
    width: calc(88% / 3);
    height: 48px;
    line-height: 48px;
    display: inline-block;
    float: left;
    margin-left: 20px;
}
#dataprop:after {
    display: block;
    content: "";
    width: 100%;
    height: 4px;
    background-color: #217CE8;
    margin-top: -4px;
}
#alertprop {
    display: inline-block;
    font-family: Roboto;
    font-weight: 500;
    color: #808292;
    font-size: 14px;
    height: 48px;
    line-height: 48px;
    width: calc(88% / 3);
    text-align: center;
    float: left;
}
#logsprop {
    width: calc(88% / 3);
    display: inline-block;
    font-family: Roboto;
    font-weight: 500;
    color: #808292;
    font-size: 14px;
    height: 48px;
    line-height: 48px;
    text-align: center;
}
.inputlabel {
    font-family: Roboto;
    font-size: 14px;
    color: #253134;
}
.dropme {
    background-color: #FFF;
    border-radius: 5px;
    border: 1px solid #E8E8EF;
    box-shadow: 0px 2px 8px rgba(34, 34, 87, 0.05);
    font-family: Roboto;
    font-size: 14px;
    color: #253134;
    text-indent: 20px;
    height: 40px;
    line-height: 40px;
    width: 287px;
    margin-bottom: 25px;
}
.dropme img {
    margin-top: 17px;
    float: right;
    margin-right: 15px;
}
.checkus {
    margin-bottom: 10px;
}
.checkus img {
    display: inline-block;
    vertical-align: middle;
}
.checkus p {
    display: inline-block;
    font-family: Roboto;
    font-size: 14px;
    vertical-align: middle;
    margin-left: 10px;
}
#divisionthing {
    height: 1px;
    width: 100%;
    background-color: #E8E8EF;
    position: absolute;
    right: 0px;
    bottom: 80;
}
#removeblock {
    border-radius: 5px;
    position: absolute;
    bottom: 20px;
    font-family: Roboto;
    font-size: 14px;
    text-align: center;
    width: 287px;
    height: 38px;
    line-height: 38px;
    color: #253134;
    border: 1px solid #E8E8EF;
    transition: all .3s cubic-bezier(.05,.03,.35,1);
}
#removeblock:hover {
    cursor: pointer;
    opacity: .5;
}
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Opera and Firefox */
}
.blockyname {
    font-family: Roboto;
    font-weight: 500;
    color: #253134;
    display: inline-block;
    vertical-align: middle;
    margin-left: 8px;
    font-size: 16px;
}
.blockyleft img {
    display: inline-block;
    vertical-align: middle;
}
.blockyright {
    display: inline-block;
    float: right;
    vertical-align: middle;
    margin-right: 20px;
    margin-top: 10px;
    width: 28px;
    height: 28px;
    border-radius: 5px;
    text-align: center; 
    background-color: #FFF;
    transition: all .3s cubic-bezier(.05,.03,.35,1);
    z-index: 10;
}
.blockyright:hover {
    background-color: #F1F4FC;
    cursor: pointer;
}
.blockyright img {
    margin-top: 12px;
}
.blockyleft {
    display: inline-block;
    margin-left: 20px;
}
.blockydiv {
    width: 100%;
    height: 1px;
    background-color: #E9E9EF;
}
.blockyinfo {
    font-family: Roboto;
    font-size: 14px;
    color: #808292;
    margin-top: 15px;
    text-indent: 20px;
    margin-bottom: 20px;
}
.blockyinfo span {
    color: #253134;
    font-weight: 500;
    display: inline-block;
    border-bottom: 1px solid #D3DCEA;
    line-height: 20px;
    text-indent: 0px;
}
.block {
    background-color: #FFF;
    margin-top: 0px!important;
    box-shadow: 0px 4px 30px rgba(22, 33, 74, 0.05);
}
.selectedblock {
    border: 2px solid #217CE8;
    box-shadow: 0px 4px 30px rgba(22, 33, 74, 0.08);
}

@media only screen and (max-width: 832px) {
    #centerswitch {
        display: none;
    }
}
@media only screen and (max-width: 560px) {
    #names {
        display: none;
    }   
}
  </style> -->
