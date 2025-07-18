import { Document } from "@contentful/rich-text-types";
import { ServicePagesType } from "@/utility/generateMetaData";
import { StaticImageData } from "next/image";

export interface ServiceFormInterface {
    fname: string;
    lname: string;
    email: string;
    message: string;
    phone_number: string;
}

export interface SectionData {
    title: string;
    description: string;
    btn: string;
    img: StaticImageData;
    btnLink?: string;
    imgAlt?: string;
}

export interface TopSectionProps {
    topSectionData: SectionData[];
}

export interface AccordionAnswer {
    title: string;
    answ: string;
}

export interface AccordionItem {
    question: string;
    answer?: string;
    answers?: AccordionAnswer[];
}

export interface AccordianSectionData {
    title?: string;
    description?: string;
    accordianQue: AccordionItem[];
}

export interface AccordianSectionProps {
    accordianSectionData: AccordianSectionData[];
}

export interface HireDeveloperItem {
    heading: string;
    subheading: string;
    description: string;
    button: {
        label: string;
        link: string;
    };
    image: {
        src: string | StaticImageData;
        alt: string;
    };
}
export interface HireDeveloperSectionProps {
    hiredSectionData: {
        heading: string;
        subheading: string;
        description: string;
        button: {
            label: string;
            link: string;
        };
        image: {
            src: string | StaticImageData;
            alt: string;
        };
    }[];
}

export interface IndustryItem {
    title: string;
    subTitle?: string;
    description: string;
    projects: string;
    image: {
        src: string | StaticImageData;
        alt: string;
    };
}

export interface IndustriesSliderSectionProps {
    industriesSectionData: IndustryItem[];
    bgColor?: string;
}

export interface ProjectEstimateItem {
    title: string;
    subTitle: string;
    description: string;
}

interface authorData {
    fields: {
        name: string;
        description: string;
        profileImg: {
            fields: {
                file: {
                    url: string;
                };
            };
        };
    };
}
export interface HeadingTextNode {
    nodeType?: string;
    value?: string;
    data?: any;
    marks?: any[];
}
export interface Blog {
    id?: string | '';
    title?: string;
    createdAt?: string;
    blogger_image?: string;
    blogger_image_alt?: string;
    profile_image_alt?: string;
    about_blogger?: string;
    description?: string;
    content?: {

    }
    image?: {
        fields?: {
            file?: {
                url?: string;
            };
        };
    };

    user?: {
        full_name?: string;
        profile_image?: string;
    };

    tags?: {
        name?: string;
    }[];

    authorData?: {
        fields?: {
            name?: string;
            description?: string;
            tag?: string;
            profileImg?: {
                fields?: {
                    file?: {
                        url: string;
                    };
                };
            };
        };
    };

    heading?: {
        content: {
            content: {
                value?: string[];
            }[];
        }[];
    };
    paragraph?: {
        content?: {
            content?: {
                value?: string;
            }[];
        }[];
    };
}


export interface BlogItem {
    id?: string;
    image?: {
        fields?: {
            title?: string;
            description?: string;
            file?: {
                url: string;
            };
        };
    };
    heading?: {
        content?: {
            content?: {
                value?: string;
            }[];
        }[];
    };
    paragraph?: {
        content?: {
            content?: {
                value?: string;
            }[];
        }[];
    };
    authorName?: string;
    createdAt?: string;
}




export interface ContactUsResponse {
    message: string;
    ok?: string;
    contact: {
        fullName: string;
        email: string;
        phoneNumber: string;
        skypeWhatsapp?: string;
        description: string;
        services?: string[];
    };
}
export interface ChatBotResponse {
    name: string;
    phone: string;
    email: string;
    reason: string;
}
export interface CareerResponse {
    message: string;
    ok?: string;
    career: {
        name: string;
        email: string;
        phoneNumber: string;
        location: string;
        experience: string;
        skill: string;
        noticePeriod: string;
        reason: string;
        resume: string;
    }
}
export interface ServiceFormResponse {
    message?: string;
    success: string;
    contact: {
        fname: string;
        lname: string;
        email: string;
        phone_number: string;
        meassage: string;
    };
}

export interface ServicesPageProps {
    params: {
        servicesPages: ServicePagesType;
    };
}

export interface CareersJobPosting {
    id: string;
    title: string;
    location: string;
    experience: string;
    position: string;
    description: Document;
};

export interface Make {
    uniqueField: string;
    Prefix: string;
    Term: string;
    Make: string;
    CaseStudy?: string;
    Introduction: string;
    Stack: string;
    Approach: string;
    Ques1?: string;
    Ques2?: string;
    Ques3?: string;
}

export interface PrefixTerm {
    uniqueField: string;
    Prefix: string;
    Term: string;
    CaseStudy?: string;
    Introduction: string;
    Approach: string;
    Ques1?: string;
    Ques2?: string;
}
export interface PortfolioCaseStudy {
    title: string;
    deliveredBy: string;
    projectOverview: string;
    engineeringHighlights: string;
    engineeringDecisions: string;
    visualizationReporting: string;
    businessTransformation: string;
    whyThoughtWin: string;
    uniqueField: string;
}

export interface EmailResponse {
    email: string[];
    formType: string;
}
export interface MvpDevelopmentResponse {
    whatToDo: string;
    alreadyHave?: string;
    platformType: string;
    industry: string;
    solutionTypes: string[];
    startTime: string;
    name: string;
    email: string;
    phone?: string;
    message?: string;
}