import { Link } from 'react-router-dom';

function Button({ children, disabled, to }) {
  const className =
    'text-stone uppercase-800 trans transition-colors-300 focus-ring rounded-full bg-yellow-400 px-4 py-3 font-semibold tracking-wide duration-300 hover:bg-yellow-300 focus:outline-none focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-4 sm:py-6';
  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }
  return <button className={className}>{children}</button>;
}

export default Button;
