/**
 * helper function to  highlight the attributes of nodes on hover
 *
 * @param {Object} node node instance
 */
module.exports = function nodeInfo (node) {
  const containerNode = document.getElementById('container-node-id')
  const containerNodeInfo = document.getElementById('container-node-info-id')

  let nodeInfo = ''
  const nodeData = node.data().asto
  Object.keys(nodeData).forEach((i) => {
    // adds the keys and values of the object to the string
    nodeInfo = `${nodeInfo} • ${i}: ${nodeData[i]}\n`
  })

  // appends info to the div
  containerNode.style.display = 'block'
  containerNodeInfo.textContent = nodeInfo
}
