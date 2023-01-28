
let displayScreen = "";
let buttons = document.querySelectorAll('button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {

        if (e.target.innerHTML === '<i class="fa-solid fa-delete-left"></i>') {
            let x = displayScreen.length;
            displayScreen = displayScreen.substring(0, x - 1);
        }
        else if (e.target.innerHTML === '=') {
            try {
                displayScreen = eval(displayScreen)
            } catch (error) {
                displayScreen = "Syntax error";
                document.querySelector('input').value = displayScreen;
            }
            document.querySelector('input').value = displayScreen;
        }
        else if (e.target.innerHTML === 'C') {
            displayScreen = "";
            document.querySelector('input').value = displayScreen;
        }
        else if (e.target.innerHTML === "^") {

            displayScreen += "**"
        }
        else if (e.target.innerHTML === "-") {
            displayScreen += "-";
        }
        else if (e.target.innerText === "x") {
            displayScreen += "*";
        }
        else {
            displayScreen = displayScreen + e.target.innerText;
        }
        document.querySelector('input').value = displayScreen;
    })
})



document.addEventListener('keydown', function (event) {

    var key_press = String.fromCodePoint(event.keyCode);
    var key_code = event.keyCode;
    var shift_Key = event.shiftKey

    // Keyboard Button implemntation
    // Restart button
    if (key_press == "C" || key_code == 67) {
        displayScreen = "";
        document.querySelector('input').value = displayScreen;
    }

    // Delete button
    else if (key_code == 8) {
        let x = displayScreen.length;
        displayScreen = displayScreen.substring(0, x - 1);
    }

    // operators
    else if (key_code == "54" && shift_Key) {
        displayScreen += "**";
    }
    else if (key_code == "187" && shift_Key) {
        displayScreen += "+";
    }
    else if (key_code == "56" && shift_Key) {
        displayScreen += "*";
    } else if (key_code == "53" && shift_Key) {
        displayScreen += "%";
    }
    else if (key_code == "191") {
        displayScreen += "/";
    }
    else if (key_code == "189") {
        displayScreen += "-";
    }
    else if (key_code == "13") {
        try {  
            displayScreen = eval(displayScreen)
        } catch (error) {
            displayScreen = "Syntax error"
            document.querySelector('input').value = displayScreen;
        }
    }
    // Numbers 
    else if (key_press == "9" || key_code == "57") {
        displayScreen += "9"
    } else if (key_press == "8" || key_code == "56") {
        displayScreen += "8"
    }
    else if (key_press == "7" || key_code == "55") {
        displayScreen += "7"
    }
    else if (key_press == "6" || key_code == "54") {
        displayScreen += "6"
    }
    else if (key_press == "5" || key_code == "53") {
        displayScreen += "5"
    }
    else if (key_press == "4" || key_code == "52") {
        displayScreen += "4"
    }
    else if (key_press == "3" || key_code == "51") {
        displayScreen += "3"
    }
    else if (key_press == "2" || key_code == "50") {
        displayScreen += "2"
    }
    else if (key_press == "1" || key_code == "49") {
        displayScreen += "1"
    }
    else if (key_press == "0" || key_code == "48") {
        displayScreen += "0"
    }
    else if (key_press == "" || key_code == "190") {
        displayScreen += "."
    }

    // Numpad
    else if ( key_code == "111") {
        displayScreen += "/"
    } else if ( key_code == "106") {
        displayScreen += "*"
    }
    else if ( key_code == "109") {
        displayScreen += "-"
    }
    else if (key_code == "107") {
        displayScreen += "+"
    }
    else if ( key_code == "110") {
        displayScreen += "."
    }
    else if (key_code == "105") {
        displayScreen += "9"
    }
    else if (key_code == "104") {
        displayScreen += "8"
    }
    else if (key_code == "103") {
        displayScreen += "7"
    }
    else if (key_code == "102") {
        displayScreen += "6"
    }
    else if (key_code == "101") {
        displayScreen += "5"
    }
    else if (key_code == "100") {
        displayScreen += "4"
    }
    else if (key_code == "99") {
        displayScreen += "3"
    }
    else if (key_code == "98") {
        displayScreen += "2"
    }
    else if (key_code == "97") {
        displayScreen += "1"
    }
    else if (key_code == "96") {
        displayScreen += "0"
    }
    else {
        console.log("Use Valid Strings")
    }
    document.querySelector('input').value = displayScreen;

})
