import PropTypes from 'prop-types';
import s from './Painting.module.css';
import defaultImage from './default.jpg';

export default function Painting({
  imageUrl = defaultImage,
  title,
  authorUrl,
  authorTag = 'неизвестен',
  price,
  quantity = 0,
}) {
  return (
    <div className={s.container}>
      <img src={imageUrl ?? defaultImage} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={authorUrl}>{authorTag}</a>
      </p>
      <p>Цена: {price} кредитов</p>
      <p>Доступность: {quantity > 9 ? 'есть в наличии' : 'заканчивается'}</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
}

Painting.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authorUrl: PropTypes.string.isRequired,
  authorTag: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
