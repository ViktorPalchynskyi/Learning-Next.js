import { Modal } from './modal';

export default function PhotoModal({ params: { id } }) {
    console.log(id);
    return <Modal>{id}</Modal>;
}
