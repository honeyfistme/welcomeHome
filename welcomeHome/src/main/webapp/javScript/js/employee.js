function makeRow(obj) {
    let tr = document.createElement('tr');
    tr.addEventListener('mouseover', mover, true);
    tr.addEventListener('mouseout', mout, true);
    tr.addEventListener('click', trClick, true); //상위요소 -> 하위요소
    for (let field in obj) {
        // console.log(field, obj[field]);
        console.log('필드: ${field}, 필드값: ${obj[field]}')
        let td = document.createElement('td');
        let text = document.createTextNode(obj[field])
        td.appendChild(text);
        tr.appendChild(td);
    }
    let td = document.createElement('td');
    let delcheck = document.createElement('input');
    delcheck.type = 'button';
    delcheck.value = '삭제';
    delcheck.addEventListener('click', dataDel); // 콜백함수
    td.appendChild(delcheck);
    tr.appendChild(td);

    return tr;
}

// console.log(objData[i].last_name);
// let li = document.createElement('li');
// li.onclick = function () {
//     window.alert(this.innerHTML)
// }
// li.addEventListener('mouseover', function () {
//     this.style.backgroundColor = 'red';
//     this.style.color = 'yellow';
// })
// li.addEventListener('mouseout', function () {
//     this.style.backgroundColor = 'blue';
// })
// let text = document.createTextNode(objData[i].last_name);
// li.appendChild(text);
// ul.appendChild(li);
// document.getElementById('show').appendChild(ul); //show는 밑에 선언했으니까

let dataDel = (arg) => {
    arg.stopPropagation();//이벤트전파 차단
    // arrow function 일 경우 this 키워드는 window 오브젝트
    arg.target.parentElement.parentElement.remove()
    
}
let mover = (arg) => {
    console.log(arg.target)
    arg.target.parentElement.style.backgroundColor = 'moccasin';
}

let mout = function(arg) {
    // function 일 경우 this 키워드는 event 대상
    arg.target.parentElement.style.backgroundColor = 'white';
}
let trClick = function() {
    window.alert(this.children[0].innerHTML);
}
// => : function
// parentNode: 부모요소, 중접사용가능
// nextSibling: 뒤에 형제요소 불러오기 
// previousSibling: 앞에 형제요소 불러오기