import { useRef, useState } from "react";
import {
  PEWrapper,
  PTInput,
  PEContents,
  PEContentTitle,
} from "./PlanEditorStyle";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";

const PlanEditor = () => {
  const titleRef = useRef();
  const [title, setTitle] = useState();
  return (
    <PEWrapper>
      <PTInput
        placeholder="제목을 입력하세요."
        value={title}
        ref={titleRef}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
      />
      <hr />
      <PEContents>
        <PEContentTitle>
          <FontAwesomeIcon icon={faLocationArrow} size="lg" />
          <h4>첫 번째 여행지, 프랑스</h4>
        </PEContentTitle>
      </PEContents>
    </PEWrapper>
  );
};

export default PlanEditor;
