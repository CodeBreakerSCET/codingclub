// Update every second
var myfunc = setInterval(function() 
{
    // code goes here
    var countDownDate = new Date("Mar 5, 2023 20:00:00").getTime();
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
var eventName = ["Contest 4 (Not Yet scheduled) <br>","Contest 5 (Not Yet scheduled)  <br>"];
function upcomingTest()
{
    document.getElementById("first").innerHTML = "Contest 3 (Scheduled on Sunday) <br>";
    document.getElementById("events").innerHTML = eventName.join("\n");
    document.getElementById("eventBtn").value = "UpComing Contest"
}

var pastEvent = ["Contest 1 on 16 Oct 2022<br>", "Contest 2 on 22 Jan 2023<br>"]
function pastContest()
{
    document.getElementById("allpast").innerHTML = pastEvent.join("\n")
    document.getElementById("pasteventBtn").value = "Past Contest"

}

function UpdateContest()
{
    var contestname = document.getElementById("contestName").val();
    alert("Contest name " + contestname + " is added")
    if(contestname != null)
    {
        contestname = contestname + "<br>";
        eventName.push(contestname)
    }
    else
    {
        alert("Contest name Can't blank")
    }
}

$(document).ready(function() 
{
    $("button").click(function() 
    {
        var x = $("form").serializeArray();
        $.each(x, function(i, field) 
        {
            // $("#output").append(field.name + ":" + field.value + " ");
            eventName.push(field.value);
        });
    });
});