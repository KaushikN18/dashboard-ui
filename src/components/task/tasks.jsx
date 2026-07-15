import task1 from "../../assets/images/mountain.jpg";
import task2 from "../../assets/images/ocean.jpg";
import task3 from "../../assets/images/desert.jpg";
import task4 from "../../assets/images/ocean.jpg";
import task5 from "../../assets/images/mountain.jpg";

export const todoTasks = [
  {
    id: 1,
    title: "Brand Logo Design",
    description: "Make a redesign of the logo in corporate colors.",
    date: "Jun 17",
    attachments: 2,
    comments: 5,
    avatars: 2,
  },
  {
    id: 2,
    title: "New Header Image",
    image: task1,
    date: "Jun 17",
    attachments: 1,
    comments: 3,
    avatars: 1,
  },
  {
    id: 3,
    title: "Wireframe for App",
    description: "Make a framework for an app for a pre-presentation.",
    date: "Jun 17",
    comments: 1,
    avatars: 2,
  },
];

export const progressTasks = [
  {
    id: 4,
    title: "Updating Modules",
    description: "Step-by-step update of modules.",
    date: "Jun 17",
    attachments: 2,
    comments: 5,
    avatars: 2,
  },
  {
    id: 5,
    title: "Template Progress",
    description: "Designing cool UI design templates.",
    date: "Jun 17",
    attachments: 2,
    comments: 5,
    avatars: 2,
  },
];

export const completedTasks = [
  {
    id: 6,
    title: "Refresh Photo Slider",
    images: [task3, task4, task5],
    date: "Jun 17",
    attachments: 3,
    comments: 2,
    avatars: 2,
  },
  {
    id: 7,
    title: "Server Startup",
    description: "Running the server in test mode and configuring.",
    date: "Jun 17",
    comments: 17,
    avatars: 2,
  },
  {
    id: 8,
    title: "New Background",
    image: task2,
    date: "Jun 17",
    attachments: 1,
    comments: 2,
    avatars: 1,
  },
];