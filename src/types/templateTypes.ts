export interface UserDataEmailInterface {
    name: string;
    email: string;
    phoneNumber: string;
    currentLocation: string;
    relevantExperience: string;
    keySkills: string;
    noticePeriod: string;
    reasonForJobChange: string | null;
    resume: string;
}

export interface EmailAttachments {
    logo: string;         // URL or path to logo.png
    emailBanner: string;  // URL or path to email.png
    twitter: string;
    facebook: string;
    linkedin: string;
    instagram: string;
}
