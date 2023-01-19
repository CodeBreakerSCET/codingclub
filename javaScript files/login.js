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
  
  var user =  document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  if (user == userRef || pass == passRef) {
  alert("login authentication successful")
  } else {
  alert("It seem's you are a wrong person...")
  }
};