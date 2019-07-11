/**
 * adds implementation phase components in the graph
 *
 * @param {object} cy cytoscape instance
 * @param {object} event captured mouse event
 * @param {number} nodeCounter id counter for nodes
 */
module.exports = function addImpComponent (cy, event, nodeCounter) {
  // get mouse position on click
  // display new node on the left of the menu
  const posX = event.x + 50
  const posY = event.y - 30

  // get the selected concept
  const component = event.target.textContent

  switch (component) {
    case 'device':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          asto: {
            description: '',
            layer: '',
            type: '',
            service: '',
            input: '',
            output: '',
            update: '',
            concept: 'device'
          }
        },
        renderedPosition: {
          x: posX,
          y: posY
        }
      })
      break
    case 'connection':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          asto: {
            description: '',
            medium: '',
            listOfProtocols: '',
            concept: 'connection'
          }
        },
        renderedPosition: {
          x: posX,
          y: posY
        }
      })
      break
    case 'application':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          asto: {
            description: '',
            version: '',
            input: '',
            output: '',
            update: '',
            concept: 'application'
          }
        },
        renderedPosition: {
          x: posX,
          y: posY
        }
      })
      break
    case 'micronet':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          asto: {
            description: '',
            state: '',
            purpose: '',
            concept: 'micronet'
          }
        },
        renderedPosition: {
          x: posX,
          y: posY
        }
      })
      break
    case 'information':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          asto: {
            description: '',
            location: '',
            concept: 'information'
          }
        },
        renderedPosition: {
          x: posX,
          y: posY
        }
      })
      break
    case 'net':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          asto: {
            description: '',
            concept: 'net'
          }
        },
        renderedPosition: {
          x: posX,
          y: posY
        }
      })
      break
    case 'actor':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          asto: {
            description: '',
            intent: '',
            concept: 'actor'
          }
        },
        renderedPosition: {
          x: posX,
          y: posY
        }
      })
      break
    case 'malicious actor':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          asto: {
            description: '',
            intent: '',
            concept: 'malicious actor'
          }
        },
        renderedPosition: {
          x: posX,
          y: posY
        }
      })
      break
    case 'asset':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          asto: {
            description: '',
            concept: 'asset'
          }
        },
        renderedPosition: {
          x: posX,
          y: posY
        }
      })
      break
    case 'constraint':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          asto: {
            description: '',
            property: '',
            concept: 'constraint'
          }
        },
        renderedPosition: {
          x: posX,
          y: posY
        }
      })
      break
    case 'mechanism':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          asto: {
            description: '',
            trigger: '',
            concept: 'mechanism'
          }
        },
        renderedPosition: {
          x: posX,
          y: posY
        }
      })
      break
    case 'threat':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          asto: {
            description: '',
            category: '',
            concept: 'threat'
          }
        },
        renderedPosition: {
          x: posX,
          y: posY
        }
      })
      break
    case 'vulnerability':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          asto: {
            description: '',
            concept: 'vulnerability'
          }
        },
        renderedPosition: {
          x: posX,
          y: posY
        }
      })
      break
    case '':
      break
    default:
      console.error('error in addImpComponent.js')
  }
}
