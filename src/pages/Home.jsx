import Modal from 'modal-oc-p14';
import { createPortal } from 'react-dom';

import Form from '@/components/Form/Form';
import Container from '@/ui/Container';
import Title from '@/ui/Title';
import useModal from '@/utils/useModal';

const Home = () => {
  // Destructure the isModalOpen and handleCloseModal functions from the useModal hook
  const { isModalOpen, handleCloseModal } = useModal();

  return (
    <Container>
      <Title title='Create Employee' />
      <Form />
      {isModalOpen &&
        createPortal(
          <Modal
            isOpen={isModalOpen}
            content='Employee Created'
            closeModal={handleCloseModal}
          />,
          document.body,
        )}
    </Container>
  );
};

export default Home;
