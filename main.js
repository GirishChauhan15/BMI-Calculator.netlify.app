const weightElm = document.querySelector('#weightId');

const heightCentimeterEl = document.querySelector('#inputCentimeter');

const heightFeetEl = document.querySelector('#input1');
const heightInchesEl = document.querySelector('#input2');


const btnElm = document.querySelector('#btnId');
btnElm.addEventListener('click', calculateBMI);


const optEml = document.querySelector('#Output');
const optMsgEml = document.querySelector('#OutputMsg');


const btn2Elm = document.querySelector('#btn2Id');
btn2Elm.addEventListener('click', reset);


const dropDownEl = document.querySelector('#dropDown');
dropDownEl.addEventListener('change', selectOption);

const cemtiDivEl = document.querySelector('#container11'); 
const feetDivEl = document.querySelector('#container12'); 

feetDivEl.style.display = 'none';
cemtiDivEl.style.display = 'none';



function selectOption(){

        if(dropDownEl.value === 'cm'){
            cemtiDivEl.style.display = ''; 
            feetDivEl.style.display = 'none';
            heightFeetEl.value = '';
            heightInchesEl.value = '';
            heightCentimeterEl.value = '';

            
        } else if(dropDownEl.value === 'feet'){

            feetDivEl.style.display = '';
            cemtiDivEl.style.display = 'none';
            heightFeetEl.value = '';
            heightInchesEl.value = '';
            heightCentimeterEl.value = '';     

        } else{
            feetDivEl.style.display = 'none';
            cemtiDivEl.style.display = 'none';
            optEml.style.display = 'none';
            optMsgEml.style.display = 'none';
            weightElm.value ='';
            heightFeetEl.value = '';
            heightInchesEl.value = '';
            heightCentimeterEl.value = '';
        }
    }

    
    function calculateBMI(){

            var kg = parseFloat(weightElm.value);
            var cmValue = parseFloat(heightCentimeterEl.value);
            var feetValue = parseFloat(heightFeetEl.value);
            var inchesValue = heightInchesEl.value;

            optEml.style.display = '';
            optMsgEml.style.display = ''; 

            var bmiValueCentimeter;

            var bmiValueFeet;


            if(dropDownEl.value === 'cm'){
                
            // Centimeter Calculation
            var meterCenti = cmValue / 100;
            var meterSqrCenti = meterCenti * meterCenti;
            bmiValueCentimeter = (kg / meterSqrCenti).toFixed(1);
            
        
                if( bmiValueCentimeter === 'Infinity' || bmiValueCentimeter === 'NaN' || cmValue === '' || cmValue === 0 || kg === 0 && typeof(cmValue) === 'number' || kg === '' && typeof(cmValue) === 'number'){
                    optEml.style.display = 'none';
                    optMsgEml.innerHTML = `Please enter a valid input.`;
                } else if(bmiValueCentimeter > 0 && bmiValueCentimeter <= 18.4){
                    optEml.innerHTML = `BMI = ${bmiValueCentimeter}`;
                    optMsgEml.innerHTML = `Underweight`;

                } else if(bmiValueCentimeter <= 18.5 || bmiValueCentimeter <= 24.9){
                    optEml.innerHTML = `BMI = ${bmiValueCentimeter}`;
                    optMsgEml.innerHTML = `Normal`;

                } else if(bmiValueCentimeter <= 25.0 || bmiValueCentimeter <= 39.9){
                    optEml.innerHTML = `BMI = ${bmiValueCentimeter}`;
                    optMsgEml.innerHTML = `Overweight`;

                } else if(bmiValueCentimeter >= 40.0){
                    optEml.innerHTML = `BMI = ${bmiValueCentimeter}`;
                    optMsgEml.innerHTML = `Obese`;
                } else{
                    optEml.style.display = 'none';
                    optMsgEml.innerHTML = `Please enter a valid input.`;
                } 

            } else if(dropDownEl.value === 'feet'){
                // Feet Calculation
                var meterFeet = (feetValue * 30.48 + inchesValue * 2.54) / 100 ;
                var meterSqrFeet = meterFeet * meterFeet;
                bmiValueFeet = (kg / meterSqrFeet).toFixed(1);

                if( bmiValueFeet === 'Infinity' || bmiValueFeet === 'NaN' || feetValue === '' || feetValue === 0|| kg === 0 && typeof(feetValue) === 'number' || kg === '' && typeof(feetValue) === 'number'){
                    optEml.style.display = 'none';
                    optMsgEml.innerHTML = `Please enter a valid input.`;

                } else if(bmiValueFeet > 0 && bmiValueFeet <= 18.4){
                    optEml.innerHTML = `BMI = ${bmiValueFeet}`;
                    optMsgEml.innerHTML = `Underweight`;

                } else if(bmiValueFeet <= 18.5 || bmiValueFeet <= 24.9){
                    optEml.innerHTML = `BMI = ${bmiValueFeet}`;
                    optMsgEml.innerHTML = `Normal`;

                } else if(bmiValueFeet <= 25.0 || bmiValueFeet <= 39.9){
                    optEml.innerHTML = `BMI = ${bmiValueFeet}`;
                    optMsgEml.innerHTML = `Overweight`;

                }  else if(bmiValueFeet >= 40.0){
                    optEml.innerHTML = `BMI = ${bmiValueFeet}`;
                    optMsgEml.innerHTML = `Obese`;

                } else{
                    optEml.style.display = 'none';
                    optMsgEml.innerHTML = `Please enter a valid input.`;
                } 
            } 
            else {
                optEml.style.display = 'none';
                optMsgEml.innerHTML = `Please enter a valid input.`;
            }
    } 
            


function reset(){
    weightElm.value ='';
    heightFeetEl.value = '';
    heightInchesEl.value = '';
    heightCentimeterEl.value = '';

    optEml.style.display = 'none';
    optMsgEml.style.display = 'none';

    feetDivEl.style.display = 'none';
    cemtiDivEl.style.display = 'none';


    if(dropDownEl.value !== 'Select Unit'){
        dropDownEl.selectedIndex = 0;
    }
}