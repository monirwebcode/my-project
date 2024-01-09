



function checkAge(){
  let age=parseInt(document.getElementById("input_age").value);

  

  let child_card =document.getElementById('child_card');
  let adult_card =document.getElementById('adult_card');

  if (age<18){
    child_card.style.display='block';
    adult_card.style.display='none';
  }
  if(age>18){
    adult_card.style.display='block';
    child_card.style.display='none';
  }
}
