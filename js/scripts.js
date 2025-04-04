const answers = {
    1: 'a',
    2: 'b',
    3: 'b',
    4: 'b',
    5: 'c',
    6: 'b',
    7: 'b'
};
let score = 0;
const answered = {};

document.querySelectorAll("button").forEach((button) => {
    button.addEventListener('click', function() {
        const questionDiv = this.closest('.question');
        const questionId = questionDiv.id.replace('question', '');
        
        if (answered[questionId]) return;
        
        const answer = this.textContent.charAt(0).toLowerCase();
        const correctAnswer = answers[questionId];
        const resultDiv = document.getElementById('result' + questionId);
        
        if (answer === correctAnswer) {
            resultDiv.textContent = '✅ Correto!';
            resultDiv.style.color = 'green';
            score++;
        } else {
            resultDiv.textContent = `❌ Errado. Resposta correta: ${correctAnswer}`;
            resultDiv.style.color = 'red';
        }
        
        answered[questionId] = true;
        
        if (Object.keys(answered).length === Object.keys(answers).length) {
            document.getElementById("finalScore").textContent = 
                `Você acertou ${score} de ${Object.keys(answers).length} perguntas!`;
        }
    });
});