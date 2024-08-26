let users = [
 {
    userName: "Roland",
    password: "123",
},
{
    userName: "Mate",
    password: "1234",
}

]

function login()
{
    let userExist = false
    let userName = document.getElementById("userName").value
    let password = document.getElementById("password").value
    userExist = users.filter((user)=>user.password === password && user.userName === userName)
    console.log(userExist)
    
    if(userExist.length>0)
    {
        
        const user = userExist[0]
        localStorage.setItem("User", JSON.stringify(user));
        window.location.href = '../index.html';
    }
    else
    {
        let target = document.getElementById("modal")
        if(target.classList.contains("hideModal")){
            target.classList.remove("hideModal")
        }
    }
}

function registration()
{
    let userName = document.getElementById("newUserName").value
    let password = document.getElementById("newPassword").value
    let newUser = {
        userName: userName,
        password: password
    }
    let message = ""
    if(userName.length > 0 && password.length > 0)
    {
        users.push(newUser)
        console.log(users)
        message = "Sikeres regisztráció!"
        document.getElementById("registrationModal").style.backgroundColor="green"
        document.getElementById("nextToLoginHide").classList.remove("nextToLoginHide")
    }
    else
    {
        message = "Sikertelen regisztráció"
        document.getElementById("registrationModal").style.backgroundColor="#C21807"
    }

    document.getElementById("registrationModal").innerHTML=message
}

function navigateToLogin()
{
    window.location.href = '../login/index.html';
}


