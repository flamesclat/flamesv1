/* Post Request TO https://lit-atoll-32207.herokuapp.com/api/v1/flames */

const submitbtn = document.getElementById("submit");

function telephoneCheck(str) {
  var a = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(str);
  return a;
}

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

submitbtn.addEventListener("click", async (e) => {
  let fname = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;
  if (fname.length > 4 && email.length > 6 && subject.length === 10 && telephoneCheck(subject)&& ValidateEmail(email)) {
    const rawResponse = await fetch(
      "https://lit-atoll-32207.herokuapp.com/api/v1/flames",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: fname,
          email: email,
          mobile: subject,
          message: message,
        }),
      }
    );
    e.preventDefault();
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
    alert("Form Submitted");
  } else {
    alert("Enter Correct Details");
  }
});

/* Post Request TO https://lit-atoll-32207.herokuapp.com/api/v1/flames */

const msubmitbtn = document.getElementById("msubmit");

msubmitbtn.addEventListener("click", async (e) => {
  let fname = document.getElementById("mname").value;
  let email = document.getElementById("memail").value;
  let subject = document.getElementById("msubject").value;
  let message = document.getElementById("mmessage").value;
  if (fname.length > 4 && email.length > 6 && subject.length === 10 && telephoneCheck(subject) && ValidateEmail(email)) {
    const rawResponse = await fetch(
      "https://lit-atoll-32207.herokuapp.com/api/v1/flames",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: fname,
          email: email,
          mobile: subject,
          message: message,
        }),
      }
    );
    e.preventDefault();
    alert("Form Submitted");
    document.getElementById("dismiss").click();
    document.getElementById("mname").value = "";
    document.getElementById("memail").value = "";
    document.getElementById("msubject").value = "";
    document.getElementById("mmessage").value = "";
  } else {
    alert("Submit Correct Details");
  }
});

setTimeout(() => {
  const btn = document.getElementById("btn-1");
  fetch("https://lit-atoll-32207.herokuapp.com/api/v1/flames").then;
}, 2000);
