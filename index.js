console.log("Hello world");
console.log(2 + 3);
console.log(2 * 3);

let nome = "Gleidson Teixeira";
const dataNascimento = "07/09/1990";

document.write('<h1 class="bem-vindo">Bem-vindo '+nome+'</h1>');
document.write(`<h2>Nascido em: ${dataNascimento}</h2>`);

document.getElementsByTagName("h1")[0].style.color = "red";
document.write(nome);
document.write("<br>");
nome = "Suelen";
document.write(nome);
document.write(dataNascimento);