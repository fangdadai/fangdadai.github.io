window.onload=function(){
    function times(){
        var date = new Date();
        var time = document.getElementById("time");
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();
        var days = date.getDay();
        var convert_days;
        switch(days) {
            case 0: convert_days = "Sunday"; break;
            case 1: convert_days = "Monday"; break;
            case 2: convert_days = "Tuesday"; break;
            case 3: convert_days = "Wednesday"; break;
            case 4: convert_days = "Thursday"; break;
            case 5: convert_days = "Friday"; break;
            case 6: convert_days = "Saturday"; break;
        }
        var convert_sec;
        var convert_min;
        var convert_hr;
        var word_mon;
        var greeting;
        // append "0" infront of the variable 'second' if it is a single digit 
        switch(second) {
            case 0: convert_sec = "00"; break;
            case 1: convert_sec = "01"; break;
            case 2: convert_sec = "02"; break;
            case 3: convert_sec = "03"; break;
            case 4: convert_sec = "04"; break;
            case 5: convert_sec = "05"; break;
            case 6: convert_sec = "06"; break;
            case 7: convert_sec = "07"; break;
            case 8: convert_sec = "08"; break;
            case 9: convert_sec = "09"; break;
            default: convert_sec = second;
        }
        switch(minute) {
            case 0: convert_min = "00"; break;
            case 1: convert_min = "01"; break;
            case 2: convert_min = "02"; break;
            case 3: convert_min = "03"; break;
            case 4: convert_min = "04"; break;
            case 5: convert_min = "05"; break;
            case 6: convert_min = "06"; break;
            case 7: convert_min = "07"; break;
            case 8: convert_min = "08"; break;
            case 9: convert_min = "09"; break;
            default: convert_min = minute;
        }
        switch(hour) {
            case 0: convert_hr = "00"; break;
            case 1: convert_hr = "01"; break;
            case 2: convert_hr = "02"; break;
            case 3: convert_hr = "03"; break;
            case 4: convert_hr = "04"; break;
            case 5: convert_hr = "05"; break;
            case 6: convert_hr = "06"; break;
            case 7: convert_hr = "07"; break;
            case 8: convert_hr = "08"; break;
            case 9: convert_hr = "09"; break;
            default: convert_hr = hour;
        }
        switch(month) {
            case 1: word_mon = "January"; break;
            case 2: word_mon = "February"; break;
            case 3: word_mon = "March"; break;
            case 4: word_mon = "April"; break;
            case 5: word_mon = "May"; break;
            case 6: word_mon = "June"; break;
            case 7: word_mon = "July"; break;
            case 8: word_mon = "August"; break;
            case 9: word_mon = "September"; break;
            case 10: word_mon = "October"; break;
            case 11: word_mon = "November"; break;
            case 12: word_mon = "December"; break;
        }
        if (hour > 4 && hour < 12) {
            greeting = "Good Morning!";
        } else if (hour >= 12 && hour < 17) {
            greeting = "Good Afternoon!";
        } else if (hour >= 17 && hour < 24) {
            greeting = "Good Evening!";
        } else {
            greeting = "Maybe it's time for bed..."
        }
        time.innerText = "It is now: \n" + convert_hr + ":" + convert_min + ":" + convert_sec + "\n" 
                            + convert_days + ", " + word_mon + " " + day + ", " + year + "\n" + greeting;
    }
    times();
    setInterval(times, 1000);
}