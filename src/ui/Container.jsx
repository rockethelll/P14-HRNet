const Container = ({ children }) => {
  return (
    <div className='container mx-auto flex max-w-screen-xl flex-col justify-center px-4 py-4 sm:px-6 lg:px-8'>
      {children}
    </div>
  );
};

export default Container;
