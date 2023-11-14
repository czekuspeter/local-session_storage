function savedAdatok() {
    let storageTipus = document.getElementById("storageSelector").value;
    let key = document.getElementById("keyInput").value;
    let value = document.getElementById("valueInput").value;

    if (key && value) {
        if (storageTipus === "localStorage") {
            localStorage.setItem(key, value);
        } else if (storageTipus === "sessionStorage") {
            sessionStorage.setItem(key, value);
        }

        saveKepernyo();

    } else {
        alert("Add meg a key-t és a value-t!");
    }
}

function savedKepernyo() {
    let storageTipus = document.getElementById("storageSelector").value;
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);

    outputDiv.innerHTML += "<p>" + key + ": " + value + "</p>";
    }

    if (outputDiv.innerHTML === "") {
        outputDiv.innerHTML = "<p>Adat nem érhető el</p>";
    }
}

function deletedAdatok() {
    let storageTipus = document.getElementById("storageSelector").value;

    if (storageTipus === "localStorage") {
        localStorage.clear();
    } else if (storageTipus === "sessionStorage") {
        sessionStorage.clear();
    }

    savedKepernyo();
}

window.onload = savedKepernyo;
