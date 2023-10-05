const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const upDate = new Date('21 mar 2024')

function countDown(){
    
    const currentDate = new Date()
    let leftDate = upDate-currentDate
        
        //calc total seconds
    const totalSecond = Math.floor(leftDate / 1000)
        
        //find countdown value
    const seconds =Math.floor(totalSecond) %60
    const minutes = Math.floor(totalSecond/60) %60
    const hours = Math.floor(totalSecond/3600) %24
    const days = Math.floor(totalSecond / 3600 / 24)
    console.log(seconds, minutes , hours ,days)

        //print to Html
    daysEl.innerText = timeFormat(days);
    hoursEl.innerText = timeFormat(hours);
    minutesEl.innerText = timeFormat(minutes);
    secondsEl.innerText = timeFormat(seconds);
}

function timeFormat(time){
        if( time < 10){
            time = "0"+time
        }
        return time
}


setInterval(countDown,1000)