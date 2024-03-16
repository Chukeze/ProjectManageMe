export interface IModal {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}