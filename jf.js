function markbtn() {
let numberObtain = document.getElementById("marks").value;
let result;
if (numberObtain > 90) {
    result = "A+";    
} else if (numberObtain > 80) {
  result = "A";
}   else if (numberObtain > 65) {
    result = "B";    
} else if (numberObtain > 55) {
    result = "C";    
}else if (numberObtain > 45) {
    result = "D";    
}else if (numberObtain > 35) {
    result = "E";    
} else{
    result = "F";
}

document.getElementById("student_grade").innerText = result;
}