import { INotificationHandler } from "../interfaces/INotificationHandler"
import { NotificationRequest } from "../types/NotificationRequest"

export abstract class NotificationHandler implements INotificationHandler {
  nextHandler: NotificationHandler | null = null

  setNext(handler: NotificationHandler): NotificationHandler {
    this.nextHandler = handler
    return handler
  }

  handle(request: NotificationRequest): boolean {
    if (this.nextHandler) {
      return this.nextHandler.handle(request)
    }

    return false
  }
}
