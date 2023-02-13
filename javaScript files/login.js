//Rules button
function Show(id)
{
  if (document.getElementById(id).style.display == 'none') 
  {
    document.getElementById(id).style.display = 'block';
  }
  else 
  {
    document.getElementById(id).style.display = 'none';
  }
};

//Submit Button
function Verify() {
  var userRef = "Codebreaker@scet";
  var passRef = "codebreaker";
  var titl  = "Update Data here"
  var user =  document.getElementById("username").value;
  var pass = document.getElementById("password").value;


  // change the title to see the next things
  let title_el = document.querySelector("title");
    
  if (user == userRef || pass == passRef) 
  {
    title_el.innerHTML = "World";
    document.getElementById("myDIV").style.display = "none";
    document.getElementById("DataUpdation").style.display = "initial";

    alert("login authentication successful")
  } 
  else 
  {
    alert("It seem's you are a wrong person...")
  }
};


function login()
{
  document.getElementById("myDIV").style.display = "initial";
  document.getElementById("DataUpdation").style.display = "none";
  alert("Logout Successfully");
}