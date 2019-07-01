// Events
/*
    - Any event that takes place in the DOM
    - Can be user-generated or by an API
    - Many types of events
    - Event contains properties and methods
    - addEventListener function takes in the event to listen
    whenever the described event fires.
    - addEventListener("click", function(){
        logic inside function
    })
*/

const clickDiv = document.getElementById("clicky");
const clickableButton = clickDiv.querySelector("button");

const logEvent = (e) => {
    switch (e.type) {
        case 'click': 
            console.log('click');
        break;
        case 'focus': 
            console.log('focus');
        break;
        default: 
            return false;
    }
}

clickableButton.addEventListener("click", logEvent);
clickableButton.addEventListener("focus", logEvent);
clickableButton.addEventListener("focusout", logEvent);

function logEvent(e) {
    clickableButton.innerText = e.timeStamp;
    clickableButton.removeEventListener("click", logEvent);
    console.log(e.type);
}