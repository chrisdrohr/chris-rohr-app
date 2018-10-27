import React from "react";
import {
  Album,
  Book,
  Code,
  Equalizer,
  Image,
  MusicNote,
  Person,
  School,
  Web,
  Work,
} from '@material-ui/icons';
import * as SVG from "./SVG/SVG";

export const name = "Chris Rohr";
export const profession = "Web & Mobile Developer";
export const email = {
  email: "chrisrohrdev@gmail.com",
  info: "Copy Email",
  message: "Copied chrisrohrdev@gmail.com",
  title: "Email"
};
export const linkedIn = {
  info: "Open Link In New Tab",
  link: "https://www.linkedin.com/in/chrisdrohr",
  title: "LinkedIn"
};
export const gitHub = {
  info: "Open Link In New Tab",
  link: "https://github.com/chrisdrohr",
  title: "GitHub"
};
export const resume = {
  info: "View Resume In New Tab",
  title: "Resume",
  url: "https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/Resume.pdf?alt=media&token=133d03e7-3809-41e5-acb6-80e7e022cab6"
};
export const code = {
  info: "View Code at CodeSandbox",
  title: "View Code",
  url: "https://codesandbox.io/s/kkyr7257z7"
};
export const music = [
  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/245120331&color=%2303a9f4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/232367631&color=%2303a9f4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/209258452&color=%2303a9f4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
];
export const photoURL =
  "https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/GA-7954-01-2-01-min.jpeg?alt=media&token=bc691d49-3ee9-4fbf-be8d-f89e7bd6e934";
export const headline = [
  "React",
  "Flow",
  "Redux",
  "Firebase",
  "Javascript",
  "ES6",
  "Puppeteer",
  "HTML5",
  "CSS3",
  "Node.js",
  "SVG",
  "Android",
  "Material Design",
  "Java"
];
export const location = "Greater Los Angeles Area";
export const industry = "Computer Software";
export const summary = [
  <span>
    Hello, i'm <span style={{ color: "#f50057" }}>Chris Rohr</span>
  </span>,
  <span>
    <span style={{ color: "#03a9f4" }}>Web & Mobile Developer</span>,
    with a passion for UI effects, cutting edge technology, animations and creating clean, intuitive, and
    dynamic experiences.
  </span>
];

