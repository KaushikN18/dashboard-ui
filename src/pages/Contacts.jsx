import ContactsHeader from "../components/contacts/ContactsHeader";
import ContactsSearch from "../components/contacts/ContactsSearch";
import ContactsGrid from "../components/contacts/ContactsGrid";

function Contacts() {
  return (
    <div className="page-container space-y-6">

      <ContactsHeader />

      <ContactsSearch />

      <ContactsGrid />

    </div>
  );
}

export default Contacts;