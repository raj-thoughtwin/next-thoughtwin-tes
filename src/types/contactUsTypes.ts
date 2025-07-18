export interface ContactUsOfficeData {
    title: string;
    address: string;
    contact: string;
    email: string;
}

export interface ContactUsFromInterface {
    fullName: string;
    email: string;
    phoneNumber: string;
    skypeWhatsapp: string;
    description: string;
    services?: string[];
}

export interface ServiceFromInterface {
    fname: string;
    lname: string;
    email: string;
    phone_number: string;
    meassage: string;
}