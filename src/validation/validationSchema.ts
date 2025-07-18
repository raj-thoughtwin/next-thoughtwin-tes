import * as Yup from "yup";

export const contactUsSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phoneNumber: Yup.string().min(10, "Invalid mobile number").required("Phone is required"),
    skypeWhatsapp: Yup.string().required("Skype/Whatsapp is required"),
    description: Yup.string().required("Message is required"),
});

export const serviceFormValidationSchema = Yup.object({
    fname: Yup.string().required("First name is required"),
    lname: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
    phone_number: Yup.string()
        .matches(/^[1-9]{1}[0-9]{9}$/, "Invalid phone number")
        .required("Phone number is required"),
});

export const applyNowValidationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phoneNumber: Yup.string()
        .matches(/^[1-9]{1}[0-9]{9}$/, "Invalid phone number")
        .required("Phone number is required"),
    currentLocation: Yup.string().required("Current location is required"),
    relevantExperience: Yup.string().required("Experience is required"),
    keySkills: Yup.string().required("Key skills are required"),
    noticePeriod: Yup.string().required("Notice period is required"),
    reasonForJobChange: Yup.string().required("Reason is required"),
    resume: Yup.mixed()
        .required("Resume is required")
        .test(
            "fileSize",
            "File size must be less than 10MB",
            (file) => {
                if (!file) return false;
                const typedFile = file as File;
                return typedFile.size <= 10 * 1024 * 1024;
            }
        )
        .test(
            "fileType",
            "Unsupported file format",
            (file) => {
                if (!file) return false;
                const typedFile = file as File;
                const allowedTypes = [
                    "application/pdf", // PDF
                    "application/msword", // DOC
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // DOCX
                    "application/vnd.ms-excel", // XLS
                    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // XLSX
                    "image/png", // PNG
                    "image/jpeg", // JPG, JPEG
                ];
                return allowedTypes.includes(typedFile.type);
            }
        ),
});

export const calcularResultFormSchema = Yup.object().shape({
    name: Yup.string().required("Name is required."),
    email: Yup.string().email("Email is invalid.").required("Email is required."),
    term: Yup.boolean().oneOf([true], "You must accept the terms and conditions."),
});