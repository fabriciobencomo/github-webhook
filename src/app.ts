import express from 'express'
import { envs } from './config/envs'

(() => {
  main()
})()

function main() {
  const app = express()

  app.post('/api/github', (req,res) => {
    res.json('github endpoint')
  })

  app.listen(envs.PORT, () => {
    console.log(`App Running Port ${envs.PORT}`)
  })
}