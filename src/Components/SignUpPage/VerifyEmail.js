import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import "./SignUpPage.css";

function VerifyEmail() {
  const [inputs, setInputs] = useState(new Array(5).fill(""));
  const [inputArr, setInputArr] = useState(inputs);
  const refs = useRef(inputs.map(() => React.createRef()));

  const handleInput = (event, index) => {
    const val = event.target.value;
    if (!Number(val)) return;

    const copyArray = [...inputArr];
    copyArray[index] = val;
    setInputArr(copyArray);
    if (index < inputArr.length - 1) {
      refs.current[index + 1].current.focus();
    }
  };

  const handleKey = (event, index) => {
    if (event.key === "Backspace") {
      const copyArr = [...inputArr];

      // Check if the current input is already empty
      if (copyArr[index] === "") {
        if (index > 0) {
          refs.current[index - 1].current.focus(); // Move focus to the previous input
        }
      } else {
        // Clear the current input and update state
        copyArr[index] = "";
        setInputArr(copyArr);
      }
    }
    if (index < inputArr.length - 1) {
      if (event.keyCode === 39) {
        refs.current[index + 1].current.focus();
      }
    }
    if (index > 0) {
      if (event.keyCode === 37) {
        refs.current[index - 1].current.focus();
      }
    }
  };

  const handlePaste = (event) => {
    const data = event.clipboardData.getData("text");
    const dataArr = data.split("").slice(0, inputArr.length); // Limit to input length
    setInputArr(dataArr);

    if (dataArr.length < inputArr.length) {
      refs.current[dataArr.length].current.focus();
    } else {
      refs.current[inputArr.length - 1].current.focus();
    }
  };

  useEffect(() => {
    refs.current[0].current.focus();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container py-100 px-150">
        <div className="get-start-singUp">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="verify-email-heading">
                <h2>Verify your Email</h2>
                <p>We’ve sent an email with a verification code to</p>
                <p> your email test@gmail.com</p>
              </div>
            </div>
            <div className="col-12">
              <div className="email-input">
                {inputs.map((currValue, index) => {
                  return (
                    <input
                      type="text"
                      ref={refs.current[index]}
                      value={inputArr[index]}
                      maxLength="1"
                      key={index}
                      onPaste={handlePaste}
                      onKeyDown={(event) => handleKey(event, index)}
                      onChange={(event) => handleInput(event, index)}
                    />
                  );
                })}
              </div>
              <div className="email-time">
                <p>
                  Resend code in <span>00:12</span>
                </p>
              </div>
              <div className="">
                <Link to={"/AddProfile"} className="btn btn-s-email w-100">
                  Continue{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VerifyEmail;
