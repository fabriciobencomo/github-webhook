import express from 'express'
import { envs } from './config/envs'
import { GithubController } from './presentation/github/controller'
import exp from 'constants'

(() => {
  main()
})()

function main() {
  const app = express()

  const controller = new GithubController()

  app.use(express.json())


  app.post('/api/github', controller.webhookHandler)

  app.listen(envs.PORT, () => {
    console.log(`App Running Port ${envs.PORT}`)
  })
}