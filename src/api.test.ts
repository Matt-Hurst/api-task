import createServer from './server'
const supertest = require('supertest')
const mongoose = require('mongoose')

const app = createServer()
const request = supertest(app)
const testDatabase = 'test'


const courier = {
   id: 1234,
   max_capacity: 25
}

const url = '/couriers'

beforeAll(async () => {
  const url = `mongodb://localhost:27017/${testDatabase}`
  await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
})

afterAll(async () => {
   await mongoose.connection.db.dropDatabase();
   mongoose.connection.close()
})


   it('post /couriers => should add new courier to database', async ()=> {
      const result = await request.post(url).send(courier)
      expect(result.statusCode).toBe(201)
   })
   it('post /couriers => should return "unable to create courier" if no id is provided', async () => {
         const result = await request.post(url).send({
         max_capacity: 45
      })
      expect(result.text).toBe('Unable to create courier')
      expect(result.status).toBe(400)
   })

   it('put /couriers =>should edit current_capacity', async () => {
      const result = await request.put(url).send({
          id: courier.id,
          new_capacity: 15 
      })
      expect(result.text).toBe(`Courier current_capacity updated. New capacity for courier id: ${courier.id} = 15`)
   })
   it('put /couriers =>should return error message if no id or new_capacity is given', async () => {
      const result = await request.put(url).send({
          id: courier.id,
       })
      expect(result.text).toBe('No courier id or new_capacity provided')
      const secondResult = await request.put(url).send({
          new_capacity: 20
       })
      expect(secondResult.text).toBe('No courier id or new_capacity provided')
   })

   it('get /couriers/lookup => should return all couriers with capacity matching requeirments', async () => {
      await request.post(url).send({
         id: 4444,
         max_capacity: 10
      })
      const result = await request.get(`${url}/lookup`).send({
         capacity_required: 5
      })
      expect(result.body.length).toBe(2)
      const secondResult = await request.get(`${url}/lookup`).send({
         capacity_required: 12
      })
      expect(secondResult.body.length).toBe(1)
   })


   it('delete /couriers => should not remove courier from database if no id provided', async () => {
    const result = await request.delete(url).send({})
      expect(result.text).toBe('No courier id provided')
   })
   it('delete /couriers => should return no courier message if no courier found with given id', async () => {
    const result = await request.delete(url).send({id : 1990})
      expect(result.text).toBe('No courier with id: 1990 found')
   })
   it('delete /couriers => should remove courier from database', async () => {
      const result = await request.delete(url).send({
         id: courier.id
      })
      expect(result.text).toBe(`Courier id: ${courier.id} deleted`)
   })