export const projects = [
  {
    name: "Ashley Aguilera",
    tech:
      "React | Javascript | CSS3 | ES6 | PWA | Responsive | Material Design | Firebase | Flow ",
    description:
      "Vlog, Health & Wellness, Yoga",
    // link: "",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/screenshots%2Fashley1.png?alt=media&token=ee49b7f3-816d-45f6-abd0-928129b71225"
    ]
  },
  {
    name: "POPCheckr",
    tech:
      "React | Javascript | CSS3 | ES6 | PWA | Responsive | Material Design | Firebase | Flow | Typescript | Puppeteer | Jest",
    description:
      "A B2C Party Planning & ordering platform that streamlines the process of searching ordering and managing your event.",
    link: "https://www.popcheckr.com/",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/screenshots%2Fpopcheckr1.png?alt=media&token=445e91b3-be8d-4f23-a784-f6e995b25752",
      "https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/screenshots%2Fpopcheckr2.png?alt=media&token=af4a8a77-9a5f-426d-b90d-d3dc5bfc4446",
      "https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/screenshots%2Fpopcheckr3.png?alt=media&token=8aafba74-204a-4316-983d-f9c2f50fea9b",
      "https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/screenshots%2Fpopcheckr4.png?alt=media&token=ff85a30c-10cc-4c46-8692-71fb16a900d0"
    ]
  },
  {
    name: "Quinceanera",
    tech: "Android | Java | XML | Material Design | Animation | Firebase",
    description:
      "A B2C Planning, shopping & ordering platform, focused around planning a Quinceanera.",
    link:
      "https://docs.google.com/presentation/d/e/2PACX-1vRmifc2zL-_LQO4R5zVnE3pxryHHdwQG79XOB1DwbRazthKNcRWfEg6r-gcOvMQLeZKIxcShvf72ghi/pub?start=false&loop=false&delayms=3000",
      images: [
        "https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/screenshots%2Fq1.png?alt=media&token=9bf6212f-54f5-4e26-94b2-425dd26e83b1",
        "https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/screenshots%2Fq2.png?alt=media&token=7250e733-df9e-4d37-b9eb-4293e955e0eb",
        "https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/screenshots%2Fq3.png?alt=media&token=3fbe6ab1-d8fd-4817-b6e6-7c3f2bc7be82",
        "https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/screenshots%2Fq4.png?alt=media&token=294b02d6-7e7b-46b9-b0d2-e5267fef112f"
      ]
  },
  {
    name: "Dynamic Blog/Vlog Template",
    tech:
      "React | Javascript | CSS3 | ES6 | Responsive | Material Design | Firebase",
    description:
      "A dynamic website that enabled the user to login and link their Youtube channel, add blog posts, upload media, customize theme, disable/enable pages, edit and save text."
  },
  {
    name: "Nostalgia",
    tech: "Android | Java | XML | Material Design | Animation | Firebase",
    description:
      "A beautiful image based app that makes it easy for groups of friends to pool their photos and videos for easy viewing and sharing.",
  },
  {
    name: "Vice News",
    tech: "Android | Java | XML | Material Design | Animation | SQLite | API",
    description:
      "A group project that makes use of the Vice news API in an image based app."
  },
  {
    name: "Inventoree",
    tech: "Android | Java | XML | Material Design | SQLite | Espresso",
    description: "A personal inventory app that makes use of a SQLite Database"
  },
  {
    name: "X-Wings and Tie-Fighters",
    tech: "Java | XML",
    description: "A Rock, Paper, Scissors game with a Star Wars Twist"
  }
];
export const personality = {
    title: 'Personality', 
    subtitle: 'The Psych Central Personality Test is based upon the IPIP 10-item scale. International Personality Item Pool (IPIP): A Scientific Collaboratory for the Development of Advanced Measures of Personality Traits and Other Individual Differences (http://ipip.ori.org/).',
    results: [
      {
        title: "Extraversion", 
        subtitle: 'Energy, enthusiasm, socialable',
         description: [
           "This trait reflects a person's preference for certain kinds of social situations, and how they like to behave in such situations. People high in extraversion are energetic and seek out the company of others. People low in extraversion -- what some might call introverts -- tend to be more quiet and reserved.",
           "You scored average for this trait, suggesting you lead a balanced life between extraversion and introversion."
         ], 
         score: 27
        },
      {
        title: "Agreeableness", 
        subtitle: 'Altruism, helping others, affection, friendliness',
        description: [
          "This trait reflects how we tend to interact with others, especially in terms of our altrusim and friendliness. People who score higher in agreeableness tend to be more trusting, friendly and cooperative than others. People who score lower tend to be more aggressive and less cooperative.",
          "You scored really high on this trait, suggesting you are a very friendly, cooperative and trusting person."
        ],  
        score: 41
      },
      {
        title: "Conscientiousness", 
        subtitle: 'Control, will, constraint, dependability', 
        description: [
          "This trait reflects how organized and persistent a person is in pursuing their goals. People who score high on this trait tend to be more methodical, well-organized and dutiful than others. People who score lower tend to be less careful, less focused and more likely to be distracted from tasks.",
          "You scored really high on this trait, suggesting you're a well-organized, focused and methodical person."
        ], 
        score: 50
      },
      {
        title: "Neuroticism", 
        subtitle: 'Negative emotions, nervousness',
        description: [
          "This trait reflects the tendency for a person to experience negative thoughts and feelings. People who score high on this trait tend to be more prone to insecurity and emotional distress. People who score lower tend to be more relaxed, less emotional and less prone to distress.",
          "You scored average for this trait, suggesting you've struck a balance between expressing negative emotions and being relaxed."
        ],  
        score: 26
      },
      {
        title: "Openness", 
        subtitle: 'Originality, culture, open-minded, intellect', 
        description: [
          "This trait reflects a person's open-mindedness, and interest in culture and art. People who score high on this trait tend to be imaginative, creative, and to seek out cultural and educational experiences. People who score lower on this trait tend to be more down-to-earth, less interested in art and more practical in nature.",
          "You scored really high on this trait, suggesting you love art and try to keep open-minded."
        ], 
        score: 47
      },
    ]
  };
export const hobbiesInterests = [
  {name: "Coding", svg: <Code/>},
  {name: "Fixing", subtitle: "Computers Electronics", svg: <SVG.Wrench/>},
  {name: "Music", subtitle: "Producing Performing Dancing", svg: <MusicNote/>},
  {name: "Star Wars", svg: <SVG.DeathStar/>},
  {name: "Gaming", svg: <SVG.GamePad/>},
  {name: "Learning", svg: <Book/>},
];
export const languages = [
  { name: "Javascript", svg: SVG.Javascript },
  { name: "HTML5", svg: SVG.HTML5 },
  { name: "CSS3", svg: SVG.CSS3 },
  { name: "Node.js", svg: SVG.NodeJS },
  { name: "Java", svg: SVG.Java }
];
export const frameworks = [
  { name: "React.js", svg: SVG.React },
  { name: "React-Router", svg: SVG.ReactRouter },
  { name: "Redux", svg: SVG.Redux },
  { name: "Flow", svg: SVG.Flow },
  { name: "Material-UI", svg: SVG.MaterialUI }
];
export const testing = [
  { name: "Jest", svg: SVG.Jest },
  { name: "Puppeteer", svg: SVG.Puppeteer }
];
export const technical = [
  "PC Troubleshooting",
  "Tech Support",
  "Networks",
  "Windows",
  "Linux",
  "Electronics Repair",
  "Printers",
  "Digital Electronics",
];
export const apis = [
  { name: "Firebase", svg: SVG.Firebase },
  { name: "Stripe", svg: SVG.Stripe },
  { name: "Google Vision", svg: SVG.GoogleCloud },
  { name: "MailChimp V3", svg: SVG.Mailchimp },
  { name: "YouTube V3", svg: SVG.YouTube },
  { name: "Mandrill", svg: SVG.Mandrill },
  { name: "Twilio", svg: SVG.Twilio }
];

