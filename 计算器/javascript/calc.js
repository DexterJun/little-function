/* 将被加数与加数以及操作数设置初值为空字符串 */
var beijiashu="";
var jiashu="";
var operate="";
/* 获取所有数字按钮 */
var number=document.getElementsByClassName("num");
/* 获取输出屏幕 */
var result=document.getElementById("showScreen");

/* 将按钮与数字对应进行字符串拼接显示到输出屏幕 */
for(let i=0;i<number.length;i++){
    number[i].index=i;
    number[i].onclick=function(){
        /* 只有当运算数为空并且当前输出框中没有运算结果时才可以输入被加数 */
        if(operate==""&&res==""){
            beijiashu=beijiashu+number[i].innerHTML;
        }
        /* 如果当前输出框中有结果要将被加数与当前输出框中的结果以及记录结果的变量都置为空 */
        if (operate==""&&res != "") {
            beijiashu = "";
            result.value = "";
            res = "";
            beijiashu = beijiashu + number[i].innerHTML;
        }
        /* 去掉被加数开头的多个零 */
        if(beijiashu.indexOf(".")==-1){
            beijiashu=beijiashu.replace(/^0{2}/g,"");
        }
        /* 当操作数不为空时可输入加数的值 */
        if(operate!=""){
            jiashu=jiashu+number[i].innerHTML;
        }
        jiashu=jiashu.replace(/^0+/,"");
        if(jiashu.indexOf(".")==-1){
            jiashu=jiashu.replace(/^0{2}/g,"");
        }
        /* 将等式左边显示在输出框中 */
        result.value=beijiashu+operate+jiashu;
    };
    /* 对小数点进行处理 */
    /* 获取小数点按钮 */
    var point=document.getElementById("point");
    point.onclick=function(){
        /* 当没有点击操作符时 */
        if(operate==""){
            /* 当被加数与长度大于0且已输入的字符串中没有小数点 */
            if(beijiashu.length>0&&beijiashu.indexOf(".")==-1){
                beijiashu=beijiashu+".";
            }
            /* 当被加数长度为0时点击小数点自动在小数点前补零 */
            if(beijiashu.length==0){
                beijiashu="0"+".";
            }
        }else{
            if(jiashu.length>0&&jiashu.indexOf(".")==-1){
                jiashu=jiashu+".";
            }
            if(jiashu.length==0){
                jiashu="0"+".";
            }
        }
        result.value=beijiashu+operate+jiashu;
    };
}

/* 加法操作时等式左边的输出 */
var add=document.getElementById("add");
add.onclick=function(){
    if(operate==""&&beijiashu!=""){
        operate = add.innerHTML;
        result.value = beijiashu + operate;
    }
};
/* 减法操作时等式左边的输出 */
var minus=document.getElementById("minus");
minus.onclick=function(){
    if(operate==""&&beijiashu!=""){
        operate = minus.innerHTML;
        result.value = beijiashu + operate;
    }
};
/* 乘法操作时等式左边的输出 */
var multiply=document.getElementById("multiply");
multiply.onclick=function(){
    if(operate==""&&beijiashu!=""){
        operate = multiply.innerHTML;
        result.value = beijiashu + operate;
    }
};
/* 除法操作时等式左边的输出 */
var divide=document.getElementById("divide");
divide.onclick=function(){
    if(operate==""&&beijiashu!=""){
        operate = divide.innerHTML;
        result.value = beijiashu + operate;
    }
};

/* 计算输出结果 */
/* 设置变量res用来存放一轮运算结束后的计算结果 */
var res="";
var equal=document.getElementById("equal");
equal.onclick=function(){
    if(beijiashu!=""&&jiashu!=""){
        /* 将输入的字符串转化为数字,分为整数和小数两种情况 */
        if(beijiashu.indexOf(".")==-1){
            var x=parseInt(beijiashu);
        }else{
            var x=parseFloat(beijiashu);
        }
        if(jiashu.indexOf(".")==-1){
            var y=parseInt(jiashu);
        }else{
            var y=parseFloat(jiashu);
        }
        if(operate=="＋"){
            var sum=x+y;
            res=sum+"";
            result.value=sum;
        }else if(operate=="－"){
            var differ=x-y;
            res=differ+"";
            result.value=differ;
        }else if(operate=="×"){
            var product=x*y;
            res=product+"";
            result.value=product;
        }else if(operate=="÷"){
            if(y!=0){
                var quotient = x / y;
                res=quotient+"";
                result.value = quotient;
            }
        }
        /* 一轮运算结束后将被加数的值设置为当前结果加数与操作数都设置为空串 */
        beijiashu=result.value+"";//将数字转化为字符串
        jiashu="";
        operate="";
    }
};

/* 点击AC清空输出框 */
var clear=document.getElementById("AC");
clear.onclick=function(){
    beijiashu="";
    jiashu="";
    operate="";
    res="";
    result.value="0";
};

/* 退格操作的实现 */
var back = document.getElementById("back");
back.onclick = function () {
    if (res == "") {
        /* 将输出框中的字符串看做是一个数组进行操作 */
        result.value = result.value.substring(0, result.value.length - 1);
        if (result.value == "") {
            result.value = "0";
        }
    }
};