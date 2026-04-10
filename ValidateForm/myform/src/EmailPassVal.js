import React, { useState } from "react";
function EmailPassVal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailerr, setEmailerr] = useState("");
  const [passerr, setPasserr] = useState("");
  const [message, setMessage] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    Validate();
  }

  function Validate() {
    let eErrorStr = "";
    let pErrorStr = "";

    if (!email.includes("@")) {
      eErrorStr = "inavlid email";
    }
    if (password.length < 6) {
      pErrorStr = "inavlid pass";
    }
    setEmailerr(eErrorStr);
    setPasserr(pErrorStr);

    if (!eErrorStr && !pErrorStr) {
      setMessage("Login Success");
    } else {
      setMessage("");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="entr name"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailerr && <p style={{ color: "red" }}>Invalid email</p>}
        <input
          type="text"
          placeholder="entr pass"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passerr && <p style={{ color: "red" }}>Invalid pass</p>}
        <button type="submit">Login</button>
        {message && <p style={{ color: "green" }}>{message}</p>}
      </form>
    </div>
  );
}

export default EmailPassVal;
