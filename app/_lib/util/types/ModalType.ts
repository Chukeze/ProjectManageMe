import { IModal } from "../interfaces/IModal"

export type ModalType = {
  type: string
  props: JSX.IntrinsicAttributes & IModal
}