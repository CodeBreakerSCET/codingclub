// add new events here--
// var eventName = ["Weekly Contest 2" , "Weekly Contest 3" ,"Weekly Contest 4"];
// document.getElementById("events").innerHTML = eventName.join("\n");
function classToggle() 
{
    const navs = document.querySelectorAll('.Navbar__Items')
    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}
document.querySelector('.Navbar__Link-toggle').addEventListener('click', classToggle);
