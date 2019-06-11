// dynamically edit edges

const rmElement = require('../helpers/rmElement.js')

/**
 * creates a bubble form to edit an edge
 *
 * @param {Object} selectedEdge selected edge
 */
const createForm = selectedEdge => {
  const htmlElement = document.getElementById('message-area-id')
  const form = document.createElement('form')
  form.className = 'bubble'
  form.id = 'form-id'

  let label = ''
  let input = ''

  const nodeData = selectedEdge.data().label

  label = document.createElement('label')
  input = document.createElement('input')
  input.className = 'input-form'
  input.id = 'label-form'
  input.type = 'text'
  input.name = 'edge'
  input.value = nodeData

  label.setAttribute('for', 'description')
  label.textContent = 'description:'
  form.appendChild(label)
  form.appendChild(input)

  // create a submit button
  const submit = document.createElement('input')
  submit.className = 'submit-form'
  submit.type = 'submit'
  submit.value = 'update'
  form.appendChild(submit)
  htmlElement.appendChild(form)

  const formId = document.getElementById('form-id')
  // capture the changed values of the node
  formId.onsubmit = () => {
    let id = document.getElementById('label-form')
    selectedEdge.data().label = id.value

    // remove elements once the submit is clicked
    rmElement('message-area-id', 'form-id')
    // return false to prevent the default form behavior
    return false
  }

  // focus on the description attribute of the form
  document.getElementById('label-form').focus()
}

/**
 * add/remove the form element
 *
 * @param {Object} selectedEdge selected edge
 */
const formEdge = selectedEdge => {
  const form = document.getElementById('form-id')
  if (form !== null) {
    rmElement('message-area-id', 'form-id')
    createForm(selectedEdge)
  } else if (form === null) {
    createForm(selectedEdge)
  }
}

module.exports = formEdge
