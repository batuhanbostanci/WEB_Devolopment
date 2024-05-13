import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type }) {
  const base =
    'text-stone uppercase-800 trans transition-colors-300 focus-ring rounded-full bg-yellow-400  font-semibold tracking-wide duration-300 hover:bg-yellow-300 focus:outline-none focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ';
  const styles = {
    primary: base + 'md:px-6 md:py-4 px-4 py-3',
    small: base + 'px-4 py-2 md:px-5 md:py-2.5 text-xs',
    secondary:
      'text-stone-400 uppercase-800 md:px-6 md:py-3 px-4 py-2 trans transition-colors-300 focus-ring rounded-full border-2 border-stone-300 hover: text-stone-800 font-semibold tracking-wide duration-300 hover:bg-stone-300 focus:outline-none focus:ring-stone-200 focus:ring-offset-2 focus:text-stone-400 disabled:cursor-not-allowed',
  };
  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }
  return <button className={styles[type]}>{children}</button>;
}

export default Button;
