import React, { useState, useEffect } from "react";
import Search from "../Search.json";
import Option from "./Option";

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
    let result = state.filter((element) => element.gName !== word);

    setState(result);
  };
  const filter2 = (word, info) => {
    let result = state.filter((element) => element.mName !== word);

    setState(result);
  };
  const filter3 = (word, info) => {
    let result = state.filter((element) => element.dName !== word);

    setState(result);
  };
  let boxDepartment = [];

  let boxGroup = [];
  let boxManager = [];
  let step1 = jsonArray.forEach((element, index) => {
    if (!boxDepartment.includes(element.dName)) {
      boxDepartment.push(element.dName);
    }
    if (!boxGroup.includes(element.gName)) {
      boxGroup.push(element.gName);
    }
    if (!boxManager.includes(element.mName)) {
      boxManager.push(element.mName);
    }
  });

  let department = [];
  let group = [];
  let manager = [];
  let step2 = boxDepartment.forEach((element) => {
    department.push({ value: element, label: element });
  });
  let step3 = boxManager.forEach((element) => {
    manager.push({ value: element, label: element });
  });
  let step4 = boxGroup.forEach((element) => {
    group.push({ value: element, label: element });
  });

  return (
    <div>
      <Option
        group={group}
        department={department}
        manager={manager}
        filter={filter}
        filter2={filter2}
        filter3={filter3}
      />
      <div className="container"></div>
      {state?.map((element, index) => {
        return (
          <div id={index} className="box">
            <div className="innerItem">
              <div> {element.dName}</div>
            </div>
            <div className="innerItem">
              <div> {element.gName}</div>
            </div>
            <div className="innerItem">
              <div> {element.mName}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Exel;
