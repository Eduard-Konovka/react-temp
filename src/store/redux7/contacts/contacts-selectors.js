import { createSelector } from '@reduxjs/toolkit';

export const getLoading = state => state.contacts.loading;
export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const getVisibleContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);

  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

// export const getVisibleContacts = createSelector(
//   [getContacts, getFilter],
//   (contacts, filter) => {
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter),
//     );
//   },
// );

const getTotalContactCount = state => {
  const contacts = getContacts(state);
  return contacts.length;
};

const getCompletedContactCount = createSelector([getContacts], contacts => {
  return contacts.reduce(
    (total, contact) => (contact.completed ? total + 1 : total),
    0,
  );
});

const contactsSelectors = {
  getLoading,
  getFilter,
  getVisibleContacts,
  getTotalContactCount,
  getCompletedContactCount,
};

export default contactsSelectors;
