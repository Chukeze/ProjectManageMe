'use client'
import React, { createContext, useContext, ReactNode, useState, useCallback } from 'react'
import { NotificationRequest } from '../_lib/util/types/NotificationRequest'
import { EmailNotificationHandler } from '../_lib/util/handlers/EmailNotificationHandler'
import { InAppNotificationHandler } from '../_lib/util/handlers/InAppNotificationHandler'
import { SMSNotificationHandler } from '../_lib/util/handlers/SmsNotificationHandler'

type NotificationContextType = {
  sendNotification: (request: NotificationRequest) => void,
  addNotification: (request: NotificationRequest) => void,
  resetNotification: (request: NotificationRequest) => void,
  notificationCount: number,
  setNotificationCount: React.Dispatch<React.SetStateAction<number>>;
}

export const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
)

export const useNotification = () => {
  const context = useContext(NotificationContext)
  if (context === undefined) {
    throw new Error(
      'useNotification must be used within a NotificationProvider'
    )
  }
  return context;
};

export default function NotificationProvider({children}:{ children: ReactNode }){
    const [notificationCount, setNotificationCount] = useState(0);
    const [notifications, setNotifications]= useState([]);//placeholder for the notify state list



  const sendNotification = (request: NotificationRequest) => {
    // Instantiate handlers
    const emailHandler = new EmailNotificationHandler()
    const inAppHandler = new InAppNotificationHandler()
    const smsHandler = new SMSNotificationHandler()

    // Setting up the chain
    emailHandler.setNext(inAppHandler).setNext(smsHandler)

    // Attempt to handle the request
    if (!emailHandler.handle(request)) {
      console.log('Notification could not be processed')
    }
  };

  const addNotification = () =>{
    //logic to append new notification to the state
    //and increment the count of unread notification
    setNotifications(prevNotifications => [...prevNotifications, newNotification]);
    setNotificationCount(prevCount => prevCount + 1)
  }

  const resetNotification = () => {
    //reset notification count
    setNotificationCount(0);
  }

    const NotificationContextValue = {
        notificationCount,
        setNotificationCount,
        sendNotification,
        resetNotification,
        addNotification,
    }
  return (
    <NotificationContext.Provider value={NotificationContextValue}>
      {children}
    </NotificationContext.Provider>
  )
}
