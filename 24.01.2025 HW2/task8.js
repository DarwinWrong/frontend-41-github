let score = 0;
const question1 = prompt("Яка столиця України?\n1) Львів\n2) Київ\n3) Харків");
if (question1 === "2") score += 2;
const question2 = prompt("Скільки буде 7+9?\n1) 16\n2) 15\n3) 17");
if (question2 === "1") score += 2;
const question3 = prompt("Скільки буде 2+2?\n1) 3\n2) 4\n3) 5");
if (question3 === "2") score += 2;

alert(`Ви набрали ${score} балів!`);