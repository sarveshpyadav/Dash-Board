import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";
import SmallHeader from "../components/SmallHeader";
import SmallNav from "../components/SmallNav";
const LeftSection = () => {
  return (
    <LeftWrapper>
      <Sidebar />
      <SmallHeader />
      <SmallNav />
      <Profile />
    </LeftWrapper>
  );
};

export default LeftSection;

const LeftWrapper = styled.div`
  display: flex;
  flex: 1;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;
