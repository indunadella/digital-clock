function showTime() {
    const date = new Date()
    const h = date.getHours(); 
    const m = date.getMinutes(); 
    const s = date.getSeconds(); 
    document.getElementById("hour").innerHTML = h
    document.getElementById("minute").innerHTML = m
    document.getElementById("seconds").innerHTML = s
}
    showTime();
    setInterval(showTime, 1000);

