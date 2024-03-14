import Button from "./components/Button";

const App = () => {
  return (
    <div>
      <h1>Ar norite pirkti obuolius?</h1>
      <Button backgroundColor="green">Pirkti obuolius</Button>
      <h2>Ar norite pirkti braskes?</h2>
      <Button>Pirkti braskes</Button>
    </div>
  );
};

export default App;