import React, { useEffect } from "react";

import { useSelector } from "react-redux";

const clearInput = () => {
  document.getElementById("myInput").value = null;
};
const fillInput = (country) => {
  document.getElementById("myInput").value = country;
};

function DropDown(props) {
  const countries = useSelector((state) => state.countries.countries);

  useEffect(() => {
    fillInput(props.country.name);
  }, [props.country]);

  return (
    <div className="header__dropdown">
      <input
        type="text"
        size="8"
        name="myInput"
        id="myInput"
        list="dropdown__countries"
        className="header__dropbtn"
        placeholder="Search Country"
        onChange={() => onchange()}
        onFocus={() => clearInput()}
        onDoubleClick={() => clearInput()}
        onBlur={() => fillInput(props.country.name)}
      />
      <datalist id="dropdown__countries">
        {props.countries.map((country) => (
          <option key={country.value + country.name} value={country.name} />
        ))}
      </datalist>
    </div>
  );
}

export default DropDown;
