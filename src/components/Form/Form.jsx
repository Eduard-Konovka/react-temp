import { Component } from 'react';
import s from './Form.module.css';

class Form extends Component {
  state = {
    name: '',
    tag: '',
    experience: 'junior',
    licence: false,
  };

  hendleChenge = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  hendleSubmite = e => {
    e.preventDefault();
    this.props.forSubmit(this.state);
    this.reset();
  };

  hendleLicenceChenge = e => {
    this.setState({ licence: e.currentTarget.checked });
  };

  reset = () => {
    this.setState({ name: '', tag: '' });
  };

  render() {
    return (
      <form onSubmit={this.hendleSubmite} className={s.form}>
        <label className={s.item}>
          Имя:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.hendleChenge}
            className={s.item}
          ></input>
        </label>

        <label className={s.item}>
          Фамилия:
          <input
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.hendleChenge}
            className={s.item}
          ></input>
        </label>

        <div className={s.item}>
          <label className={s.item}>
            <input
              type="radio"
              name="experience"
              value="junior"
              checked={this.state.experience === 'junior'}
              onChange={this.hendleChenge}
            />
            Junior
          </label>

          <label className={s.item}>
            <input
              type="radio"
              name="experience"
              value="middle"
              checked={this.state.experience === 'middle'}
              onChange={this.hendleChenge}
            />
            Middle
          </label>

          <label className={s.item}>
            <input
              type="radio"
              name="experience"
              value="senior"
              checked={this.state.experience === 'senior'}
              onChange={this.hendleChenge}
            />
            Senior
          </label>
        </div>

        <label className={s.item}>
          <input
            type="checkbox"
            name="licence"
            checked={this.state.licence}
            onChange={this.hendleLicenceChenge}
          />{' '}
          Согласен с условием
        </label>

        <button type="submit" disabled={!this.state.licence} className={s.btn}>
          {' '}
          Отправить{' '}
        </button>
      </form>
    );
  }
}

export default Form;
