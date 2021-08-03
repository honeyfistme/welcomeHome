document.addEventListener('DOMContentLoaded', function () {
    ajax('dataset.xml', 1);
    let btns = document.querySelectorAll('.pagination > button');
    console.log(btns)
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function () {
            for (let i = 0; i < btns.length; i++) {
                btns[i].className = '';
            }// 다음 버튼을 클릭할때 초기화 해준다.
            let page = this.innerHTML;
            this.className = 'active';
            ajax('dataset.xml', page);
        });
    }
})

function ajax(url, page) {
    let xhtp = new XMLHttpRequest(); // new Object();에서 생속받은
    xhtp.open('get', url);
    xhtp.send();
    xhtp.onreadystatechange = function () {
        if (xhtp.readyState == 4 && xhtp.status == 200) {
            console.log(xhtp.responseXML);
            // document.getElementById('show').innerHTML = makePage(xhtp.responseXML);
            makePage(xhtp.responseXML, page);
        }
    }
}

function makePage(data, page) {
    // 기존에 있던 데이터를 화면삭제 후
    let divShow = document.querySelector('#show')
    let cnt = divShow.children.length;
    for (let i = 0; i < cnt; i++) {
        divShow.removeChild(divShow.children[0]);

    }
    //페이지 건수 만큼 화면에 보여주도록
    let records = data.getElementsByTagName('record');
    let startCnt, endCnt;
    startCnt = (page - 1) * 10; //0
    endCnt = page * 10 - 1; //9
    endCnt = endCnt > records.length - 1 ? records.length - 1 : endCnt;
    console.log(endCnt)
    console.log(records);
    for (let i = startCnt; i <= endCnt; i++) {
        let div = document.createElement('div');
        div.className = 'row';

        let span = document.createElement('span')
        span.innerText = records[i].children[0].innerHTML
        let strong = document.createElement('strong')
        strong.innerText = records[i].children[1].innerHTML
        let span2 = document.createElement('span')
        span2.innerText = records[i].children[3].innerHTML
        div.appendChild(span)
        div.appendChild(strong)
        div.appendChild(span2)

        document.getElementById('show').appendChild(div)
    }
}
//ajax = Asynchronous(비동기방식:시간이 많이 걸리는 작업을 실행해 놓고 다름 작업을 계속적으로 수행) Javascript And XML
//string: 102Hong8020
//xml: <id>102</id><name>Hong</name><score>80</score><age>20</age>
//response: 텍스트로 출력
//JSON.parse: object로 출력
//responseTML