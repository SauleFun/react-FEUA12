import styled from "styled-components";

const StyledComponent = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => (props.isActive ? "blue" : "orange")};
  color: ${(props) => (props.isActive ? "white" : "black")};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default StyledComponent;