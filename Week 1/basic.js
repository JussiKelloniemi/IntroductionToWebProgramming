if(document.readyState !== "loading") {
    console.log("Document is ready!");
    initializeCode();
} else {
    document.addEventListener("DOMContentLoaded", function() {
        console.log("Document is ready after waiting!");
        initializeCode();
    });
}

function initializeCode() {
    const myButton = document.getElementById("my-button");
    const addDataButton = document.getElementById("add-data")

    myButton.addEventListener('click', function() {
        console.log("hello world")
        document.getElementById("header").innerHTML = "Moi Maailma!";
    });

    addDataButton.addEventListener('click', function() {
        const myList = document.getElementById("my-list");
        const textArea = document.getElementById("textarea");
        let newListElement = document.createElement("li");
        newListElement.innerText = textArea.value;
        myList.appendChild(newListElement);
    });
}