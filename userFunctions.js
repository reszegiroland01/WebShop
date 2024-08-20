let user = getUser()
let userName = user.userName

function getUser()
{
  const user = localStorage.getItem("User")
  return JSON.parse(user)
  
}

function setUsername()
{
  if(userName)
  {
    let target = document.getElementById("user")
    target.style.fontWeight="900"
    target.innerHTML=userName
  }
  
}
setUsername()

function userLogout()
{
    localStorage.removeItem("User");
    window.location.href = './login/index.html';
}
