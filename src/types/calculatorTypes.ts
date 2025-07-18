export interface FormDataType {
    industry?: string;
    industryDesc?: string;
    businessGoal?: string;
    releaseProjectDate?: string;
    platformType?: string;
    screenSize?: string;
    customDesign?: string;
    cloudPlateform?: string;
    appFeature: string[];
    appFeatureDesc?: string;
    additionalInfo?: string;
    projectDelivery?: string;
    [key: string]: any;
}
export interface MvpDevelopmentCalculatorStepProps {
    formData: FormDataType;
    setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
    selectedOption: string | string[];
    handleChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    handleBackFromResult?: () => void;
    handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
    isSubmitting?: boolean;
}

export interface FormDataTypeForSoftware {
    whatToDo: string;
    alreadyHave?: string;
    platformType?: string;
    industry?: string;
    industryDesc?: string;
    solutionTypes?: string[];
    solutionTypesDesc?: string;
    projectDelivery?: string;
    projectDeliveryDesc?: string;
    [key: string]: any;
}
export interface SoftwareDevelopmentCalculatorStepProps {
    formData: FormDataTypeForSoftware;
    setFormData: React.Dispatch<React.SetStateAction<FormDataTypeForSoftware>>;
    selectedOption: string;
    handleChange: (value: string) => void;
    setIsNextEnabled: (value: boolean) => void;
    handleBackFromResult?: () => void;
    handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
    isSubmitting?: boolean;
}

export interface StepOption {
    label: string;
    icon?: string;
    labelDes?: string;
}

export interface StepDataItem {
    title: string;
    options: StepOption[];
}

export interface SoftwareDevelopmentCalculatorStepNewProps {
    formData: FormDataTypeForSoftware;
    selectedOption: string;
    setFormData: React.Dispatch<React.SetStateAction<FormDataTypeForSoftware>>;
    allSelectedOptions: string[];
    // handleChange: (value: string) => void;
    handleChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    selectedStep2Option?: string;
    setIsNextEnabled: (value: boolean) => void;
}

export interface Role {
    label: string;
    count: number;
}

export interface RoleLevel {
    [level: string]: Role[];
}

export interface Step1Technology {
    [key: string]: RoleLevel[];
}

export interface Specialist {
    label?: string;
    selected?: boolean;
    count?: number;
}

export interface FormDataTypeForTeam {
    step1Technology: Step1Technology;
    step2Specialist?: Specialist[];
    step2SpecialistDesc?: string;
    needExtension?: string;
}

export interface TeamExtensionStepProps {
    formData: FormDataTypeForTeam;
    setFormData: React.Dispatch<React.SetStateAction<FormDataTypeForTeam>>;
    handleBackFromResult: () => void;
    handleSubmit: () => void;
    selectedOption: string;
    // handleChange: (value: string) => void
    handleChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    isSubmitting: boolean;
}

export interface ChatMessage {
    text: string;
    isBot: boolean;
    time: string;
  }
  


