import { DecrementByFive } from "./DecrementByFive";
import Division from "./Division";
import IncrementByFive from "./IncrementByFive";
import IncrementByThree from "./IncrementByThree";
import Minus from "./Minus";
import Multiplication from "./Multiplication";
import Plus from "./Plus";
import Result from "./Result";

function App() {
  return (
    <>
      <Result />
      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <Plus />
        <Minus />
        <IncrementByFive />
        <DecrementByFive />
        <Multiplication/>
        <Division/>
        <IncrementByThree/>
      </div>
    </>
  );
}

export default App;
