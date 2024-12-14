import React, { useState, useRef } from "react";  // Ensure React is properly imported

import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import "./Course&TestPages.css";
import CustomizedProgressBars from "../StudentProfilePages/Progress";
import bear from "../../images/Course&TestPages/bear.svg";


function QuestionFour() {

    // Hooks should be called inside the function component
    const [selected, setSelected] = useState({}); // State to track the selected items
    const [lines, setLines] = useState([]); // State to store the drawn lines
    const leftRefs = useRef([]); // Refs for the left column items
    const rightRefs = useRef([]); // Refs for the right column items
    const svgRef = useRef(null); // Ref for the SVG container to draw lines
  
    // Function to handle item selection
    const handleSelect = (column, index, value) => {
      if (!selected.column) {
        setSelected({ column, index, value }); // Set the first selection
      } else {
        if (selected.column !== column) {
          const isMatch = selected.value === value; // Check if the items match
          setLines((prevLines) => [
            ...prevLines,
            {
              left: column === "left" ? index : selected.index,
              right: column === "right" ? index : selected.index,
              matched: isMatch,
            },
          ]);
          setSelected({}); // Reset selected state
        }
      }
    };
  
    // Function to get the line coordinates for drawing
    const getLineCoordinates = (leftIndex, rightIndex) => {
      const left = leftRefs.current[leftIndex];
      const right = rightRefs.current[rightIndex];
      const svg = svgRef.current;
  
      if (left && right && svg) {
        const leftRect = left.getBoundingClientRect();
        const rightRect = right.getBoundingClientRect();
        const svgRect = svg.getBoundingClientRect();
  
        return {
          x1: leftRect.right - svgRect.left,
          y1: leftRect.top + leftRect.height / 2 - svgRect.top,
          x2: rightRect.left - svgRect.left,
          y2: rightRect.top + rightRect.height / 2 - svgRect.top,
        };
      }
      return null;
    };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="asside">
        <div className="container-fluid px-0">
          <div className="row">
            <div className="col-12">
              <div className="student-edit-main">
                <div className="student-profile-heading">
                  <Link to={"/Home"}>
                    <i className="fa-solid fa-left-long"></i>
                  </Link>
                  <h2>Foundations of English - Alphabets - 1</h2>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="bear-bars">
                <CustomizedProgressBars />
                <div className="bear-text">
                  <p>1/25</p>
                  <div className="bear-img">
                    <img src={bear} className="img-fluid" alt="Bear" />
                  </div>
                </div>
              </div>
              <div className="Question-bg">
                <div className="question-heading">
                  <h5>Question no. 3</h5>
                  <h3>Match the following</h3>
                </div>
                <div>
                <div className="page">
      <div className="row Four-margin">
        {/* Left Column */}
        <div className="col-3">
          <div className="wrapper">
            <label htmlFor="QuestionOne">
              <input
                type="radio"
                id="QuestionOne"
                name="alignment"
                defaultValue="QuestionOne"
                className="peer radio"
                onClick={() => handleSelect("left", 0, "Tomato")}
              />
              <div className="icon right" ref={(el) => (leftRefs.current[0] = el)}>
                Tomato
              </div>
            </label>
          </div>
        </div>
        <div className="col-3">
          <div className="wrapper">
            <label htmlFor="QuestionTwo">
              <input
                type="radio"
                id="QuestionTwo"
                name="alignment"
                defaultValue="QuestionTwo"
                className="peer radio"
                onClick={() => handleSelect("left", 1, "Apple")}
              />
              <div className="icon" ref={(el) => (leftRefs.current[1] = el)}>
                Apple
              </div>
            </label>
          </div>
        </div>
        <div className="col-3">
          <div className="wrapper">
            <label htmlFor="QuestionThree">
              <input
                type="radio"
                id="QuestionThree"
                name="alignment"
                defaultValue="QuestionThree"
                className="peer radio"
                onClick={() => handleSelect("left", 2, "Banana")}
              />
              <div className="icon" ref={(el) => (leftRefs.current[2] = el)}>
                Banana
              </div>
            </label>
          </div>
        </div>
        <div className="col-3">
          <div className="wrapper">
            <label htmlFor="QuestionFour">
              <input
                type="radio"
                id="QuestionFour"
                name="alignment"
                defaultValue="QuestionFour"
                className="peer radio"
                onClick={() => handleSelect("left", 3, "Grapes")}
              />
              <div className="icon" ref={(el) => (leftRefs.current[3] = el)}>
                Grapes
              </div>
            </label>
          </div>
        </div>
      </div>
      <div className="row">
        {/* Right Column */}
        <div className="col-3">
          <div className="wrapper">
            <label htmlFor="QuestionFive">
              <input
                type="radio"
                id="QuestionFive"
                name="alignmentt"
                defaultValue="QuestionFive"
                className="peer radio"
                onClick={() => handleSelect("right", 0, "Grapes")}
              />
              <div className="icon" ref={(el) => (rightRefs.current[0] = el)}>
                Grapes
              </div>
            </label>
          </div>
        </div>
        <div className="col-3">
          <div className="wrapper">
            <label htmlFor="QuestionSix">
              <input
                type="radio"
                id="QuestionSix"
                name="alignmentt"
                defaultValue="QuestionSix"
                className="peer radio"
                onClick={() => handleSelect("right", 1, "Tomato")}
              />
              <div className="icon" ref={(el) => (rightRefs.current[1] = el)}>
                Tomato
              </div>
            </label>
          </div>
        </div>
        <div className="col-3">
          <div className="wrapper">
            <label htmlFor="QuestionSeven">
              <input
                type="radio"
                id="QuestionSeven"
                name="alignmentt"
                defaultValue="QuestionSeven"
                className="peer radio"
                onClick={() => handleSelect("right", 2, "Apple")}
              />
              <div className="icon" ref={(el) => (rightRefs.current[2] = el)}>
                Apple
              </div>
            </label>
          </div>
        </div>
        <div className="col-3">
          <div className="wrapper">
            <label htmlFor="QuestionEight">
              <input
                type="radio"
                id="QuestionEight"
                name="alignmentt"
                defaultValue="QuestionEight"
                className="peer radio"
                onClick={() => handleSelect("right", 3, "Banana")}
              />
              <div className="icon" ref={(el) => (rightRefs.current[3] = el)}>
                Banana
              </div>
            </label>
          </div>
        </div>
      </div>

      {/* SVG to draw lines */}
      <svg
        ref={svgRef}
        className="match-svg"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
        }}
      >
        {lines.map((line, index) => {
          const coords = getLineCoordinates(line.left, line.right);
          return coords ? (
            <line
              key={index}
              x1={coords.x1}
              y1={coords.y1}
              x2={coords.x2}
              y2={coords.y2}
              stroke={line.matched ? "green" : "red"}
              strokeWidth="3"
              strokeDasharray={line.matched ? "0" : "5,5"}
            />
          ) : null;
        })}
      </svg>

      {/* Button */}
      <div className="col-12">
        <div className="justify-content-center d-flex mt-3">
          <Link to="/QuestionFive" className="btn btn-s-email w-50">
            आगे बढ़ो
          </Link>
        </div>
      </div>
    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuestionFour;
