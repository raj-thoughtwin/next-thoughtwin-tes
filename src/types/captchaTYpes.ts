
export interface GenerateCaptchaInputProps {
    label?: string;
    name?: string;
  }
  
  export interface CaptchaRef {
    validateCaptcha: () => boolean;
    regenerateCaptcha: () => void;
    clearInput: () => void;
  }