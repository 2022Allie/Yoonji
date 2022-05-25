const input_text = document.getElementById("ToDoListInput");
const plusbutton = document.getElementById("plusIcon");
const list = document.getElementById("sectionArticle");



let count = 0;
let cnt = 0;
const check = () => {
    const checkButton = document.getElementsByClassName(`check${cnt}`)[0];
    const checkcheck = document.createElement('div');
    checkcheck.className = "check";
    checkcheck.id = `check${cnt}`;

    checkcheck.innerHTML = `
      <div id="check">
      <img src="./img/v.svg" alt="이거슨체크다이말이여">
      </div>
    `
    
    cnt++;

    checkButton.appendChild(checkcheck);
}


// function inputText() { } 아래와 같음
const inputText = () => {
    const content = document.createElement('div');
    content.className = "content";
    content.id = `content${count}`;

    content.innerHTML = `
    <div id="todayListContainer">
                 <div id="list"> 
                      <div class="list">
                      ${input_text.value}
                      </div>
                 </div>
                 <div id="checkIcon" onclick="check()" class="check${count}" > 

                 </div>
            </div>
    `

    //console.log(checkButton);
    //checkButton.addEventListener('click', check);

    count++;

    list.appendChild(content);

    delete_text();
}

plusbutton.addEventListener('click', inputText);

function delete_text() {
    const currentVal = input_text.value;
    input_text.value = '';
}








// function jeojang() {
//     ohneulHalIl.push(document.getElementById("ToDoListInput").value);
//     console.log(ohneulHalIl)
//     grinda();
// }
// function grinda() {
//     const list = document.getElementById("sectionArticle");
//     list.innerText += ohneulHalIl;
// }