const gql = require("graphql-tag")

const userFields = gql`
  fragment userFields on User {
    id
    name
    email
    password
  }
`
const patientFields = gql`
  fragment patientFields on Patient {
    id
    name
    age
  }
`

const allPatientsQuery = gql`
  query allPatients {
    allPatients {
      ...patientFields
    }
  }
  ${patientFields}
`

const patientQuery = gql`
  query patient($id: ID!) {
    patient(id: $id) {
      ...patientFields
    }
  }
  ${patientFields}
`

const loginMutation = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      authToken
    }
  }
`

module.exports = {
  allPatientsQuery,
  patientQuery,
  loginMutation
}
