import {
    Andhra,
    Athul,
    Bangalore,
    Canada,
    Chennai,
    Coimbatore,
    Dubai,
    facebook,
    fbSvg,
    Georgia,
    Germany,
    gmail,
    gmailSvg,
    instagram,
    instagramSvg,
    Ireland,
    Kerala,
    Kiran,
    locationSvg,
    Mangalore,
    Nabeel,
    phoneSvg,
    Singapore,
    threads,
    threadsSvg,
    UK,
    whatsapp,
    whatsappSvg,
    youtube,
    youtubeSvg,
} from "../assets"
import {
    AddOn,
    Agriculture,
    Ayurveda,
    Computer,
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
        title: "phone2",
        icon: phoneSvg,
        text: "+91 7736201864",
        url: "tel:+917736201864",
    },
    {
        title: "phone3",
        icon: phoneSvg,
        text: "+91 9567834963",
        url: "tel:+919567834963",
    },
    {
        title: "mail",
        icon: gmailSvg,
        text: "knowageinternational@gmail.com",
        url: "mailto:knowageinternational@gmail.com",
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
    {
        id: "5",
        title: "threads",
        icon: threads,
        svg: threadsSvg,
        url: "https://www.threads.net/@knowage_services",
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
    {
        id: 4,
        num: 1000,
        title: "Admissions",
    },
]

export const heroCourses = [
    {
        name: "Medical",
        icon: Medical,
    },
    {
        name: "Engineering",
        icon: Engineering,
    },
    {
        name: "Paramedical",
        icon: Paramedical,
    },
    {
        name: "Management",
        icon: Management,
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
                name: "Vetinary Science",
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
                name: "Pharmacy",
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
                name: "Cardiac Technology",
                icon: Paramedical,
            },
            {
                id: 2,
                name: "Perfusion Technology",
                icon: Paramedical,
            },
            {
                id: 3,
                name: "Respiratory Technology",
                icon: Physiotherapy,
            },
            {
                id: 4,
                name: "Renal Technology",
                icon: Paramedical,
            },
            {
                id: 5,
                name: "Anaesthesia & Operation technology",
                icon: Paramedical,
            },
            {
                id: 6,
                name: "Dental Technology",
                icon: Dental,
            },
            {
                id: 7,
                name: "Occupation Technology",
                icon: Pharmacy,
            },
            {
                id: 8,
                name: "Medical Lab Technology",
                icon: Pharmacy,
            },
            {
                id: 9,
                name: "Medical Imaging/Radiology",
                icon: Pharmacy,
            },
            {
                id: 10,
                name: "Radiotherapy",
                icon: Pharmacy,
            },
            {
                id: 11,
                name: "Physician Assistant",
                icon: Pharmacy,
            },
            {
                id: 12,
                name: "Optometry",
                icon: Pharmacy,
            },
            {
                id: 13,
                name: "Neuro Science",
                icon: Pharmacy,
            },
            {
                id: 14,
                name: "Nuclear Medicine",
                icon: Pharmacy,
            },
            {
                id: 15,
                name: "Emergency Medicine",
                icon: Pharmacy,
            },
        ],

        AppliedScience: [
            {
                id: 1,
                name: "Agriculture",
                icon: Ayurveda,
            },
            {
                id: 2,
                name: "Forensic",
                icon: Ayurveda,
            },
            {
                id: 3,
                name: "Virology",
                icon: Ayurveda,
            },
            {
                id: 4,
                name: "Food & Nutrition",
                icon: Ayurveda,
            },
            {
                id: 5,
                name: "Food Technology",
                icon: Ayurveda,
            },
            {
                id: 6,
                name: "Dental Technology",
                icon: Dental,
            },
            {
                id: 7,
                name: "Occupation Technology",
                icon: Pharmacy,
            },
            {
                id: 8,
                name: "Medical Lab Technology",
                icon: Pharmacy,
            },
            {
                id: 9,
                name: "Medical Imaging/Radiology",
                icon: Pharmacy,
            },
            {
                id: 10,
                name: "Radiotherapy",
                icon: Pharmacy,
            },
            {
                id: 11,
                name: "Physician Assistant",
                icon: Pharmacy,
            },
            {
                id: 12,
                name: "Optometry",
                icon: Pharmacy,
            },
            {
                id: 13,
                name: "Neuro Science",
                icon: Pharmacy,
            },
            {
                id: 14,
                name: "Nuclear Medicine",
                icon: Pharmacy,
            },
            {
                id: 15,
                name: "Emergency Medicine",
                icon: Pharmacy,
            },
        ],

        Designing: [
            {
                id: 1,
                name: "Arch",
                icon: Designing,
            },
            {
                id: 2,
                name: "Designing",
                icon: Designing,
            },
            {
                id: 3,
                name: "Interior Design",
                icon: Designing,
            },
            {
                id: 4,
                name: "Fashion Design",
                icon: Designing,
            },
            {
                id: 5,
                name: "Visual Arts",
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

export const addOnCourses = [
    {
        Com: [
            {
                id: 1,
                name: "Aviation",
                icon: AddOn,
            },
            {
                id: 2,
                name: "Logistics",
                icon: AddOn,
            },
            {
                id: 3,
                name: "Travel & Tourism",
                icon: AddOn,
            },
            {
                id: 4,
                name: "Electrical & Electronic",
                icon: AddOn,
            },
            {
                id: 5,
                name: "Finance",
                icon: AddOn,
            },
            {
                id: 6,
                name: "Taxation",
                icon: AddOn,
            },
            {
                id: 7,
                name: "Auditing",
                icon: AddOn,
            },
            {
                id: 8,
                name: "ACCA",
                icon: AddOn,
            },
            {
                id: 9,
                name: "Digital Marketing",
                icon: AddOn,
            },
            {
                id: 10,
                name: "Business Analytics",
                icon: AddOn,
            },
            {
                id: 11,
                name: "Stock market",
                icon: AddOn,
            },
            {
                id: 12,
                name: "Data analytics",
                icon: AddOn,
            },
            {
                id: 13,
                name: "LAW",
                icon: Law,
            },
        ],

        BA: [
            {
                id: 1,
                name: "Aviation",
                icon: AddOn,
            },
            {
                id: 2,
                name: "Logistics",
                icon: AddOn,
            },
            {
                id: 3,
                name: "Travel & Tourism",
                icon: AddOn,
            },
            {
                id: 4,
                name: "Port Management",
                icon: AddOn,
            },
            {
                id: 5,
                name: "Entrepreneurship",
                icon: AddOn,
            },
            {
                id: 6,
                name: "International Bussiness",
                icon: AddOn,
            },
            {
                id: 7,
                name: "Hospital Administration",
                icon: AddOn,
            },
            {
                id: 8,
                name: "Medical Tourism",
                icon: AddOn,
            },
            {
                id: 9,
                name: "Digital Marketing",
                icon: AddOn,
            },
            {
                id: 10,
                name: "Data Analytics",
                icon: AddOn,
            },
        ],

        CA: [
            {
                id: 1,
                name: "Arificial Intelligence",
                icon: Computer,
            },
            {
                id: 2,
                name: "Robotics",
                icon: Computer,
            },
            {
                id: 3,
                name: "Machine Learning",
                icon: Computer,
            },
            {
                id: 4,
                name: "Cyber Forensic",
                icon: Computer,
            },
            {
                id: 5,
                name: "Cyber Security",
                icon: Computer,
            },
            {
                id: 6,
                name: "Ethical Hacking",
                icon: Computer,
            },
            {
                id: 7,
                name: "IoT",
                icon: Computer,
            },
            {
                id: 8,
                name: "Cloud Computing",
                icon: Computer,
            },
            {
                id: 9,
                name: "Game Design",
                icon: Computer,
            },
            {
                id: 10,
                name: "Data Analytics",
                icon: Computer,
            },
            {
                id: 11,
                name: "Augmented & Virtual Reality",
                icon: Computer,
            },
            {
                id: 12,
                name: "Graphic Design",
                icon: Computer,
            },
            {
                id: 13,
                name: "Software Development",
                icon: Computer,
            },
        ],
    },
]

export const abroad = [
    {
        countries: [
            { image: UK, country: "UK" },
            { image: Canada, country: "Canada" },
            { image: Germany, country: "Germany" },
            { image: Georgia, country: "Georgia" },
            { image: Singapore, country: "Singapore" },
            { image: Dubai, country: "Dubai" },
            { image: Ireland, country: "Ireland" },
        ],

        services: [
            "Professional career counseling",
            "Apply to universities and colleges🏫",
            "2 years stay back after graduation🎓",
            "Study without ILETS✍",
            "Scholarships Available💰",
            "Work while studying",
            "Part time jobs and accomodations",
            "Loan assistance",
            "End to end services available",
        ],
    },
]

export const popularDestinations = [
    {
        image: Coimbatore,
        destination: "Coimbatore",
        title: "Study In Coimbatore",
        description:
            "Consider studying in Coimbatore for a rewarding academic experience. Known for its esteemed educational institutions, Coimbatore offers a diverse range of programs across various disciplines. With a conducive learning environment and excellent infrastructure, students can benefit from quality education and ample opportunities for personal and professional growth.",
    },
    {
        image: Mangalore,
        destination: "Manglore",
        title: "Study in Manglore",
        description:
            "Mangalore, a rapidly growing city in Karnataka, holds significant importance in the nation. Its convenient access to road, rail, air, and sea transport makes it a favored educational hub.",
    },
    {
        image: Chennai,
        destination: "Chennai",
        title: "Study In Chennai",
        description:
            "Chennai, the capital city of Tamil Nadu, is celebrated as the 'Gateway of South India' and stands as the largest cultural, educational, and economic hub in the region. It is home to some of the most prestigious and revered educational institutions in the country.",
    },
    {
        image: Bangalore,
        destination: "Banglore",
        title: "Study In Banglore",
        description:
            "Bangalore boasts top-tier educational institutions renowned for their excellent placement opportunities. With prestigious medical and engineering colleges, it offers students unparalleled academic prospects in the country. Being the \u0022IT Capital\u0022, Bangalore also provides students with optimal job placement opportunities and exposure, making it an ideal destination for pursuing higher education.",
    },
    {
        image: Kerala,
        destination: "Kerala",
        title: "Study in Kerala",
        description:
            "Kerala, celebrated for its exceptional literacy rate, is a top educational destination. Its well-connected cities like Kochi and Trivandrum offer access to road, rail, air, and sea transport, paired with tranquil surroundings.",
    },
    {
        image: Andhra,
        destination: "Andhra Pradesh",
        title: "Study in Andhra Pradesh",
        description:
            "Andhra Pradesh, with key cities like Vijayawada and Visakhapatnam, is rapidly evolving as an educational hub. Excellent connectivity through roads, railways, air, and seaports complements its growing academic infrastructure.",
    },
]

export const theTeam = [
    {
        image: Nabeel,
        name: "Nabeel Mhd",
        role: "Co-Founder & CEO",
        description:
            "With over 4 Years of Experience in Education Sector, the person who made platform that simplifes the College Searching Process for Postive impact on the education Sector in India & Abroad. His expertise and guidance have helped Countless Students to achieve their educational goals and His leadership Skill and Commitment to excellance is the evident in everything he does.",
    },
    {
        image: Kiran,
        name: "Kiran S Nair",
        role: "Co-Founder & Marking Director",
        description:
            "He Develop an Overall Plan to Promote Company and Reviewing Applications and Marking Selections for scholarship programs. He is Committed to Helping Students Achieve Their Academic and Career Goals , with Experience Advising for Career Counselling.",
    },
    {
        image: Athul,
        name: "Athul Raj",
        role: "Co-Founder & Managing Director",
        description:
            "Managing Partner of KNOWAGE INTERNATIONAL, Coming up with the idea Forming a Company and Evaluating its Market size , Who use Internet Platform to grow an audience and gain Awareness for a Brand or Organisation.",
    },
]
