import { url } from "inspector";
import { envs } from "../../config/envs";

export class DiscordService {

  private readonly discordWebhookUrl: string = envs.DISCORD_WEBHOOK_URL

  async notify(message: string){
    const body = {
      content: message,
      embeds: [
        {
          image: {url: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWlrMWJnaDd0d2VoZXRuZDV0OTFpbDE1MDIweTZ5YXViazJ2MGp0MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/du3J3cXyzhj75IOgvA/giphy.gif"}
        }
      ]
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