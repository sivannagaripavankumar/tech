
const id = document.getElementById('head');   //id
id.style.color = 'red';

const p = document.getElementsByClassName('t');  //ClassName
p[0].style.color = "yellow"; 
p[1].style.color = "red"; 

const select = document.querySelector('.sel');   //querySelector
select.style.color = "green";

const selall = document.querySelectorAll('.selall');  //querySelectorAll
selall.forEach((t) => {
    t.style.color="yellow";
});

const n= document.getElementsByName('age');   //Name
n.forEach((nam) =>  {
    nam.style.color = "green";
});

const tagname = document.getElementsByTagName('pre');  // TagName
tagname[0].style.color = "green";

// changing content
const sec = document.getElementsByTagName('div');
sec[0].style.border = "dotted red 2px"; 
const con = document.querySelector('.content');
con.textContent = "textcontent";
const con1 = document.querySelector('.content1');
con1.innerHTML = "<p>innerhtml</p>";

// style
const styl = document.querySelector('.content2');
styl.style.background = 'yellow';
styl.style.color = 'red';
styl.style.padding = '20px';
styl.style.margin = '30px';
 
 /*const sty = document.querySelectorAll('.style');
 sty.forEach((s) => {
    s.style.color = 'green';
    s.style.padding = '20px';
 });
*/
 // add and removing elements

const add = document.querySelector('.add');
const newItem = document.createElement('h2');  // createElement
newItem.textContent = " add element";
add.append(newItem);                      // add Element

const add1 = document.querySelector('.add1');
const newI = document.createElement('h2');  // createElement
newI.textContent = " remove element";
add1.append(newI);                      // add Element
add1.remove(newI);                     // remove Element

const addc = document.querySelector('.addChild');
const newItem1 = document.createElement('h3');   //add child element
newItem1.textContent = "add child element";
addc.appendChild(newItem1);

const addc1 = document.querySelector('.addChild1');
const new1 = document.createElement('h3');   //add child element
new1.textContent = "remove child element";
addc1.appendChild(new1);
addc1.removeChild(new1)              // remove child Element
 
// add and remove classes

function java() {
    j = document.querySelector('#java');
    j.classList.add('active');

    p = document.querySelector('#python');
    p.classList.remove('active');

    java = document.querySelector('#java');
    java.classList.toggle('active');

}

function python() {
    p = document.querySelector('#python');
    p.classList.add('active');

    j = document.querySelector('#java');
    j.classList.remove('active');
}

// toggle 

tog = document.querySelector('body');
tog.classList.toggle('p');

// contains

//con = document.querySelector('body');
//console.log(con.classList.contains('div'));

                                // attributes

// setAttribute
const imgage = document.querySelector('img');
imgage.setAttribute('src', 'https://www.google.com/imgres?q=salaar%20images&imgurl=https%3A%2F%2Fi.pinimg.com%2F736x%2F41%2F84%2F34%2F4184345eff835ed2b39afd75a9f8db13.jpg&imgrefurl=https%3A%2F%2Fin.pinterest.com%2Fpin%2F372884044155541518%2F&docid=scqZy-Gs984_YM&tbnid=-Boc6Pb6V1JEWM&vet=12ahUKEwiOivWqm_-JAxUQTmwGHbGTGl8QM3oECGcQAA..i&w=736&h=1416&hcb=2&ved=2ahUKEwiOivWqm_-JAxUQTmwGHbGTGl8QM3oECGcQAA');
console.log(imgage.getAttribute('src'));

console.log(imgage.removeAttribute('src'))

// eventListener

                                   // mouse events

 
document.querySelector('#butt').addEventListener('click', () => {
    alert('button clicked');
} );
 /*
// double click  (dblclick)
document.querySelector('#butt1').addEventListener('dblclick', () => {
    alert('button double clicked');
});


// mouse over
document.querySelector('#mhover').addEventListener('mouseover', () => {
    alert('mouse over');
});


// mouse out
document.querySelector('#mout').addEventListener('mouseout', () => {
    alert('mouse out');
})

// mouse move
document.querySelector('#mmove').addEventListener('mousemove', () => {
    alert('mouse move')
})*/
                                    // keyboard events

/*
// key down event
document.addEventListener('keydown', (event) => {
    alert("key pressed",event.key);
    
});

// key up event
document.addEventListener('keyup', (event) => {
    alert("key released",event.key);
    
});

                                // window events
// DomContentLoaded
 
document.addEventListener('DOMContentLoaded', () => {
    alert("DOM is loaded");
});

// resize 

document.addEventListener('resize', () => {
    alert("Window resized");
});
 
document.addEventListener('scroll', () => {
    alert("Window scrolled");
});
*/
                            // form events 
// submit
/*
document.querySelector('#submit').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('form submitted');
})
 
//  change 
document.querySelector('#input').addEventListener('change', (event) => {
    event.preventDefault();
    alert('change event');
}) 

// focus
document.querySelector('#focus').addEventListener('focus', (event) => {
    event.preventDefault();
    alert('input field focused');
})  

    // blur
document.querySelector('#blur').addEventListener('blur', (event) => {
    alert('input field blurred');
})
 
// input
document.querySelector('#input').addEventListener('input', (event) => {
    alert('current value');
})*/