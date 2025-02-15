var user;


user = parseInt(prompt("Enter a Number: "));
if (user % 2 ==0){
    document.write("This Number is Even <br>");
}
    

else
{
    document.write("This Number is Odd <br>");
}

//Grade Calculation
var grade;
grade = parseInt(prompt("Enter Your Grade: "));
if (grade >=79){
    document.write("Your Grade is A+");
}
else if (grade >=69){
    document.write("Your Grade is A");
}
else if (grade >=59){
    document.write("Your Grade is A-");
}
else if (grade >=49){
    document.write("Your Grade is B");
}
else if (grade >=39){
    document.write("Your Grade is C");
}
else if (grade >=33){
    document.write("Only Pass");
}   
else{
    document.write("Tui Ekta Baler Student ");
}


