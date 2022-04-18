//CountDown 
//DONE
function checkInputNumberCountDown() {

    inputNumberCountDown = prompt("Please input number count down!", 60);
    console.log("inputNumberCountDown: ", inputNumberCountDown)
    if (inputNumberCountDown >= 0 && inputNumberCountDown != null && inputNumberCountDown.trim() != "") {
        countDown(inputNumberCountDown)
    }
    else {
        return checkInputNumberCountDown()
    }

}
checkInputNumberCountDown()
function countDown(number) {

    {
        setInterval(function () {
            if (number >= 0) {
                document.getElementById("countDown").innerHTML = "Count down: " + number;
                console.log("Count down: ", number)
                number--
            }
            else {
                return number
            }
        }, 1000)
    }
    return number
}
// CloclNow 
// DONNE
function clockNow() {

    setInterval(() => {
        let hour = new Date().getHours()
        let minute = new Date().getMinutes()
        let seccond = new Date().getSeconds()
        let timeNow = hour.toString() + ":" + minute.toString() + ":" + seccond.toString()
        document.getElementById("clock").innerHTML = "Clock now: " + timeNow
        console.log(timeNow)
    }, 1000);

}
clockNow()