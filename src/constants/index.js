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
    url: "#hero",
  },
  {
    id: "1",
    title: "Services",
    url: "#services",
  },
  {
    id: "2",
    title: "Courses",
    url: "#courses",
  },
  {
    id: "3",
    title: "Contact Us",
    url: "#contact",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const contactApps = [
  {
    id: "0",
    title: "facebook",
    icon: facebook,
    svg: fbSvg,
    url: "#facebook",
  },
  {
    id: "1",
    title: "instagram",
    icon: instagram,
    svg: instagramSvg,
    url: "#instagram",
  },
  {
    id: "2",
    title: "whatsapp",
    icon: whatsapp,
    svg: whatsappSvg,
    url: "#whatsapp",
  },
  {
    id: "3",
    title: "gmail",
    icon: gmail,
    svg: gmailSvg,
    url: "#gmail",
  },
  {
    id: "4",
    title: "youtube",
    icon: youtube,
    svg: youtubeSvg,
    url: "#youtube",
  },
];

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
    url: "#mail",
  },
];
