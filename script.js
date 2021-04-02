let a = time.getHours();
function showTime() {
    let time = new Date();

 
 
 
 
    let b = time.getMinutes();
document.getElementsByClassName('hour').innerHtml = a;
document.getElementsByClassName('minut').innerHtml = b;
showTime();
}
// setInterval(showTime, 1000);