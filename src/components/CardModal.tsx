interface CardModel {
  id: string;
  isModal: boolean;
  setIsModal: (isModal: boolean) => void;
}

const CardModal = ({ id, isModal, setIsModal }: CardModel) => {
  return <div>CardModal</div>;
};

export default CardModal;