export const designMedia = [
  { name: "Adobe XD", svg: SVG.AdobeXD },
  { name: "Adobe Premiere", svg: SVG.AdobePremiere },
  { name: "Adobe Illustrator", svg: SVG.AdobeAI },
  { name: "FL Studio", svg: SVG.FLStudio }
];
export const projectManagement = [
  { name: "Slack", svg: SVG.Slack },
  { name: "Git/GitHub", svg: SVG.GitHub },
  { name: "Trello", svg: SVG.Trello }
];
export const softSkills = [
  "Leader",
  "Problem Solver",
  "Innovative",
  "Tech Savvy",
  "Team Management",
  "Resourceful",
  "Competitive",
  "Efficient",
  "Hard Working",
  "Detail Oriented",
  "Communication",
  "Collaboration"
];
export const skills = [
  { name: "Languages", list: languages },
  { name: "Frameworks", list: frameworks },
  { name: "API's", list: apis },
  { name: "Design/Media", list: designMedia },
  { name: "Testing", list: testing },
  { name: "Project Management", list: projectManagement },
  { name: "Soft Skills", list: softSkills },
  {name: "Technical", list: technical}
];
export const education = [
  {
    name: "General Assembly",
    field: "Android Development",
    duration: "2016",
    description: [
      "ADI - Android Development Immersive, Front End / Back End Android Development",
      "Continued my online education of software engineering with Google’s Android immersive program.",
      "Built complex and interactive Android apps with Java, XML, Material Design, API’s, and the Android SDK.",
      "Dedicated 720+ hours of study and building apps both in-class after hours, and at home.",
      "Excelled in creating beautiful UI.",
      "Completed four projects including one group project."
    ]
  },
  {
    name: "Mt. San Antonio College",
    field: "Computer/Information Technology Administration and Management",
    duration: "2014 – 2016",
    description: [
      "Followed my passion for learning about all things technology.",
      "Learned how to fix, assemble, disassemble, and troubleshoot computers.",
      "How to design assemble and manage a computer network.",
      "Trained in IT soft skills and customer interaction and de-escalation.",
      "Became proficient in Microsoft Word, Excel, and Powerpoint.",
      "Learned how design and build digital electronics using circuit boards and logic gates that use boolean logic."
    ]
  },
  {
    name: "Guam Community College",
    duration: "2010 – 2011"
  }
];
export const experience = [
  {
    name: "POPCheckr",
    location: "Santa Monica, California",
    position: "Lead Web Developer",
    duration: "January 2017 - October 2018",
    description: [
      "Designed, wire-framed and built from scratch a B2C e-commerce responsive PWA using React.js.",
      "Wrote automated backend logic to analyze, generate search keywords, and optimize user uploaded images as well as send notifications and emails.",
      "Implemented automated testing suite that crawled through the app and returned test results and screenshots.",
      "Followed industry best practices to ensure my code was clean, readable, and optimized.",
      "Leveraged Adobe suite to create icons, logos, illustrations, and edit media."
    ]
  },
  {
    name: "Chick-fil-A",
    duration: "March 2012 - July 2016 | 4 years 5 months",
    location: "Rancho Cucamunga",
    position: "Kitchen Manager",
    description: [
      "Adapted quickly as sales increased over 200% during my first year as manager.",
      "Increased corporate test scores for taste, speed, and satisfaction.",
      "Managed over 20+ team members and supervisors and handled scheduling and inventory."
    ]
  },
  {
    name: "GameStop",
    position: "Supervisor",
    duration: "May 2009 - September 2011 | 2 years 5 months",
    description: [
      "Was consistently one the top employees, winning over $700 in prizes.",
      "High customer satisfaction likely due to extensive and up to date knowledge and reviews of the products",
      "Responsible for training new team members, counting & depositing cash, and merchandising."
    ]
  }
];
export const links = [
  { name: "About", id: "about", icon: <Person/>},
  { name: "Skills", id: "skills", icon: <Equalizer/>},
  { name: "Projects", id: "projects", icon: <Web/>},
  { name: "Experience", id: "experience", icon: <Work/>},
  { name: "Education", id: "education", icon: <School/>},
  { name: "Graphic Design", id: "graphicDesign", icon: <Image/>},
  { name: "Music", id: "music", icon: <Album/>}
];

export const ids = [
  "header",
  "about",
  "skills",
  "projects",
  "experience",
  "education",
  "graphicDesign",
  "music"
];
export const profile = {
  email,
  name,
  headline,
  linkedIn,
  location,
  industry,
  photoURL,
  profession,
  summary,
  technical,
  apis,
  projectManagement,
  softSkills,
  designMedia,
  education,
  experience,
  resume,
  music,
  projects,
  links,
  code,
  ids,
  skills
};

export const font = "Julius Sans One";
