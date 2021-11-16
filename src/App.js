import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increamentA,
  increamentB,
  increamentB5,
  increamentA5,
  increamentAll,
} from "./action/index";
function App() {
  const myState = useSelector((state) => state.changeNumber.number);
  const myState2 = useSelector((state) => state.changeNumber.number2);
  const myState3 = useSelector((state) => state.changeNumber.number3);
  const myState4 = useSelector((state) => state.changeNumber.number4);
  const myState5 = useSelector((state) => state.changeNumber.number5);
  const dispatch = useDispatch();

  return (
    <>
      <h2 style={{ textAlign: "center" }}>
        Circular Slice Dependencies Example
      </h2>
      <ul style={{ width: "80%", margin: "auto" }}>
        <li>
          CounterA : <b>{myState}</b>
        </li>
        <li>
          CounterB : <b>{myState2}</b>
        </li>
        <li>
          add 5 to increamentA : <b>{myState4}</b>
        </li>
        <li>
          add 5 to increamentB : <b>{myState3}</b>
        </li>
        <li>
          add 5 to All : <b>{myState5}</b>
        </li>
      </ul>
      <div style={{ width: "80%", textAlign: "center", margin: "auto" }}>
        <button onClick={() => dispatch(increamentA(1))}>increamentA</button>
        <button onClick={() => dispatch(increamentB())}>increamentB</button>
        <button onClick={() => dispatch(increamentA5(5))}>increamentA5</button>
        <button onClick={() => dispatch(increamentB5(5))}>increamentB5</button>
        <button onClick={() => dispatch(increamentAll(5))}>
          increament A B
        </button>
      </div>
      <div style={{ width: "80%", textAlign: "center", margin: "auto" }}>
        <p style={{ fontWeight: "bold" }}>
          Google Fonts is a font embedding service library. This includes free
          and open source font families, an interactive web directory for
          browsing the library, and APIs for using the fonts via CSS and
          Android.
        </p>
      </div>
    </>
  );
}

export default App;
