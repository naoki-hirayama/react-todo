import React from "react";
import ColorfullMessage from "./components/ColorfullMessage";

const App = () => {
  const onClickButton = () => alert();

  return (
    <>
      <h1 style={{ color: "red" }}>hello</h1>
      <ColorfullMessage color="blue" message="お元気ですか？" />
      <ColorfullMessage color="pink" message="お元気です!" />
      <button onClick={onClickButton}>buttun</button>
    </>
  );
};

export default App;
