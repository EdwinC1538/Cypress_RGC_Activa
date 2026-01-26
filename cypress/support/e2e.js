const ignoredErrors = [
  'Swiper is not defined',
  'grecaptcha is not defined',
  "Unexpected token '<'",
  "Identifier 'enviroment' has already been declared",
  "Cannot read properties of null (reading 'classList')",
  "Cannot read properties of null (reading 'length')",
  "Cannot read properties of null (reading 'addEventListener')",
  "Cannot read properties of undefined (reading 'eunO_Activo')",
  'parent.$ is not a function',
]

Cypress.on('uncaught:exception', (err) => {
  return !ignoredErrors.some(errorMsg =>
    err.message.includes(errorMsg)
  )
})

import './commands'