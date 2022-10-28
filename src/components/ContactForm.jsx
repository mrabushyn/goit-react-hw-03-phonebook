import React, { Component } from 'react';
import css from './Phonebook.module.css';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    evt.currentTarget.reset();
  };

  loginInputId = nanoid();

  render() {

    return (
      <div className={css.formContainer}>
        <form action="" className={css.formField} onSubmit={this.handleSubmit}>
          <label htmlFor={this.loginInputId} className={css.labelField}>
            Name
          </label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={this.loginInputId}
            className={css.inputField}
            onChange={this.handleChange}
          />
          <label htmlFor={this.loginInputId} className={css.labelField}>
            Number
          </label>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={this.loginInputId}
            className={css.inputField}
            onChange={this.handleChange}
          />
          <button type="submit" className={css.btnStyle}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
