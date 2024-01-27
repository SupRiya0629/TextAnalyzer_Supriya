// InputTabsAndFieldsVariant.tsx
import React, { FunctionComponent } from "react";
import styles from "./InputTabsAndFieldsVariant.module.css";

interface WelcomeProps {
  onMoveToMainBody: (analyzer: "word" | "paragraph") => void;
}

const InputTabsAndFieldsVariant: FunctionComponent<WelcomeProps> = ({ onMoveToMainBody }) => {
  const handleAnalyzerBarClick = (analyzer: "word" | "paragraph") => {
    // Move to the MainBody component with the selected analyzer
    onMoveToMainBody(analyzer);
  };

  return (
    <div className={styles.inputTabsAndFieldsvariant3}>
      <h1>Welcome!</h1>
      <p>Thank you for using our application.</p>

      <div className={styles.sliderContainer}>
        {/* Slider for Word Analyzer */}
        <div className={styles.slider} onClick={() => handleAnalyzerBarClick("word")}>
          <div className={styles.sliderText}>Word</div>
        </div>

        {/* Slider for Paragraph Analyzer */}
        <div className={styles.slider} onClick={() => handleAnalyzerBarClick("paragraph")}>
          <div className={styles.sliderText}>Paragraph</div>
        </div>
      </div>
    </div>
  );
};

export default InputTabsAndFieldsVariant;
