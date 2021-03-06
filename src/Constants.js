import React from 'react';
import {
  Album,
  Book,
  Code,
  Collections,
  Description,
  MusicNote,
  Person
} from '@material-ui/icons';
import * as SVG from './SVG/SVG';
import Profile from './Containers/Profile';
import Resume from './Containers/Resume';
import Portfolio from './Containers/Portfolio';
import Music from './Containers/Music';

export const dev = process.env.NODE_ENV === 'development';
export const prod = process.env.NODE_ENV === 'production';
export const name = 'Chris Rohr';
export const profession = 'Front End Web Developer';
export const freelance = {
  header: {
    title: 'Web Design Services',
    url:
      'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/freelance%2Fundraw_Golden_Gate_Bridge_00us.png?alt=media&token=ba1fee6c-e17c-4d74-a232-bd2db3e84961'
  },
  whatIDo: {
    url:
      'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/freelance%2Fundraw_designer_kcp7.png?alt=media&token=59f9f109-7c01-4058-bf5b-67b14c5d0ade',
    title: 'What I Do',
    subtitle:
      'I turn your vision into a cutting edge mobile and tablet responsive web solution, using the latest technologies with search engine optimization.',
    list: [
      {
        url:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/freelance%2Fundraw_web_devices_ad58.png?alt=media&token=1a90b220-0000-4d24-90b1-056734766b30',
        title: 'Responsive'
      },
      {
        url:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/freelance%2Fundraw_features_overview_jg7a.png?alt=media&token=2c0f239c-9466-4f7a-87ac-dd2ac61ac5af',
        title: 'Cutting Edge'
      },
      {
        url:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/freelance%2Fundraw_search_engines_nn9e.png?alt=media&token=bf161767-6c94-4ce7-8687-0114c5f4df87',
        title: 'SEO'
      }
    ]
  },
  cost: {
    url:
      'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/freelance%2Fundraw_printing_invoices_5r4r.png?alt=media&token=b000e61f-2cd3-4bdd-b0d0-3bb24459bfc2',
    title: 'How Much Does It Cost?',
    subtitle:
      'Every website is unique and can vary widely in cost. Accurate costs can only be estimated after discussion of your website. But here are some examples and estimates.',
    list: [
      {
        url:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/freelance%2Fundraw_account_490v.png?alt=media&token=9290239d-6fda-4815-bb27-9db809f90fa7',
        title: 'Static site: $300 - $800',
        subtitle:
          'These are non-editable internet sites that don’t change often. Are usually landing pages, business or personal Info sites, and may sometimes have a contact form'
      },
      {
        url:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/freelance%2Fundraw_content_vbqo.png?alt=media&token=8b5a2880-4a66-4cdf-89cf-56aa8e5ee9a7',
        title: 'Editable Dynamic Website: $800 - $2000',
        subtitle:
          "User can edit content and images. It engages the user with login areas. This site is self-managed. Are usually Blog's, Vlog's, or Portfolio."
      },
      {
        url:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/freelance%2Fundraw_add_to_cart_vkjp.png?alt=media&token=e82f4bda-3a54-4008-9663-e70123c74d0f',
        title: 'E-commerce Websites: $8000 -$5000',
        subtitle:
          'They have a payment gateway, e.g., PayPal, Credit card, Apple Pay, Google Pay. And functionality to sell your products or services.'
      }
    ],
    infoUrl:
      'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/freelance%2Fundraw_server_q2pb.png?alt=media&token=b075c235-9978-460a-bede-592746f0085b',
    infoSubtitle:
      'Some websites may require a database to store information or a server to run tasks such as processing payments, sending emails, processing images, communicating with other third-party services.',
    footerTitle: 'What if I have a budget?',
    footerDescription:
      'No problem! Again, every website is different and may vary widely in cost. And through our discussions we can come up with a solution to match your needs or even add on more features or pages in the future.'
  },
  process: {
    url:
      'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/freelance%2Fundraw_design_process_iqqg.png?alt=media&token=a1cda1f6-f895-4ec1-8706-5da3951c26e0',
    title: "What's The Process?",
    list: [
      {
        url:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/freelance%2Fundraw_brainstorming_49d4.png?alt=media&token=48c693db-1459-43e1-ab55-b01fee2efb9b',
        title: 'Planning & Discussion',
        subtitle:
          'We’ll start by discussing your project, going into detail of every aspect of the website and coming up with software solutions to solve problems and make your life easier.'
      },
      {
        url:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/freelance%2Fundraw_user_flow_vr6w.png?alt=media&token=c8d5a208-78a3-4676-8afd-4b3f58cc3b96',
        title: 'Design & Research',
        subtitle:
          'Create wire-frames & visual renderings of your website while designing an easy to use and visually pleasing user experience.'
      },
      {
        url:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/freelance%2Fundraw_programming_2svr.png?alt=media&token=3ea0fb96-ff7a-48a8-b6a7-c0d90cb5f323',
        title: 'Development & Testing',
        subtitle:
          'Upon approval i would begin the development process of writing your website from scratch to match the approved designs and conduct the appropriate testing.'
      },
      {
        url:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/freelance%2Fundraw_co-workers_ujs6.png?alt=media&token=8664d8e3-8486-4b00-8fb7-7b14d01ae11f',
        title: 'Review & Feedback',
        subtitle:
          'We’ll review the designs and make changes or additions based on your feedback.'
      },
      {
        url:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/freelance%2Fundraw_agreement_aajr.png?alt=media&token=9da8a216-a344-403c-9aec-bce555bce20a',
        title: 'Review & Finalize',
        subtitle:
          'Review the completed website and address any concerns or changes until you are completely satisfied.'
      }
    ]
  },
  project: {
    url:
      'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/freelance%2Fundraw_responsive_6c8s.png?alt=media&token=f76edb59-3184-4ae5-bcb4-b34bc763c7fd',
    title: 'What Have You Worked On?'
  },
  footer: {
    title: 'Questions? Want to talk about your website? email me at '
  }
};
export const email = {
  email: 'chrisrohrdev@gmail.com',
  info: 'Copy Email',
  message: 'Copied chrisrohrdev@gmail.com',
  title: 'Email'
};
export const linkedIn = {
  info: 'Open Link In New Tab',
  link: 'https://www.linkedin.com/in/chrisdrohr',
  title: 'LinkedIn'
};
export const gitHub = {
  info: 'Open Link In New Tab',
  link: 'https://github.com/chrisdrohr',
  title: 'GitHub'
};
export const resume = {
  info: 'View Resume In New Tab',
  title: 'Resume',
  url:
    'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/Resume.pdf?alt=media&token=67b7b6c5-0930-4987-a37e-9be9b11cfb78'
};
export const code = {
  info: 'View Code at GitHub',
  title: 'View Code',
  url: 'https://github.com/chrisdrohr/chris-rohr-app'
};
export const music = [
  'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/245120331&color=%2303a9f4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
  'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/232367631&color=%2303a9f4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
  'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/209258452&color=%2303a9f4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
];
export const photoURL = {
  png:
    'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/GA-7954-01-2-01-min.jpeg?alt=media&token=bc691d49-3ee9-4fbf-be8d-f89e7bd6e934',
  webp:
    'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/webp%2Favatar.webp?alt=media&token=a323c7c8-f6f8-4110-afb5-2c2dcb462a89'
};
export const headline = [
  'React',
  'Flow',
  'Redux',
  'Firebase',
  'Javascript',
  'ES6',
  'Puppeteer',
  'HTML5',
  'CSS3',
  'Node.js',
  'SVG',
  'Android',
  'Material Design',
  'Java'
];
export const location = 'Greater Los Angeles Area';
export const industry = 'Computer Software';
export const summary = [
  <span>
    Versatile and passionate{' '}
    <span style={{ color: '#03a9f4' }}>Front End Web Developer</span> who lives
    and breathes tech. A keen eye for designing pixel perfect and user
    experience driven UI as well as follow good design and development
    principles such as:
  </span>,
  <ul>
    <li>Responsive Design</li>
    <li>Web accessibility</li>
    <li>Search Engine Optimization (SEO)</li>
    <li>Image and code optimization</li>
    <li>Simple, clean, scalable, and readable code</li>
  </ul>,
  <span>
    Specializes in React.js, Progressive Web Apps, and utilizing cloud API’s to
    create serverless apps.
  </span>
];

