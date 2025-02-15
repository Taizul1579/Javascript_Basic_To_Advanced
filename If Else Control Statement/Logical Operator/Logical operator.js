var marks;

marks = parseInt(prompt("Enter your marks: "));

if (marks >100 || marks <0){                //jekuno 1 ta condition true holei output  true hobe
    document.write("Invalid marks");
}
else if (marks >= 80 && marks <= 100){
    document.write("A+");
}
else if (marks >= 70 && marks < 80){
    document.write("A");
} 
else if (marks >=60 && marks <70){
    document.write("A-");
}
else if (marks >=50 && marks <60){
    document.write("B")
}
else if (marks >=40 && marks <50){
    document.write("C")
}
else if (marks >=33 && marks <40){
    document.write("Only Pass")
}
else{
    document.write("Tor jonno Program kori nai tui fail ")
}