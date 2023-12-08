import "./Main.css";
import { useState } from "react";
import generateRandomQuote, {
  allData,
} from "../../context/currentQuoteContext";
const Main = () => {
  const [currentQuote, setCurrentQuote] = useState(allData[1]);

  const changeCurrentQuote = () => {
    setCurrentQuote(generateRandomQuote);
  };

  console.log(generateRandomQuote);

  return (
    <div className="contentBox">
      <h1>{currentQuote}</h1>
      <button onClick={changeCurrentQuote}>Click</button>
    </div>
  );
};

export default Main;
