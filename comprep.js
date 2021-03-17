var num1=(prompt("Enter the num1: "));
var num2=(prompt("Enter the num2: "));

document.write(` <p> 1st Number: ${num1} </p>
<p> 2nd Number: ${num2} </p>`);

document.write(
    `<p>${num1}+${num2}=${num1+num2}</p>`,
    `<p>${num1}-${num2}=${num1-num2}</p>`,
    `<p>${num1}*${num2}=${num1*num2}</p>`,
    `<p>${num1}/${num2}=${num1/num2}</p>`
);
