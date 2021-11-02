import PropTypes from 'prop-types';
import Painting from './Painting';
import s from './PaintingList.module.css';

export default function PaintingList({ items = [] }) {
  return (
    <ul className={s.list}>
      {items.map(item => (
        <li key={item.id}>
          <Painting
            imageUrl={item.url}
            title={item.title}
            authorUrl={item.author.url}
            authorTag={item.author.tag}
            price={item.price}
            quantity={item.quantity}
          />
        </li>
      ))}
    </ul>
  );
}

PaintingList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
