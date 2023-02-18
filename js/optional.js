
// triangle
document.getElementById('triangle-visible-icon').addEventListener('click', function(){
    visibilityControl('hidden-triangle-input-field');
})

document.getElementById('triangle-check-box').addEventListener('click', function(){
    setInputFieldValue('triangle-base', 'triangle-height', 'set-triangle-first-input', 'set-triangle-second-input')
})
// rectangle
document.getElementById('rectangle-visible-icon').addEventListener('click', function(){
    visibilityControl('hidden-rectangle-input-field');
})

document.getElementById('rectangle-check-box').addEventListener('click', function(){
    setInputFieldValue('rectangle-width', 'rectangle-length', 'set-rectangle-first-input', 'set-rectangle-second-input')
})
// parallelogram
document.getElementById('parallelogram-visible-icon').addEventListener('click', function(){
    visibilityControl('hidden-parallelogram-input-field');
})
document.getElementById('parallelogram-check-box').addEventListener('click', function(){
    setInputFieldValue('parallelogram-base', 'parallelogram-height', 'set-parallelogram-first-input', 'set-parallelogram-second-input')
})

// common function to Check input data And Set input field value to the top
function setInputFieldValue(takeFirstInputId, takeSecondInputId, firstSetupFieldId, secondSetupFieldId){
    const firstInputValue=document.getElementById(takeFirstInputId).value;
        const secondInputValue=document.getElementById(takeSecondInputId).value;
        if (isNaN(firstInputValue) || firstInputValue==='' || firstInputValue<=0 || isNaN(secondInputValue) || secondInputValue ==='' || secondInputValue<=0) {
            alert('You have to give Positive number in the input fields')
        }
        else{
            document.getElementById(firstSetupFieldId).innerText= firstInputValue;
            document.getElementById(secondSetupFieldId).innerText= secondInputValue;
        }
}
// Common function 
function visibilityControl(elementId){
    const inVisibleField = document.getElementById(elementId);
    inVisibleField.classList.toggle('invisible');
    if (inVisibleField.style.visibility =='hidden') {
        inVisibleField.style.visibility = 'visible';
    }
}
