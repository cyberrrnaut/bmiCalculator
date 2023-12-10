const form = document.querySelector("form");


form.addEventListener('submit',function(s){
    s.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results =  document.querySelector('#results');
    const resultComment = document.querySelector('#resultscomment');
    if(height ===''|| height<0 || isNaN(height)){              // isNaN for checking is input is a number or not

     results.innerHTML = "Please Give a valid height";
    }else if(weight ===''|| weight<0 || isNaN(height)){        // isNaN for checking is input is a number or not

        results.innerHTML = "Please Give a valid Weight";
       } else{
              const bmi=  (weight/((height*height)/1000)).toFixed(2);

              results.innerHTML= `<span>${bmi}</span>`

       }
       const bmi=  (weight/((height*height)/1000)).toFixed(2);
       if(bmi< 18.6){
        resultComment.innerHTML="Under Weight";
       }else if(bmi>= 18.6 && bmi<24.9){
        resultComment.innerHTML="Normal Range";
       }else if(bmi>24.9){
        resultComment.innerHTML = "Overweight";
       }

})