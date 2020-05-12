<script>
import { onMount } from "svelte";

let spacing_x = 40;
let spacing_y = 100;
let canvas

onMount(() => {
  // Initialize Flowy
  // flowy(canvas, onGrab, onRelease, onSnap, onRearrange, spacing_x, spacing_y);
  flowy(canvas);
});

function onGrab(block){
  console.log(block);
	// When the user grabs a block
}
function onRelease(){
	// When the user releases a block
}
function onSnap(block, first, parent){
  console.log(block, first, parent);
	// When a block snaps with another one
}
function onRearrange(block, parent){
  console.log(block, parent);
	// When a block is rearranged
}
</script>

<div class="elements">
  <div class="create-flowy">Workflow 1</div>
<div class="blockelem create-flowy noselect">
                <input type="hidden" name='blockelemtype' class="blockelemtype" value="1">
                <div class="grabme">
                    <img src="assets/grabme.svg">
                </div>
                <div class="blockin">
                    <div class="blockico">
                        <span></span>
                        <img src="assets/eye.svg">
                    </div>
                    <div class="blocktext">
                        <p class="blocktitle">New visitor</p>
                        <p class="blockdesc">Triggers when somebody visits a specified page</p>
                    </div>
                </div>
            </div>
</div>

<div bind:this={canvas} class="canvas">
</div>

<style>

.canvas {
    position: absolute;
    width: calc(100% - 361px);
    height: calc(100% - 71px);
    top: 71px;
    left: 361px;
    z-index: 0;
    overflow: auto;
    border: 1px solid green;
}
  .create-flowy {
    padding: 20px;
    border-radius: 8px;
    border: 1px solid #ccc;
  }

  .elements {
    border: 1px solid blue;
    padding: 30px;
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
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Opera and Firefox */
}
</style>