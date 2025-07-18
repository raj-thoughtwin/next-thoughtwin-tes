export interface EmailFormProps {
    title: string;
    inputs: string[];
    setInputs: React.Dispatch<React.SetStateAction<string[]>>;
    isSubmitting: boolean;
    value: string;
    onSubmit: (values: any) => void;
    onClose: () => void;
  }