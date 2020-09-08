
function clickOnButton() {

    const getText = document.getElementsByClassName("input");
    //console.log(getText[0].value);
    getText[1].value = getText[0].value;
    getText[0].value = null;
}