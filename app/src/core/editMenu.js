// edit menu for nodes on right click

const editNode = require('./editNode.js')
const deleteRestoreConcepts = require('./deleteRestoreConcepts.js')
const getNeighbors = require('./getNeighbors.js')
const rmElement = require('../helpers/rmElement.js')

let posY = ''
let posX = ''

/**
 * get mouse position on click
 *
 * @param {Object} position of the selected element
 */
const mousePosition = (position) => {
  posX = position.renderedPosition.x
  posY = position.renderedPosition.y
}

/**
 * creates the node menu element
 *
 * @param {Object} cy cytoscape instance
 * @param {Object} position position of the selected element
 * @param {Object} selectedNode selected node
 */
const nodeMenu = (cy, position, selectedNode) => {
  const graph = document.getElementById('window-id')

  mousePosition(position)

  // checks to see if the menu has been created
  const nodeMenuExists = document.getElementById('nodeMenu-id')
  if (nodeMenuExists === null) {
    const nodeMenu = document.createElement('button')

    nodeMenu.id = 'nodeMenu-id'

    nodeMenu.innerHTML = `<div class="dropdown" style='display: block; position: absolute; top:${posY}px; left: ${posX}px;'>
      <ul class="dropdown-menu" style='display:block;'>
        <li><a>edit node</a></li>
        <li><a>show neighbors</a></li>
        <li><a>delete</a></li>
      </ul>
    </div>`

    nodeMenu.addEventListener('click', (e) => {
      const event = e.target.textContent

      if (event === 'show neighbors') {
        getNeighbors(cy, selectedNode)
      } else if (event === 'edit node') {
        editNode.formNode(selectedNode)
      } else if (event === 'delete') {
        deleteRestoreConcepts.deleteConcept(cy, selectedNode, 0)
      }
      // removes the menu on selection
      rmElement('window-id', 'nodeMenu-id')
    })
    graph.appendChild(nodeMenu)
  } else {
    // removes the menu on selection
    rmElement('window-id', 'nodeMenu-id')
  }
}

/**
 * creates the stage menu element
 *
 * @param {Object} cy cytoscape instance
 * @param {any} position position of the selected element
 */
const stageMenu = (cy, position) => {
  const graph = document.getElementById('window-id')

  mousePosition(position)

  // checks to see if the menu has been created
  const stageMenuExists = document.getElementById('stageMenu-id')
  if (stageMenuExists === null) {
    const stageMenu = document.createElement('button')

    stageMenu.id = 'stageMenu-id'

    stageMenu.innerHTML = `<div class="dropdown" style='display: block; position: absolute; top:${posY}px; left: ${posX}px;'>
      <ul class="dropdown-menu" style='display:block;'>
        <li><a>center graph</a></li>
        <li><a>restore node</a></li>
      </ul>
    </div>`

    graph.appendChild(stageMenu)

    stageMenu.addEventListener('click', (e) => {
      const event = e.target.textContent

      if (event === 'center graph') {
        cy.center()
      } else if (event === 'restore node') {
        deleteRestoreConcepts.restoreNode(cy)
      }
      // removes the menu on selection
      rmElement('window-id', 'stageMenu-id')
    })
  } else {
    // removes the menu on selection
    rmElement('window-id', 'stageMenu-id')
  }
}

module.exports = {
  nodeMenu,
  stageMenu
}
