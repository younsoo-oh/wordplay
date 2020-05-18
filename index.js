const btn = document.querySelector("#button");

const dictionary = [];

btn.addEventListener('click', () => {
    const wordTag = document.querySelector("#word");
    const inputTag = document.querySelector("#input");
    const errorTag = document.querySelector("#error");
    const word = wordTag.textContent; //일반적으로는 textContent
    const input = inputTag.value;     //input인경우만 value
    if(dictionary.includes(input)){   //dic에 input이 포함되어 있다면
        errorTag.textContent = '중복입니다'
        inputTag.focus();
    } else {
        if (word[word.length -1] === input[0]){
            wordTag.textContent = input;
            dictionary.push(input);
            errorTag.textContent = '계속하세요';
            inputTag.value = '';
            inputTag.focus();
        } else{
            errorTag.textContent = '틀렸습니다.';
            inputTag.focus();
        }
    }
});
