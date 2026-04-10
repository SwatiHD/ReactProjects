import React from "react";

const Child = React.memo(({ onClick, label }) => {
  console.log("clciked the child", label);
  return <button onClick={onClick}>Click</button>;
});

export default Child;
