const form = document.getElementById("form");
const hexCode = document.getElementById("color");
const mode = document.getElementById("mode");
const submitBtn = document.getElementById("submit-btn");
const colorList = document.getElementById("color-list");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  getColors();
});

const getColors = () => {
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${hexCode.value.slice(
      1
    )}&format=json&mode=${mode.value}&count=5`
  )
    .then((res) => res.json())
    .then((data) => {
      const colorArr = data.colors;
      const hexCodes = data.colors;
      let colHtml = "";
      let hexHtml = "";
      colorArr.forEach((color) => {
        colHtml += `
        <div class="col" style="background-color:${color.hex.value}";></div>
        
        `;
      });
      hexCodes.forEach((color) => {
        hexHtml += `
        <div class="col-hex">${color.hex.value}</div>
        
        `;
      });
      colorList.innerHTML = colHtml;
      colorList.innerHTML += hexHtml;
    });
};

getColors();
