import Android from "@/containers/(services)/Android";
import Ios from "@/containers/(services)/Ios";
import HomePage from "@/containers/Home";
import Angular from "@/containers/(services)/Angular";
import BlockChain from "@/containers/(services)/BlockChain";
import Flutter from "@/containers/(services)/Flutter";
import MeanStack from "@/containers/(services)/MeanStack";
import MernStack from "@/containers/(services)/MernStack/MernStack";
import Nodejs from "@/containers/(services)/NodeJs/NodeJs";
import Php from "@/containers/(services)/Php/Php";
import Python from "@/containers/(services)/Python/Python";
import ReactJs from "@/containers/(services)/ReactJs/ReactJs";
import ReactNative from "@/containers/(services)/ReactNative/ReactNative";
import Ror from "@/containers/(services)/Ror/Ror";
import SalesForce from "@/containers/(services)/SalesForce/SalesForce";

// Function to get the appropriate component based on the service
export function getServiceComponent(service: any) {
  switch (service?.uniqueField) {
    case "android":
      return Android;
    case "ios":
      return Ios;
    case "react-native":
      return ReactNative;
    case "ror":
      return Ror;
    case "angular":
      return Angular;
    case "block-chain":
      return BlockChain;
    case "flutter":
      return Flutter;
    case "mean-stack":
      return MeanStack;
    case "mern-stack":
      return MernStack;
    case "node-js":
      return Nodejs;
    case "php":
      return Php;
    case "python":
      return Python;
    case "react-js":
      return ReactJs;
    case "sales-force":
      return SalesForce;

    default:
      return HomePage;
  }
}
