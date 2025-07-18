interface CaptchaProps {
    setCaptchaQuestion: React.Dispatch<React.SetStateAction<string>>;
    setCaptchaAnswer: React.Dispatch<React.SetStateAction<number | null>>;
  }
  
  export const generateCaptcha = ({
    setCaptchaQuestion,
    setCaptchaAnswer,
  }: CaptchaProps): void => {
    const operators = ["+", "-", "*"];
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operator = operators[Math.floor(Math.random() * operators.length)];
  
    let answer: number = 0;
  
    if (operator === "+") {
      answer = num1 + num2;
    } else if (operator === "-") {
      answer = num1 - num2;
    } else if (operator === "*") {
      answer = num1 * num2;
    }
  
    setCaptchaQuestion(`${num1} ${operator} ${num2} = ?`);
    setCaptchaAnswer(answer);
  };
  