let serial=0;

// added blog button event listener
document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = '../question.html';
    document.body.style='display:none';
})

//Common function to Get Input Field Value
function getInputFieldValues(firstInputId, secondInputId){
    const firstValueInString=document.getElementById(firstInputId).value;
    const secondValueInString=document.getElementById(secondInputId).value;
    //Validation Check
    if (isNaN(firstValueInString) || isNaN(secondValueInString || firstValueInString==='' || secondValueInString==='' || firstValueInString<=0 || secondValueInString<=0)) {
        return alert('Enter positive Number in the input fields');
    }
    else if(firstValueInString>0 && secondValueInString>0) {
        document.getElementById(firstInputId).value="";
        document.getElementById(secondInputId).value="";
        const valueInNumber = {
            firstInputNumber:parseInt(firstValueInString),
            secondInputNumber:parseInt(secondValueInString)
        }
        return valueInNumber;
    }
    else{
        return alert('You have to give Positive number in the input fields');
    }
}
// Common function to get Element InnerText
function getElementFieldInnerText(elementId){
    const innerTextInString=document.getElementById(elementId).innerText;
    return innerTextInString;
}

// common function to display data
function displayData(title, area) {
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${serial}</td>
      <td>${title}</td>
      <td ><span class="areas">${area}cm</span><sup>2</sup></td>
      <td class="convert-btn">
      <button class="lg:px-2 md:p-1 text-white rounded bg-blue-800">Covert to m<sup>2</sup></button>
      </td>
      <td><i class="delete-btn fa-solid fa-delete-left"></i></td>
    `;
    container.appendChild(tr);
    // convert cm2 to m2
    const convertButtons = document.getElementsByClassName('convert-btn');
    for (const item of convertButtons) {
        item.addEventListener('click', function(e){
            e.target.innerText='done';
           const areas = document.getElementsByClassName('areas');
            for (const areaM2 of areas) {
                areaM2.innerHTML=`<span>${(parseInt(areaM2.innerText)*0.0001).toFixed(4)}<span>m</sup>`;
            }
        })
    }
    // Delete Item
  const items = document.getElementsByClassName('delete-btn');
  for (const item of items) {
    item.addEventListener('click', function(){
        item.parentElement.parentElement.style.display='none';
  })}
}
    
// triangle
document.getElementById('triangle-btn').addEventListener('click', function(){
    const triangleTitle= getElementFieldInnerText('triangle-title')
    const triangle = getInputFieldValues('triangle-base', 'triangle-height');
    const triangleBase = triangle.firstInputNumber;
    const triangleHeight = triangle.secondInputNumber;
    serial += 1;
    const areaOfTriangle= 0.5*triangleBase*triangleHeight;
    displayData(triangleTitle, areaOfTriangle.toFixed(2));
})
// rectangle
document.getElementById('rectangle-btn').addEventListener('click', function(){
    const rectangleTitle= getElementFieldInnerText('rectangle-title')
    const rectangle = getInputFieldValues('rectangle-width', 'rectangle-length');
    const rectangleWidth = rectangle.firstInputNumber;
    const rectangleLength = rectangle.secondInputNumber;
    serial += 1;
    
    const areaOfRectangle= rectangleWidth*rectangleLength;
    displayData(rectangleTitle, areaOfRectangle.toFixed(2));
})
// parallelogram
document.getElementById('parallelogram-btn').addEventListener('click', function(){
    const parallelogramTitle= getElementFieldInnerText('parallelogram-title')
    const  parallelogram = getInputFieldValues('parallelogram-base', 'parallelogram-height');
    const parallelogramBase = parallelogram.firstInputNumber;
    const  parallelogramHeight = parallelogram.secondInputNumber;
    serial += 1;
    
    const areaOfParallelogram= parallelogramBase*parallelogramHeight;
    displayData(parallelogramTitle, areaOfParallelogram.toFixed(2));
})
// rhombus
document.getElementById('rhombus-btn').addEventListener('click', function(){
    const rhombusTitle= getElementFieldInnerText('rhombus-title')
    const  rhombus = getInputFieldValues('rhombus-d1', 'rhombus-d2');
    const rhombusD1 = rhombus.firstInputNumber;
    const  rhombusD2 = rhombus.secondInputNumber;
    serial += 1;
    
    const areaOfRhombus=0.5*rhombusD1*rhombusD2;
    displayData(rhombusTitle, areaOfRhombus.toFixed(2));
})
// pentagon
document.getElementById('pentagon-btn').addEventListener('click', function(){
    const pentagonTitle= getElementFieldInnerText('pentagon-title')
    const  pentagon = getInputFieldValues('pentagon-p', 'pentagon-b');
    const pentagonP = pentagon.firstInputNumber;
    const pentagonB = pentagon.secondInputNumber;
    serial += 1;

    const areaOfPentagon=0.5*pentagonP*pentagonB;
    displayData(pentagonTitle, areaOfPentagon.toFixed(2));
})
// ellipse
document.getElementById('ellipse-btn').addEventListener('click', function(){
    const ellipseTitle= getElementFieldInnerText('ellipse-title')
    const  ellipse = getInputFieldValues('ellipse-a', 'ellipse-b');
    const ellipseA = ellipse.firstInputNumber;
    const ellipseB = ellipse.secondInputNumber;
    const PI= 3.1416;
    serial += 1;

    const areaOfEllipse=PI* ellipseA* ellipseB;
    displayData(ellipseTitle, areaOfEllipse.toFixed(2));
})

// Add Random Background Color in the cards
  function generateRandomColor(){
    let maxVal = 0xFFFFFF; 
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}
const cards=document.getElementsByClassName('card');
for (const card of cards) {
    card.addEventListener('mouseenter', function(){
        card.style.backgroundColor= generateRandomColor();
    })
}

