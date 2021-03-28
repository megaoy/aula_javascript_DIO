/*
var nome = "Eduardo Sousa";
var idade = 29;
var idade2 = 10;
var frase ="Japão é o melhor time to mundo!";
alert(nome + " tem " + idade + " anos");
alert(idade + idade2);

console.log(nome);
console.log(idade+idade2);
console.log(frase.replace("Japão","Brasil"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());


var lista = ["maçã","pera","laranja"];
console.log(lista);
lista.push("uva");
console.log(lista);
lista.pop();
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - "));

var fruta = {nome:"mação",cor:"vermelha"};
console.log(fruta.nome)
console.log(fruta.cor)

var frutas = [{nome:"mação",cor:"vermelha"},{nome:"uva",cor:"roxa"}];
console.log(frutas[1].nome)
console.log(frutas[1].cor)
*/
/*
var idade = prompt("Qual é sua idade ?");

if(idade >= 18){
    console.log("maior de idade");
}
else{
    console.log("menor de idade");
}
*/
/*
var count = 0;
while(count < 6){
    console.log(count);
    count++;
}
*/
/*
var count;
for(count = 0;count <= 5;count++){
    console.log(count);
}
*/
/*
var d = new Date();
console.log(d.getDay());
console.log(d.getHours());
console.log(d.getMinutes());
*/
/*
function soma(n1,n2){
    return n1 + n2;
}
console.log(soma(2,2));
var validar

function validaIdade(idade){
    validar;
    if(idade >=18){
        validar = true;
    }
    else{
        validar = false;
    }
}

var idade = prompt("Qual sua Idade ?");
console.log(validaIdade(idade))
console.log(validar)

*/

/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

console.log(setReplace("Vai Japão", "Japão","Brasil"));
*/
function clicado(){
    //alert("Obrigado por clicar");
    document.getElementById("agradecimento").innerHTML = "<strong>Obrigado por clicar ! </strong>";
    //console.log(h3);
}
function redirecionar(){
    //window.open("https://www.coursera.org/");
    window.location.href = "https://www.coursera.org/";
}

function mouse_Over(elemento){
    console.log("trocar Texto");
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function mouse_Out(elemento){
    console.log("passou o mouse fora");
    elemento.innerHTML = "passe o mouse";
}

function load(){
    console.log("body caregado com sucessor");
}

function change(elemento){
    console.log(elemento.value);
}