const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let p1 = ""
let p2 = ""

function generatePassword() {
    for (let i = 0; i < 15; i++) {
        let randomCharacter = generateCharacter()
        p1 += randomCharacter
    }

    for (let i = 0; i < 15; i++) {
        let randomCharacter = generateCharacter()
        p2 += randomCharacter
    }

    displayPassword()
}

function generateCharacter() {
    let randomIdx = Math.floor(Math.random() * characters.length)
    return characters[randomIdx]
}

function displayPassword() {
    let password1 = document.getElementById("password1")
    let password2 = document.getElementById("password2")

    password1.textContent = p1
    password2.textContent = p2

    p1 = ""
    p2 = ""
}