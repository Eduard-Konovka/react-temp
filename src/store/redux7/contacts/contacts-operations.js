import axios from 'axios';
import { toast } from 'react-toastify';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  toggleCompletedRequest,
  toggleCompletedSuccess,
  toggleCompletedError,
} from './contacts-actions';

// GET @ /contacts
const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch(error => dispatch(fetchContactsError(error.message)));
};

// Альтернатива fetchContacts на ахинхронных функциях
// const fetchContacts = () => async dispatch => {
//   dispatch(fetchContactsRequest());

//   try {
//     const { data } = await axios.get('/contacts');
//     dispatch(fetchContactsSuccess(data));
//   } catch (error) {
//     dispatch(fetchContactsError(error.message));
//   }
// };

// POST @ /contacts
const addContact =
  ({ name, number }) =>
  dispatch => {
    const contact = {
      name,
      number,
    };

    dispatch(addContactRequest());

    axios
      .post('/contacts', contact)
      .then(({ data }) => {
        dispatch(addContactSuccess(data));
        toast.success('Контакт успешно создан');
      })
      .catch(error => dispatch(addContactError(error.message)));
  };

// DELETE @ /contacts/:id
const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => {
      dispatch(deleteContactSuccess(id));
      toast.success('Контакт успешно удален');
    })
    .catch(error => dispatch(deleteContactError(error.message)));
};

// PATCH @ /contacts/:id
const toggleCompleted =
  ({ id, completed }) =>
  dispatch => {
    const update = { completed };

    dispatch(toggleCompletedRequest());

    axios
      .patch(`/contacts/${id}`, update)
      .then(({ data }) => dispatch(toggleCompletedSuccess(data)))
      .catch(error => dispatch(toggleCompletedError(error.message)));
  };

const contactsOperations = {
  fetchContacts,
  addContact,
  deleteContact,
  toggleCompleted,
};
export default contactsOperations;
