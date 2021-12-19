const storage = window.localStorage;
const list = document.querySelector(".calculation-list");

let eventListenerBtn = () => {
    let buttons = document.querySelectorAll( ".action");
    let textbox = document.querySelector(".input");
    let string = "";
    buttons.forEach((element) => {
        element.addEventListener("click", async (event) => {
            if(element.innerHTML == "C") {
                textbox.value = 0;
                return;
            }
            if(element.innerHTML == "=") {
                textbox.value = eval(string);
                string += "= " + eval(string);
                pushString(string);
                storage.pushString(string);
                return;
            }
            if(element.classList("action-btn")) {
                if (element.innerHTML =="&#8730") {
                    string = '' + string;
                } else {
                    string += "^2";
                }
                textbox.value = eval(string);
                string += "= " + eval(string);
                pushString(string);
                storage.pushString(string);
                return;
            }
            textbox.value = element.innerHTML;

        })
    });
}



let getFromLocalStorage = () => {

}

let pushString = (str) => {
    list.innerHTML += `<li> ${str} </li>`
}

let clear = () => {
    let button = document.querySelector(".clear");
    button.addEventListener("click", async (event) => {
        list.innerHTML = "";
    })
    
}

const init = () => {
    eventListenerBtn();
    clear();
}   
init();
//clear();