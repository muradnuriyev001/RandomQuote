import quotesData from "../data/data.js";

export const allData = quotesData.map((e) => `"${e.quote}"-${e.author}`);

const generateRandomQuote = () => {
  const randomNumber = Math.floor(Math.random() * allData.length);
  const randomQuoteGenerator = allData[randomNumber];
  return randomQuoteGenerator;
};

export default generateRandomQuote;
