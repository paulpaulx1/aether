import React from 'react';

export function Slider() {
  // function updateSlider(slideAmount) {
  //     var sliderDiv = document.getElementById("sliderAmount");
  //     sliderDiv.innerHTML = slideAmount;

  return (
    <div className="slider">
      <input
        className="sliderchild"
        type="range"
        min="0"
        max=".15"
        defaultValue=".075"
        step="0.005"
        id="slider"
        orient="horizontal"
        style={{ right: '40' }}
      ></input>
      <div className="sliderchild">tempo</div>
    </div>
  );
}
