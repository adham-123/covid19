import React, { useEffect, useState } from "react";

const clearInput = () => {
  document.getElementById("myInput").value = null;
};
const fillInput = (country) => {
  document.getElementById("myInput").value = country;
};

function DropDown(props) {
  useEffect(() => {
    fillInput(props.country.name);
  }, [props.country]);

  return (
    <div className="header__dropdown">
      <input
        size="8"
        id="myInput"
        list="dropdown__countries"
        className="header__dropbtn"
        placeholder="Search Country"
        onChange={props.changeCountry}
        onFocus={() => clearInput()}
        onClick={() => clearInput()}
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
