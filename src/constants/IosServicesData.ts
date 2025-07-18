import { SectionData } from "@/types/types";
import iosTopImg from "../../public/assets/images/img/ios-top.gif";
import HiredIoImg from "../../public/assets/images/img/hire_ios.png";

export const IosTopSectionData: SectionData[] = [{
    title: "iOS Development Company",
    description: `At ThoughtWin IT Solutions, a seasoned team of developers harness technologies like Objective-C, Swift, and the iOS SDK to create robust iOS apps. They cater to a wide range of clients, from start-ups to established enterprises, with their strong skills in FHIR/EPIC development and multi-threading.`,
    btn: "Request an Estimation",
    btnLink: "/Estimate",
    img: iosTopImg,
    imgAlt: "IOS programming",
}];

export const IosAccordionSectionData = [{
    accordianQue: [
        {
            question: "What is iOS development?",
            answer: `iOS development is creating applications for devices running Apple's iOS operating system, such as the iPhone and iPad. It involves using languages like Swift or Objective-C and tools like XCode and the iOS SDK (Software Development Kit).`,
        },
        {
            question: "How do I choose an iOS development company?",
            answer: `When choosing an iOS development company, you should consider factors such as the company's experience, the skills of its developers, their portfolio of past projects, and their understanding of the iOS platform. For instance, ThoughtWin IT Solutions has a team of developers who employ cutting-edge technologies to develop robust iOS apps, with skills including Objective-C, Swift, iOS SDK, FHIR/EPIC development, and Multi-threading1.`
        },
        {
            question: "What services does an iOS development services company provide?",
            answer: `An iOS development services company typically provides a range of services, including:`,
            answers: [
                { title: "App Design: ", answ: "This involves creating the app's user interface and user experience." },
                { title: "App Development: ", answ: `This is the actual coding of the app, which may involve both front-end (user interface) and back-end (server and database) development.` },
                { title: "Testing and Quality Assurance: ", answ: `This involves checking the app for bugs and usability issues.` },
                { title: "Deployment: ", answ: `This involves preparing the app for release and publishing it on the App Store.` },
                { title: "Maintenance and Support: ", answ: `This involves ongoing updates and support to keep the app running smoothly.` }
            ]
        },
        {
            question: "What is the cost of iOS development?",
            answer: `The cost of iOS development can vary significantly depending on many factors, including the app's complexity, the number of features it includes, the rates of the developers working on it, and the time it takes to complete. Providing a precise cost without specific information about a particular project is difficult. For an accurate quote, you need to contact the development team with details about your project.`
        },
        {
            question: "What is the timeline for iOS development?",
            answer: `The timeline for iOS development can also vary greatly depending on the project's specifics. Factors that can affect the timeline include the complexity of the app, the number of features it includes, the development process of the team working on it, and whether any issues arise during development. As with cost, a specific timeline would need to be discussed with the development team based on the details of your project.`
        }
    ]
}];

export const IosHireDeveloperData = [{
    image: {
        src: HiredIoImg,
        alt: "IOS Development Company",
        title: ""
    },
    heading: "Hire iOS Developer",
    subheading: "Get your Dream Live with own Developers",
    description: `We will help you with all aspects of starting your business. You don't need an upfront investment and working with our team members is a great experience.`,
    button: {
        label: "Contact Us",
        link: "/contact-us"
    }
}];

export const IosIndustriesSliderData = [
    {
        label: "Industries We Serve",
        title: "Education & Learning",
        description:
            "Our iOS development team has extensive experience in creating educational apps that provide interactive learning experiences, access to digital resources, and seamless communication between students and educators.",
        projects: "200+ projects",
        image: {
            src: "/assets/images/img/ios-slide.png",
            alt: "Education & Learning"
        }
    },
    {
        label: "Industries we serve",
        title: "Health Care",
        description:
            "At ThoughtWin, our iOS development team specializes in building healthcare applications that improve patient care, enable telemedicine, and enhance medical research. We create iOS apps for patient monitoring, medication management, and secure communication between healthcare professionals and patients.",
        projects: "200+ projects",
        image: {
            src: "/assets/images/img/heath_care.png",
            alt: "Health Care"
        }
    },
    {
        label: "Industries we serve",
        title: "Banking & Finance",
        description:
            "iOS development has become integral to the banking and finance sector, offering secure and feature-rich mobile banking solutions. ThoughtWin's iOS development team has expertise in creating robust iOS applications for financial institutions. We develop secure mobile banking apps that provide seamless account management, secure transactions, and real-time notifications.",
        projects: "200+ projects",
        image: {
            src: "/assets/images/img/banking_finance.png",
            alt: "Banking & Finance"
        }
    },
    {
        label: "Industries we serve",
        title: "Music & Entertainment",
        description:
            "In the music and entertainment industry, ThoughtWin's iOS development team specializes in building music streaming apps, media players, and interactive entertainment applications. It enables the creation of immersive and engaging experiences for users.",
        projects: "200+ projects",
        image: {
            src: "/assets/images/img/music.png",
            alt: "Music & Entertainment"
        }
    },
    {
        label: "Industries we serve",
        title: "Real Estate",
        description:
            "iOS development has transformed the real estate industry, providing users with intuitive property search, virtual tours, and property management tools. At ThoughtWin, our iOS development team focuses on creating user-friendly real estate applications.",
        projects: "200+ projects",
        image: {
            src: "/assets/images/img/real_state.png",
            alt: "Real Estate"
        }
    }
];

export const IosProjectEstimateSectionData = [{
    title: "Let's Work Together",
    subTitle: "Get a Free Project Estimate",
    description:
        "We here offer a customized plan that provides your business with the level of services you require at a scrumptious price point.",

}];