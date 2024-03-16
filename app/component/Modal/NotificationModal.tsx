import { IModal } from "@/app/_lib/util/interfaces/IModal";

export default function NotificationModal({open,onClose,children}:IModal) {
    if(!open) return null;
  return (
    <div>
        <div>
            {children}
        </div>
        <button onClick={onClose}>Close</button>
    </div>
  )
}