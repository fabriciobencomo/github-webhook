import { GithubIssue, GithubStar } from "../../interfaces";

export class GithubService {
  constructor(){}

  onStar(payload: GithubStar): string {
    let message:string = ''
    const {action , sender, repository, starred_at} = payload

    if(starred_at){
      message = `User ${sender.login} ${action} star on ${repository.full_name}`
    }

    return message
  }

  onIssue(payload: GithubIssue): string {
    let message:string = ''
    const {action, issue} = payload

    if(action === 'opened'){
      return message = `An Issue was opened with this title ${issue.title}`
    }

    if(action === 'closed'){
      return message = `An Issue was closed by ${issue.user.login}`
    }

    if(action === 'reopened'){
      return message = `An Issue was reopened by ${issue.user.login}`
    }


    return `Unhandled action for the issue evnet ${action}`
  }
}