export type NotificationRequest = {
  user: string
  message: string
  type: 'email' | 'inApp' | 'sms'
  read: boolean
}
