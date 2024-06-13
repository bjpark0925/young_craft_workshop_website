const questions = [
    "Q1. 나는 혼자 있을 때 편안함을 느낀다.", // i
    "Q2. 나는 눈앞에 결과물이 없으면 흥미를 잃어버린다.", // t
    "Q3. 나는 계획을 세우는 것을 좋아한다.", // j
    "Q4. 나는 상상력이 풍부하다." // n
];

let currentQuestion = 0;
let flag = [false, false, false, false];
let count = 0;

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
        flag[count] = true;
    }
    else {
        flag[count] = false;
    }
    count++;
    currentQuestion++;
    showQuestion();
}

function showResult() {
    document.getElementById('question-page').classList.add('hidden');
    document.getElementById('result-page').classList.remove('hidden');
    let resultText = "";

    if (flag[0] && flag[1] && flag[2] && flag[3]) {
        resultText = "전략을 잘 세우는 당신은 포크아트가 어울립니다. (생활 집기에 고풍스러운 그림 그리기)"; // intj
    }
    else if (flag[0] && flag[1] && flag[2] && !flag[3]) {
        resultText = "자기합리화를 잘하는 당신은 냅킨공예가 어울립니다. (냅킨 활용 공예품 디자인)"; // intp
    }
    else if (flag[0] && flag[1] && !flag[2] && flag[3]) {
        resultText = "공상에 자주 빠지는 당신은 포크아트가 어울립니다. (생활 집기에 고풍스러운 그림 그리기)"; // infj
    }
    else if (flag[0] && flag[1] && !flag[2] && !flag[3]) {
        resultText = "부드러운 이타주의자인 당신은 펄러비즈가 어울립니다. (비즈 활용 공예)"; // infp
    }
    else if (flag[0] && !flag[1] && flag[2] && flag[3]) {
        resultText = "선민의식이 가득한 당신은 미니어처 점토가 어울립니다. (미니어처 음식, 악세서리 제작)"; // entj
    }
    else if (flag[0] && !flag[1] && flag[2] && !flag[3]) {
        resultText = "쿨병 말기인 당신은 한국사 팝업북이 어울립니다. (입체 형태의 책 제작)"; // entp
    }
    else if (flag[0] && !flag[1] && !flag[2] && flag[3]) {
        resultText = "우유부단한 당신은 한국사 팝업북이 어울립니다. (입체 형태의 책 제작)"; // enfj
    }
    else if (flag[0] && !flag[1] && !flag[2] && !flag[3]) {
        resultText = "자유롭고 활동적인 당신은 쿠킹 클래스가 어울립니다. (쿠키 반죽, 요리)"; // enfp
    }
    else if (!flag[0] && flag[1] && flag[2] && flag[3]) {
        resultText = "원칙주의자인 당신은 펄러비즈가 어울립니다. (비즈 활용 공예)"; // istj
    }
    else if (!flag[0] && flag[1] && flag[2] && !flag[3]) {
        resultText = "만사가 귀찮은 당신은 레진아트가 어울립니다. (유리같은 특수한 재료 사용)"; // istp
    }
    else if (!flag[0] && flag[1] && !flag[2] && flag[3]) {
        resultText = "소심한 당신은 냅킨공예가 어울립니다. (냅킨 활용 공예품 디자인)"; // isfj
    }
    else if (!flag[0] && flag[1] && !flag[2] && !flag[3]) {
        resultText = "융통성이 부족한 당신은 레진아트가 어울립니다. (유리같은 특수한 재료 사용)"; // isfp
    }
    else if (!flag[0] && !flag[1] && flag[2] && flag[3]) {
        resultText = "호불호가 확실한 당신은 미니어처 점토가 어울립니다. (미니어처 음식, 악세서리 제작)"; // estj
    }
    else if (!flag[0] && !flag[1] && flag[2] && !flag[3]) {
        resultText = "모험심이 강한 당신은 클레이 아트가 어울립니다. (점토를 이용한 미술품 제작)"; // estp
    }
    else if (!flag[0] && !flag[1] && !flag[2] && flag[3]) {
        resultText = "사교성이 좋은 당신은 클레이 아트가 어울립니다. (점토를 이용한 미술품 제작)"; // esfj
    }
    else if (!flag[0] && !flag[1] && !flag[2] && !flag[3]) {
        resultText = "머릿속이 꽃밭으로 가득한 당신은 쿠킹 클래스가 어울립니다. (쿠키 반죽, 요리)"; // esfp
    }

    document.getElementById('result-text').textContent = resultText;
}

function restartTest() {
    currentQuestion = 0;
    score = 0;
    document.getElementById('result-page').classList.add('hidden');
    document.getElementById('start-page').classList.remove('hidden');
}