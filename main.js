import injectDraggable from './injectDraggable'

document.querySelector('#app').innerHTML = `
<button id="dragBtn">拖我</button> 
`

injectDraggable('#dragBtn')
