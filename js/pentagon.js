function getInputValue(id) {
  const input = document.getElementById(id);
  const inputValue = input.value;
  const inputValueToNum = parseFloat(inputValue);
  return inputValueToNum;
}

function pentagonCal() {
  const pentagonPerimeter = getInputValue("pentagon-perimeter");
  const pentagonApothem = getInputValue("pentagon-apothem");
  const area = 0.5 * pentagonPerimeter * pentagonApothem;
  showPentagonResult("pentagon-area", area);
}

function showPentagonResult(elementId, area) {
  const pentagonArea = document.getElementById(elementId);
  pentagonArea.innerText = area;
}
