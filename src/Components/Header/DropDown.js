import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { changeSelectedCountry } from "../../redux/reducers/selectedCountry";

const clearInput = () => {
  document.getElementById("myInput").value = null;
};
const fillInput = (country) => {
  document.getElementById("myInput").value = country;
};

function DropDown() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countries);
  const selectedCountry = useSelector((state) => state.selectedCountry.country);

  useEffect(() => {
    fillInput(selectedCountry.name);
  }, [selectedCountry]);

  const onChange = (event) => {
    const { value } = event.target;
    let countryS = countries.find((c) => c.name === value);

    if (countryS !== undefined) {
      dispatch(changeSelectedCountry(countryS));
      document.activeElement.blur();
    }
  };

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
        onChange={(e) => onChange(e)}
        onFocus={() => clearInput()}
        onDoubleClick={() => clearInput()}
        onBlur={() => fillInput(selectedCountry.name)}
      />
      <datalist id="dropdown__countries">
        {countries.map((country) => (
          <option key={country.value + country.name} value={country.name} />
        ))}
      </datalist>
    </div>
  );
}

export default DropDown;
