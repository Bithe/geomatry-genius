function trainagleCal() {
  //base
  const bInput = document.getElementById("b");
  const bInputText = bInput.value;
  const bInputTextToNum = parseFloat(bInputText);

//   height
  const hInput = document.getElementById("h");
  const hInputText = hInput.value;
  const hInputTextToNum = parseFloat(hInputText);

  const area = 0.5 * bInputTextToNum * hInputTextToNum;

  const triangleArea = document.getElementById('triangle-area');
  triangleArea.innerText = area; 
}
