import { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  font-size: 1em;
  padding: 0.5em 1em;
  margin: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background: transparent;
  color: palevioletred;
  cursor: pointer;
  transition: all 0.3s ease; 

  &:hover {
    background: palevioletred;
    color: white;
  }
`;

const AnimatedButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transform: isHovered ? "scale(1.1)" : "scale(1)" }}
    >
      Hover Me!
    </Button>
  );
};

export default AnimatedButton;