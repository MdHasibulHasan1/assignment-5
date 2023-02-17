let serial=0;
// triangle
document.getElementById('triangle-btn').addEventListener('click', function(){
    const triangleTitle= getElementFieldInnerText('triangle-title')
    const triangleBase = getInputFieldValue('triangle-base');
    const triangleHeight = getInputFieldValue('triangle-height');
    serial += 1;
    
    const areaOfTriangle= 0.5*triangleBase*triangleHeight;
    displayData(triangleTitle, areaOfTriangle);
    

})
// rectangle
document.getElementById('rectangle-btn').addEventListener('click', function(){
    const rectangleTitle= getElementFieldInnerText('rectangle-title')
    const rectangleWidth = getInputFieldValue('rectangle-width');
    const rectangleLength = getInputFieldValue('rectangle-length');
    serial += 1;
    
    const areaOfRectangle= rectangleWidth*rectangleLength;
    displayData(rectangleTitle, areaOfRectangle);

})
function getInputFieldValue(inputId){
    const valueInString=document.getElementById(inputId).value;
    if (isNaN(valueInString) || valueInString==='') {
        return alert('Enter a number');

    }
    else{
        document.getElementById(inputId).value="";
        return parseInt(valueInString);
    }

}
function getElementFieldInnerText(elementId){
    const innerTextInString=document.getElementById(elementId).innerText;
    return innerTextInString;
}


// rhombus
document.getElementById('rhombus-btn').addEventListener('click', function(){
    const rhombusTitle= getElementFieldInnerText('rhombus-title')
    const rhombusD1= getInputFieldValue('rhombus-d1');
    const rhombusD2 = getInputFieldValue('rhombus-d2');
    serial += 1;
    
    const areaOfRhombus=0.5*rhombusD1*rhombusD2;
    displayData(rhombusTitle, areaOfRhombus.toFixed(2));

})

// common function to display data
function displayData(title, area) {
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${serial}</td>
      <td>${title}</td>
      <td>${area}cm <sup>2</sup></td>
      <td>
      <button class="px-2 py-3 text-white rounded bg-blue-800">Covert to m<sup>2</sup></button>
      </td> 
      
    `;
    container.appendChild(tr);
    
  }







  function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}
console.log(generateRandomColor()); 
document.body.style.backgroundColor= generateRandomColor();


