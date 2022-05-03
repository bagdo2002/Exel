import { useTheme } from "@emotion/react";
import { PanToolSharp } from "@material-ui/icons";
import React, { useEffect, useState } from "react";

import Select from "react-select";
import { colourOptions } from "./data";

export default Option = (props) => {
  const [dOption, setDoption] = useState([]);
  const [mOption, setMoption] = useState([]);
  const [gOption, setGoption] = useState([]);
  let count = 0;
  useEffect(() => {
    dOption.forEach((element) => {
      props.filter(element.value);
    });
    mOption.forEach((element) => {
      props.filter2(element.value);
    });
    gOption.forEach((element) => {
      props.filter3(element.value);
    });
  }, [dOption, gOption, mOption]);
  console.log();
  return (
    <div className="exel">
      <Select
        isMulti
        name="colors"
        options={props.group}
        onChange={setDoption}
        className="basic-multi-select"
        classNamePrefix="select"
      />{" "}
      <Select
        isMulti
        name="colors"
        options={props.manager}
        onChange={setMoption}
        className="basic-multi-select"
        classNamePrefix="select"
      />{" "}
      <Select
        isMulti
        name="colors"
        options={props.department}
        onChange={setGoption}
        className="basic-multi-select"
        classNamePrefix="select"
      />
    </div>
  );
};
