const chats = [
  {
    id: 1,
    name: "Ronald Robertson",
    avatar: "https://i.pravatar.cc/150?img=12",
    online: true,
    lastMessage: "Let's finish the dashboard.",
    time: "2 min",
    unread: 2,
  },
  {
    id: 2,
    name: "Regina Cooper",
    avatar: "https://i.pravatar.cc/150?img=20",
    online: true,
    lastMessage: "Meeting at 4 PM",
    time: "10 min",
    unread: 0,
  },
  {
    id: 3,
    name: "Nathan Fox",
    avatar: "https://i.pravatar.cc/150?img=30",
    online: false,
    lastMessage: "See you tomorrow",
    time: "1 hr",
    unread: 1,
  },
  {
    id: 4,
    name: "Calvin Flores",
    avatar: "https://i.pravatar.cc/150?img=40",
    online: true,
    lastMessage: "Thanks 👍",
    time: "Yesterday",
    unread: 0,
  },
];

export const messages = [
  {
    id: 1,
    sender: "other",
    text: "Hello Kaushik 👋",
    time: "09:10 AM",
  },
  {
    id: 2,
    sender: "me",
    text: "Hi Ronald!",
    time: "09:11 AM",
  },
  {
    id: 3,
    sender: "other",
    text: "Did you complete the Orders page?",
    time: "09:12 AM",
  },
  {
    id: 4,
    sender: "me",
    text: "Yes, the Orders page is completed successfully.",
    time: "09:13 AM",
  },
  {
    id: 5,
    sender: "other",
    text: "Let's build the Chat page now.",
    time: "09:14 AM",
  },
];

export default chats;