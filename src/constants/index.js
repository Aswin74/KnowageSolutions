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
