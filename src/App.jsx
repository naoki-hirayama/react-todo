import React from "react";

const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };

  return (
    <>
      <h1 style={{ color: "red" }}>hello</h1>
      <p style={contentStyle}>world</p>
      <button onClick={onClickButton}>buttun</button>
    </>
  );
};

export default App;
