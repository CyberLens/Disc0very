const rmElement = require('../helpers/rmElement.js')

let btnToken = false

/**
 * expose the attributes of the nodes
 *
 * @param {Object} cy cytoscape instance
 */
module.exports = function expose (cy) {
  const exposeBtn = document.getElementById('expose-btn')

  // when button is pressed
  if (btnToken === false) {
    const graph = document.getElementById('window-id')

    cy.nodes().map(node => {
      let nodeInfo = ''
      const nodeData = node.data().asto
      Object.keys(nodeData).map(i => {
        // adds the keys and values of the object to the string
        nodeInfo = `${nodeInfo} • ${i}: ${nodeData[i]}\n`
      })

      // create a container for each node
      const container = document.createElement('span')
      container.id = node.data().id
      container.innerHTML = `<div class="container-node" style='display: block; margin:0; opacity: 1; left: ${
        node.renderedPosition().x
      }px; top: ${
        node.renderedPosition().y
      }px;'><div class="container-node-info" style='margin: 5px;'><span>${nodeInfo}</span></div></div>`

      graph.appendChild(container)
    })

    // show active expose with colored button
    exposeBtn.setAttribute('class', 'active-button')
    btnToken = true
  } else {
    // removes the exposed containers
    cy.nodes().map(node => {
      rmElement('window-id', node.data().id)
    })

    // restores the original button color
    exposeBtn.setAttribute('class', 'icon-button')
    btnToken = false
  }
}
