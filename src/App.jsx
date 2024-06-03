import Navbar from '@/components/Navbar';
import Router from '@/Router/Router';
import Modal from '@/ui/Modal';
import useModal from '@/utils/useModal';

const App = () => {
  const { isModalOpen, handleCloseModal } = useModal();
  return (
    <>
      {isModalOpen ? <Modal closeModal={handleCloseModal} /> : null}
      <Navbar />
      <Router />
    </>
  );
};

export default App;
