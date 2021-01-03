
function calculator ()
{
let quiz = document.getElementById("Quizes").Value;
let mid = document.getElementById("Midterm").Value;
let ft = document.getElementById("FinalTest").Value;
let oral = document.getElementById("Oral").Value;

let total = (quiz+mid+ft+oral);

let grade = document.getElementById("total_grades");

let submit= formatText(total);

grade.innerHTML = submit;

}
