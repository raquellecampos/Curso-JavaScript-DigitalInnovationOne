

var nome = "Raquelle Campos";
//alert("Bem vinda!! " + nome)
var idade = 35;

var idade2 = 35;
//alert(nome + "tem " + idade + "anos.");
//alert(idade + idade2);

var frase = "Bom dia!";
console.log(frase.replace("dia!", "fim de semana!")) //replace troca a palavra por outra.
console.log(frase.toLowerCase()); //deixa tudo em minusculo
console.log(frase.toUpperCase()); //deixa tudo maiuculo

//Array

var lista = ["maça","pêra","laranja"];
lista.push("uva"); //acrescentar
console.log(lista);
lista.pop(); //retira o que colocou pelo push
console.log(lista)
console.log(lista[2]);
console.log(lista.length); //quantos elemento tem na lista
console.log(lista.reverse()); //trazer os elementos ao contrários da lista.
console.log(lista.toString()); //transforma em string o array.
console.log(lista.join(" - ")); //altera o espaçamento.

//dicionário Jason

var fruta = {nome:"maça", cor:"verde"}
console.log(fruta);
console.log(fruta.cor);
console.log(fruta.nome);

/*
var idade = prompt("Qual sua idade?"); //exibe pergunta ao usuario.
if(idade >= 18){
    alert("Maior de idade!");
}else{
    alert("Menor de idade :( ")
};
*/

//Estrutura de repetição
/*
var conta = 0;
while(conta < 5){
    console.log(conta);
    conta++;
    alert(conta);
};
*/

var conta;
for(conta = 0; conta <= 5; conta++){
   //alert(conta);
};

//Data js

var data = new Date(); //data atual
//alert(data.getMonth()); //mes
//alert(data.getHours()); //hora

