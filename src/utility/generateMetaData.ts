import { CustomMetadata } from "@/types/CustomMetaDataTypes";

export type ServicePagesType =
    "python"
    | "php"
    | "flutter"
    | "react-native"
    | "android"
    | "ios"
    | "block-chain"
    | "node-js"
    | "react-js"
    | "mean-stack"
    | "mern-stack"
    | "angular-js"
    | "about-us"
    | "blogs"
    | "career"
    | "contact-us"
    | "our-team"
    | "portfolio"
    | "ror"
    | "home";


export function createMetadata(platform: ServicePagesType): CustomMetadata {
    switch (platform) {
        case "android":
            return {
                title: "Expert Android App Development Services | Customized Solutions",
                description:
                    "Transform your business with cutting-edge Android development services. Our team of experts specializes in creating customized and user-friendly mobile apps.",
                keywords: [
                    "Android App Development",
                    "Custom Mobile App Solutions",
                    "Expert Android Developers",
                    "Thoughtwin Android Services",
                ],
                website: "https://www.thoughtwin.com/android",
                verification: {
                    google: "bpKzF8V9awpAb1vH7ukY82E84457_HcPzfObNibBQFY",
                    ahrefs: "da245e159d2d90c850fa5bf4adf16be62c70805e62bba0a9986b15e677416c9b",
                },
                openGraph: {
                    title: "Expert Android App Development Services | Customized Solutions",
                    description:
                        "Transform your business with cutting-edge Android development services. Our team of experts specializes in creating customized and user-friendly mobile apps.",
                    url: "https://www.thoughtwin.com/android",
                    images: ["https://thoughtwin.com/assets/img/android-header.png"],
                },
                twitter: {
                    site: "@thoughtwin",
                    creator: "@thoughtwin",
                    card: "summary_large_image",
                    title: "Expert Android App Development Services | Customized Solutions",
                    description:
                        "Transform your business with cutting-edge Android development services. Our team of experts specializes in creating customized and user-friendly mobile apps.",
                    image: "https://thoughtwin.com/assets/img/android-header.png",
                },
                canonical: "https://www.thoughtwin.com/android",
                favicon: "https://www.thoughtwin.com/favicon.ico",
            };

        case "react-js":
            return {
                title: "Expert ReactJS Development Services | User-Friendly Interfaces",
                description:
                    "Create interactive and responsive user interfaces with ReactJS. Our expert ReactJS developers can help you build fast and efficient web applications.",
                keywords: [
                    "ReactJS Development",
                    "Frontend Development",
                    "ReactJS UI",
                    "ReactJS Experts",
                ],
                website: "https://www.thoughtwin.com/react-js",
                verification: {
                    google: "google_verification_code",
                    ahrefs: "ahrefs_verification_code",
                },
                openGraph: {
                    title: "Expert ReactJS Development Services | User-Friendly Interfaces",
                    description:
                        "Create interactive and responsive user interfaces with ReactJS. Our expert ReactJS developers can help you build fast and efficient web applications.",
                    url: "https://www.thoughtwin.com/react-js",
                    images: ["https://thoughtwin.com/assets/img/reactjs-header.png"],
                },
                twitter: {
                    site: "@thoughtwin",
                    creator: "@thoughtwin",
                    card: "summary_large_image",
                    title: "Expert ReactJS Development Services | User-Friendly Interfaces",
                    description:
                        "Create interactive and responsive user interfaces with ReactJS. Our expert ReactJS developers can help you build fast and efficient web applications.",
                    image: "https://thoughtwin.com/assets/img/reactjs-header.png",
                },
                canonical: "https://www.thoughtwin.com/react-js",
                favicon: "https://www.thoughtwin.com/favicon.ico",
            };

        case "mean-stack":
            return {
                title: "MEAN Stack Development Services | Full Stack JavaScript Solutions",
                description:
                    "Unlock the power of the MEAN stack for building dynamic web applications. We specialize in MongoDB, Express, Angular, and NodeJS for creating full-stack solutions.",
                keywords: [
                    "MEAN Stack Development",
                    "Full Stack JavaScript",
                    "Angular Development",
                    "NodeJS Backend",
                ],
                website: "https://www.thoughtwin.com/mean-stack",
                verification: {
                    google: "google_verification_code",
                    ahrefs: "ahrefs_verification_code",
                },
                openGraph: {
                    title: "MEAN Stack Development Services | Full Stack JavaScript Solutions",
                    description:
                        "Unlock the power of the MEAN stack for building dynamic web applications. We specialize in MongoDB, Express, Angular, and NodeJS for creating full-stack solutions.",
                    url: "https://www.thoughtwin.com/mean-stack",
                    images: ["https://thoughtwin.com/assets/img/mean-stack-header.png"],
                },
                twitter: {
                    site: "@thoughtwin",
                    creator: "@thoughtwin",
                    card: "summary_large_image",
                    title: "MEAN Stack Development Services | Full Stack JavaScript Solutions",
                    description:
                        "Unlock the power of the MEAN stack for building dynamic web applications. We specialize in MongoDB, Express, Angular, and NodeJS for creating full-stack solutions.",
                    image: "https://thoughtwin.com/assets/img/mean-stack-header.png",
                },
                canonical: "https://www.thoughtwin.com/mean-stack",
                favicon: "https://www.thoughtwin.com/favicon.ico",
            };


        case "node-js":
            return {
                title: "Expert NodeJS Development Services | Scalable Backend Solutions",
                description:
                    "Leverage the power of NodeJS for building fast and scalable backend systems. Our NodeJS development services help you create efficient and high-performance web applications.",
                keywords: [
                    "NodeJS Development",
                    "Backend Development",
                    "Scalable Applications",
                    "NodeJS Experts",
                ],
                website: "https://www.thoughtwin.com/node-js",
                verification: {
                    google: "google_verification_code",
                    ahrefs: "ahrefs_verification_code",
                },
                openGraph: {
                    title: "Expert NodeJS Development Services | Scalable Backend Solutions",
                    description:
                        "Leverage the power of NodeJS for building fast and scalable backend systems. Our NodeJS development services help you create efficient and high-performance web applications.",
                    url: "https://www.thoughtwin.com/node-js",
                    images: ["https://thoughtwin.com/assets/img/nodejs-header.png"],
                },
                twitter: {
                    site: "@thoughtwin",
                    creator: "@thoughtwin",
                    card: "summary_large_image",
                    title: "Expert NodeJS Development Services | Scalable Backend Solutions",
                    description:
                        "Leverage the power of NodeJS for building fast and scalable backend systems. Our NodeJS development services help you create efficient and high-performance web applications.",
                    image: "https://thoughtwin.com/assets/img/nodejs-header.png",
                },
                canonical: "https://www.thoughtwin.com/node-js",
                favicon: "https://www.thoughtwin.com/favicon.ico",
            };

        case "block-chain":
            return {
                title: "Blockchain Development Services | Decentralized Solutions",
                description:
                    "Unlock the potential of blockchain technology with our decentralized solutions. We provide blockchain development for various use cases such as cryptocurrency, smart contracts, and more.",
                keywords: [
                    "Blockchain Development",
                    "Smart Contracts",
                    "Decentralized Applications",
                    "Cryptocurrency Solutions",
                ],
                website: "https://www.thoughtwin.com/block-chain",
                verification: {
                    google: "google_verification_code",
                    ahrefs: "ahrefs_verification_code",
                },
                openGraph: {
                    title: "Blockchain Development Services | Decentralized Solutions",
                    description:
                        "Unlock the potential of blockchain technology with our decentralized solutions. We provide blockchain development for various use cases such as cryptocurrency, smart contracts, and more.",
                    url: "https://www.thoughtwin.com/block-chain",
                    images: ["https://thoughtwin.com/assets/img/blockchain-header.png"],
                },
                twitter: {
                    site: "@thoughtwin",
                    creator: "@thoughtwin",
                    card: "summary_large_image",
                    title: "Blockchain Development Services | Decentralized Solutions",
                    description:
                        "Unlock the potential of blockchain technology with our decentralized solutions. We provide blockchain development for various use cases such as cryptocurrency, smart contracts, and more.",
                    image: "https://thoughtwin.com/assets/img/blockchain-header.png",
                },
                canonical: "https://www.thoughtwin.com/block-chain",
                favicon: "https://www.thoughtwin.com/favicon.ico",
            };

        case "react-native":
            return {
                title: "React Native App Development Services",
                description: "Build fast, beautiful mobile apps with React Native.",
                keywords: ["React Native", "Mobile Development", "Cross-platform"],
                website: "https://www.thoughtwin.com/react-native",
                verification: {
                    google: "",
                    ahrefs: "",
                },
                openGraph: {
                    title: "React Native App Development Services",
                    description: "Build fast, beautiful mobile apps with React Native.",
                    url: "https://www.thoughtwin.com/react-native",
                    images: ["https://thoughtwin.com/assets/img/reactnative-header.png"],
                },
                twitter: {
                    site: "@thoughtwin",
                    creator: "@thoughtwin",
                    card: "summary_large_image",
                    title: "React Native App Development Services",
                    description: "Build fast, beautiful mobile apps with React Native.",
                    image: "https://thoughtwin.com/assets/img/reactnative-header.png",
                },
                canonical: "https://www.thoughtwin.com/react-native",
                favicon: "https://www.thoughtwin.com/favicon.ico",
            };


        case "python":
            return {
                title: "Expert Python Development Services | Scalable Solutions",
                description:
                    "Unlock the full potential of Python with our expert development services. From web apps to machine learning solutions, we provide customized Python development services.",
                keywords: [
                    "Python Development",
                    "Web Development with Python",
                    "Machine Learning Python",
                    "Expert Python Developer",
                ],
                website: "https://www.thoughtwin.com/python",
                verification: {
                    google: "google_verification_code",
                    ahrefs: "ahrefs_verification_code",
                },
                openGraph: {
                    title: "Expert Python Development Services | Scalable Solutions",
                    description:
                        "Unlock the full potential of Python with our expert development services. From web apps to machine learning solutions, we provide customized Python development services.",
                    url: "https://www.thoughtwin.com/python",
                    images: ["https://thoughtwin.com/assets/img/python-header.png"],
                },
                twitter: {
                    site: "@thoughtwin",
                    creator: "@thoughtwin",
                    card: "summary_large_image",
                    title: "Expert Python Development Services | Scalable Solutions",
                    description:
                        "Unlock the full potential of Python with our expert development services. From web apps to machine learning solutions, we provide customized Python development services.",
                    image: "https://thoughtwin.com/assets/img/python-header.png",
                },
                canonical: "https://www.thoughtwin.com/python",
                favicon: "https://www.thoughtwin.com/favicon.ico",
            };

        case "ios":
            return {
                title: "Expert iOS Development Services for Seamless Mobile Solutions",
                description:
                    "Unlock the full potential of iOS with our expert development services. From concept to deployment, we'll help you bring your app to life and reach millions of users on the App Store.",
                keywords: [
                    "iOS Development",
                    "Mobile App Solutions",
                    "Expert iOS Developers",
                    "Thoughtwin iOS Services",
                ],
                website: "https://www.thoughtwin.com/ios",
                verification: {
                    google: "bpKzF8V9awpAb1vH7ukY82E84457_HcPzfObNibBQFY",
                    ahrefs: "da245e159d2d90c850fa5bf4adf16be62c70805e62bba0a9986b15e677416c9b",
                },
                openGraph: {
                    title: "Expert iOS Development Services for Seamless Mobile Solutions",
                    description:
                        "Unlock the full potential of iOS with our expert development services. From concept to deployment, we'll help you bring your app to life and reach millions of users on the App Store.",
                    url: "https://www.thoughtwin.com/ios",
                    images: ["https://thoughtwin.com/assets/img/ios-header.png"],
                },
                twitter: {
                    site: "@thoughtwin",
                    creator: "@thoughtwin",
                    card: "summary_large_image",
                    title: "Expert iOS Development Services for Seamless Mobile Solutions",
                    description:
                        "Unlock the full potential of iOS with our expert development services. From concept to deployment, we'll help you bring your app to life and reach millions of users on the App Store.",
                    image: "https://thoughtwin.com/assets/img/ios-header.png",
                },
                canonical: "https://www.thoughtwin.com/ios",
                favicon: "https://www.thoughtwin.com/favicon.ico",
            };

        case "php":
            return {
                title: "Expert PHP Development Services | Custom Web Solutions",
                description:
                    "Boost your business with our expert PHP development services. We specialize in creating scalable, secure, and high-performance web applications.",
                keywords: [
                    "PHP Development",
                    "Custom Web Solutions",
                    "PHP Web Development",
                    "Expert PHP Developers",
                ],
                website: "https://www.thoughtwin.com/php",
                verification: {
                    google: "google_verification_code",
                    ahrefs: "ahrefs_verification_code",
                },
                openGraph: {
                    title: "Expert PHP Development Services | Custom Web Solutions",
                    description:
                        "Boost your business with our expert PHP development services. We specialize in creating scalable, secure, and high-performance web applications.",
                    url: "https://www.thoughtwin.com/php",
                    images: ["https://thoughtwin.com/assets/img/php-header.png"],
                },
                twitter: {
                    site: "@thoughtwin",
                    creator: "@thoughtwin",
                    card: "summary_large_image",
                    title: "Expert PHP Development Services | Custom Web Solutions",
                    description:
                        "Boost your business with our expert PHP development services. We specialize in creating scalable, secure, and high-performance web applications.",
                    image: "https://thoughtwin.com/assets/img/php-header.png",
                },
                canonical: "https://www.thoughtwin.com/php",
                favicon: "https://www.thoughtwin.com/favicon.ico",
            };

        case "flutter":
            return {
                title: "Expert Flutter Development Services | Cross-Platform Apps",
                description:
                    "Build high-quality cross-platform mobile apps with Flutter. Our team of experts can help you develop beautiful and efficient apps for both iOS and Android.",
                keywords: [
                    "Flutter Development",
                    "Cross-Platform App Development",
                    "Mobile App Solutions",
                    "Expert Flutter Developers",
                ],
                website: "https://www.thoughtwin.com/flutter",
                verification: {
                    google: "google_verification_code",
                    ahrefs: "ahrefs_verification_code",
                },
                openGraph: {
                    title: "Expert Flutter Development Services | Cross-Platform Apps",
                    description:
                        "Build high-quality cross-platform mobile apps with Flutter. Our team of experts can help you develop beautiful and efficient apps for both iOS and Android.",
                    url: "https://www.thoughtwin.com/flutter",
                    images: ["https://thoughtwin.com/assets/img/flutter-header.png"],
                },
                twitter: {
                    site: "@thoughtwin",
                    creator: "@thoughtwin",
                    card: "summary_large_image",
                    title: "Expert Flutter Development Services | Cross-Platform Apps",
                    description:
                        "Build high-quality cross-platform mobile apps with Flutter. Our team of experts can help you develop beautiful and efficient apps for both iOS and Android.",
                    image: "https://thoughtwin.com/assets/img/flutter-header.png",
                },
                canonical: "https://www.thoughtwin.com/flutter",
                favicon: "https://www.thoughtwin.com/favicon.ico",
            };

        case "mern-stack":
            return {
                title: "MERN Stack Development Services | Full-Stack Web Solutions",
                description:
                    "Build dynamic and high-performance web applications with the MERN stack (MongoDB, Express, React, Node.js). We offer end-to-end full-stack development solutions.",
                keywords: [
                    "MERN Stack",
                    "Full Stack Development",
                    "React Development",
                    "Node.js Development",
                ],
                website: "https://www.thoughtwin.com/mern-stack",
                verification: {
                    google: "google_verification_code",
                    ahrefs: "ahrefs_verification_code",
                },
                openGraph: {
                    title: "MERN Stack Development Services | Full-Stack Web Solutions",
                    description:
                        "Build dynamic and high-performance web applications with the MERN stack (MongoDB, Express, React, Node.js). We offer end-to-end full-stack development solutions.",
                    url: "https://www.thoughtwin.com/mern-stack",
                    images: ["https://thoughtwin.com/assets/img/mernstack-header.png"],
                },
                twitter: {
                    site: "@thoughtwin",
                    creator: "@thoughtwin",
                    card: "summary_large_image",
                    title: "MERN Stack Development Services | Full-Stack Web Solutions",
                    description:
                        "Build dynamic and high-performance web applications with the MERN stack (MongoDB, Express, React, Node.js). We offer end-to-end full-stack development solutions.",
                    image: "https://thoughtwin.com/assets/img/mernstack-header.png",
                },
                canonical: "https://www.thoughtwin.com/mern-stack",
                favicon: "https://www.thoughtwin.com/favicon.ico",
            };

        case "angular-js":
            return {
                title: "AngularJS Development Services | Dynamic Web Applications",
                description:
                    "Build dynamic, single-page web applications with AngularJS. Our AngularJS developers help you create fast and responsive web apps tailored to your needs.",
                keywords: [
                    "AngularJS Development",
                    "Web Application Development",
                    "Single Page Application",
                    "AngularJS Experts",
                ],
                website: "https://www.thoughtwin.com/angular",
                verification: {
                    google: "google_verification_code",
                    ahrefs: "ahrefs_verification_code",
                },
                openGraph: {
                    title: "AngularJS Development Services | Dynamic Web Applications",
                    description:
                        "Build dynamic, single-page web applications with AngularJS. Our AngularJS developers help you create fast and responsive web apps tailored to your needs.",
                    url: "https://www.thoughtwin.com/angular",
                    images: ["https://thoughtwin.com/assets/img/angularjs-header.png"],
                },
                twitter: {
                    site: "@thoughtwin",
                    creator: "@thoughtwin",
                    card: "summary_large_image",
                    title: "AngularJS Development Services | Dynamic Web Applications",
                    description:
                        "Build dynamic, single-page web applications with AngularJS. Our AngularJS developers help you create fast and responsive web apps tailored to your needs.",
                    image: "https://thoughtwin.com/assets/img/angularjs-header.png",
                },
                canonical: "https://www.thoughtwin.com/angular",
                favicon: "https://www.thoughtwin.com/favicon.ico",
            };

        case "about-us":
            return {
                title: "About Us | Thoughtwin",
                description:
                    "Learn about Thoughtwin, our mission, values, and how we help businesses thrive through innovative software development solutions.",
                keywords: [
                    "About Us",
                    "Thoughtwin",
                    "Software Development",
                    "Tech Solutions",
                ],
                website: "https://www.thoughtwin.com/about-us",
                verification: {
                    google: "google_verification_code",
                    ahrefs: "ahrefs_verification_code",
                },
                openGraph: {
                    title: "About Us | Thoughtwin",
                    description:
                        "Learn about Thoughtwin, our mission, values, and how we help businesses thrive through innovative software development solutions.",
                    url: "https://www.thoughtwin.com/about-us",
                    images: ["https://thoughtwin.com/assets/img/about-us-header.png"],
                },
                twitter: {
                    site: "@thoughtwin",
                    creator: "@thoughtwin",
                    card: "summary_large_image",
                    title: "About Us | Thoughtwin",
                    description:
                        "Learn about Thoughtwin, our mission, values, and how we help businesses thrive through innovative software development solutions.",
                    image: "https://thoughtwin.com/assets/img/about-us-header.png",
                },
                canonical: "https://www.thoughtwin.com/about-us",
                favicon: "https://www.thoughtwin.com/favicon.ico",
            };

        case "blogs":
            return {
                title: "Thoughtwin Blogs | Insights on Software Development",
                description:
                    "Stay up-to-date with the latest trends and insights in software development, tech solutions, and more on the Thoughtwin blog.",
                keywords: ["Tech Blogs", "Software Development", "Tech News"],
                website: "https://www.thoughtwin.com/blogs",
                verification: {
                    google: "google_verification_code",
                    ahrefs: "ahrefs_verification_code",
                },
                openGraph: {
                    title: "Thoughtwin Blogs | Insights on Software Development",
                    description:
                        "Stay up-to-date with the latest trends and insights in software development, tech solutions, and more on the Thoughtwin blog.",
                    url: "https://www.thoughtwin.com/blogs",
                    images: ["https://thoughtwin.com/assets/img/blogs-header.png"],
                },
                twitter: {
                    site: "@thoughtwin",
                    creator: "@thoughtwin",
                    card: "summary_large_image",
                    title: "Thoughtwin Blogs | Insights on Software Development",
                    description:
                        "Stay up-to-date with the latest trends and insights in software development, tech solutions, and more on the Thoughtwin blog.",
                    image: "https://thoughtwin.com/assets/img/blogs-header.png",
                },
                canonical: "https://www.thoughtwin.com/blogs",
                favicon: "https://www.thoughtwin.com/favicon.ico",
            };

        case "career":
            return {
                title: "Careers at Thoughtwin | Join Our Team",
                description:
                    "Join the talented team at Thoughtwin and help us build innovative software solutions. Check out our open positions and apply today.",
                keywords: [
                    "Careers",
                    "Jobs at Thoughtwin",
                    "Software Development Careers",
                    "Join Our Team",
                ],
                website: "https://www.thoughtwin.com/career",
                verification: {
                    google: "google_verification_code",
                    ahrefs: "ahrefs_verification_code",
                },
                openGraph: {
                    title: "Careers at Thoughtwin | Join Our Team",
                    description:
                        "Join the talented team at Thoughtwin and help us build innovative software solutions. Check out our open positions and apply today.",
                    url: "https://www.thoughtwin.com/career",
                    images: ["https://thoughtwin.com/assets/img/career-header.png"],
                },
                twitter: {
                    site: "@thoughtwin",
                    creator: "@thoughtwin",
                    card: "summary_large_image",
                    title: "Careers at Thoughtwin | Join Our Team",
                    description:
                        "Join the talented team at Thoughtwin and help us build innovative software solutions. Check out our open positions and apply today.",
                    image: "https://thoughtwin.com/assets/img/career-header.png",
                },
                canonical: "https://www.thoughtwin.com/career",
                favicon: "https://www.thoughtwin.com/favicon.ico",
            };

        case "contact-us":
            return {
                title: "Software Development Company | Top Mobile App Development Company",
                description: "Reach out to ThoughtWin for web & mobile development solutions. Connect with us to discuss your business needs today.",
                keywords: ["software development company", "top mobile app development company"],
                website: "https://thoughtwin.com/contact-us",
                verification: {
                    google: "google_verification_code",
                    ahrefs: "ahrefs_verification_code",
                },
                openGraph: {
                    title: "Software Development Company | Top Mobile App Development Company",
                    description: "Reach out to ThoughtWin for web & mobile development solutions. Connect with us to discuss your business needs today.",
                    url: "https://www.thoughtwin.com/contact-us",
                    images: ["https://thoughtwin.com/assets/img/contact-header.png"],
                },
                twitter: {
                    site: "@thoughtwin",
                    creator: "@thoughtwin",
                    card: "summary_large_image",
                    title: "Software Development Company | Top Mobile App Development Company",
                    description: "Reach out to ThoughtWin for web & mobile development solutions. Connect with us to discuss your business needs today.",
                    image: "https://thoughtwin.com/assets/img/contact-header.png",
                },
                canonical: "https://www.thoughtwin.com/contact-us",
                favicon: "https://www.thoughtwin.com/favicon.ico",
            };

        case "our-team":
            return {
                title: "Thoughtwin - Building Scalable Web Applications with a Team of Experts",
                description: "ThoughtWin’s experts build scalable web apps & portals. Trust us to craft innovative solutions for your business growth.",
                keywords: ["Thoughtwin Team", "Scalable Web Applications", "Expert Web Development Team"],
                website: "https://www.thoughtwin.com/our-team",
                verification: {
                    google: "google_verification_code",
                    ahrefs: "ahrefs_verification_code",
                },
                openGraph: {
                    title: "Thoughtwin - Building Scalable Web Applications with a Team of Experts",
                    description: "ThoughtWin’s experts build scalable web apps & portals. Trust us to craft innovative solutions for your business growth.",
                    url: "https://www.thoughtwin.com/our-team",
                    images: ["/assets/img/ourteam-header.png"],
                },
                twitter: {
                    site: "@thoughtwin",
                    creator: "@thoughtwin",
                    card: "summary_large_image",
                    title: "Thoughtwin - Building Scalable Web Applications with a Team of Experts",
                    description: "ThoughtWin’s experts build scalable web apps & portals. Trust us to craft innovative solutions for your business growth.",
                    image: "https://thoughtwin.com/assets/img/ourteam-header.png",
                },
                canonical: "https://www.thoughtwin.com/our-team",
                favicon: "https://www.thoughtwin.com/favicon.ico",
            };

        case "portfolio":
            return {
                title: "ThoughtWin Portfolio - Innovative and Scalable Solutions for Web, Mobile, and IoT Development",
                description: "Explore ThoughtWin's portfolio featuring IoT, web & mobile solutions tailored for diverse industries and business needs.",
                keywords: ["ThoughtWin Portfolio", "Web Development", "Mobile Development", "IoT Solutions", "Scalable Development"],
                website: "https://www.thoughtwin.com/portfolios",
                verification: {
                    google: "google_verification_code",
                    ahrefs: "ahrefs_verification_code",
                },
                openGraph: {
                    title: "ThoughtWin Portfolio - Innovative and Scalable Solutions for Web, Mobile, and IoT Development",
                    description: "Explore ThoughtWin's portfolio featuring IoT, web & mobile solutions tailored for diverse industries and business needs.",
                    url: "https://www.thoughtwin.com/portfolios",
                    images: ["/assets/img/portfolio-header.png"],
                },
                twitter: {
                    site: "@thoughtwin",
                    creator: "@thoughtwin",
                    card: "summary_large_image",
                    title: "ThoughtWin Portfolio - Innovative and Scalable Solutions for Web, Mobile, and IoT Development",
                    description: "Explore ThoughtWin's portfolio featuring IoT, web & mobile solutions tailored for diverse industries and business needs.",
                    image: "https://thoughtwin.com/assets/img/portfolio-header.png",
                },
                canonical: "https://www.thoughtwin.com/portfolios",
                favicon: "https://www.thoughtwin.com/favicon.ico",
            };

        case "ror":
            return {
                title: "Leading Ruby on Rails Development Company",
                description:
                    "Our deep understanding of Ruby on Rails framework allows us to create fast, engaging ROR development services with a perfect combination of ROR security.",
                keywords: [
                    "Ruby on Rails Development",
                    "ROR Development Company",
                    "Ruby on Rails Services",
                    "ROR Development Experts",
                ],
                website: "https://www.thoughtwin.com/ror",
                verification: {
                    google: "bpKzF8V9awpAb1vH7ukY82E84457_HcPzfObNibBQFY",
                    ahrefs: "da245e159d2d90c850fa5bf4adf16be62c70805e62bba0a9986b15e677416c9b",
                },
                openGraph: {
                    title: "Leading Ruby on Rails Development Company",
                    description:
                        "Our deep understanding of Ruby on Rails framework allows us to create fast, engaging ROR development services with a perfect combination of ROR security.",
                    url: "https://www.thoughtwin.com/ror",
                    images: ["https://thoughtwin.com/assets/img/ror-header.png"],
                },
                twitter: {
                    site: "@thoughtwin",
                    creator: "@thoughtwin",
                    card: "summary_large_image",
                    title: "Leading Ruby on Rails Development Company",
                    description:
                        "Our deep understanding of Ruby on Rails framework allows us to create fast, engaging ROR development services with a perfect combination of ROR security.",
                    image: "https://thoughtwin.com/assets/img/ror-header.png",
                },
                canonical: "https://www.thoughtwin.com/ror",
                favicon: "https://www.thoughtwin.com/favicon.ico",
            };

        case "home":
            return {
                title: "ThoughtWin - Expert Web and Mobile App Developers | USA, UK, Singapore",
                description: "Partner with ThoughtWin for cutting-edge web & mobile solutions.",
                website: "https://thoughtwin.com",
                keywords: ["web development, mobile app development, ThoughtWin"],
                verification: {
                    google: "google_verification_code",
                    ahrefs: "ahrefs_verification_code",
                },
                openGraph: {
                    title: "Thoughtwin | Leading Software Development Solutions",
                    description: "Discover the best in tech solutions with Thoughtwin.",
                    url: "https://www.thoughtwin.com",
                    images: ["https://thoughtwin.com/assets/img/default-header.png"],
                },
                twitter: {
                    site: "@thoughtwin",
                    creator: "@thoughtwin",
                    card: "summary_large_image",
                    title: "Thoughtwin | Leading Software Development Solutions",
                    description: "Discover the best in tech solutions with Thoughtwin.",
                    image: "https://thoughtwin.com/assets/img/default-header.png",
                },
                canonical: "https://www.thoughtwin.com",
                favicon: "https://www.thoughtwin.com/favicon.ico",
            };

        default:
            return {
                title: "ThoughtWin - Expert Web and Mobile App Developers | USA, UK, Singapore",
                description: "Partner with ThoughtWin for cutting-edge web & mobile solutions.",
                website: "https://thoughtwin.com",
                keywords: ["web development, mobile app development, ThoughtWin"],
                verification: {
                    google: "google_verification_code",
                    ahrefs: "ahrefs_verification_code",
                },
                openGraph: {
                    title: "Thoughtwin | Leading Software Development Solutions",
                    description: "Discover the best in tech solutions with Thoughtwin.",
                    url: "https://www.thoughtwin.com",
                    images: ["https://thoughtwin.com/assets/img/default-header.png"],
                },
                twitter: {
                    site: "@thoughtwin",
                    creator: "@thoughtwin",
                    card: "summary_large_image",
                    title: "Thoughtwin | Leading Software Development Solutions",
                    description: "Discover the best in tech solutions with Thoughtwin.",
                    image: "https://thoughtwin.com/assets/img/default-header.png",
                },
                canonical: "https://www.thoughtwin.com",
                favicon: "https://www.thoughtwin.com/favicon.ico",
            };
    }
}

