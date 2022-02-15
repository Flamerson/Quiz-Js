//////////////////////////////////////////////////////////////////
///////  Flamerson quiz 1.0 - sem usar banco de dados ////////////
//////////////////////////////////////////////////////////////////

var answer = document.querySelector("#answer");

var question_1 = document.querySelector("#question-1");
var question_2 = document.querySelector("#question-2");
var question_3 = document.querySelector("#question-3");
var question_4 = document.querySelector("#question-4");

var questions = document.querySelector("#questions");
var end = document.querySelector("#endGame");

var points_select = document.querySelector("#points");

//Essas são as perguntas , não estou utilizando os arquivos json , pois está dando erro , mas pretendo usar o banco de dados.
const json1 = '{"pergunta":"Qual o maior planeta do sistema Solar?" ,"questao1" : "Marte","questao2" : "Júpiter","questao3" : "Terra","questao4" : "Plutão", "resposta": "Júpiter"}';
const json2 = '{"pergunta":"Qual valor arredondado de Pi?" ,"questao1" : "3,15","questao2" : "14,3","questao3" : "3,14","questao4" : "314", "resposta": "3,14"}';
const json3 = '{"pergunta":"Qual o idioma nativo da china?" ,"questao1" : "Mandarim","questao2" : "Chinês","questao3" : "Japonês","questao4" : "Ingles", "resposta": "Mandarim"}';
const json4 = '{"pergunta":"Quem é o presidente do Brasil?" ,"questao1" : "Lula","questao2" : "Bolsonaro","questao3" : "Dilma","questao4" : "Pelé", "resposta": "Bolsonaro"}';
const json5 = '{"pergunta":"Quem é o camisa 10 da seleção brasileira?" ,"questao1" : "Vinicius Junior","questao2" : "Neymar","questao3" : "Gabriel Jesus","questao4" : "Romario", "resposta": "Neymar"}';

var questoes = [json1 , json2, json3, json4, json5];
var numero = 0;
var points = 0;

// Renderiza as questões na tela
function prepareAnswer(numero){ 

    var prepareJson = JSON.parse(questoes[numero]);

    //entrega as perguntas na tela
    answer.innerHTML = prepareJson.pergunta;
    question_1.innerHTML = "A : " + prepareJson.questao1;
    question_2.innerHTML = "B : " + prepareJson.questao2;
    question_3.innerHTML = "C : " + prepareJson.questao3;
    question_4.innerHTML = "D : " + prepareJson.questao4;

    //modifica os atributos ao clicar
    answer.setAttribute("value", "name");
    question_1.setAttribute("value", "teste" );
    question_2.setAttribute("value", "teste" );
    question_3.setAttribute("value", "teste" );
    question_4.setAttribute("value", "teste" );

    //determina os valores dos buttons
    question_1.value = prepareJson.questao1;
    question_2.value = prepareJson.questao2;
    question_3.value = prepareJson.questao3;
    question_4.value = prepareJson.questao4;

    points_select.innerHTML = "Pontos " + points;
    points_select.setAttribute("value", "name");
}

function start() {
    prepareAnswer(numero);
}

start();

function verifyQuestionA(){
    var prepareJson = JSON.parse(questoes[numero]);
    var resposta = prepareJson.resposta;

    if(resposta == question_1.value){
        points = points + 10;
        numero = numero + 1;
        prepareAnswer(numero);
        
    }else{
        numero = numero + 1;
        prepareAnswer(numero);
        
    }

}

function verifyQuestionB(){
    var prepareJson = JSON.parse(questoes[numero]);
    var resposta = prepareJson.resposta;

    if(resposta == question_2.value){
        points = points + 10;
        numero += 1;
        prepareAnswer(numero);
        
    }else{
        numero = numero + 1;
        prepareAnswer(numero);
        
    }

}

function verifyQuestionC(){
    var prepareJson = JSON.parse(questoes[numero]);
    var resposta = prepareJson.resposta;

    if(resposta == question_3.value){
        points = points + 10;
        numero = numero + 1;
        prepareAnswer(numero);
        
    }else{
        numero = numero + 1;
        prepareAnswer(numero);
        
    }

}

function verifyQuestionD(){
    var prepareJson = JSON.parse(questoes[numero]);
    var resposta = prepareJson.resposta;

    if(resposta == question_4.value){
        points = points + 10;
        numero = numero + 1;
        prepareAnswer(numero);
        
    }else{
        numero = numero + 1;
        prepareAnswer(numero);
        
    }

}

const stop = setInterval(verifyStop, 250);

function verifyStop() {
   if(numero >= 5){
        console.log("fim de jogo"); 
        clearInterval(stop); 
        answer.innerHTML = "Fim de Jogo!";
        answer.setAttribute("value","name");
        points_select.innerHTML = "Pontos " + points;
        points_select.setAttribute("value", "name");
        questions.classList.add("disable");
        end.classList.remove("disable");
    } 
}

function reiniciar(){
    location.reload();
}

question_1.addEventListener("click" , verifyQuestionA );
question_2.addEventListener("click" , verifyQuestionB );
question_3.addEventListener("click" , verifyQuestionC );
question_4.addEventListener("click" , verifyQuestionD );