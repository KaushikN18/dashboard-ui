import MailSidebar from "../components/mail/MailSidebar";
import MailList from "../components/mail/MailList";
import MailDetails from "../components/mail/MailDetails";

function Mail() {
  return (
    <div className="flex h-full w-full bg-[#F7F8FA] overflow-hidden">

      {/* Mail Sidebar */}
      <MailSidebar />

      {/* Mail List */}
      <MailList />

      {/* Mail Details */}
      <MailDetails />

    </div>
  );
}

export default Mail;