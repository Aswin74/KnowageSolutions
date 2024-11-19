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
} from "../assets"
import {
    Agriculture,
    Ayurveda,
    Dental,
    Designing,
    Engineering,
    HotelManagement,
    Law,
    Management,
    Marine,
    Medical,
    Paramedical,
    Pharmacy,
    Physiotherapy,
} from "../assets/courses"


// Exports

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
        id: "4",
        title: "Contact",
        url: "/contact",
    },
    {
        id: "5",
        title: "Register",
        url: "/register",
        onlyMobile: true,
    },
]

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
]

export const counters = [
    {
        id: 1,
        num: 100,
        title: "Universities",
    },
    {
        id: 2,
        num: 800,
        title: "Courses",
    },
    {
        id: 3,
        num: 1000,
        title: "Colleges",
    },
]

export const courses = [
    {
        Medical: [
            {
                id: 1,
                name: "MBBS/MD (NEET)",
                icon: Medical,
            },
            {
                id: 2,
                name: "B.Vetinary Science",
                icon: Medical,
            },
            {
                id: 3,
                name: "BDS (NEET)",
                icon: Medical,
            },
            {
                id: 4,
                name: "BHMS",
                icon: Medical,
            },
            {
                id: 5,
                name: "BAMS",
                icon: Medical,
            },
            {
                id: 6,
                name: "BNYS",
                icon: Medical,
            },
            {
                id: 7,
                name: "BSMS",
                icon: Medical,
            },
        ],

        Paramedical: [
            {
                id: 1,
                name: "Nursing",
                icon: Paramedical,
            },
            {
                id: 2,
                name: "General Nursing",
                icon: Paramedical,
            },
            {
                id: 3,
                name: "Physiotherapy",
                icon: Physiotherapy,
            },
            {
                id: 4,
                name: "BPO (Prosthetics & Orthotics)",
                icon: Paramedical,
            },
            {
                id: 5,
                name: "BASLP (Audiology)",
                icon: Paramedical,
            },
            {
                id: 6,
                name: "B.Pharm",
                icon: Pharmacy,
            },
            {
                id: 7,
                name: "Pharm D",
                icon: Pharmacy,
            },
        ],

        AlliedHealthScience: [
            {
                id: 1,
                name: "B.Sc Cardiac Technology",
                icon: Paramedical,
            },
            {
                id: 2,
                name: "B.Sc Perfusion Technology",
                icon: Paramedical,
            },
            {
                id: 3,
                name: "B.Sc Respiratory Technology",
                icon: Physiotherapy,
            },
            {
                id: 4,
                name: "B.Sc Renal Technology",
                icon: Paramedical,
            },
            {
                id: 5,
                name: "B.Sc Anaesthesia & Operation technology",
                icon: Paramedical,
            },
            {
                id: 6,
                name: "Dental Technology",
                icon: Dental,
            },
            {
                id: 7,
                name: "B.Sc Occupation Technology",
                icon: Pharmacy,
            },
            {
                id: 8,
                name: "B.Sc Medical Lab Technology",
                icon: Pharmacy,
            },
            {
                id: 9,
                name: "B.Sc Medical Imaging/Radiology",
                icon: Pharmacy,
            },
            {
                id: 10,
                name: "B.Sc Radiotherapy",
                icon: Pharmacy,
            },
            {
                id: 11,
                name: "B.Sc Physician Assistant",
                icon: Pharmacy,
            },
            {
                id: 12,
                name: "B.Sc Optometry",
                icon: Pharmacy,
            },
            {
                id: 13,
                name: "B.Sc Neuro Science",
                icon: Pharmacy,
            },
            {
                id: 14,
                name: "B.Sc Nuclear Medicine",
                icon: Pharmacy,
            },
            {
                id: 15,
                name: "B.Sc Emergency Medicine",
                icon: Pharmacy,
            },
        ],

        AppliedScience: [
            {
                id: 1,
                name: "B.Sc Agriculture",
                icon: Ayurveda,
            },
            {
                id: 2,
                name: "B.Sc Forensic",
                icon: Ayurveda,
            },
            {
                id: 3,
                name: "B.Sc Virology",
                icon: Ayurveda,
            },
            {
                id: 4,
                name: "B.Sc Food & Nutrition",
                icon: Ayurveda,
            },
            {
                id: 5,
                name: "B.Sc Food Technology",
                icon: Ayurveda,
            },
            {
                id: 6,
                name: "Dental Technology",
                icon: Dental,
            },
            {
                id: 7,
                name: "B.Sc Occupation Technology",
                icon: Pharmacy,
            },
            {
                id: 8,
                name: "B.Sc Medical Lab Technology",
                icon: Pharmacy,
            },
            {
                id: 9,
                name: "B.Sc Medical Imaging/Radiology",
                icon: Pharmacy,
            },
            {
                id: 10,
                name: "B.Sc Radiotherapy",
                icon: Pharmacy,
            },
            {
                id: 11,
                name: "B.Sc Physician Assistant",
                icon: Pharmacy,
            },
            {
                id: 12,
                name: "B.Sc Optometry",
                icon: Pharmacy,
            },
            {
                id: 13,
                name: "B.Sc Neuro Science",
                icon: Pharmacy,
            },
            {
                id: 14,
                name: "B.Sc Nuclear Medicine",
                icon: Pharmacy,
            },
            {
                id: 15,
                name: "B.Sc Emergency Medicine",
                icon: Pharmacy,
            },
        ],

        Designing: [
            {
                id: 1,
                name: "B.Arch",
                icon: Designing,
            },
            {
                id: 2,
                name: "B.Designing",
                icon: Designing,
            },
            {
                id: 3,
                name: "B.Sc Interior Design",
                icon: Designing,
            },
            {
                id: 4,
                name: "B.Sc Fashion Design",
                icon: Designing,
            },
            {
                id: 5,
                name: "B.Visual Arts",
                icon: Designing,
            },
            {
                id: 6,
                name: "Communication Design",
                icon: Designing,
            },
        ],

        Engineering: [
            {
                id: 1,
                name: "Computer Science",
                icon: Engineering,
            },
            {
                id: 2,
                name: "Information Science",
                icon: Engineering,
            },
            {
                id: 3,
                name: "AI & ML",
                icon: Engineering,
            },
            {
                id: 4,
                name: "Electrical & Electronic",
                icon: Engineering,
            },
            {
                id: 5,
                name: "Electronics & Communication",
                icon: Engineering,
            },
            {
                id: 6,
                name: "Bio-Technology",
                icon: Engineering,
            },
            {
                id: 7,
                name: "Food Technology",
                icon: Engineering,
            },
            {
                id: 8,
                name: "Genetics",
                icon: Engineering,
            },
            {
                id: 9,
                name: "Civil",
                icon: Engineering,
            },
            {
                id: 10,
                name: "Mechanical",
                icon: Engineering,
            },
            {
                id: 11,
                name: "Mechatronics",
                icon: Engineering,
            },
            {
                id: 12,
                name: "Fire & Safety",
                icon: Engineering,
            },
            {
                id: 13,
                name: "Bio-Medical",
                icon: Engineering,
            },
            {
                id: 14,
                name: "Petroleum",
                icon: Engineering,
            },
            {
                id: 15,
                name: "Aerospace",
                icon: Engineering,
            },
            {
                id: 16,
                name: "Aeronautic",
                icon: Engineering,
            },
            {
                id: 17,
                name: "Automobile",
                icon: Engineering,
            },
        ],

        Marine: [
            {
                id: 1,
                name: "Nautical Science",
                icon: Marine,
            },
            {
                id: 2,
                name: "Marine Engineering",
                icon: Marine,
            },
            {
                id: 3,
                name: "GP Writing",
                icon: Marine,
            },
        ],

        Management: [
            {
                id: 1,
                name: "BHM",
                icon: Management,
            },
            {
                id: 2,
                name: "BHS",
                icon: Management,
            },
            {
                id: 3,
                name: "Hotel Management",
                icon: HotelManagement,
            },
            {
                id: 4,
                name: "Aviation",
                icon: Management,
            },
            {
                id: 5,
                name: "Travel & Tourism",
                icon: Management,
            },
        ],

        Others: [
            {
                id: 1,
                name: "BHA",
                icon: Paramedical,
            },
            {
                id: 2,
                name: "BPH",
                icon: Paramedical,
            },
            {
                id: 3,
                name: "BSW",
                icon: Paramedical,
            },
        ],
    },
]

