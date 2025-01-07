import { useState } from "react";
function Calculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState();
  function add() {
    setResult(parseInt(num1) + parseInt(num2));
  }
  function subtract() {
    setResult(parseInt(num1) - parseInt(num2));
  }
  function multiply() {
    setResult(parseInt(num1) * parseInt(num2));
  }
  function divide() {
    setResult(parseInt(num1) / parseInt(num2));
  }
  function reset() {
    setNum1(0);
    setNum2(0);
    setResult();
  }
  return (
    <div className="bg-gray-200 p-4 ">
      <h1 className="text-[30px] font-bold text-blue-500 text-center">
        Calculators
      </h1>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        className="w-[300px] ml-[100px] mt-[20px] mr-[20px] text-red-500"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        className="w-[300px] ml-[100px] mt-[20px] mr-[20px]"
      />
      <button
        onClick={add}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
      >
        +
      </button>
      <button
        onClick={subtract}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
      >
        -
      </button>
      <button
        onClick={multiply}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
      >
        X
      </button>
      <button
        onClick={divide}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
      >
        %
      </button>
      <button
        onClick={reset}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4"
      >
        Reset
      </button>
      <p className="text-[30px] font-bold text-center pt-10">{result}</p>
    </div>
  );
}
export default Calculator;