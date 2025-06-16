import { ContactsCollection } from '../db/models/contacts.js';

export const getAllContacts = async () => {
  try {
    return await ContactsCollection.find();
  } catch (error) {
    throw new Error('Error fetching contacts: ' + error.message);
  }
};

export const getContactById = async (contactId) => {
  const contact = await ContactsCollection.findById(contactId);
  return contact;
};
