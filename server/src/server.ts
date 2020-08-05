import express from 'express'

const app = express()

app.use(express.json())

app.post('/users', (request, response) => {
  console.log(request.body)

  const users = [
  { name: 'Rodrigo', age: 25},
  { name: 'Sofia', age: 21},
  ]

  return response.json(users)
})

app.listen(3333)