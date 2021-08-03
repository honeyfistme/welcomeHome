function submitFuc(e) {
    e.preventDefault();
    let list = document.querySelector('#list > tbody');
    if (document.frm.num.value == '') {
        alert('번호를 입력')
        document.frm.num.focus()
        return;
    }
    if (document.frm.title.value == '') {
        alert('제목을 입력')
        document.frm.title.focus()
        return;
    }
    if (document.frm.writer.value == '') {
        alert('이름을 입력')
        document.frm.writer.focus()
        return;
    }
    if (document.frm.regDate.value == '') {
        alert('날짜를 입력')
        document.frm.regDate.focus()
        return;
    }

    let num = document.frm.num.value;
    let title = document.frm.title.value;
    let writer = document.frm.writer.value;
    let regDate = document.frm.regDate.value;

    document.querySelector('#list> tbody').appendChild(createTr(num, title, writer, regDate)); //자식개체로 createTr블러와서 값 넣기


    let childCnt = list.children.length + 1;

    addTrEvent();    

}

function childCnt(){
    let remainTr = document.querySelectorAll('#list> tbody > tr');
        for (let i = 0; i < remainTr.length; i++) {
            if (i % 2 == 1) {
                remainTr[i].className = 'altRow';
            } else {
                remainTr[i].classList = '';
            }
        }
}



//테이블에 입력한 정보를 각각 넣는다
function createTr(num, title, writer, regDate) {
    let trTag = document.createElement("tr");
    trTag.setAttribute('id', num);
    trTag.setAttribute('class', 'altRow')
    for (let i = 0; i < arguments.length; i++) {
        let tdTag = document.createElement('td');
        tdTag.setAttribute('class', 'td', '(i + 1)')
        let text = document.createTextNode(arguments[i])
        tdTag.appendChild(text);
        trTag.appendChild(tdTag);
    }
    let td = document.createElement('td');
    let checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox');
    td.appendChild(checkbox);
    trTag.appendChild(td);
    return trTag;
}

//기존에 생성되어있는 tr에 이벤트 등록
function addTrEvent() {
    let trs = document.querySelectorAll('#list > tbody > tr');
    console.log(trs)
    for (let i = 0; i < trs.length; i++) {
        trs[i].addEventListener('click', function () {
            console.log('내용: ', this.children[2].innerHTML)
            //form호면에 각 요서값 <= this.children[2].innerHTML
            document.getElementById('num').value = this.children[0].innerHTML
            document.getElementById('title').value = this.children[1].innerHTML
            document.getElementById('writer').value = this.children[2].innerHTML
            document.getElementById('regDate').value = this.children[3].innerHTML

        }); //매개값(event, function)
    }
}
//수정버튼을 클릭하면 실행될 eventHandler(코드)
let updateBtn = document.querySelector('#inputForm > form > input[type= "button"]')
console.log(updateBtn);
updateBtn.addEventListener('click', function () {
    //폼테그 안에 사용자가 수정한값을 테이블에서 찾아와서(tr=id) 하위요소 값 변경
    let numInput = document.getElementById('num')
    let titleInput = document.getElementById('title')
    let writerInput = document.getElementById('writer')
    let regDateInput = document.getElementById('regDate')

    console.log(numInput.value); //수저알려고하는 게시판의 글번호
    let searchId = numInput.value;
    let findTr = document.getElementById(searchId)
    console.log(findTr);
    //제목:
    findTr.children[1].innerHTML = titleInput.value;
    //이름:
    findTr.children[2].innerHTML = writerInput.value;
    //날짜:
    findTr.children[3].innerHTML = regDateInput.value;
})

//선택삭제 버튼 클릭
function deletck() {
    document.getElementById('delBut').addEventListener('click', function () {
        let checkBox = document.querySelectorAll('#list> tbody > tr > td > input[type="checkbox"]:checked')
        console.log(checkBox);
        for (let i = 0; i < checkBox.length; i++) {
            checkBox[i].parentNode.parentNode.remove();
        }

        //남은 데이터의 tr 건수만 색바꾸기
        let remainTr = document.querySelectorAll('#list> tbody > tr');
        for (let i = 0; i < remainTr.length; i++) {
            if (i % 2 == 1) {
                remainTr[i].className = 'altRow';
            } else {
                remainTr[i].classList = '';
            }
        }
    })
}
deletck();