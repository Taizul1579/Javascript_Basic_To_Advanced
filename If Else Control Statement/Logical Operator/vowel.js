var char = prompt("Enter a character: ");
char = char.toLowerCase()

if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
    document.write(char + " is a vowel.");
} 

else if( char == 'b' || char == 'c' || char == 'd' || char == 'f' || char == 'g' || char == 'h' || char == 'j' || char == 'k' || char == 'l' || char == 'm' || char == 'n' || char == 'p' || char == 'q' || char == 'r' || char == 's' || char == 't' || char == 'v' || char == 'w' || char == 'x' || char == 'y' || char == 'z') {
    document.write(char + " is a consonant.");
}

else { 
    document.write("Invalid character is " + char);
}