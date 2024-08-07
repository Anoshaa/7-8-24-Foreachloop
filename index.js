// ...........................................DOM.....................................................................................................................
// console.log(document);
// console.log(document.head);
// console.log(document.body);
// console.log(document.body.childNodes);
// ..............................................for change color with id in html.......................................................................
// let head = document.getElementById("heading");
// head.style.color ="blue";
// head.style.backgroundColor ="yellow";
// head.style.fontSize ="64px";
// head.style.border ="4px solid ";
// console.log(head);//this line not necessary

// // ...........................................for change color with class in html................................................................................
// let paragraph = document.getElementsByClassName("para");
// paragraph[0].style.color = "blue";
// paragraph[0].style.backgroundColor = "pink";
// paragraph[0].style.border = " 6px solid blue";
// paragraph[1].style.color = "pink";
// paragraph[1].style.backgroundColor = "blue";
// paragraph[1].style.border = " 6px solid pink";

//........concordinate html say para 2 ko index 1 daytay hay to wp index 1 ka para change hogayiga Document object model ki jaga hello world ajayga............................
// paragraph[1].innerHTML = "Hello world";
// .......................div same class kay hoto kisi ek ka color wagara change krana ho to index day daygay jis ko change karna ho.................................
// let collection = document.getElementsByClassName("container");
// collection[1].style.fontSize = "20px";

// ..................................li may tea ko paragraph demo may agiya bhar.....................................................
// let collection1 = document.getElementsByTagName("li")
// document.getElementById("demo").innerHTML= collection1[1].innerHTML;
// document.getElementById("demo").innerHTML= collection1[2].innerHTML;

// .............................button ko click kar kay text ka color change hoga html code may para2 , p tag ki jaga h1 bhi lasaktay hay,html kay code may dbl say double click par change hoga text color...................
// function changeColor(newColor){
//     let btn =document.getElementById("para2")
//     btn.style.color =newColor
    
// }
// background change hoga button click kar kay
// function changebackgroundColor(newColor){
//     let btn =document.getElementById("para2")
//     btn.style.backgroundColor =newColor
// }
// jo bhi pahla paragraph hoga isiko color dayga dosray ko nhi dayga 
// document.querySelector("p").style.backgroundColor="orange"


// const element =document.getElementById("intro");
// document.getElementById("demo").innerHTML=
// "The text from" + element.innerHTML;

//................................................... paragraph concordinate......................................................................................................
//........................................................ dom element by id name................................................................................................
// const introElement = document.getElementById("intro");
// document.getElementById("demo").innerHTML = "The text from the intro paragraph is: " + introElement.textContent;

// ............................................dom element by tag name...........................................................................................................
// const element = document.getElementsByTagName("p");
// document.getElementById("demo").innerHTML = 
// "The text from the intro paragraph is: " + element[0].innerHTML;

// ............................................dom element by tag name including div tag.........................................................................................
// const x = document.getElementById("main");
// const y = x.getElementsByTagName("p");
// document.getElementById("demo").innerHTML = 
// 'The first paragraph (index 0) inside "main" is: ' + y[0].innerHTML;

//.................................... dom element by class name............................................................................................................
// const x = document.getElementsByClassName("main");
// const firstPara= x[0];
// const y = firstPara.getElementsByTagName("p");
// document.getElementById("demo").innerHTML = 
// 'The first paragraph (index 0) inside "main" is: ' + y[0].innerHTML;

// ............................................query selector all....................................................................................................................
// const x = document.querySelectorAll("p.intro");
// document.getElementById("demo").innerHTML = 
// 'The first paragraph (index 0) with class="intro" is: ' + x[0].innerHTML;

// ............................................set time out kuch bhi cheez kuch seconds baath aygi..................................................................................
// setTimeout(()=>{
//     alert("I am inside set time out")
// },3000);//3 seconds baath show hoga

