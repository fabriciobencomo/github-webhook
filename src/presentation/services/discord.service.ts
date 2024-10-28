import { envs } from "../../config/envs";

export class DiscordService {

  private readonly discordWebhookUrl: string = envs.DISCORD_WEBHOOK_URL

  async notify(message: string){
    const body = {
      content: message
    }

    const resp = await fetch(this.discordWebhookUrl, {
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body)
    })

    if(!resp.ok){
      console.log('Error Sending Message To Discord')
      return false
    }

    return true
  }
}