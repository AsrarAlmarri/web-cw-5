

function submit()

{

    let quiz = document.getElementById(`Quizes`).value;
 

    let mid = document.getElementById(`Midterm`).value;
    
    let finals = document.getElementById(`FinalTest`).value;
    
    let oral = document.getElementById(`Oral`).value;

    let a = document.getElementById("A");

    // let b = document.getElementById("B");

    // let c = document.getElementById("C");

    // let d = document.getElementById("D");

    // let f = document.getElementById("F");

   let calc =(quiz*100)+(mid*100)+(finals*100)+(oral*100);

let finalG = calc/400;

let total = document.getElementById('total_grades');
total.innerText =`${finalG}`;

if( finalG == 100 || finalG >=90)
{
    document.getElementById(`final_grade`).innerText = "A";
    
    
    
     
    a.setAttribute("src", "./A.gif");

  }
  else if( finalG >= 80)
  {
   document.getElementById(`final_grade`).innerText = "B";

  }
  else if (finalG>= 70)
  {
   document.getElementById(`final_grade`).innerText =" C";

  }
  else if (finalG >= 60)
  {
      document.getElementById(`final_grade`).innerText =" D";
  }

  else
  {
   document.getElementById(`final_grade`).innerText =" F ";
  }

 }