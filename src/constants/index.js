import {
  facebook,
  fbSvg,
  gmail,
  gmailSvg,
  instagram,
  instagramSvg,
  locationSvg,
  phoneSvg,
  whatsapp,
  whatsappSvg,
  youtube,
  youtubeSvg,
} from "../assets";
import {
  Agriculture,
  Ayurveda,
  Dental,
  Engineering,
  HotelManagement,
  Law,
  Management,
  Medical,
  Pharmacy,
  Physiotherapy,
} from "../assets/courses";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "/",
  },
  {
    id: "1",
    title: "Services",
    url: "/services",
  },
  {
    id: "2",
    title: "Courses",
    url: "/courses",
  },
  {
    id: "3",
    title: "About",
    url: "/about",
    onlyMobile: false,
  },
  {
    id:"4",
    title:"Contact",
    url:"/contact",
  },
  {
    id:"5",
    title:"Register",
    url:"/register",
    onlyMobile:true
  }
];

export const contactApps = [
  {
    id: "0",
    title: "facebook",
    icon: facebook,
    svg: fbSvg,
    url: "https://www.facebook.com/knowageinternational?mibextid=LqqJ4d",
  },
  {
    id: "1",
    title: "instagram",
    icon: instagram,
    svg: instagramSvg,
    url: "https://www.instagram.com/knowage_international/",
  },
  {
    id: "2",
    title: "whatsapp",
    icon: whatsapp,
    svg: whatsappSvg,
    url: "https://chat.whatsapp.com/E3Z7nttZDOu3haM4jHvYTB?fbclid=PAZXh0bgNhZW0CMTEAAaaffoztEMTcrZ3HBkLKMnlroP9LVN03vpuA7PSE5XNGbTLuLK7nRVXellY_aem_AbJnJKHo7HSMMLkqvsEpW1AXm3Ep3dG60W4tG7C3VVOkm7I259aFoBfBN2l9hufxQvj_y08psW_g7qKb0OKQmqMO",
  },
  {
    id: "3",
    title: "gmail",
    icon: gmail,
    svg: gmailSvg,
    url: "mailto:knowageinternational@gmail.com",
  },
  {
    id: "4",
    title: "youtube",
    icon: youtube,
    svg: youtubeSvg,
    url: "https://www.youtube.com/@knowage_international",
  },
];

export const counters =[{
  id:1,
  num: 100,
  title: "Universities"
},{
  id:2,
  num: 800,
  title: "Courses"
},{
  id:3,
  num: 1000,
  title: "Colleges"
},]

export const courses = [
  {
    id: 1,
    name: "Medical",
    icon: Medical,
  },
  {
    id: 2,
    name: "Dental",
    icon: Dental,
  },
  {
    id: 3,
    name: "Ayurveda",
    icon: Ayurveda,
  },
  {
    id: 4,
    name: "Agriculture",
    icon: Agriculture,
  },
  {
    id: 5,
    name: "Pharm D",
    icon: Pharmacy,
  },
  {
    id: 6,
    name: "Physiotherapy",
    icon: Physiotherapy,
  },
  {
    id: 7,
    name: "BPharm",
    icon: Pharmacy,
  },
  {
    id: 8,
    name: "Allied Health",
    icon: Medical,
  },
  {
    id: 9,
    name: "Nursing",
    icon: Medical,
  },
  {
    id: 10,
    name: "Engineering",
    icon: Engineering,
  },
  {
    id: 11,
    name: "Management",
    icon: Management,
  },
  {
    id: 12,
    name: "Hotel Management",
    icon: HotelManagement,
  },
  {
    id: 13,
    name: "Law",
    icon: Law,
  },
];

export const address = [
  {
    title: "location",
    icon: locationSvg,
    text: "No.178/B, 1st Floor, 3rd Main Road, 2nd Cross, Maruthi Nagar, Yelahanka, Begaluru-560064",
    url: "#location",
  },
  {
    title: "phone1",
    icon: phoneSvg,
    text: "phone1",
    url: "#phone1",
  },
  {
    title: "phone1",
    icon: phoneSvg,
    text: "phone1",
    url: "#phone1",
  },
  {
    title: "mail",
    icon: gmailSvg,
    text: "mail",
    url: "mailto:knowageinternational@gmail.com",
  },
];
