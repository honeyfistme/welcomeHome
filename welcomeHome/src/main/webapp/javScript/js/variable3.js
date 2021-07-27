 // 학생이름name, 국어kor, 수학mat, 영어eng => student1 오브젝트.
        // 학생이름name, 국어kor, 수학mat, 영어eng => student2 오브젝트.
        // 학생이름name, 국어kor, 수학mat, 영어eng => student3 오브젝트.
        // const student1, student2, student3;

        const students = [];

        student1 = {
            name: '박현진',
            kor: '78',
            mat: '53',
            eng: '43'
        }
        student2 = {
            name: '박라원',
            kor: '98',
            mat: '75',
            eng: '74'
        }
        student3 = {
            name: '이은지',
            kor: '98',
            mat: '75',
            eng: '74'
        }
        students.push(student1);
        students.push(student2);
        students.push(student3);

        const fields = {
            name: '학생이름',
            kor: '국어점수',
            mat: '수학점수',
            eng: '영어점수'
        }
        document.write('<table border="1">');
        document.write('<thead><tr>');
        for (field in fields) {
            document.write('<th>' + fields[field] + '</th>');
        }
        document.write('</tr></thead>')
        document.write('<tbody>')
        for (let i = 0; i < students.length; i++) {
            document.write('<tr>')
            for (field in students[i]) {
                document.write('<td>' + students[i][field] + '</td>')
            }
            document.write('</tr>')
        }
        document.write('</tbody>')
        document.write('</table>')