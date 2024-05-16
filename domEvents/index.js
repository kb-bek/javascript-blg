// Events

// click – происходит, когда кликнули на элемент левой кнопкой мыши (на устройствах с сенсорными экранами оно происходит при касании).
// contextmenu – происходит, когда кликнули на элемент правой кнопкой мыши.
// mouseover / mouseout – когда мышь наводится на / покидает элемент.
// mousedown / mouseup – когда нажали / отжали кнопку мыши на элементе.
// mousemove – при движении мыши.


// onchange	An HTML element has been changed
// onclick	The user clicks an HTML element
// onmouseover	The user moves the mouse over an HTML element
// onmouseout	The user moves the mouse away from an HTML element
// onkeydown	The user pushes a keyboard key
// onload      The browser has finished loading the page


// const changeText = (element) => {
//     const el = document.getElementById(element);
//     el.style.backgroundColor = 'yellow';
//     el.innerText = "Text is changed"
// }


// function sayHello() {
//     alert("Hello user")
// }


// const button = document.getElementById('btn');
// button.onclick = sayHello;




//CHAT

// const messages = document.querySelector('.messages');

// const clickButton = () => {
//     const inputValue = document.querySelector('#input').value;

//     const message = document.createElement('div')
//     message.classList.add('message')
//     message.innerText = inputValue

//     messages.appendChild(message);

// }

// const btn = document.getElementById("btn");

// btn.addEventListener('click', clickButton)


//  

const changeText = () => {
    const inputEl = document.getElementById('inputEl').value;
    
    document.querySelector("h3").innerText = inputEl;
    document.querySelector("h3").style.color = 'green';

    document.getElementById('inputEl').value = ''
}


document.getElementById('inputEl').addEventListener('keydown', (event) => {
    console.log(event.key);
    if (event.code == 'Enter') {
        changeText();
    }
    
})
