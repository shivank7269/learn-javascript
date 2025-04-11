let liveTime = document.getElementById("clock")
function findLiveTime(){
    const now = new Date();
    let hours = now.getHours() 
    let minutes = now.getMinutes() 
    let seconds = now.getSeconds()
    hours = hours%12
    liveTime.innerText=`${hours}:${minutes}:${seconds}` 
}
setInterval(findLiveTime,1000)