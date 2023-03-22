// const supertest = require('supertest')
import createServer from '../utils/server'
import request from 'supertest'
import express from 'express'
const app = createServer()

beforeEach(() => {})
afterEach(() => {})
describe('Application', () => {
  describe('Checking Invalid Routes', () => {
    it('should return 400', async () => {
      await request(app).get('/InvalidGetRequest').expect(404)
      await request(app).post('/InvalidPostRequest').expect(404)
    })
  })

  describe('Checking base Routes', () => {
    it('it should return 200', async () => {
      await request(app).get('/').expect(200)
      await request(app).post('/').expect(200)
    })
  })

  describe('POST game Route', () => {
    describe('given 10 simulations and change door true', () => {
      it('should return object with winning losing count and array return a 200', async () => {
        const requestObject = {
          noOfSimulations: 10,
          changeDoor: true,
        }

        const MockRequest = await request(app)
          .post('/monty/')
          .send(requestObject)
          .expect(200)

        const mockRequestBody = MockRequest.body

        const checkGetSimulationStatsObj = mockRequestBody.hasOwnProperty(
          'getSimulationStats'
        )
        const checkWinningArray =
          mockRequestBody.hasOwnProperty('winningArray')
        expect(checkGetSimulationStatsObj).toBe(true)
        expect(checkWinningArray).toBe(true)
      })
    })
    describe('incorrect type value ', () => {
      const requestObject = {
        noOfSimulations: 'invalid',
        changeDoor: false,
      }

      it('should give 500 error and text for invalid type', async () => {
        const MockRequest = await request(app)
          .post('/monty/')
          .send(requestObject)
          .expect(500)

        expect(MockRequest.text).toBe('Input values are not correct')
      })
    })
  })
})
