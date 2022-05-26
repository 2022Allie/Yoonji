const input_text = document.getElementById("ToDoListInput");
const plusbutton = document.getElementById("plusIcon");
const list = document.getElementById("sectionArticle");



let count = 0;
// let cnt = 0;
const check = (cnt) => {
    const checkButton = document.getElementsByClassName(`check${cnt}`)[0];
    const checkcheck = document.createElement('div');
    checkcheck.className = "check";
    checkcheck.id = `check${cnt}`;

    if (checkButton.innerHTML.trim() == "") {
        checkcheck.innerHTML = `
        <div id="check">
      <img src="./img/v.svg" alt="이거슨체크다이말이여">
      </div>
    `;
        checkButton.appendChild(checkcheck);
    }
    else{
        // checkcheck.innerHTML="";
        // checkcheck.appendChild(checkcheck);
        console.log("바보");
    }


    // cnt++;

}

const deleteList = (cnt) => {
    const content = document.getElementById(`content${cnt}`);
    content.innerHTML="";
}


// function inputText() { } 아래와 같음
const inputText = () => {
    const content = document.createElement('div');
    content.className = "content";
    content.id = `content${count}`;

    content.innerHTML = `
   <div id="todayListContainer">
                <div id="checkIcon" onclick="check(${count})" class="check${count}">
                </div>
                <div id="list">
                    <div class="list">
                        ${input_text.value}
                    </div>
                </div>
                <div id="deleteIcon" onclick="deleteList(${count})">
                    <img src="./img/X.svg" alt="삭줴">
                </div>
            
    </div>
    `

    //hiFunctiopn -> 연상선배가 알려주신 낙타체

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