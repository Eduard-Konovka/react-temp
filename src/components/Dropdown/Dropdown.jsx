import { Component } from 'react';
import Button from 'components/Button';
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
        <Button type="button" onClick={this.toggle}>
          {visible ? 'Скрыть' : 'Показать'}
        </Button>

        {visible && <div className={s.menu}>Выпадающее меню</div>}
      </div>
    );
  }
}

export default Dropdown;
