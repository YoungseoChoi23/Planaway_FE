import React from "react";
import {
  ODPWrapper,
  ODPCityUl,
  ODPCityLi,
  ODPDays,
  ODPDaysInput,
  OrangeBullet,
  ODPDetail,
} from "./PlanEditorStyle";

const OpenDetailPlan = ({ inputItems }) => {
  console.log("inputItems in OpenDetailPlan:", inputItems);
  return (
    <ODPWrapper>
      <ODPCityUl>
        {inputItems.map((item) => (
          <ODPCityLi key={item.id}>
            <OrangeBullet /> {item.city}
            <ODPDays>
              <ODPDaysInput type="text" placeholder="" />일
            </ODPDays>
          </ODPCityLi>
        ))}
      </ODPCityUl>
      <ODPDetail></ODPDetail>
    </ODPWrapper>
  );
};

export default OpenDetailPlan;
