
const answersList = document.querySelectorAll('ol.answers li ');

answersList.forEach(li => li.addEventListener('click', checkClickedAnswer));

//正しい答え
const correctAnswers ={
    
    question1:'2',
    question2:'1',
    question3:'2',
    question4:'3',
    question5:'4',

}

function checkClickedAnswer(event){
    //くりっくされた答えの要素
    const clickedAnswerElement= event.currentTarget;

    //選択した答え（1、2、3、4）
    const selectedAnswer = clickedAnswerElement.dataset.answer;

    const questionId = clickedAnswerElement.closest('ol.answers').dataset.id;

    //正しい答え(1,2,3,4)
    const correctAnswer = correctAnswers[questionId];

    //メッセージを入れる変数を用意
    let message;
    //カラーコードを入れる変数
    let answeColorCode;

    //答えが正しいか判定
    if(selectedAnswer === correctAnswer){
    //間違えた答えだったとき
    message = '正解です';
    answerColorCode = 'blue';

    }else{
    //間違えた答えだったとき
    message = 'ざんねん！不正解です';
    answerColorCode = 'red';
    }

    alert(message);
    document.querySelector('span#correct-answer').style.color = answerColorCode;

    //答え全体を表示
    document.querySelector('div.section-answer').style.display = 'block';

}