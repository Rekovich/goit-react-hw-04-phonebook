import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './contact-form.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid(4);
  numberInputId = nanoid(4);

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const newContacts = {
      id: nanoid(5),
      name: this.state.name,
      number: this.state.number,
    };
    this.setState (()=> ({
      name: '',
      number: '',
    }));
    
    this.props.addContact(newContacts);
  };

  render() {
    return (
     <div className={css.form}>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId} className={css.formLabel}>Name</label>
        <input
        className={css.formInput}
          id={this.nameInputId}
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
        />
        <label htmlFor={this.numberInputId} className={css.formLabel}>Number</label>
        <input
        className={css.formInput}
          id={this.numberInputId}
          type="tel"
          name="number"
          value={this.state.number}
          onChange={this.handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
        />
        <button type="submit" className={css.button}>Add contact</button>
      </form>
     </div>
    );
  }
}

export default ContactForm;
