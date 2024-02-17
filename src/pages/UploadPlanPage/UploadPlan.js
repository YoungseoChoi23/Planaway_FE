import Header from "../../components/Header.js";
import PlanSideBar from "../../components/PlanSideBar.js";
import { Container } from "../../Layout";
import { UPWrapper } from "./PlanEditorStyle.js";
import PlanEditor from "./PlanEditor.js";

const UploadPlan = () => {
  return (
    <>
      <Header />
      <Container>
        <UPWrapper>
          <PlanSideBar />
          <PlanEditor />
        </UPWrapper>
      </Container>
    </>
  );
};

export default UploadPlan;
