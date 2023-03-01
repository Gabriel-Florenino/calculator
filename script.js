let controlSimble = 2 
let controlPonto = 1 
function insert(num){
    if (num != ' + ' && num != '-' &&  num!=' / ' && num != ' * ' && num != '.') {
        let number = document.getElementById("screenCalc").innerHTML
        document.getElementById("screenCalc").innerHTML = number + num
        controlSimble = 1 
    }else if (controlSimble != 2){
        controlSimble = 2 
        let number = document.getElementById("screenCalc").innerHTML
        document.getElementById("screenCalc").innerHTML = number + num
    }
}
function reset() {
    document.getElementById("screenCalc").innerHTML = ""
    controlSimble = 2 
}
function del() {
    let number = document.getElementById("screenCalc").innerHTML
    document.getElementById("screenCalc").innerHTML = number.substring(0, number.length - 1);
    controlSimble = 2 
}
function calc() {
    let e =  document.getElementById("screenCalc").innerHTML
    if (e) {
        document.getElementById("screenCalc").innerHTML = eval(e);
    }else{
        document.getElementById("screenCalc").innerHTML = "- nada ----";
    }
}
let control = 1
function mudaColor(){
    let body = document.querySelector("body")
    let header = document.querySelector("header")
    let screen = document.querySelector("#screen")
    let corp = document.querySelector("#corp")
    let toogle = document.querySelector("#button")
    let reset = document.querySelectorAll("#reset")
    let igual = document.querySelector("#igual")
    let buts = document.querySelectorAll(".tec")
    let circle = document.querySelector("#pp")
    

    if (control == 1) {
        body.style.backgroundColor="hsl(0, 0%, 90%)"
        header.style.color="hsl(60, 10%, 19%)"
        screen.style.backgroundColor="hsl(0, 0%, 93%)"
        screen.style.color="hsl(60, 10%, 19%)"
        corp.style.backgroundColor="hsl(0, 5%, 81%)"
        toogle.style.backgroundColor="hsl(0, 5%, 81%)"
        igual.style.backgroundColor="hsl(25, 98%, 40%)"
        igual.style.boxShadow="0 5px hsl(25, 99%, 27%)"
        igual.style.color="white"
        igual.addEventListener("mouseover" , function up() {
            igual.style.backgroundColor="hsl(25, 91%, 71%)"
        })
        igual.addEventListener("mouseout" , function up() {
            igual.style.backgroundColor="hsl(25, 98%, 40%)"
        })
        buts.forEach(element => {
            element.style.backgroundColor="hsl(45, 7%, 89%)"
            element.style.boxShadow="0 5px hsl(35, 11%, 61%)"
            element.style.color="hsl(60, 10%, 19%)"
            element.addEventListener("mouseover" , function up() {
                element.style.backgroundColor="white"
            })
            element.addEventListener("mouseout" , function down() {
                element.style.backgroundColor="hsl(45, 7%, 89%)"
            })
        });
        toogle.style.justifyContent="center"
        circle.style.backgroundColor="hsl(25, 98%, 40%)"
        reset.forEach(element => {
            element.style.backgroundColor="hsl(185, 42%, 37%)"
            element.style.boxShadow="0 5px hsl(185, 58%, 25%)"
            element.style.color="white"
            element.addEventListener("mouseover" , function up() {
                element.style.backgroundColor="hsl(184, 29%, 61%)"
            })
            element.addEventListener("mouseout" , function down() {
                element.style.backgroundColor="hsl(185, 42%, 37%)"
            })
        });

        control= control + 1
    } else if (control == 2) {
        body.style.backgroundColor="hsl(268, 75%, 9%)"
        header.style.color="hsl(52, 100%, 62%)"
        screen.style.backgroundColor="hsl(268, 71%, 12%)"
        screen.style.color="hsl(52, 100%, 62%)"
        corp.style.backgroundColor="hsl(268, 71%, 12%)"
        toogle.style.backgroundColor="hsl(268, 71%, 12%)"
        igual.style.backgroundColor="hsl(176, 100%, 44%)"
        igual.style.boxShadow="0 5px hsl(177, 92%, 70%)"
        igual.style.color="hsl(198, 20%, 13%)"
        igual.addEventListener("mouseover" , function up() {
            igual.style.backgroundColor="hsl(177, 92%, 70%)"
        })
        igual.addEventListener("mouseout" , function up() {
            igual.style.backgroundColor="hsl(176, 100%, 44%)"
        })
        buts.forEach(element => {
            element.style.backgroundColor="hsl(268, 47%, 21%)"
            element.style.boxShadow="0 5px hsl(290, 70%, 36%)"
            element.style.color="hsl(52, 100%, 62%)"
            element.addEventListener("mouseover" , function up() {
                element.style.backgroundColor="hsl(268, 45%, 46%)"
            })
            element.addEventListener("mouseout" , function down() {
                element.style.backgroundColor="hsl(268, 47%, 21%)"
            })
        });
        toogle.style.justifyContent="flex-end"
        circle.style.backgroundColor="hsl(177, 92%, 70%)"
        reset.forEach(element => {
            element.style.backgroundColor="hsl(281, 89%, 26%)"
            element.style.boxShadow="0 5px hsl(285, 91%, 52%)"
            element.style.color="white"
            element.addEventListener("mouseover" , function up() {
                element.style.backgroundColor="hsl(286, 72%, 48%)"
            })
            element.addEventListener("mouseout" , function down() {
                element.style.backgroundColor="hsl(281, 89%, 26%)"
            })
        });
        control = control + 1
    }else{
        body.style.backgroundColor="hsl(222, 26%, 31%)"
        header.style.color="white"
        screen.style.backgroundColor="hsl(224, 36%, 15%)"
        screen.style.color="white"
        corp.style.backgroundColor="hsl(223, 31%, 20%)"
        toogle.style.backgroundColor="hsl(223, 31%, 20%)"
        igual.style.backgroundColor="hsl(6, 63%, 50%)"
        igual.style.boxShadow="0 5px  hsl(6, 70%, 34%)"
        igual.style.color="white"
        igual.addEventListener("mouseover" , function up() {
            igual.style.backgroundColor="hsl(6, 78%, 67%)"
        })
        igual.addEventListener("mouseout" , function up() {
            igual.style.backgroundColor="hsl(6, 63%, 50%)"
        })
        buts.forEach(element => {
            element.style.backgroundColor="hsl(30, 25%, 89%)"
            element.style.boxShadow="0 5px hsl(28, 16%, 65%)"
            element.style.color="hsl(221, 14%, 31%)"
            element.addEventListener("mouseover" , function up() {
                element.style.backgroundColor="white"
            })
            element.addEventListener("mouseout" , function down() {
                element.style.backgroundColor="hsl(30, 25%, 89%)"
            })
        });
        toogle.style.justifyContent="flex-start"
        circle.style.backgroundColor="hsl(6, 63%, 50%)"
        reset.forEach(element => {
            element.style.backgroundColor="hsl(225, 21%, 49%)"
            element.style.boxShadow="0 5px hsl(224, 28%, 35%)"
            element.style.color="white"
            element.addEventListener("mouseover" , function up() {
                element.style.backgroundColor="hsl(226, 33%, 68%)"
            })
            element.addEventListener("mouseout" , function down() {
                element.style.backgroundColor="hsl(225, 21%, 49%)"
            })
        });
        control = 1
    }
}


