let score = 0;

function verifier(num) {
    let question = document.getElementById(`q${num}`);
    let radios = question.querySelectorAll('input[type="radio"]');
    let bonneReponse = false;

    radios.forEach(radio => {
        if (radio.checked && radio.classList.contains("correct")) {
            bonneReponse = true;
        }
    });

    if (bonneReponse) {
        score++;
        document.getElementById('score').innerHTML = `Score : ${score}`;
        question.classList.add('hidden'); // Masquer la question actuelle

        let nextQuestion = document.getElementById(`q${num + 1}`);
        if (nextQuestion) {
            nextQuestion.classList.remove('hidden'); // Afficher la suivante
        } else {
            document.getElementById('resultat').classList.remove('hidden'); // Fin du quiz
        }
    } else {
        alert("Mauvaise réponse, réessaie !");
    }
}

// Afficher progressivement la première question
setTimeout(() => {
    document.getElementById('q1').style.opacity = "1";
    document.getElementById('q1').style.transform = "translateY(0)";
}, 500);

setTimeout(() => {
    document.getElementById('q2').style.opacity = "1";
    document.getElementById('q2').style.transform = "translateY(0)";
}, 500);

setTimeout(() => {
    document.getElementById('q3').style.opacity = "1";
    document.getElementById('q3').style.transform = "translateY(0)";
}, 500);

setTimeout(() => {
    document.getElementById('q4').style.opacity = "1";
    document.getElementById('q4').style.transform = "translateY(0)";
}, 500);

setTimeout(() => {
    document.getElementById('q5').style.opacity = "1";
    document.getElementById('q5').style.transform = "translateY(0)";
}, 500);

// Afficher les boutons après un choix
document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', function () {
        this.closest('.question').querySelector('.btn').style.display = "block";
    });
});


