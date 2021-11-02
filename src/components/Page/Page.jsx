import PropTypes from 'prop-types';
import s from './Page.module.css';

export default function Page({ title, children }) {
  return (
    <div className={s.page}>
      {title && <h1 className={s.title}>{title}</h1>}
      {children}
    </div>
  );
}

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
