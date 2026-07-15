import MailSidebar from "../components/mail/MailSidebar";
import MailList from "../components/mail/MailList";
import MailDetails from "../components/mail/MailDetails";

function Mail() {
  return (
    <div className="h-[calc(100vh-72px)] flex bg-[#F7F8FA] overflow-hidden">

      {/* Left Menu */}
      <MailSidebar />

      {/* Mail List */}
      <MailList />

      {/* Mail Details */}
      <MailDetails />

    </div>
  );
}

export default Mail;