import { SectionData } from "@/types/types";
import reactTopImg from "../../public/assets/images/img/react_logo.gif";
import HiredNativeImg from "../../public/assets/images/img/hire_native.png";

export const ReactNativeTopSectionData: SectionData[] = [{
    title: "React native Development Company",
    description: `ThoughtWin IT Solutions delivers top-tier React Native application development, enabling quicker mobile application builds while reducing the need for distinct native developers. They offer next-generation React Native services tailored to your business, ensuring robust mobile experiences.`,
    btn: "Request an Estimation",
    btnLink: "/Estimate",
    img: reactTopImg,
    imgAlt: "React Native logo",
}];

export const ReactNativeAccordionSectionData = [
    {
        accordianQue: [
            {
                question: "What is React Native development?",
                answer: `React Native development involves creating cross-platform mobile applications using JavaScript and the React framework. Developed by Facebook, it enables developers to build apps for both iOS and Android using a single codebase while maintaining a native-like performance and user experience.`,
            },
            {
                question: "What are the benefits of using React Native?",
                answer: `Some of the key benefits of using React Native include the following:`,
                answers: [
                    { title: "Code Reusability", answ: `With React Native, you can write the code once and use it across multiple platforms (Android, iOS, and even the web), which saves significant development time and resources.` },
                    { title: "Component-Based Architecture", answ: `React Native uses a component-based architecture, which makes the code more readable and maintainable.` },
                    { title: "Hot Reloading", answ: `This feature allows developers to see the changes they make in the code in real time, improving productivity and making debugging faster and easier.` },
                    { title: "Community Support", answ: `React Native has strong community support, with numerous libraries and tools to make development easier.` }
                ]
            },
            {
                question: "What kind of apps can be built with React Native?",
                answer: `A wide range of apps can be built with React Native, including but not limited to:`,
                answers: [
                    { title: "Social Media Apps", answ: "" },
                    { title: "E-commerce Apps", answ: "" },
                    { title: "News and Magazine Apps", answ: "" },
                    { title: "Lifestyle Apps", answ: "" },
                    { title: "Utility Apps", answ: "" }
                ]
            },
            {
                question: "How much does it cost to develop a React Native app?",
                answer: `The cost of developing a React Native app can vary greatly depending on many factors, including the app's complexity, the number of features, the experience level of the developers, and the region where the development takes place. It's best to get a quote from the development service provider for a more accurate estimate.`
            },
            {
                question: "How do I find a reliable React Native development company?",
                answer: `When looking for a reliable React Native development service provider, consider the following factors:`,
                answers: [
                    { title: "Portfolio", answ: `Check their past projects to gauge their experience and expertise in React Native development.` },
                    { title: "Client Testimonials", answ: `Look at reviews and testimonials from previous clients to assess their reliability and quality of work.` },
                    { title: "Technical Expertise", answ: `Ensure they have the technical expertise necessary for React Native development, including a strong understanding of JavaScript and the React library.` },
                    { title: "Communication", answ: `Effective communication is crucial in any development project. Make sure the provider is responsive and communicates clearly.` },
                    { title: "Cost", answ: `While cost should not be the only deciding factor, ensuring that the provider's price fits your budget is important. For instance, Thoughtwin IT Solutions provide high-quality React Native application development services.` }
                ]
            }
        ]
    }
];

export const ReactNativeHireDeveloperData = [{
    image: {
        src: HiredNativeImg,
        alt: "React Native Development Company",
        title: ""
    },
    heading: "Hire React Native Developers",
    subheading: "Get your Dream Live with own Developers",
    description: `We will help you with all aspects of starting your business. You don't need an upfront investment and working with our team members is a great experience.`,
    button: {
        label: "Contact Us",
        link: "/contact-us"
    }
}];

export const ReactNativeIndustriesSliderData = [
    {
        label: "Industries We Serve",
        title: "Education & Learning",
        description:
            "ThoughtWin excels in React Native development for the education and learning sector, providing scalable and cross-platform solutions. We create feature-rich mobile learning platforms, interactive e-books, and personalized tutoring applications using React Native's extensive library of components.",
        projects: "200+ projects",
        image: {
            src: "/assets/images/img/native-slider.png",
            alt: "Education & Learning"
        }
    },
    {
        label: "Industries We Serve",
        title: "Health Care",
        description:
            "React Native development plays a vital role in the healthcare industry, enabling the creation of efficient and cost-effective healthcare applications. At ThoughtWin, we specialize in building React Native apps that streamline healthcare processes, facilitate telemedicine, and enhance patient care.",
        projects: "200+ projects",
        image: {
            src: "/assets/images/img/heath_care.png",
            alt: "Health Care"
        }
    },
    {
        label: "Industries We Serve",
        title: "Banking & Finance",
        description:
            "ThoughtWin has extensive experience in React Native development for the banking and finance sector. We create secure and user-friendly mobile banking applications using React Native's powerful features.",
        projects: "200+ projects",
        image: {
            src: "/assets/images/img/banking_finance.png",
            alt: "Banking & Finance"
        }
    },
    {
        label: "Industries We Serve",
        title: "Music & Entertainment",
        description:
            "At ThoughtWin, we leverage React Native to build intuitive and responsive real estate apps. Our team creates cross-platform solutions for property searches, virtual tours, and property management.",
        projects: "200+ projects",
        image: {
            src: "/assets/images/img/music.png",
            alt: "Music & Entertainment"
        }
    },
    {
        label: "Industries We Serve",
        title: "Real Estate",
        description:
            "At ThoughtWin, we leverage React Native to build intuitive and responsive real estate apps. Our team creates cross-platform solutions for property searches, virtual tours, and property management.",
        projects: "200+ projects",
        image: {
            src: "/assets/images/img/real_state.png",
            alt: "Real Estate"
        }
    }
];

export const ReactnativeProjectEstimateSectionData = [
    {
        title: "Let's Work Together",
        subTitle: "Get a Free Project Estimate",
        description:
            "We here offer a customized plan that provides your business with the level of services you require at a scrumptious price point.",
    },
];

