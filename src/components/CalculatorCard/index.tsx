import Image from "next/image";
import { sendEvent } from "@/lib/ga";
import styles from "../../components/Calculator/calculator.module.scss";

interface Option {
  icon: string;
  label: string;
  labelDes: string;
  question?: string;
}

interface CalculatorCardProps {
  data: { options: Option[]; question: string };
  handleSelect?: (value: string) => void;
  selectedOption?: string | null;
}

const CalculatorCard = ({ data, handleSelect, selectedOption, handleChange }: any) => {
  return (
    <div>
      <div className="row">
        {data?.options?.map((option: any, index: number) => {
          const isActive = selectedOption === option.label;
          return (
            <div key={index} className="col-md-4">
              <div
                className={`${styles.step1Outer}`}
                onClick={() => {
                  handleSelect(option?.label);
                  handleChange(option?.label);
                  sendEvent({
                    action: "calculator_Card_click",
                    category: "cilck",
                    label: "Card Click",
                  });
                }}
              >
                <div className={`${styles.itemBox} ${isActive ? styles.active : ""}`}>
                  <Image
                    src={option.icon || "/placeholder.svg"}
                    alt={option.label || "Option image"}
                    title={option.label || "Option image"}
                    width={25}
                    height={25}
                  />
                  <h4>{option.label}</h4>
                  {option.labelDes && <p>({option.labelDes})</p>}
                </div>
                <div className={styles.ImgBoxOuter}></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalculatorCard;
