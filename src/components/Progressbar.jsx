import CircularProgress from "@mui/material/CircularProgress";
import styled from "styled-components";

const Progressbar = ({ value }) => {
  return (
    <MainWrapper>
      <CircularProgress
        sx={{
          color: "#29d7ac",
        }}
        style={{
          minWidth: "80px",
          minHeight: "80px",
          width: "7vw",
          height: "7vw",
        }}
        variant="determinate"
        value={value}
      />
      <div>{value}%</div>
    </MainWrapper>
  );
};

export default Progressbar;

const MainWrapper = styled.div`
  position: relative;
  text-align: center;
  font-weight: bold;

  & > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    fontsize: 12px;
    fontweight: bold;
    color: #333;
  }
`;