export const addOnCourses =[{
    BCom: [
        {
            id: 1,
            name: "Aviation",
            icon: Engineering,
        },
        {
            id: 2,
            name: "Logistics",
            icon: Engineering,
        },
        {
            id: 3,
            name: "Travel & Tourism",
            icon: Engineering,
        },
        {
            id: 4,
            name: "Electrical & Electronic",
            icon: Engineering,
        },
        {
            id: 5,
            name: "Finance",
            icon: Engineering,
        },
        {
            id: 6,
            name: "Taxation",
            icon: Engineering,
        },
        {
            id: 7,
            name: "Auditing",
            icon: Engineering,
        },
        {
            id: 8,
            name: "ACCA",
            icon: Engineering,
        },
        {
            id: 9,
            name: "Digital Marketing",
            icon: Engineering,
        },
        {
            id: 10,
            name: "Business Analytics",
            icon: Engineering,
        },
        {
            id: 11,
            name: "Stock market",
            icon: Engineering,
        },
        {
            id: 12,
            name: "Data analytics",
            icon: Engineering,
        },
        {
            id: 13,
            name: "LAW",
            icon: Engineering,
        },
        
    ],

    BBA: [
        {
            id: 1,
            name: "Aviation",
            icon: Engineering,
        },
        {
            id: 2,
            name: "Logistics",
            icon: Engineering,
        },
        {
            id: 3,
            name: "Travel & Tourism",
            icon: Engineering,
        },
        {
            id: 4,
            name: "Port Management",
            icon: Engineering,
        },
        {
            id: 5,
            name: "Entrepreneurship",
            icon: Engineering,
        },
        {
            id: 6,
            name: "International Bussiness",
            icon: Engineering,
        },
        {
            id: 7,
            name: "Hospital Administration",
            icon: Engineering,
        },
        {
            id: 8,
            name: "Medical Tourism",
            icon: Engineering,
        },
        {
            id: 9,
            name: "Digital Marketing",
            icon: Engineering,
        },
        {
            id: 10,
            name: "Data Analytics",
            icon: Engineering,
        },        
    ],

    BCA: [
        {
            id: 1,
            name: "Arificial Intelligence",
            icon: Engineering,
        },
        {
            id: 2,
            name: "Robotics",
            icon: Engineering,
        },
        {
            id: 3,
            name: "Machine Learning",
            icon: Engineering,
        },
        {
            id: 4,
            name: "Cyber Forensic",
            icon: Engineering,
        },
        {
            id: 5,
            name: "Cyber Security",
            icon: Engineering,
        },
        {
            id: 6,
            name: "Ethical Hacking",
            icon: Engineering,
        },
        {
            id: 7,
            name: "IoT",
            icon: Engineering,
        },
        {
            id: 8,
            name: "Cloud Computing",
            icon: Engineering,
        },
        {
            id: 9,
            name: "Game Design",
            icon: Engineering,
        },
        {
            id: 10,
            name: "Data Analytics",
            icon: Engineering,
        },  
        {
            id: 11,
            name: "Augmented & Virtual Reality",
            icon: Engineering,
        }, {
            id: 12,
            name: "Graphic Design",
            icon: Engineering,
        }, {
            id: 13,
            name: "Software Development",
            icon: Engineering,
        },       
    ],
}]

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
        text: "+91 9035015369",
        url: "tel:+919035015369",
    },
    {
        title: "phone1",
        icon: phoneSvg,
        text: "+91 7736201864",
        url: "tel:+917736201864",
    },
    {
        title: "mail",
        icon: gmailSvg,
        text: "knowageinternational@gmail.com",
        url: "mailto:knowageinternational@gmail.com",
    },
]
