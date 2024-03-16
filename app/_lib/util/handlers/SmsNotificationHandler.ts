import { NotificationHandler } from "../abstracts/NotificationHandler"
import { NotificationRequest } from "../types/NotificationRequest"

export class SMSNotificationHandler extends NotificationHandler {
  handle(request: NotificationRequest): boolean {
    if (request.type === 'sms') {
      console.log(`Sending SMS to ${request.user}: ${request.message}`)
      return true
    }
    return super.handle(request)
  }
}
