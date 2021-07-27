const numbers = [23, 44, 18, 35, 50];
        numbers.push(42);
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
            if(i==0){
                document.write('&nbsp&nbsp' + numbers[0] + '<br>')
            }else if(numbers[i]>0){
                document.write('+' + numbers[i] + '<br>');
            }
        }
        document.write('합계: ' + sum);
        document.write('<p>--------------------</p>')