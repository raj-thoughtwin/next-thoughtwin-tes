import { SectionData } from "@/types/types";
import phpTopImg from "../../public/assets/images/img/php-img.gif";

export const PhpTopSectionData: SectionData[] = [
    {
        title: "PHP Development Company",
        description: `ThoughtWin IT Solutions is your place for PHP development. Our team is full of PHP experts who can work on many projects. They know all the important PHP tools like Laravel, CodeIgniter, CakePHP, and Yii.`,
        btn: "Request an Estimation",
        btnLink: "#Estimate",
        img: phpTopImg,
        imgAlt: "Php programming",
    },
];

export const PhpAccordionSectionData = [
    {
        accordianQue: [
            {
                question: "What Is PHP?",
                answer: `PHP is a popular open-source server-side scripting language widely used for web development. It can be embedded into HTML and is particularly suited for creating dynamic and interactive websites.`
            },

            {
                question: "What are the benefits of using PHP for web development?",
                answer: `There are several benefits of using PHP for web development:`,
                answers: [
                    {
                        title: "Easy to Learn: ",
                        answ: "PHP is considered one of the easiest scripting languages, making it ideal for beginners while still offering many advanced features for more experienced programmers.",
                    },
                    {
                        title: "Flexibility: ",
                        answ: "PHP is highly flexible, whether during an ongoing project or after completion.",
                    },
                    {
                        title: "Integration: ",
                        answ: "PHP can be easily integrated with various other technologies used in web development.",
                    },
                    {
                        title: "Cost-Efficient: ",
                        answ: "As an open-source language, PHP is free to use. This makes it cost-effective for businesses and developers alike.",
                    },
                    {
                        title: "Large Community: ",
                        answ: "PHP has a large and active community of developers who can support and continually contribute to its development.",
                    },
                ],
            },
            {
                question: "Can PHP be used for mobile app development?",
                answer: `While PHP is primarily used for server-side web development, it can be used to provide the backend for mobile applications. However, PHP itself is not a mobile app development language. Other languages like Swift (for iOS) or Java/Kotlin (for Android) are typically used for the client side of mobile app development.`,
            },
            {
                question: "How long does it take to develop a PHP application?",
                answer: `The development time for a PHP application can vary widely based on the complexity of the app, the experience level of the developers, and other factors such as the number of features, third-party integrations, and the complexity of the UI/UX. A simple application might take a few weeks, while a complex application could take several months to over a year.`,
            },
            {
                question: "What is the cost of PHP development services?",
                answer: `The cost of PHP development services depends on several factors, including the complexity of the project, the number of features, the location and experience level of the developers, and the timeline of the project. Getting a quote from a development company like ThoughtWin IT Solutions is best for a more accurate estimate.`,
            },
        ],
    },
];

export const PhpHireDeveloperData = [{
    image: {
        src: "/assets/images/img/hire_php.png",
        alt: "Php Development Company",
        title: ""
    },
    heading: "Hire PHP Developers",
    subheading: "Get your Dream Live with own Developers",
    description: `We will help you with all aspects of starting your business. You don't need an upfront investment and working with our team members is a great experience.`,
    button: {
        label: "Contact Us",
        link: "/contact-us"
    }
}];

export const PhpIndustriesSliderData = [
    {
        label: "Industries We Serve",
        title: "Education & Learning",
        description: `ThoughtWin offers extensive PHP development services for the education and learning sector. We create robust and scalable web applications, learning management systems (LMS), and e‑learning platforms using PHP frameworks like Laravel and CodeIgniter.`,
        projects: "200+ projects",
        image: {
            src: "/assets/images/img/php-slide.png",
            alt: "Education & Learning"
        }
    },
    {
        label: "Industries we serve",
        title: "Health Care",
        description: `In the healthcare industry, PHP development plays a crucial role in building secure and efficient web applications. ThoughtWin specializes in creating healthcare management systems, patient portals, and medical record management platforms using PHP frameworks.`,
        projects: "200+ projects",
        image: {
            src: "/assets/images/img/heath_care.png",
            alt: "Health Care"
        }
    },
    {
        label: "Industries we serve",
        title: "Banking & Finance",
        description: `PHP development is widely used in the banking and finance sector for developing secure and feature‑rich web applications. At ThoughtWin, we specialize in building PHP‑based banking portals, financial management systems, and payment gateways.`,
        projects: "200+ projects",
        image: {
            src: "/assets/images/img/banking_finance.png",
            alt: "Banking & Finance"
        }
    },
    {
        label: "Industries we serve",
        title: "Music & Entertainment",
        description: `ThoughtWin's PHP development services extend to the music and entertainment industry, where we create dynamic and interactive web applications. We develop PHP‑based music streaming platforms, event ticketing systems, and media sharing platforms, integrating features like music libraries, personalized playlists, and social media integration.`,
        projects: "200+ projects",
        image: {
            src: "/assets/images/img/music.png",
            alt: "Music & Entertainment"
        }
    },
    {
        label: "Industries we serve",
        title: "Real Estate",
        description: `In the real estate sector, PHP development is crucial for creating property listing websites, real estate management systems, and property search platforms. ThoughtWin's PHP development team builds scalable and user‑friendly web applications that facilitate property searches, virtual tours, and property management.`,
        projects: "200+ projects",
        image: {
            src: "/assets/images/img/real_state.png",
            alt: "Real Estate"
        }
    }
];

export const PhpProjectEstimateSectionData = [{
    title: "Let's Work Together",
    subTitle: "Get a Free Project Estimate",
    description: "We here offer a customized plan that provides your business with the level of services you require at a scrumptious price point.",
}];