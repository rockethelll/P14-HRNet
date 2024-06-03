import { useDispatch, useSelector } from 'react-redux';

import { closeModal } from '@/state/modalSlice';

// Custom hook to handle modal state
const useModal = () => {
  const isModalOpen = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return { isModalOpen, handleCloseModal };
};

export default useModal;
