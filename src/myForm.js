import { useState } from "react";
import "./myForm.css";

export default function MyForm() {
  const [inputs, setInputs] = useState({});
  // const [result1, setResult1] = useState("");
  // const [result2, setResult2] = useState("");
  // const [result3, setResult3] = useState("");
  const [result4, setResult4] = useState("");
  const [result5, setResult5] = useState("");
  const [result6, setResult6] = useState("");
  // const [result7, setResult7] = useState("");

  const style = {
    marginBottom: 2 + "em",
    marginLeft: 2 + "em",
  };

  function submitBtnView() {
    const calcForm = document.querySelector(".calcForm");
    const results = document.querySelector(".results");

    results.style.display = "block";
    calcForm.style.display = "none";
  }

  function resetBtnView() {
    window.location.reload();
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);

    // setResult1(
    //   `${(inputs.totalMix / inputs.totalPlants).toFixed(4)} mL of mix per plant`
    // );
    // setResult2(
    //   `${(
    //     (inputs.totalBleach / inputs.totalMix) *
    //     (inputs.totalMix / inputs.totalPlants)
    //   ).toFixed(4)} mL bleach per plant`
    // );
    // setResult3(
    //   `${(
    //     (inputs.totalPH / inputs.totalMix) *
    //     (inputs.totalMix / inputs.totalPlants)
    //   ).toFixed(4)} mL pH Down per plant`
    // );
    setResult4(
      `${((inputs.totalMix - inputs.totalMixLeft)).toFixed(
        2
      )} mL of mix used`
    );
    setResult5(
      `${(
        (inputs.totalBleach / inputs.totalMix) *
        (inputs.totalMix - inputs.totalMixLeft)
      ).toFixed(4)} mL bleach/nutrients used`
    );
    setResult6(
      `${(
        (inputs.totalPH / inputs.totalMix) *
        (inputs.totalMix - inputs.totalMixLeft)
      ).toFixed(4)} mL pH Down/Up used`
    );
    // setResult7(
    //   inputs.totalMixUsed
    // )
    submitBtnView();
  };

  return (
    <div style={{ justifyItems: "space-evenly" }}>
      <img
        className="merLogo"
        src="https://raw.githubusercontent.com/rndedg/Cultivation-Calculator/main/assets/merLogo.webp"
        alt="Merdian 125 Cultivation Ltd logo"
      ></img>
      <div className="calcForm">
        <h3>Enter your makeup:</h3>
        <br />
        <form onSubmit={handleSubmit}>
          <label>
            What is the total volume of your mix in mL?
            <input
              style={{
                marginTop: 1 + "em",
                marginBottom: 2 + "em",
                marginLeft: 2 + "em",
              }}
              type="number"
              name="totalMix"
              value={inputs.totalMix || ""}
              onChange={handleChange}
            />
          </label>
          <br />
          {/* <label>
            How many total plants are receiving mix?
            <input
              style={style}
              type="number"
              name="totalPlants"
              value={inputs.totalPlants || ""}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            How many plants in your current batch?
            <input
              style={style}
              type="number"
              name="currBatch"
              value={inputs.currBatch || ""}
              onChange={handleChange}
            />
          </label>
          <br /> */}
          <label>
            How much bleach/nutrients did you add to the mix?
            <input
              style={style}
              type="number"
              name="totalBleach"
              value={inputs.totalBleach || ""}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            How much pH Up/Down did you add to the total mix?
            <input
              style={style}
              type="number"
              name="totalPH"
              value={inputs.totalPH || ""}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            How much mix was left over?
            <input
              style={style}
              type="number"
              name="totalMixLeft"
              value={inputs.totalMixLeft || ""}
              onChange={handleChange}
            />
          </label>
          <br />
          <input className="submitBtn" type="submit" onClick={handleSubmit} />
        </form>
      </div>
      <div className="results">
        <h3>Here are your results:</h3>
        <br />
        {/* <p>{result1}</p>
        <p>{result2}</p>
        <p>{result3}</p> */}
        <p>{result4}</p>
        <p>{result5}</p>
        <p>{result6}</p>

        <input className="resetBtn" type="reset" onClick={resetBtnView} />
      </div>
    </div>
  );
}
