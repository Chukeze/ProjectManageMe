import NotificationModal from "@/app/component/Modal/NotificationModal";
import { ModalType } from "../types/ModalType";


export class ModalFactory {
    static createModal({type, props}:ModalType){
        switch (type) {
            case 'notification':
                return <NotificationModal {...props} />;
            case null: 
                return 'Its curren or inital state is null'
            default:
                throw new Error(`Unknown modal type: ${type}`);
        }
    }
}