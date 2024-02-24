import { useRef, useState } from "react";
import {
  PEWrapper,
  PETitleInput,
  PEContents,
  PEContentTitle,
  PEMap,
  PEMapWrapper,
  OpenDetailBtn,
  PEInputWrapper,
} from "./PlanEditorStyle";
import OpenDetailPlan from "./OpenDetailPlan";
import PEInput from "../../components/PEInput";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";

const PlanEditor = () => {
  const API_KEY = "AIzaSyDedTPh8y0kQKaWqEGKnPwXAMXhLeENOHU";

  const titleRef = useRef();
  const [title, setTitle] = useState();
  const [detailPlanOpen, setDetailPlanOpen] = useState(false);
  const [inputItems, setInputItems] = useState([
    {
      id: 0,
      city: "",
    },
  ]);
  const [inputAddId, setInputAddId] = useState(1);

  const toggleDetailPlan = () => {
    setDetailPlanOpen(!detailPlanOpen);
  };

  const AddInput = () => {
    if (inputItems.length < 6) {
      const input = {
        id: inputAddId,
        city: "",
      };
      setInputItems([...inputItems, input]);
      setInputAddId(inputAddId + 1);
    }
  };

  const DeleteInput = (id) => {
    setInputItems(inputItems.filter((item) => item.id !== id));
  };

  const onChange = (e, id) => {
    const { name, value } = e.target;

    setInputItems(
      inputItems.map((item) =>
        item.id === id ? { ...item, [name]: value } : item
      )
    );
  };

  return (
    <PEWrapper>
      <PETitleInput
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

        <PEMapWrapper>
          <PEMap>
            <iframe
              width="616px"
              height="378px"
              frameborder="0"
              src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=프랑스&zoom=6`} // "프랑스" 앞에서 가져오기
            />
          </PEMap>

          <PEInputWrapper>
            <PEInput
              inputItems={inputItems}
              inputAddId={inputAddId}
              AddInput={AddInput}
              DeleteInput={DeleteInput}
              onChange={onChange}
            />
            <OpenDetailBtn onClick={toggleDetailPlan}>
              {detailPlanOpen ? "상세계획 닫기" : "상세계획 열기"}
            </OpenDetailBtn>
          </PEInputWrapper>
        </PEMapWrapper>

        {detailPlanOpen && <OpenDetailPlan inputItems={inputItems} />}
      </PEContents>
    </PEWrapper>
  );
};

export default PlanEditor;
