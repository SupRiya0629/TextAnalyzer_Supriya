// MainBody.tsx
import React, { FunctionComponent, useState } from "react";
import styles from "./MainBody.module.css";

interface AnalysisResults {
  charCount: number;
  wordCount: number;
  spaceCount: number;
  punctuationCount: number;
  paragraphCount?: number;
}

interface MainBodyProps {
  onSwitchToParagraph: () => void;
}

const MainBody: FunctionComponent<MainBodyProps> = ({ onSwitchToParagraph }) => {
  const [wordAnalysisResults, setWordAnalysisResults] = useState<AnalysisResults>({
    charCount: 0,
    wordCount: 0,
    spaceCount: 0,
    punctuationCount: 0,
    paragraphCount: 0,
  });

  const updateWordAnalysis = (inputText: string) => {
    const charCount = inputText.length;
    const wordCount = inputText.split(/\s+/).filter(word => word.length > 0).length;
    const spaceCount = inputText.split(' ').length - 1;
    const punctuationCount = (inputText.match(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g) || []).length;

    setWordAnalysisResults({
      charCount,
      wordCount,
      spaceCount,
      punctuationCount,
      paragraphCount: 0,
    });
  };

  const handleWordTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = e.target.value;
    updateWordAnalysis(inputText);
  };

  return (
    <div className={styles.mainBody}>
      {/* Input component for word analysis */}
      <div className={styles.inputSection}>
        <input
          type="text"
          placeholder="Enter text for word analysis"
          onChange={handleWordTextChange}
        />
      </div>

      {/* Display word analysis results as a table */}
      <div className={styles.analysisResults}>
        <h2>Word Analysis:</h2>
        <table className={styles.analysisTable}>
          <tbody>
            <tr className={styles.row}>
              <td className={styles.columnName}>Character Count</td>
              <td className={styles.columnName}>Word Count</td>
              <td className={styles.columnName}>Space Count</td>
              <td className={styles.columnName}>Punctuation Count</td>
            </tr>
            <tr className={styles.row}>
              <td className={styles.columnValue}>{wordAnalysisResults.charCount}</td>
              <td className={styles.columnValue}>{wordAnalysisResults.wordCount}</td>
              <td className={styles.columnValue}>{wordAnalysisResults.spaceCount}</td>
              <td className={styles.columnValue}>{wordAnalysisResults.punctuationCount}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Button to switch to Paragraph component */}
      <button onClick={onSwitchToParagraph}>Switch to Menu</button>
    </div>
  );
};

export default MainBody;
