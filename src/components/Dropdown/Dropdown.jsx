import { Component } from 'react';
import s from './Dropdown.module.css';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    const { visible } = this.state;

    return (
      <div className={s.dropdown}>
        <button type="button" className={s.toggle} onClick={this.toggle}>
          {visible ? 'Скрыть' : 'Показать'}
        </button>

        {visible && <div className={s.menu}>Выпадающее меню</div>}
      </div>
    );
  }
}

export default Dropdown;
