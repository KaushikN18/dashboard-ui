import profileImg from "../../assets/images/profile.png";

import post1 from "../../assets/profile/post1.png";
import post2 from "../../assets/profile/post2.png";

import photo1 from "../../assets/profile/photo1.png";
import photo2 from "../../assets/profile/photo2.png";
import photo3 from "../../assets/profile/photo3.png";
import photo4 from "../../assets/profile/photo4.png";
import photo5 from "../../assets/profile/photo5.png";
import photo6 from "../../assets/profile/photo6.png";
import photo7 from "../../assets/profile/photo7.png";
import photo8 from "../../assets/profile/photo8.png";
import photo9 from "../../assets/profile/photo9.png";

export const profile = {
  name: "Ronald Robertson",
  role: "Creative Director",
  email: "robe@example.com",
  birthday: "17 March, 1995",
  phone: "+1 (070) 123-8459",
  location: "New York, NY",
  avatar: profileImg,
  cover:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600",
};

export const friends = [
  {
    id: 1,
    name: "Ronald Robertson",
    role: "Product Designer",
    avatar: profileImg,
  },
  {
    id: 2,
    name: "Regina Cooper",
    role: "Project Manager",
    avatar: profileImg,
  },
  {
    id: 3,
    name: "Judith Black",
    role: "Creative Director",
    avatar: profileImg,
  },
  {
    id: 4,
    name: "Dustin Williamson",
    role: "Web Developer",
    avatar: profileImg,
  },
  {
    id: 5,
    name: "Nathan Fox",
    role: "Business Analyst",
    avatar: profileImg,
  },
  {
    id: 6,
    name: "Calvin Flores",
    role: "Designer",
    avatar: profileImg,
  },
  {
    id: 7,
    name: "Brandon Pena",
    role: "Product Designer",
    avatar: profileImg,
  },
  {
    id: 8,
    name: "Courtney Nguyen",
    role: "Designer",
    avatar: profileImg,
  },
  {
    id: 9,
    name: "Kathryn Cooper",
    role: "Developer",
    avatar: profileImg,
  },
  {
    id: 10,
    name: "Cody Lane",
    role: "Web Developer",
    avatar: profileImg,
  },
];

export const photos = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
];

export const posts = [
  {
    id: 1,
    avatar: profileImg,
    author: "Dustin Williamson",
    date: "Jan 17, 2020",
    text:
      "Above all, think of life as a prototype. We can conduct experiments, make discoveries, and change our perspectives. We can look for opportunities to turn processes into projects that have tangible outcomes. We can learn how to take joy in the things we create whether they take the form of a fleeting experience or an heirloom that will last for generations.",
    image: post1,
    likes: 50,
    commentsCount: 14,
    comments: [
      {
        id: 1,
        avatar: profileImg,
        author: "Judith Black",
        time: "1 day ago",
        text:
          "Very interesting and informative article. I learned a lot of new and interesting. 🥳",
        likes: 5,
        replies: [
          {
            id: 11,
            avatar: profileImg,
            author: "Nathan Fox",
            time: "5 min ago",
            text:
              "Hello!\nI agree, a very interesting article. Thank you very much!",
            likes: 0,
          },
        ],
      },
      {
        id: 2,
        avatar: profileImg,
        author: "Calvin Flores",
        time: "2 day ago",
        text:
          "Thanks for the good article. Looking forward to new ones. 🤓",
        likes: 3,
        replies: [],
      },
    ],
  },

  {
    id: 2,
    avatar: profileImg,
    author: "Dustin Williamson",
    date: "Jan 15, 2020",
    text:
      "Creativity is to discover a question that has never been asked. If one brings up an idiosyncratic question, the answer he gives will necessarily be unique as well.",
    image: post2,
    likes: 50,
    commentsCount: 14,
    comments: [
      {
        id: 3,
        avatar: profileImg,
        author: "Regina Cooper",
        time: "5 day ago",
        text:
          "Very interesting and informative. I learned a lot of new and interesting things.",
        likes: 5,
        replies: [],
      },
      {
        id: 4,
        avatar: profileImg,
        author: "Ronald Robertson",
        time: "5 day ago",
        text:
          "Hello!\nI agree, a very interesting. Thank you very much! 🥳",
        likes: 3,
        replies: [],
      },
    ],
  },
];