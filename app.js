var translateButton=document.querySelector("#translate-button");
var translateInput=document.querySelector("#translate-input");
var translateOutput=document.querySelector("#translate-output");
translateButton.addEventListener("click",clickHandler());
console.log(translateInput)


// fetch(url)
//     .then(response => response.json())
//     .then(json => console.log(json))

function clickHandler() {
        console.log("clickd");
        console.log("input",translateInput.value);
};

// translateButton.addEventListener("click",clickHandler());

