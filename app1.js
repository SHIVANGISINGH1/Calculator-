const selectNum = document.querySelectorAll('#btnNUM');
const num = document.querySelectorAll('.num');
const input = document.querySelector('#inp');
const placeMinus = document.querySelector('#Minus');
const removeOne = document.querySelector('#remove');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');
const clear = document.querySelector('#clr');
const equalsTo = document.querySelector('#bEqual');
const minus = document.querySelector('#minus');
const addition = document.querySelector('#add');

let flag = true;
let flag1 = true;
let operator = '';
let previousValue = '';
let ans = 0;
let flag2 = true;
let check = '';


for (let btn=0; btn<11; btn++)
{
    selectNum[btn].addEventListener('click' , function() {
        if (num[btn].innerText == '.' && flag2) 
        {
            flag2 = false;
            input.value += '.';
        }
        if (num[btn].innerText!== '.')
        input.value += num[btn].innerText;

    })
    if (input.value.length>26)
    {
        console.log("gg")
    }
}


document.addEventListener('keydown' , (e) => {
    let y = e.code;
    console.log(y)
    let n1 = parseInt(y.slice(5));
    
    if ((n1 >= 0 && n1 <= 9))
    input.value += e.key;
    else if ( y === 'Period' && flag2)
    {
        input.value += e.key;
        flag2 = false;
    }
    else if (y === 'Backspace')
    {
        toRemove();
    }
    else if(y === 'Equal')
    {
        equal();
    }
})


placeMinus.addEventListener('click', function() {
    let a = input.value;
    if (flag)
    input.value = '-' + a;
    flag = false;
})

clear.addEventListener('click', function() {
    input.value = '';
    flag1 = true;
    flag = true;
    check = '';
    previousValue = '';
    ans = 0;
    flag2 = true;
})

removeOne.addEventListener('click', function() {
    toRemove();
})


multiply.addEventListener('click' , function(){
    same('X');
})

divide.addEventListener('click' , function() {
    same('/');
})


addition.addEventListener('click', function() {
    same('+');
})


minus.addEventListener('click' , function() {
    same('-');
})

equalsTo.addEventListener('click', function(){
    equal();
})

const addOperator = (operator) => {
    previousValue = input.value;
    flag1 = false;
    input.value += operator;
    return input.value;
}

let calcOperation = (x,y,operator) => {
    x = parseFloat(x);
    y = parseFloat(y);
    if (operator == 'X')
    {   
        ans = x*y;
    }
    else if (operator == '/')
    {    
        ans = x/y;
    }
    else if (operator == '+')
    {
        ans = x + y;
    }
    else if (operator == '-')
    {
        ans = x - y;
    }
    input.value = ans;
    return input.value;
}

function same(operatorUse){
    operator = operatorUse;
    console.log(previousValue)
    check = input.value;
    if (flag1)
    return addOperator(operatorUse);
    else if (previousValue!== '' && check[previousValue.length] && ans === 0)
    {   
        let num2 = check.slice(previousValue.length+1);
        console.log(num2)
        calcOperation(previousValue,num2,operatorUse);
    }
    else
    return input.value;
}

function toRemove(){
    typed = input.value;
    input.value = typed.slice(0,typed.length-1);
    if (input.value == '')
    {
        flag1 = true;
        flag = true;
        check = '';
        previousValue = '';
        ans = 0;
        flag2 = true;
    }
}

function equal(){
    check = input.value;
    let oper = check[previousValue.length];
    if (previousValue!== '' && check[previousValue.length] && ans === 0)
    {
        let num3 = check.slice(previousValue.length+1);
        calcOperation(previousValue,num3,oper);
    }
}