export const projects = [
  {
    name: 'Ashley Aguilera',
    tech:
      'React | Redux | Javascript | CSS3 | ES6 | PWA | Responsive | Material Design | Firebase | Flow ',
    description: 'Vlog, Health & Wellness, Yoga',
    link: 'https://ashleypaguilera.com/',
    images: [
      {
        png:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/screenshots%2Fashleypaguilera.com_(iPhone%206_7_8%20Plus)_iphone6_silver_portrait.png?alt=media&token=864b7373-3c8f-4a6e-a688-d9b16fd35e34',
        webp:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/webp%2Fashleypaguilera.com_(iPhone%206_7_8%20Plus)_iphone6_silver_portrait.webp?alt=media&token=5aef9be0-36f1-4fac-9a58-fc3b071bf358'
      },
      {
        png:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/screenshots%2Fashleypaguilera.com_vlog(iPad%20Pro)_ipadair2_gold_right.png?alt=media&token=0e98c88b-ab69-413c-9714-3536ead9a083',
        webp:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/webp%2Fashleypaguilera.com_vlog(iPad%20Pro)_ipadair2_gold_right.webp?alt=media&token=81409d16-15da-4f31-ad02-b409ce92a8a3'
      },
      {
        png:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/screenshots%2Fashleypaguilera.com_vlog(iPad%20Pro)_ipadair2_gold_landscape.png?alt=media&token=17345dab-eb9c-4953-9277-6c5cbdec7701',
        webp:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/webp%2Fashleypaguilera.com_vlog(iPad%20Pro)_ipadair2_gold_landscape.webp?alt=media&token=caa7e5fc-1d86-49d5-94a1-4d3da90c6b70'
      },
      {
        png:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/screenshots%2Fashleypaguilera.com_(iPhone%206_7_8%20Plus)_iphone6_silver_portrait.png?alt=media&token=864b7373-3c8f-4a6e-a688-d9b16fd35e34',
        webp:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/webp%2Fashleypaguilera.com_(iPhone%206_7_8%20Plus)_iphone6_silver_portrait.webp?alt=media&token=5aef9be0-36f1-4fac-9a58-fc3b071bf358'
      },
      {
        png:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/screenshots%2Fashleypaguilera.com_vlog(iPad%20Pro)_ipadair2_gold_right.png?alt=media&token=0e98c88b-ab69-413c-9714-3536ead9a083',
        webp:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/webp%2Fashleypaguilera.com_vlog(iPad%20Pro)_ipadair2_gold_right.webp?alt=media&token=81409d16-15da-4f31-ad02-b409ce92a8a3'
      },
      {
        png:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/screenshots%2Fashleypaguilera.com_vlog(iPad%20Pro)_ipadair2_gold_landscape.png?alt=media&token=17345dab-eb9c-4953-9277-6c5cbdec7701',
        webp:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/webp%2Fashleypaguilera.com_vlog(iPad%20Pro)_ipadair2_gold_landscape.webp?alt=media&token=caa7e5fc-1d86-49d5-94a1-4d3da90c6b70'
      },
    ]
  },
  {
    name: 'Chris Rohr',
    tech:
      'React | Javascript | CSS3 | ES6 | PWA | Responsive | Material Design | Firebase | Flow ',
    description: 'Portfolio',
    link: 'https://chrisrohr.app/',
    images: [
      {
        png:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/screenshots%2Fchrisrohrapp_iphone8silver_portrait.png?alt=media&token=da782692-a545-4dad-90b9-b06418d6690b',
        webp:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/webp%2Fchrisrohrapp_iphone8silver_portrait.webp?alt=media&token=a4284a05-f6ed-4c69-ac26-c82f5c4ef2d2'
      },
      {
        png:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/screenshots%2Fchrisrohr.app_(iPad%20Pro)_ipadair2_gold_right.png?alt=media&token=2bfd7efc-eb5a-4b01-b013-ffe99a488ff9',
        webp:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/webp%2Fchrisrohr.app_(iPad%20Pro)_ipadair2_gold_right.webp?alt=media&token=658ce27e-909a-4c0d-baf0-a8b60cd7e1b8'
      },
      {
        png:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/screenshots%2Fchrisrohr.app_(iPad%20Pro)_ipadair2_gold_landscape.png?alt=media&token=fc49c48f-d52c-4c0b-99d6-fffbb440ec6b',
        webp:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/webp%2Fchrisrohr.app_(iPad%20Pro)_ipadair2_gold_landscape.webp?alt=media&token=7bfd016c-1290-4073-a076-ea01274e8d49'
      },
      {
        png:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/screenshots%2Fchrisrohrapp_iphone8silver_portrait.png?alt=media&token=da782692-a545-4dad-90b9-b06418d6690b',
        webp:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/webp%2Fchrisrohrapp_iphone8silver_portrait.webp?alt=media&token=a4284a05-f6ed-4c69-ac26-c82f5c4ef2d2'
      },
      {
        png:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/screenshots%2Fchrisrohr.app_(iPad%20Pro)_ipadair2_gold_right.png?alt=media&token=2bfd7efc-eb5a-4b01-b013-ffe99a488ff9',
        webp:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/webp%2Fchrisrohr.app_(iPad%20Pro)_ipadair2_gold_right.webp?alt=media&token=658ce27e-909a-4c0d-baf0-a8b60cd7e1b8'
      },
      {
        png:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/screenshots%2Fchrisrohr.app_(iPad%20Pro)_ipadair2_gold_landscape.png?alt=media&token=fc49c48f-d52c-4c0b-99d6-fffbb440ec6b',
        webp:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/webp%2Fchrisrohr.app_(iPad%20Pro)_ipadair2_gold_landscape.webp?alt=media&token=7bfd016c-1290-4073-a076-ea01274e8d49'
      },
    ]
  },
  {
    name: 'POPCheckr',
    tech:
      'React | Redux | Javascript | CSS3 | ES6 | PWA | Responsive | Material Design | Firebase | Flow | Typescript | Puppeteer | Jest',
    description:
      'A B2C Party Planning & ordering platform that streamlines the process of searching ordering and managing your event.',
    link: 'https://www.popcheckr.com/',
    images: [
      {
        png:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/screenshots%2Fpopcheckr1.png?alt=media&token=445e91b3-be8d-4f23-a784-f6e995b25752',
        webp:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/webp%2Fpopcheckr1.webp?alt=media&token=450c3286-183d-4900-8a0d-e8058ec8e8f4'
      },
      {
        png:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/screenshots%2Fpopcheckr2.png?alt=media&token=af4a8a77-9a5f-426d-b90d-d3dc5bfc4446',
        webp:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/webp%2Fpopcheckr2.webp?alt=media&token=4658ef3a-a468-41e0-88ed-189c541b06a5'
      },
      {
        png:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/screenshots%2Fpopcheckr3.png?alt=media&token=8aafba74-204a-4316-983d-f9c2f50fea9b',
        webp:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/webp%2Fpopcheckr3.webp?alt=media&token=f906c03f-7c66-4ca9-a1ba-64614301b5ba'
      },
      {
        png:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/screenshots%2Fpopcheckr1.png?alt=media&token=445e91b3-be8d-4f23-a784-f6e995b25752',
        webp:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/webp%2Fpopcheckr1.webp?alt=media&token=450c3286-183d-4900-8a0d-e8058ec8e8f4'
      },
      {
        png:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/screenshots%2Fpopcheckr2.png?alt=media&token=af4a8a77-9a5f-426d-b90d-d3dc5bfc4446',
        webp:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/webp%2Fpopcheckr2.webp?alt=media&token=4658ef3a-a468-41e0-88ed-189c541b06a5'
      },
      {
        png:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/screenshots%2Fpopcheckr3.png?alt=media&token=8aafba74-204a-4316-983d-f9c2f50fea9b',
        webp:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/webp%2Fpopcheckr3.webp?alt=media&token=f906c03f-7c66-4ca9-a1ba-64614301b5ba'
      },
    ]
  },
  {
    name: 'Quinceanera',
    tech: 'Android | Java | XML | Material Design | Animation | Firebase',
    description:
      'A B2C Planning, shopping & ordering platform, focused around planning a Quinceanera.',
    link:
      'https://docs.google.com/presentation/d/e/2PACX-1vRmifc2zL-_LQO4R5zVnE3pxryHHdwQG79XOB1DwbRazthKNcRWfEg6r-gcOvMQLeZKIxcShvf72ghi/pub?start=false&loop=false&delayms=3000',
    images: [
      {
        png:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/screenshots%2Fq1_thumb.png?alt=media&token=1f192f17-7d0f-4785-9608-47311515467f',
        webp:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/webp%2Fq1.webp?alt=media&token=de6d7757-7d9d-4fd8-bc3b-6e816b307332'
      },
      {
        png:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/screenshots%2Fq2_thumb.png?alt=media&token=017449e5-9f5c-41d8-bf0a-d549736ac4e5',
        webp:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/webp%2Fq2.webp?alt=media&token=f6974850-71f3-4858-9e9b-ffd7909740da'
      },
      {
        png:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/screenshots%2Fq3_thumb.png?alt=media&token=af67b744-5063-438b-8621-2d87b61a135c',
        webp:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/webp%2Fq3.webp?alt=media&token=3c219fd2-38ee-42d5-8273-fc2b086a3fad'
      },
      {
        png:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/screenshots%2Fq1_thumb.png?alt=media&token=1f192f17-7d0f-4785-9608-47311515467f',
        webp:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/webp%2Fq1.webp?alt=media&token=de6d7757-7d9d-4fd8-bc3b-6e816b307332'
      },
      {
        png:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/screenshots%2Fq2_thumb.png?alt=media&token=017449e5-9f5c-41d8-bf0a-d549736ac4e5',
        webp:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/webp%2Fq2.webp?alt=media&token=f6974850-71f3-4858-9e9b-ffd7909740da'
      },
      {
        png:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/screenshots%2Fq3_thumb.png?alt=media&token=af67b744-5063-438b-8621-2d87b61a135c',
        webp:
          'https://firebasestorage.googleapis.com/v0/b/chris-rohr.appspot.com/o/webp%2Fq3.webp?alt=media&token=3c219fd2-38ee-42d5-8273-fc2b086a3fad'
      },
    ]
  },

  {
    name: 'Nostalgia',
    tech: 'Android | Java | XML | Material Design | Animation | Firebase',
    description:
      'A beautiful image based app that makes it easy for groups of friends to pool their photos and videos for easy viewing and sharing.'
  },
  {
    name: 'Vice News',
    tech: 'Android | Java | XML | Material Design | Animation | SQLite | API',
    description:
      'A group project that makes use of the Vice news API in an image based app.'
  },
  {
    name: 'Inventoree',
    tech: 'Android | Java | XML | Material Design | SQLite | Espresso',
    description: 'A personal inventory app that makes use of a SQLite Database'
  },
  {
    name: 'X-Wings and Tie-Fighters',
    tech: 'Java | XML',
    description: 'A Rock, Paper, Scissors game with a Star Wars Twist'
  }
];
export const personality = {
  title: 'Personality',
  subtitle:
    'The Psych Central Personality Test is based upon the IPIP 10-item scale. International Personality Item Pool (IPIP): A Scientific Collaboratory for the Development of Advanced Measures of Personality Traits and Other Individual Differences (http://ipip.ori.org/).',
  results: [
    {
      title: 'Extraversion',
      subtitle: 'Energy, enthusiasm, socialable',
      description: [
        "This trait reflects a person's preference for certain kinds of social situations, and how they like to behave in such situations. People high in extraversion are energetic and seek out the company of others. People low in extraversion -- what some might call introverts -- tend to be more quiet and reserved.",
        'You scored average for this trait, suggesting you lead a balanced life between extraversion and introversion.'
      ],
      score: 27
    },
    {
      title: 'Agreeableness',
      subtitle: 'Altruism, helping others, affection, friendliness',
      description: [
        'This trait reflects how we tend to interact with others, especially in terms of our altrusim and friendliness. People who score higher in agreeableness tend to be more trusting, friendly and cooperative than others. People who score lower tend to be more aggressive and less cooperative.',
        'You scored really high on this trait, suggesting you are a very friendly, cooperative and trusting person.'
      ],
      score: 41
    },
    {
      title: 'Conscientiousness',
      subtitle: 'Control, will, constraint, dependability',
      description: [
        'This trait reflects how organized and persistent a person is in pursuing their goals. People who score high on this trait tend to be more methodical, well-organized and dutiful than others. People who score lower tend to be less careful, less focused and more likely to be distracted from tasks.',
        "You scored really high on this trait, suggesting you're a well-organized, focused and methodical person."
      ],
      score: 50
    },
    {
      title: 'Neuroticism',
      subtitle: 'Negative emotions, nervousness',
      description: [
        'This trait reflects the tendency for a person to experience negative thoughts and feelings. People who score high on this trait tend to be more prone to insecurity and emotional distress. People who score lower tend to be more relaxed, less emotional and less prone to distress.',
        "You scored average for this trait, suggesting you've struck a balance between expressing negative emotions and being relaxed."
      ],
      score: 26
    },
    {
      title: 'Openness',
      subtitle: 'Originality, culture, open-minded, intellect',
      description: [
        "This trait reflects a person's open-mindedness, and interest in culture and art. People who score high on this trait tend to be imaginative, creative, and to seek out cultural and educational experiences. People who score lower on this trait tend to be more down-to-earth, less interested in art and more practical in nature.",
        'You scored really high on this trait, suggesting you love art and try to keep open-minded.'
      ],
      score: 47
    }
  ]
};
export const hobbiesInterests = [
  { name: 'Coding', svg: Code },
  { name: 'Tech Repair', subtitle: 'Computers Electronics', svg: SVG.Wrench },
  { name: 'Music', subtitle: 'Producing Performing Dancing', svg: MusicNote },
  { name: 'Star Wars', svg: SVG.DeathStar },
  { name: 'Gaming', svg: SVG.GamePad },
  { name: 'Learning', svg: Book }
];
export const languages = [
  { name: 'JavaScript', svg: SVG.Javascript, value: 85 },
  { name: 'HTML5', svg: SVG.HTML5, value: 85 },
  { name: 'CSS3', svg: SVG.CSS3, value: 85 },
  { name: 'Java', svg: SVG.Java, value: 50 }
];
export const frameworks = [
  { name: 'React.js', svg: SVG.React, value: 85 },
  { name: 'React-Router', svg: SVG.ReactRouter, value: 75 },
  { name: 'Node.js', svg: SVG.NodeJS, value: 70 },
  { name: 'JQuery', svg: SVG.JQuery, value: 70 },
  { name: 'Redux', svg: SVG.Redux, value: 85 },
  { name: 'Flow', svg: SVG.Flow, value: 65 },
  { name: 'Material-UI', svg: SVG.MaterialUI, value: 90 }
];
export const testing = [
  { name: 'Jest', svg: SVG.Jest, value: 70 },
  { name: 'Puppeteer', svg: SVG.Puppeteer, value: 80 }
];
export const technical = [
  'PC Repair/Troubleshooting',
  'Tech Support',
  'Networks',
  'Windows',
  'Linux',
  'Printers',
  'Digital Electronics'
];
export const apis = [
  { name: 'Stripe', svg: SVG.Stripe, value: 70 },
  { name: 'MailChimp V3', svg: SVG.Mailchimp, value: 80 },
  { name: 'YouTube V3', svg: SVG.YouTube, value: 75 },
  { name: 'Mandrill', svg: SVG.Mandrill, value: 75 },
  { name: 'Twilio', svg: SVG.Twilio, value: 75 }
];
export const cloudPlatform = [
  { name: 'Firebase', svg: SVG.Firebase, value: 90 },
  { name: 'Google Cloud Platform', svg: SVG.GoogleCloud, value: 70 }
];
export const designMedia = [
  { name: 'Material Design', svg: SVG.MaterialDesign, value: 95 },
  { name: 'Adobe XD', svg: SVG.AdobeXD, value: 85 },
  { name: 'Adobe Illustrator', svg: SVG.AdobeAI, value: 70 },
  { name: 'FL Studio', svg: SVG.FLStudio, value: 80 }
];
export const projectManagement = [
  { name: 'Git/GitHub', svg: SVG.GitHub, value: 85 }
];
export const softSkills = [
  'Teamwork',
  'Problem Solver',
  'Innovative',
  'Tech Savvy',
  'Open-minded',
  'Resourceful',
  'Time management',
  'Creative',
  'Helpful',
  'Accountable',
  'Detail Oriented',
  'Communication',
  'Collaborative'
];
export const skills = [
  { name: 'Languages', list: languages },
  { name: 'Frameworks', list: frameworks },
  { name: "API's", list: apis },
  { name: 'Cloud Platform', list: cloudPlatform },
  { name: 'Design/Media', list: designMedia },
  { name: 'Testing', list: testing },
  { name: 'Version Control', list: projectManagement },
  { name: 'Soft Skills', list: softSkills },
  { name: 'Technical', list: technical }
];
export const education = [
  {
    name: 'General Assembly',
    field: 'Android Development',
    duration: '2016',
    description: [
      'ADI - Android Development Immersive, Front End / Back End Android Development',
      'Continued my online education of software engineering with Google’s Android immersive program.',
      'Built complex and interactive Android apps with Java, XML, Material Design, API’s, and the Android SDK.',
      'Dedicated 720+ hours of study and building apps both in-class after hours, and at home.',
      'Excelled in creating beautiful UI.',
      'Completed four projects including one group project.'
    ]
  },
  {
    name: 'Mt. San Antonio College',
    field: 'Computer/Information Technology Administration and Management',
    duration: '2014 – 2016',
    description: [
      'Followed my passion for learning about all things technology.',
      'Learned how to fix, assemble, disassemble, and troubleshoot computers.',
      'How to design assemble and manage a computer network.',
      'Trained in IT soft skills and customer interaction and de-escalation.',
      'Became proficient in Microsoft Word, Excel, and Powerpoint.',
      'Learned how design and build digital electronics using circuit boards and logic gates that use boolean logic.'
    ]
  },
  {
    name: 'Guam Community College',
    field: 'Computer/Information Technology',
    duration: '2010 – 2011'
  }
];
export const experience = [
  {
    name: 'POPCheckr',
    location: 'Santa Monica, California',
    position: 'Lead Web Developer',
    duration: '2017 - 2018',
    description: [
      'Singlehandedly architected, designed and coded, a full featured responsive web platform.',
      'Designed a NoSQL schema to store user’s profile, orders, and chat rooms.',
      'Utilized Mandrill, Mailchimp, and Twilio to send texts and emails as well as web push notifications.',
      'Implemented Stripe and Payment Request API for payment processing.',
      'Reduced load time by automating image optimization and implementing code splitting.',
      'Improved product search results by utilizing GCP AI to analyze uploaded images and generate keywords.',
      'Applied automated testing with Puppeteer and Jest to help with continuous deployment.',
      'Utilized Adobe suite to design wire-frames and create icons, logos, illustrations, and edit media.'
    ]
  },
  {
    name: 'Chick-fil-A',
    duration: '2012 - 2016',
    location: 'Rancho Cucamunga',
    position: 'Kitchen Manager',
    description: [
      'Adapted quickly as sales increased over 200% during my first year as manager.',
      'Increased corporate test scores for taste, speed, and satisfaction.',
      'Managed over 20+ team members and supervisors and handled scheduling and inventory.'
    ]
  },
  {
    name: 'GameStop',
    position: 'Supervisor',
    duration: '2009 - 2011',
    description: [
      'Was consistently one the top employees, winning over $700 in prizes.',
      'High customer satisfaction likely due to extensive and up to date knowledge and reviews of the products',
      'Responsible for training new team members, counting & depositing cash, and merchandising.'
    ]
  }
];
// export const links = [
//   { name: "About", id: "about", icon: <Person/>},
//   { name: "Skills", id: "skills", icon: <Equalizer/>},
//   { name: "Projects", id: "projects", icon: <Web/>},
//   { name: "Experience", id: "experience", icon: <Work/>},
//   { name: "Education", id: "education", icon: <School/>},
//   { name: "Graphic Design", id: "graphicDesign", icon: <Image/>},
//   { name: "Music", id: "music", icon: <Album/>}
// ];
export const links = {
  profile: {
    component: Profile,
    name: 'Profile',
    url: '/',
    icon: Person,
    index: 0
  },
  resume: {
    component: Resume,
    name: 'Resume',
    url: '/resume',
    icon: Description,
    index: 1
  },
  portfolio: {
    component: Portfolio,
    name: 'Portfolio',
    url: '/portfolio',
    icon: Collections,
    index: 2
  },
  // { name: "Contact", url: "/contact", icon: Email},
  music: {
    component: Music,
    name: 'Music',
    url: '/music',
    icon: Album,
    index: 3
  }
};

export const ids = [
  'header',
  'about',
  'skills',
  'projects',
  'experience',
  'education',
  'graphicDesign',
  'music'
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

export const font = 'Julius Sans One';
