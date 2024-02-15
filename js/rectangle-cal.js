function rectangleCal(){
    const wInput = document.getElementById('w');

    const wInputText = wInput.value;
    const wInputTextToNum = parseFloat(wInputText);

    const lInput = document.getElementById('l');
    const lInputText = lInput.value;
    const lInputTextToNum = parseFloat(lInputText);
    
    const area = wInputTextToNum * lInputTextToNum;

    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area;
}