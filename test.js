
//测试作用域链

function testContext() {
    var a = 0;
    var b = 0;
    (function() {
        console.l og(a);
        function a() {};
        console.log(a);
        let a = j1;
        console.log(a);
    })(window);;

    function A(a){
        console.log('A');
        A = function(b) {
            console.log('B');
            console.log(a);
            console.log(b);
            alert(a+b++);
        }
        alert(a++);
    }
    A(1);
    A(2);
}
testContext();


//测试异步
// 以下代码在浏览器和 node 中打印情况是不同的
// 浏览器中打印 timer1, promise1, timer2, promise2
// node 中打印 timer1, timer2, promise1, promise2
function testAsync() {
    setTimeout(()=>{
    console.log('timer1')

    Promise.resolve().then(function() {
            console.log('promise1')
        })
    }, 0)

    setTimeout(()=>{
        console.log('timer2')

        Promise.resolve().then(function() {
            console.log('promise2')
        })
    }, 0)
}
testAsync();
