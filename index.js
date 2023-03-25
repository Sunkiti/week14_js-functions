function hello() {
    console.log("Я учу JavaScript!");
}
hello();
let catImage = document.getElementById("cats");
console.log(catImage);
function left() {
    catImage.style.backgroundImage =
    "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3lGf8UJgSU7Sk3HyEi6nPH3wEe6QxO6-TTg&usqp=CAU')"
}
let year = prompt('Это високосный год?', '');
if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
    alert('Год является високосным (366 дней)');
    } else {
    alert('Год не високосный (у него 365 дней).');
    }
    
