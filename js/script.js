var sum = 0
do {
    var inp = prompt("Please enter a number")
    if (isNaN(inp) || inp === "") {
        alert("Invalid value, please enter a number");
        continue
    }
    var num = Number(inp)
    console.log(num)
    sum += num
    if (num === 0 || sum > 100) {
        break;
    }
}
while (true)
alert("Total sum is " + sum + ", goodbye :)");
