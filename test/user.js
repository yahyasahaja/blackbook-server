const { expect } = require("chai").use(require("chai-as-promised"))
const getPort = require("get-port")
const koa = require("koa")

const seed = require("../seeders/seed")
const {
  allPatientsQuery,
  patientQuery,
  loginMutation
} = require("./resources/query")

let app, client

describe("patient", () => {
  before(async () => {
    try {
      await seed()
      app = new koa()
      app = require("../app")(app)
      const port = await getPort()
      client = require("./resources/client")(port)
      app.listen(port)
    } catch (error) {
      throw error
    }
  })

  it("should able to get all patients", async () => {
    try {
      const { data: { allPatients } } = await client.query({
        query: allPatientsQuery
      })
      expect(allPatients).lengthOf(3)
      expect(allPatients[0].name).a("string")
      expect(allPatients[0].age).an("number")
    } catch (error) {
      throw error
    }
  })

  it("should able to get one patient", async () => {
    try {
      const { data: { allPatients: [{ id }] } } = await client.query({
        query: allPatientsQuery
      })
      const { data: { patient: { name, age } } } = await client.query({
        query: patientQuery,
        variables: { id }
      })
      expect(name).equal("Danang")
      expect(age).equal(24)
    } catch (error) {
      throw error
    }
  })

  it("should able to login", async () => {
    try {
      const { data: { login: { authToken } } } = await client.mutate({
        mutation: loginMutation,
        variables: {
          email: "gifary@dhimas.tech",
          password: "gifarydhimas"
        }
      })

      expect(authToken).a("string")
    } catch (error) {
      throw error
    }
  })
})
