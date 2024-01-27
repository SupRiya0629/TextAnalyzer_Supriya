// App.tsx
import React, { useState } from "react";
import ReactDOM from "react-dom";
import InputTabsAndFieldsVariant from "./components/InputTabsAndFieldsVariant";
import MainBody from "./components/MainBody";
import Paragrph from "./components/Paragrph";
import "./index.css";

const App: React.FC = () => {
  const [showMainBody, setShowMainBody] = useState<boolean>(false);
  const [activeAnalyzer, setActiveAnalyzer] = useState<"word" | "paragraph" | null>(null);

  const handleMoveToMainBody = (analyzer: "word" | "paragraph") => {
    setShowMainBody(true);
    setActiveAnalyzer(analyzer);
  };

  const handleSwitchToMainBody = () => {
    setShowMainBody(false);
    setActiveAnalyzer(null);
  };

  return (
    <div>
      {!showMainBody ? (
        <InputTabsAndFieldsVariant onMoveToMainBody={handleMoveToMainBody} />
      ) : activeAnalyzer === "word" ? (
        <MainBody onSwitchToParagraph={handleSwitchToMainBody} />
      ) : activeAnalyzer === "paragraph" ? (
        <Paragrph onSwitchToMainBody={handleSwitchToMainBody} />
      ) : null}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
