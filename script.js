let control = 1 //Control for the function chageColor()
let controlOperator = 0 //Control for the operators of function insert()
function changeColor() {//Change color when the toogle is actioned
    switch (control) {
    case 1:
        removeClass('one');
        addClass('two');
        control = 2
        break;
    case 2:
        removeClass('two');
        addClass('three');
        control = 3
        break;
    case 3:
        removeClass('three');
        addClass('one');
        control = 1 
        break;
    default:
       alert("Há um erro na mudança de cores") 
    }
}
function removeClass(theme) {//Remove classes and id when calling changeColor()
    $(`body`).removeClass(`body-theme-${theme}`)
    $(`header`).removeClass(`header-theme-${theme}`)
    $(`.screen-calculator`).removeClass(`screen-calculator-theme-${theme}`)
    $(`.btn-toogle`).removeClass(`btn-toogle-theme-${theme}`)
    $(`.circle-the-toogle`).removeClass(`circle-the-toogle-theme-${theme}`)
    $(`.body-of-calculator`).removeClass(`body-of-calculator-theme-${theme}`)
    $(`.tec-reset`).removeAttr('id')
    $(`.tec-del`).removeAttr('id')
    $(`.tec-igual`).removeAttr('id')
    $(`.tec`).removeClass(`tec-theme-${theme}`)
}
function addClass(theme) {//Add classes and id when calling changeColor()
    $(`body`).addClass(`body-theme-${theme}`)
    $(`header`).addClass(`header-theme-${theme}`)
    $(`.screen-calculator`).addClass(`screen-calculator-theme-${theme}`)
    $(`.btn-toogle`).addClass(`btn-toogle-theme-${theme}`)
    $(`.circle-the-toogle`).addClass(`circle-the-toogle-theme-${theme}`)
    $(`.body-of-calculator`).addClass(`body-of-calculator-theme-${theme}`)
    $(`.tec-reset`).attr(`id`, `tec-reset-theme-${theme}`)
    $(`.tec-del`).attr(`id`, `tec-del-theme-${theme}`)
    $(`.tec-igual`).attr(`id`, `tec-igual-theme-${theme}`)
    $(`.tec`).addClass(`tec-theme-${theme}`)
}
function insert(numOrOperator){//Insert the number or operator when called
    let backNum = document.getElementById("display-of-screen").innerHTML
    if (numOrOperator != '+' && numOrOperator != '-' &&  numOrOperator!='/' && numOrOperator != '*' && numOrOperator != '.') {
        document.getElementById("display-of-screen").innerHTML = backNum + numOrOperator
        controlSimble = 1 
    }else if (controlSimble != 0){
        document.getElementById("display-of-screen").innerHTML = backNum + numOrOperator
        controlSimble = 0 
    }
}
function reset() {//Reset screen of calculator when called
    document.getElementById("display-of-screen").innerHTML = ""
    controlSimble = 1
}
function del() {//Remove the last digit of screen of calculator when called
    let backNum = document.getElementById("display-of-screen").innerHTML
    document.getElementById("display-of-screen").innerHTML = backNum.substring(0, backNum.length - 1);
    controlSimble = 1 
}
function calc() {//Calculates what the calculator screen is when called
    let screen =  document.getElementById("display-of-screen").innerHTML
    if (screen) {
        document.getElementById("display-of-screen").innerHTML = eval(screen);
    }else{
        document.getElementById("display-of-screen").innerHTML = "- nada ----";
    }
}
$(document).keypress(function(e) {//Capture of key the keyboard when called
    e.preventDefault();
    if(e.keyCode === 13) {calc()};
    if(e.keyCode === 44 || e.keyCode === 46) {reset()};
    if((e.keyCode >= 42 && e.keyCode <= 47) && (e.keyCode != 44) && (e.keyCode != 46)){ insert(`${e.key}`)}
    if((e.which >= 48 && e.which <= 57) || (e.which >= 96 && e.which <= 105)){ insert(e.key)};
});