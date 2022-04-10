import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'store/redux7/contacts';
import Section from 'components/Section';
import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter5';
import Stats from 'components/Stats3';
import Modal from 'components/Modal';
import Button from 'components/Button';
import IconButton from 'components/IconButton';
import Spinner from 'components/Spinner';
import { ReactComponent as AddIcon } from 'icons/add.svg';

const iconStyles = {
  marginTop: 20,
  marginBottom: 20,
};

export default function ContactView() {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(contactsSelectors.getLoading);

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(state => !state);

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <>
      <Section>
        <Filter />
        <Stats />
        <IconButton
          type="button"
          title="Добавить контакт"
          style={iconStyles}
          onClick={toggleModal}
          aria-label="Добавить контакт"
        >
          <AddIcon width="36" height="36" fill="#fff" />
        </IconButton>
      </Section>

      <Section>
        {isLoadingContacts ? <Spinner size={100} /> : <ContactList />}
      </Section>

      {showModal && (
        <Modal forClose={toggleModal}>
          <ContactForm />
          <Button type="button" onClick={toggleModal}>
            Отменить
          </Button>
        </Modal>
      )}
    </>
  );
}
