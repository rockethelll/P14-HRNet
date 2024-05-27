const Modal = ({ closeModal }) => {
  return (
    <div className='fixed z-10 flex h-screen w-screen items-center justify-center overflow-auto bg-black/75 text-center'>
      <div className='relative z-20 w-[500px] translate-y-[-50%] rounded-lg bg-white px-8 py-4 text-left font-semibold	shadow-custom'>
        Employee Created!
        <button
          className='absolute right-[-12.5px] top-[-12.5px] h-8 w-8 bg-close bg-cover'
          onClick={closeModal}
        ></button>
      </div>
    </div>
  );
};

export default Modal;
