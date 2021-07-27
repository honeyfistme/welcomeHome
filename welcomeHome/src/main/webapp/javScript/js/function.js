         let a = 20;
        console.log(a);
   
        function cal(){
           let num1 = document.getElementById('num1');
           let num2 = document.getElementById('num2');
           console.log(Number(num1.value) + Number(num2.value));
           let result = document.getElementById('result');
           result.value =fnc(Number(num1.value), Number(num2.value)); 
        }//
   
        console.log('function정의 전: '+sum(20,30));
        
        let fnc = function(a,b){ // hoisting기능이 없다.
           return a + b;
       }
       console.log('function정의 전: '+fnc(20,30));
   
       console.log(fnc(15, 20));
   
        function sum(num1, num2) { // hoisting: function정의문을 끌어올림
           return num1 + num2;
        }
        let result = sum(10, 20);
        console.log(result);
        result = sum('Hello', 'World');
        console.log(result);
