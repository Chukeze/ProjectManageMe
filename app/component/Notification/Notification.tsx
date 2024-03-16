import { AiTwotoneNotification } from 'react-icons/ai'
import { useNotification } from '../../context/NotificationContext'
import DropDown from './DropDown'
import NotificationBell from './NotificationBell'

export default function Notification({ notifications, onDismiss }) {
  const { sendNotification } = useNotification()
  return (
    <section className="flex justify-between gap-2">
      <article>
        <NotificationBell />

        <DropDown message={notifications}></DropDown>
      </article>
      <button
        onClick={() =>
          sendNotification({
            user: 'Victor',
            message: 'I click You',
            type: 'email',
            read: true,
          })
        }
        className="bg-sky-500 rounded-md  
        py-2 px-2  font-bold relative 
        before:content-['SendNotification'] hover:before:block 
        before:absolute before:bottom-full before:left-1/2 
        before:-translate-x-1/2 before:bg-black before:text-white 
        before:py-1 before:px-2 before:rounded-md before:text-sm before:z-10 before:hidden"
      >
        <AiTwotoneNotification />
      </button>
    </section>
  )
}
