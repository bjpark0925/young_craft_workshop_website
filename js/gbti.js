const questions = [
    "Q1. 나는 혼자 있을 때 편안함을 느낀다.", // i
    "Q2. 나는 눈앞에 결과물이 없으면 흥미를 잃어버린다.", // t
    "Q3. 나는 계획을 세우는 것을 좋아한다.", // j
    "Q4. 나는 상상력이 풍부하다." // n
];

let currentQuestion = 0;
let flag = [false, false, false, false];

function startTest() {
    document.getElementById('start-page').classList.add('hidden');
    document.getElementById('question-page').classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    if (currentQuestion < questions.length) {
        document.getElementById('question-text').textContent = questions[currentQuestion];
    } else {
        showResult();
    }
}

function answerQuestion(answer) {
    if (answer) {
        flag[currentQuestion] = true;
    }
    else {
        flag[currentQuestion] = false;
    }
    currentQuestion++;
    showQuestion();
}

async function showResult() {
    const response = await fetch("https://zu079xdt44.execute-api.ap-northeast-2.amazonaws.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ flag: flag })
    });
    const data = await response.json();
    document.getElementById("result-text").textContent = data.result;

    document.getElementById('question-page').classList.add('hidden');
    document.getElementById('result-page').classList.remove('hidden');
}

function restartTest() {
    currentQuestion = 0;
    flag = [false, false, false, false];
    document.getElementById('result-page').classList.add('hidden');
    document.getElementById('start-page').classList.remove('hidden');
}