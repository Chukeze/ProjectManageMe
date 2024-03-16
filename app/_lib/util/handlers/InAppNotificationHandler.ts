import { NotificationHandler } from "../abstracts/NotificationHandler"
import { NotificationRequest } from "../types/NotificationRequest"

export class InAppNotificationHandler extends NotificationHandler {
  handle(request: NotificationRequest): boolean {
    if (request.type === 'inApp') {
      console.log(
        `Showing in-app notification to ${request.user}: ${request.message}`
      )
      return true
    }
    return super.handle(request)
  }
}
