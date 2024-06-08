"use client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import run from "@/config/gemini";

interface GeminiContextType {
  sentQuery: (prompt: string) => Promise<void>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  showResults: boolean;
  setShowResults: Dispatch<SetStateAction<boolean>>;
  resultData: string;
  setResultData: Dispatch<SetStateAction<string>>;
}

const geminiContext = createContext<GeminiContextType | undefined>(undefined);

const GeminiContextProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [resultData, setResultData] = useState<string>("");

  const delayParam = (index: number, nextWord: string) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };

  async function sentQuery(prompt: string) {
    try {
      setIsLoading(true);
      const res = await run(prompt);
      let resArray: Array<string> = res.split("**");
      console.log(resArray);
      let newRes: string = "";
      for (let i = 0; i < resArray.length; i++) {
        if (i === 0 || i % 2 !== 1) {
          newRes += resArray[i];
        } else {
          newRes += "<b>" + resArray[i] + "</b>";
        }
      }

      let finalRes = newRes.split("*").join("</br>");
      let finalResArray = finalRes.split(" ");
      for (let i = 0; i < finalResArray.length; i++) {
        const nextWord = finalResArray[i];
        delayParam(i, nextWord + " ");
      }

      setResultData(finalRes);
      setShowResults(true);
      setIsLoading(false);
    } catch (err: any) {
      console.log(err.message);
    }
  }

  return (
    <geminiContext.Provider
      value={{
        sentQuery,
        isLoading,
        setIsLoading,
        showResults,
        setShowResults,
        resultData,
        setResultData,
      }}
    >
      {children}
    </geminiContext.Provider>
  );
};

export const useGeminiContext = () => {
  const context = useContext(geminiContext);
  if (context === undefined) {
    throw new Error(
      "useGeminiContext must be used within a GeminiContextProvider"
    );
  }
  return context;
};

export default GeminiContextProvider;
