import MailCard from "./MailCard";

const mails = [
  {
    id: 1,
    name: "Regina Cooper",
    subject: "Creative Director Resume",
    preview:
      "The Arts play a large role in the expression of inner thoughts and beauty in my life...",
    time: "10:45",
    attachment: true,
    bookmarked: true,
  },
  {
    id: 2,
    name: "Dustin Williamson",
    subject: "Meeting with friends",
    preview:
      "Hello, Mark! I am writing to introduce you to David Boyd...",
    time: "10:40",
  },
  {
    id: 3,
    name: "Jane Wilson",
    subject: "UX Conference in New York",
    preview:
      "We use the Arts as a means of touching that part of us...",
    time: "09:15",
    attachment: true,
  },
  {
    id: 4,
    name: "Brandon Pena",
    subject: "Muzli's weekly design #236",
    preview:
      "The arts allow us to be as specific or as abstract as we please...",
    time: "09:01",
    attachment: true,
    bookmarked: true,
  },
  {
    id: 5,
    name: "Jacob Hawkins",
    subject: "Weekly project report",
    preview:
      "From dance and music to abstract art our concept of life...",
    time: "08:20",
  },
  {
    id: 6,
    name: "Shane Black",
    subject: "Order Status #24197118",
    preview:
      "The arts teach us how to communicate through creative expression...",
    time: "08:10",
  },
  {
    id: 7,
    name: "Regina Cooper",
    subject: "Welcome to Dribbble!",
    preview:
      "The Arts play a large role in the expression of beauty...",
    time: "08:02",
  },
];

function MailList() {
  return (
    <div className="w-[430px] bg-white border-r border-[#ECECEC] overflow-y-auto">

      {mails.map((mail) => (
        <MailCard
          key={mail.id}
          mail={mail}
        />
      ))}

    </div>
  );
}

export default MailList;