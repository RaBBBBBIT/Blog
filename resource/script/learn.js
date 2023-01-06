console.log("HelloWorld!")


var divBox = document.getElementsByClassName("box0")[0] //通过类名获取元素
var divBoxStyle = getComputedStyle(divBox)  //设置样式变量
console.log(divBoxStyle.backgroundColor)    //打印背景色
divBox.style.width = "200px"    //设置元素宽度

//修改className
console.log("box.className = " + box.className) //打印当前className

box.className += " box1"   //对className进行拼接
console.log("box.className = " + box.className) //打印新的className

//通过list修改className
console.log(box.classList)  //打印当前classList

box.classList.add("box2")   //增加class:"box2"
console.log("box.className = " + box.className) //打印新的className

box.classList.remove("box1")    //删除class:"box1"
console.log("box.className = " + box.className) //打印新的className

box.classList.remove("box2")    //删除class:"box2"
console.log("box.className = " + box.className) //打印新的className

// box.classList.toggle("item")

//小功能:按钮点击toggle className
var btn1 = document.getElementById("btn1")
console.log(btn1)
divBox.classList.add("isYellow")

function btn1Clicked() {
    console.log("btn1clicked")
    divBox.classList.toggle("isYellow")
}


///////////////tab标签选项卡///////////////

var headerItems = document.querySelectorAll(".header li")
var boxItems = document.querySelectorAll(".box li")

for (var i = 0; i < headerItems.length; i++) {
    headerItems[i].dataset.index = i
    headerItems[i].onclick = onBtn1Clicked
}

function onBtn1Clicked() {
    console.log(this.dataset.index)
    for (var j = 0; j < headerItems.length; j++) {
        headerItems[j].classList.remove("active")
        boxItems[j].classList.remove("active")
        console.log("j = " + j)
    }
    console.log("this.dataset.index = " + this.dataset.index)
    this.classList.add("active")
    var currentIndex = this.dataset.index 
    boxItems[currentIndex].classList.add("active")
    // add("active")
}

///////////////节点的增删改查///////////////

var divNodeTest = document.getElementsByClassName("node-test")[0]
console.log(divNodeTest)

var divForAppend1 = document.createElement("div-for-append1")
divForAppend1.innerText = "World!"

var divForAppend2 = document.createElement("div-for-append2")
divForAppend2.innerText = "!"

divNodeTest.append(divForAppend1)
divForAppend2.append(divForAppend2)







btn1.onclick = btn1Clicked
