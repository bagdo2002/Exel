import React, { useState, useEffect } from "react";
import Search from "../Search.json";

const Exel = () => {
  const [state, setState] = useState([]);
  const [answer, setAnswer] = useState(false);

  let jsonArray = [];

  for (let element of Search.department) {
    let dName = element.name;
    let gName = element.groups.map((a) => {
      a.manager.map((el) => {
        jsonArray.push({ dName: dName, gName: a.name, mName: el.name });
      });
    });
  }

  useEffect(() => {
    setState(jsonArray);
  }, []);

  const filter = (word, info) => {
    if (info.target.checked === true) {
      let result = state.filter((element) => element.gName !== word);

      setState(result);
    } else {
      let next = jsonArray.filter((element) => element.gName === word);
      console.log(11);
      setState([...next, ...state]);
    }
  };
  const filter2 = (word, info) => {
    if (info.target.checked === true) {
      let result = state.filter((element) => element.mName !== word);

      setState(result);
    } else {
      let next = jsonArray.filter((element) => element.mName === word);

      setState([...next, ...state]);
    }
  };
  const filter3 = (word, info) => {
    if (info.target.checked === true) {
      let result = state.filter((element) => element.dName !== word);

      setState(result);
    } else {
      let next = jsonArray.filter((element) => element.dName === word);

      setState([...next, ...state]);
    }
  };
  return (
    <div>
      <div className="container">
        <div className="inputBox">
          <div>
            {jsonArray.map((element, index) => {
              return (
                <div id={index}>
                  <label htmlFor="">{element.gName}</label>
                  <input
                    type="checkbox"
                    onClick={(info) => filter(element.gName, info)}
                  />
                </div>
              );
            })}
          </div>
          <div>
            {jsonArray.map((element, index) => {
              return (
                <div id={index}>
                  <label htmlFor="">{element.mName}</label>
                  <input
                    type="checkbox"
                    onClick={(info) => filter2(element.mName, info)}
                  />
                </div>
              );
            })}
          </div>{" "}
          <div>
            {jsonArray.map((element, index) => {
              return (
                <div id={index}>
                  <label htmlFor="">{element.dName}</label>
                  <input
                    type="checkbox"
                    onClick={(info) => filter3(element.dName, info)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {state?.map((element, index) => {
        return (
          <div id={index} className="box">
            <div> {element.dName}</div>
            <div> {element.gName}</div>
            <div> {element.mName}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Exel;
