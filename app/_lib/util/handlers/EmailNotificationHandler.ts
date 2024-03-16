import { NotificationHandler } from "../abstracts/NotificationHandler"
import { NotificationRequest } from "../types/NotificationRequest"

export class EmailNotificationHandler extends NotificationHandler {
  handle(request: NotificationRequest): boolean {
    if (request.type === 'email') {
      console.log(`Sending email to ${request.user}: ${request.message}`)
      return true
    }
    return super.handle(request)
  }
}
