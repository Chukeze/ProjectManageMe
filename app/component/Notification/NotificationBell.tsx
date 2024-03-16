import { ModalFactory } from "@/app/_lib/util/factories/ModalFactory";
import { useNotification } from "@/app/context/NotificationContext";
import { useMemo, useState } from "react";
import { IoMdNotifications } from "react-icons/io";
export default function NotificationBell() {
    const {notificationCount} = useNotification();
    const [modalType, setModalType] = useState();

    const openModal = (type) => {
      setModalType(type);
    };

    const closeModal = () => {
      setModalType(null)
    };

    const getModal = useMemo(() => {
      return ModalFactory.createModal(modalType, {
        open: !!modalType,
        onClose: closeModal,
        children:<dialog> look</dialog> ,
      });
    }, [modalType]);
  return (
    <>
      <button className="notification-bell" onClick={openModal('notification')}>
        <IoMdNotifications />
        {notificationCount > 0 && (
          <span className="notification-count">{notificationCount}</span>
        )}
      </button>
      {modalType && getModal}
    </>
  )
}