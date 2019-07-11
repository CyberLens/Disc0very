const bubbleTxt = require('../helpers/bubbleTxt.js')

/**
 * checks if threats are mitigated by constraints
 *
 * @param {Object} cy cytoscape instance
 */
module.exports = function threatVerification (cy) {
  const threatArray = []
  let result = ''
  let mitigatedThreats = 0

  cy.elements().addClass('faded')

  // highlights threat and constraint nodes
  cy.nodes().map(node => {
    if (node.data().asto.concept === 'threat') {
      node.removeClass('faded')
      node.addClass('attention')
      threatArray.push(node)
    }
    if (node.data().asto.concept === 'constraint') {
      node.removeClass('faded')
      node.addClass('protect')
    }
  })

  // checks if a threat node is connected to a constraint node
  threatArray.map(threat => {
    const neighbor = threat.neighborhood('node')
    neighbor.map(type => {
      if (type.data().asto.concept === 'constraint') {
        result = `${result} • Threat ${
          threat.data().id
        } mitigated by Constraint ${type.data().id}\n`
        mitigatedThreats += 1
      }
    })
  })
  result = `${result}\n • Threats total: ${threatArray.length}\n`
  result = `${result} • Mitigated total: ${mitigatedThreats}\n`
  bubbleTxt(result)

  if (threatArray.length <= mitigatedThreats) {
    bubbleTxt('all threats mitigated 🎉')
  }
}
