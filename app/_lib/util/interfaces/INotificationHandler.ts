import { NotificationHandler } from "../abstracts/NotificationHandler"
import { NotificationRequest } from "../types/NotificationRequest"

export interface INotificationHandler {
  setNext(handler: NotificationHandler): NotificationHandler
  handle(request: NotificationRequest): boolean
}
