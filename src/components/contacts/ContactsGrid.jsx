import contacts from "./contactsData";
import ContactCard from "./ContactCard";

function ContactsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          contact={contact}
        />
      ))}

    </div>
  );
}

export default ContactsGrid;