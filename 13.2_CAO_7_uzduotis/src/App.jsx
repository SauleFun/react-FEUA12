import Button from "./components/Button";
import Animation from "./components/Animation";
import AnimatedButton from "./components/AnimatedButton";
import StyledComponent from "./components/StyledComponent";

const App = () => {
  return (
    <div>
      <Button>Button</Button>
      <Animation>&lt; 😃 &gt;</Animation>

      <AnimatedButton></AnimatedButton>
      <div>
        <StyledComponent isActive={true}>Active</StyledComponent>
        <StyledComponent isActive={false}>Inactive</StyledComponent>
      </div>
    </div>
  );
};

export default App;