// Paragrph.tsx
import React, { FunctionComponent, useState } from "react";
import styles from "./Paragrph.module.css";

interface ParagrphProps {
  onSwitchToMainBody: () => void;
}

const Paragrph: FunctionComponent<ParagrphProps> = ({ onSwitchToMainBody }) => {
  const [paragraphAnalysisResults, setParagraphAnalysisResults] = useState({
    charCount: 0,
    wordCount: 0,
    sentenceCount: 0,
    paragraphCount: 0,
    spaceCount: 0,
    punctuationCount: 0,
  });

  const updateParagraphAnalysis = (inputText: string) => {
    const charCount = inputText.length;
    const wordCount = inputText.split(/\s+/).filter(word => word.length > 0).length;
    const sentenceCount = inputText.split(/[.!?]/).filter(sentence => sentence.length > 0).length;
    const paragraphCount = inputText.split('\n').filter(paragraph => paragraph.length > 0).length;
    const spaceCount = inputText.split(' ').length - 1;
    const punctuationCount = (inputText.match(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g) || []).length;

    setParagraphAnalysisResults({
      charCount,
      wordCount,
      sentenceCount,
      paragraphCount,
      spaceCount,
      punctuationCount,
    });
  };

  const handleParagraphTextChange = (text: string) => {
    updateParagraphAnalysis(text);
  };

  return (
    <div className={styles.paragraphContainer}>
      {/* Input component for paragraph analysis */}
      <div className={styles.inputSection}>
        <textarea
          placeholder="Enter text for paragraph analysis"
          onChange={(e) => handleParagraphTextChange(e.target.value)}
        />
      </div>

      {/* Display paragraph analysis results as a table */}
      <div className={styles.analysisResults}>
        <h2>Paragraph Analysis:</h2>
        <table className={styles.analysisTable}>
          <tbody>
            <tr className={styles.row}>
              <td className={styles.columnName}>Character Count</td>
              <td className={styles.columnName}>Word Count</td>
              <td className={styles.columnName}>Sentence Count</td>
              <td className={styles.columnName}>Paragraph Count</td>
              <td className={styles.columnName}>Space Count</td>
              <td className={styles.columnName}>Punctuation Count</td>
            </tr>
            <tr className={styles.row}>
              <td className={styles.columnValue}>{paragraphAnalysisResults.charCount}</td>
              <td className={styles.columnValue}>{paragraphAnalysisResults.wordCount}</td>
              <td className={styles.columnValue}>{paragraphAnalysisResults.sentenceCount}</td>
              <td className={styles.columnValue}>{paragraphAnalysisResults.paragraphCount}</td>
              <td className={styles.columnValue}>{paragraphAnalysisResults.spaceCount}</td>
              <td className={styles.columnValue}>{paragraphAnalysisResults.punctuationCount}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Button to switch to MainBody component */}
      <div className={styles.buttonContainer}>
        <button onClick={onSwitchToMainBody}>Switch Menu</button>
      </div>
    </div>
  );
};

export default Paragrph;
