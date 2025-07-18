import { SectionData } from "@/types/types";
import AndroidImg from "../../public/assets/images/img/android-img.gif";
import HiredImg from "../../public/assets/images/img/hire_Android.png";

export const AndroidTopSectionData: SectionData[] = [{
    title: "Android Development Company",
    description: `
ThoughtWin IT Solutions offers comprehensive Android development services. Leveraging the Android SDK, Android Studio, APIs, and more, their seasoned team crafts scalable, innovative apps to meet diverse enterprise needs.`,
    btn: "Request an Estimation",
    img: AndroidImg,
    btnLink: "/Estimate",
    imgAlt: "Android programming",
}]

export const AndroidAccordianSectionData = [{
    accordianQue: [
        {
            question: 'What is Android Development?',
            answer: `Android development is creating applications for devices running the Android operating system. It involves designing, coding, testing, and deploying applications, often using languages like Java or Kotlin and tools like the Android Software Development Kit (SDK) and Android Studio.`
        },
        {
            question: 'Why do businesses need Android Development Services?',
            answer: `Businesses may need Android Development Services to create custom mobile applications that meet their unique needs. These apps can help businesses reach a wider audience, improve customer engagement, and increase sales. Android's large market share and flexibility make it a popular choice for mobile app development.`
        },
        {
            question: 'What are the key benefits of Android Development Services?',
            answer: `The key benefits of Android Development Services include access to a wide user base, flexibility and scalability of the Android platform, and the ability to customize apps to meet specific business needs. Android also supports integration with various technologies and has a strong developer community, which can aid in problem-solving and innovation.`,
        },
        {
            question: 'How much does it cost to develop an Android application?',
            answer: `The cost to develop an Android application can vary widely depending on many factors, such as the app's complexity, the number of features it has, the rates of the developers working on it, and the time it takes to complete. It isn't easy to provide a specific cost without more information. You'd need to contact the development team for a quote based on your specific needs and project scope.`
        },

    ]
}];

export const AndroidHiredSectionData = [{
    image: {
        src: HiredImg,
        alt: "Android Development Company",
        title: ""
    },
    heading: "Hire Android Developer",
    subheading: "Get your Dream Live with own Developers",
    description: `We will help you with all aspects of starting your business. You don't need an upfront investment and working with our team members is a great experience.`,
    button: {
        label: "Contact Us",
        link: "/contact-us"
    }
}];

export const AndroidIndustriesSectionData = [
    {
        title: "Education & Learning",
        subTitle: "Industries We Serve",
        description:
            "We have collaborated with educational institutions and e-learning platforms to develop feature-rich Android applications that facilitate remote learning, interactive quizzes, and access to digital resources.",
        projects: "56+ projects",
        image: {
            src: "/assets/images/img/android-slide.png",
            alt: "Education & Learning"
        }
    },
    {
        title: "Health Care",
        subTitle: "Industries We Serve",
        description:
            "We specialize in building healthcare applications that improve patient care, enable telemedicine, and enhance medical research.",
        projects: "76+ projects",
        image: {
            src: "/assets/images/img/heath_care.png",
            alt: "Health Care"
        }
    },
    {
        title: "Banking & Finance",
        subTitle: "Industries We Serve",
        description:
            "We develop secure mobile banking apps that provide seamless account management, secure transactions, and real-time notifications.",
        projects: "120+ projects",
        image: {
            src: "/assets/images/img/banking_finance.png",
            alt: "Banking & Finance"
        }
    },
    {
        title: "Music & Entertainment",
        subTitle: "Industries We Serve",
        description:
            "ThoughtWin has made significant strides in Android development for the music and entertainment industry. We have worked with music streaming platforms, event organizers, and entertainment companies to develop immersive and user-friendly Android applications.",
        projects: "89+ projects",
        image: {
            src: "/assets/images/img/music.png",
            alt: "Music & Entertainment"
        }
    },
    {
        title: "Real Estate",
        subTitle: "Industries We Serve",
        description:
            "In the real estate industry, ThoughtWin has successfully developed Android applications that simplify property searches, offer virtual tours, and provide convenient property management tools. Our Android development team has worked closely with real estate agencies and property management companies to create intuitive and visually appealing applications.",
        projects: "65+ projects",
        image: {
            src: "/assets/images/img/real_state.png",
            alt: "Real Estate"
        }
    }
];

export const AndroidProjectEstimateSectionData = [
    {
        title: "Let's Work Together",
        subTitle: "Get a Free Project Estimate",
        description:
            "We offer a customized plan that provides your business with the services you require at a competitive price.",
    },
];
