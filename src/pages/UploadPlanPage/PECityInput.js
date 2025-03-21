import React from "react";
import {
  PlusMinusBtn,
  PEInputForm,
  PESearchForm,
  PECity,
  BtnWrapper,
} from "./PECityInputStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const PECityInput = ({
  inputItems,
  inputAddId,
  AddInput,
  DeleteInput,
  onChange,
}) => {
  return (
    <PECity>
      {inputItems.map((item, index) => {
        return (
          <PESearchForm key={item.id}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />

            <PEInputForm
              name="city"
              type="text"
              defaultValue={item.one}
              onChange={(e) => onChange(e, item.id)}
            />

            {index > 0 && inputItems[index - 1] ? (
              <PlusMinusBtn key={item.id} onClick={() => DeleteInput(item.id)}>
                -
              </PlusMinusBtn>
            ) : (
              ""
            )}
          </PESearchForm>
        );
      })}
      <BtnWrapper>
        {inputItems.length < 6 && (
          <PlusMinusBtn onClick={() => AddInput()}> + </PlusMinusBtn>
        )}
      </BtnWrapper>
    </PECity>
  );
};

export default PECityInput;
