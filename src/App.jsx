import Modal from 'modal-oc-p14';

import Navbar from '@/components/Navbar';
import Router from '@/Router/Router';
import useModal from '@/utils/useModal';

const App = () => {
  // Destructure the isModalOpen and handleCloseModal functions from the useModal hook
  const { isModalOpen, handleCloseModal } = useModal();
  return (
    <>
      {isModalOpen ? (
        <Modal
          isOpen={isModalOpen}
          content='Employee Created'
          closeModal={handleCloseModal}
        />
      ) : null}
      <Navbar />
      <Router />
    </>
  );
};

export default App;
