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
}

function createTr(num, title, writer, regDate) {
    let trTag = document.createElement("tr");
    for (let i = 0; i < arguments.length; i++) {
        let tdTag = document.createElement('td');
        let text = document.createTextNode(arguments[i])
        tdTag.appendChild(text);
    }
    return trTag;
}



const fields = {
    number: '번호',
    tit: '제목',
    nam: '이름',
    dat: '날짜',
    read: '읽음'
}

const hong1 = {
    td1: 1,
    td2: '게시판 만들기 연습입니다.',
    td3: '홍길동1',
    td4: '2012-01-05',
    td5: 25

}

const hong2 = {
    td1: 2,
    td2: '게시판 만들기 연습입니다.',
    td3: '홍길동2',
    td4: '2012-01-05',
    td5: 25

}

const hong3 = {
    td1: 3,
    td2: '게시판 만들기 연습입니다.',
    td3: '홍길동3',
    td4: '2012-01-05',
    td5: 25

}

const hong = [hong1, hong2, hong3];

document.write('<table id="list">');
document.write('<thead><tr>');

for (field in fields) {
    document.write('<th>' + fields[field] + '</th>');
}
document.write('</tr></thead>')
document.write('<tbody>')
for (let i = 0; i < hong.length; i++) {
    document.write('<tr class="altRow" id= "1">')
    for (field in hong[i]) {
        document.write('<td>' + hong[i][field] + '</td>')
    }
    document.write('</tr>')
}


document.write('</tbody></table>')


let trs = document.querySelectorAll('#list > tbody > tr');
console.log(trs)
for (let i = 0; i < trs.length; i++) {
    trs[i].addEventListener('click', function () {
        console.log(this.children[2].innerHTML)

        document.getElementById('num').value = this.children[0].innerHTML
        document.getElementById('title').value = this.children[1].innerHTML
        document.getElementById('writer').value = this.children[2].innerHTML
        document.getElementById('regDate').value = this.children[3].innerHTML

    }); //매개값(event, function)
}

//수정버튼을 클릭하면 실행될 eventHandler(코드)
let updateBtn = document.querySelector('#inputForm > form > input[type= "button"]')
console.log(updateBtn);
updateBtn.addEventListener('click', function(){
    //폼테그 안에 사용자가 수정한값을 테이블에서 찾아와서(tr=id) 하위요소 값 변경
    let numInput = document.getElementById('num')
    let titleInput = document.getElementById('title')
    let wriderInput = document.getElementById('wrider')
    let regDateInput = document.getElementById('regDate')

    console.log(numInput.value); //수저알려고하는 게시판의 글번호
    let searchId = numInput.value;
    let findTr = document.getElementById(searchId)
    console.log(findTr);
    //제목:
    findTr.children[1].innerHTML = titleInput.value;
    //이름:
    findTr.children[2].innerHTML = wriderInput.value;
    //날짜:
    findTr.children[3].innerHTML = regDateInput.value;

})