// 31-7-24
//..................................................... Event Listener mouse...........................................................................................................
// ................................................button ko click kar kay Yay wala likh kar ayga.................................................................................
// let button=document.getElementById("btn");
// button.addEventListener("click",()=>{//click
//     document.querySelector(".container").innerHTML = "<b>Yay you were click </b>Enjoy your click"
// })

//.................................................... dblclick..................................................................................................................
// ..................................................double click karnay say hoga click..........................................................................................
// let button=document.getElementById("btn");
// button.addEventListener("dblclick",()=>{
//     document.querySelector(".container").innerHTML = "<b>Yay you were click </b>Enjoy your click"
// })

//............................................ cotextmenu.........................................................................................................................
// .................................button ko click karagay mouse say right click karaygay to likh kar ayga.........................................................
// let button=document.getElementById("btn");
// button.addEventListener("contextmenu",()=>{
//     document.querySelector(".container").innerHTML = "<b>Yay you were click </b>Enjoy your click"
// })

// .............................................mouseenter.....................................................................................................
//.................................... halka sa pass bhi lay kar jaygay to khod say click hojaiga...............................................................
// let button=document.getElementById("btn");
// button.addEventListener("mouseenter",()=>{
//     document.querySelector(".container").innerHTML = "<b>Yay you were click </b>Enjoy your click"
// })

// ...........................................mouseup..........................................................................................................................
//................................. right click or left click dono say click karsaktay hay.....................................................................
// let button=document.getElementById("btn");
// button.addEventListener("mouseup",()=>{
//     document.querySelector(".container").innerHTML = "<b>Yay you were click </b>Enjoy your click"
// })

// ...........................................mouseleave...........................................................................................................................
// ..............................................mouse hatagay button kay opper say to show hoga likha hoa..........................................................................
// let button=document.getElementById("btn");
// button.addEventListener("mouseleave",()=>{
//     document.querySelector(".container").innerHTML = "<b>Yay you were click </b>Enjoy your click"
// })


// ...............................................................key Events............................................................................................
// ..............................................................keydown..............................................................................................
// ....................mouse ko click karkay keyboard koi bhi button click kar kay to console may dikhayga konsa button click kiya hay........................................................
// let button=document.getElementById("btn");
//  button.addEventListener("keydown",(e)=>{
//    document.querySelector(".container").innerHTML = "<b>Yay you were click </b>Enjoy your click"
//    console.log(e.key);
// })

// .............................................................keypress.........................................................................................................
// .........................mouse ko click kar kay alphabet or number or enter click karaygay to chalayga........................................................................
// let button=document.getElementById("btn");
//  button.addEventListener("keypress",(e)=>{
//    document.querySelector(".container").innerHTML = "<b>Yay you were click </b>Enjoy your click"
//    console.log(e.key);
// })

// keyup agar uppercase likhy gay to lower case upper case may hojaiga or agar lowercase likhy gay to uppercase  lowercase may hojaiga
// function myFunction(){
//     let y= document.getElementById("fname");
//     y.value = y.value.toUpperCase(); 
// }


// // is may alphabet or number show hogay dosray nhi hoygay last name walay may
// function myFunction1(){
//     alert("you pressed a key inside the input field");
// }

// function myFunction2() {
//     document.getElementById("email").innerHTML="you pressed a key inside it"
//     document.getElementById("email").style.color="red"
    
// }

// 7-8-24

//..................................................For Each loop....................................................................................................................
// let text ="";
// const fruits = ["apple","orange","peach","mango"];
// fruits.forEach(myFruits)
// document.write(text);
// function myFruits(item ,index) {
//     text = text +index+ ":"+item + "<br>"
// }
// ..................................................ForEach loop.....................................................................................................................
// let sum =0;
// const number =[5,4,3,2]
// number.forEach(myNumber);
// document.write(sum);

// function myNumber(item) {
//     sum = sum +item;
// }

// ..............................................For Each loop..................................................................................................................

const number =[5,4,3,2]
number.forEach(myNumber);
document.write(number);

function myNumber(item, index ,arr) {
    arr[index]=item*2;
}








