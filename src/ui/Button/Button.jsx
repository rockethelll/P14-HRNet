import { Link } from 'react-router-dom';

const Button = ({ location, title }) => {
  return (
    <Link
      to={location}
      className='block rounded-lg bg-lime-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-lime-800 focus:outline-none focus:ring'
      type='button'
    >
      {title}
    </Link>
  );
};

export default Button;
