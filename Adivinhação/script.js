// Gerar um número aleatório entre 1 e 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Inicializar o contador de tentativas
let attempts = 0;

// Definir o número máximo de tentativas
const maxAttempts = 5;

// Capturar elementos do DOM
const guessInput = document.getElementById("guess");
const checkButton = document.getElementById("check");
const message = document.getElementById("message");

// Adicionar evento de clique ao botão "Adivinhar"
checkButton.addEventListener("click", function () {
    // Obter o valor inserido pelo jogador
    const guess = parseInt(guessInput.value);

    // Verificar se o palpite é válido
    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = "Por favor, insira um número válido entre 1 e 100.";
        return;
    }

    // Incrementar o contador de tentativas
    attempts++;

    // Verificar se o palpite está correto
    if (guess === randomNumber) {
        message.textContent = `Parabéns! Você acertou o número ${randomNumber} em ${attempts} tentativas.`;
        checkButton.disabled = true;
    } else if (attempts === maxAttempts) {
        message.textContent = `Fim de jogo. O número correto era ${randomNumber}.`;
        checkButton.disabled = true;
    } else {
        const hint = guess < randomNumber ? "maior" : "menor";
        message.textContent = `Tente novamente. O número que você escolheu é ${hint} do que o número correto. Tentativas restantes: ${maxAttempts - attempts}.`;
    }
});
