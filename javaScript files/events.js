// Update every second
var myfunc = setInterval(function() 
{
    // code goes here
    var countDownDate = new Date("Jan 22, 2023 20:00:00").getTime();
    var now = new Date().getTime();
    var timeleft = countDownDate - now;
        
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    // Display the message when countdown is over
    if (timeleft < 0) 
    {
        clearInterval(myfunc);
        document.getElementById("time").innerHTML = ""
        document.getElementById("end").innerHTML = "TIME UP!!";
    }

    // Result is output to the specific element
    document.getElementById("time").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";


}, 1000)



// add new events here--
// Don't forget to add time in the events.html for upcoming contest
const eventName = ["Weekly Contest 3 (Not Yet scheduled) <br>","Weekly Contest 4 (Not Yet scheduled)  <br>"];
function upcomingTest()
{
    document.getElementById("first").innerHTML = "Weekly Contest 2 (Scheduled on Sunday) <br>";
    document.getElementById("events").innerHTML = eventName.join("\n");
    document.getElementById("eventBtn").value = "UpComing Contest"
}

