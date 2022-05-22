document.cookie = "username=Edureka Admin; expires=Thu, 12 May 2022 12:00:00 UTC";
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
let x = document.cookie;
document.write(x);


document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
//just need to set the expires to past date to delete cookies


function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}


// Local storage
if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount) + 1;
  } else {
    localStorage.clickcount = 1;
  }
  document.write("You have clicked the button " + localStorage.clickcount + " time(s) in this session.")

// Session Storage
if (sessionStorage.clickcount) {
    sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
  } else {
    sessionStorage.clickcount = 1;
  }
  document.write("You have clicked the button " + sessionStorage.clickcount + " time(s) in this session.")

if (localStorage.name) {
    localStorage.name = Number(localStorage.clickcount) + 1;
  } else {
    localStorage.name = {
        name: "xyz",
        age: 13
    };
  }
  document.write("You have clicked the button " + localStorage.name + " time(s) in this session.")


  var a = (value, value2) => { alert(value + value2)}
  a("Hello", "there");
