const quizData = [
    {
        pergunta: 'Qual é a capital do Brasil?',
        opcoes: ['Rio de Janeiro', 'Brasília', 'São Paulo', 'Salvador'],
        resposta: 'Brasília'
    },
    {
        pergunta: 'Qual é o maior planeta do Sistema Solar?',
        opcoes: ['Terra', 'Júpiter', 'Marte', 'Saturno'],
        resposta: 'Júpiter'
    },
    {
        pergunta: 'Quem escreveu Dom Casmurro?',
        opcoes: ['Machado de Assis', 'José de Alencar', 'Clarice Lispector', 'Monteiro Lobato'],
        resposta: 'Machado de Assis'
    }
];

let perguntaAtual = 0;
let pontuacao = 0;

const quizEl = document.getElementById('quiz');
const nextBtn = document.getElementById('next-btn');
const scoreEl = document.getElementById('score');

function carregarPergunta() {
    const pergunta = quizData[perguntaAtual];
    let html = `<h2>${pergunta.pergunta}</h2>`;
    pergunta.opcoes.forEach(opcao => {
        html += `<div><input type='radio' name='opcao' value='${opcao}'> ${opcao}</div>`;
    });
    quizEl.innerHTML = html;
}

function verificarResposta() {
    const selecionada = document.querySelector('input[name="opcao"]:checked');
    if (selecionada) {
        if (selecionada.value === quizData[perguntaAtual].resposta) {
            pontuacao++;
        }
    }
}

nextBtn.addEventListener('click', () => {
    verificarResposta();
    perguntaAtual++;
    if (perguntaAtual < quizData.length) {
        carregarPergunta();
    } else {
        quizEl.innerHTML = `<h2>Quiz finalizado!</h2><p>Sua pontuação: ${pontuacao}/${quizData.length}</p>`;
        nextBtn.style.display = 'none';
    }
    scoreEl.textContent = `Pontuação: ${pontuacao}`;
});

carregarPergunta();
