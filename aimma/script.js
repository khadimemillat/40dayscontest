// --------- Breaking day/night --------------

function twoFourBreaker(hour) {
  let breaker = hour % 12;
  breaker = breaker ? breaker : 12;
  return breaker;
}

// ------------------ showing date and time------------------
function doDate() {
  let str = "";

  let days = ["اتوار", "سوموار", "منگل", "بدھ", "جمعرات", "جمعہ", "سنیچر"];
  let months = ["جنوری", "فروری", "مارچ", "اپریل", "مائی", "جون", "جلائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"];

  let now = new Date();

  str += days[now.getDay()] + " / " + now.getDate() + " / " + months[now.getMonth()] + " / " + now.getFullYear() + " - " + twoFourBreaker(now.getHours()) + ":" + now.getMinutes() + ":" + now.getSeconds();
  document.getElementById("current-time").innerHTML = str;
  document.getElementById("time").value = str;
}
setInterval(doDate, 1000);

// ----------- masjid name to participants select & sbmt btn displaying----------

function visible() {
  let names = document.getElementById("names")
  let name = document.getElementById("name")
  let btn = document.getElementById("submiting")
  if (name.value !== "0") {
    names.style.display = "block";
    btn.style.display = "block";
  } else {
    names.style.display = "none";
    btn.style.display = "none";
  }
}

// validating parents name to enable when type is selected

function check() {
  document.querySelector('input[type="radio"]').addEventListener('click')

  document.querySelector('input[name="st1"]:checked') ? document.getElementById("st01").disabled = true : document.getElementById("st01").disabled = false;
  document.querySelector('input[name="st2"]:checked') ? document.getElementById("st02").disabled = true : document.getElementById("st02").disabled = false;
  document.querySelector('input[name="st3"]:checked') ? document.getElementById("st03").disabled = true : document.getElementById("st03").disabled = false;
  document.querySelector('input[name="st4"]:checked') ? document.getElementById("st04").disabled = true : document.getElementById("st04").disabled = false;
  document.querySelector('input[name="st5"]:checked') ? document.getElementById("st05").disabled = true : document.getElementById("st05").disabled = false;

}
// ---------------- form submit with validation -------------

let allrt = document.getElementById("alert")// alrt box
let almsg = document.getElementById("almsg") // art msg


function submit() {
  // --------------------- collecting data -------------------

  const msjid = document.getElementById("name").value

  const st1 = document.getElementById("st1").value !== "" ? document.getElementById("st1").value : "";
  const st2 = document.getElementById("st2").value !== "" ? document.getElementById("st2").value : "";
  const st3 = document.getElementById("st3").value !== "" ? document.getElementById("st3").value : "";
  const st4 = document.getElementById("st4").value !== "" ? document.getElementById("st4").value : "";
  const st5 = document.getElementById("st5").value !== "" ? document.getElementById("st5").value : "";

  const st001 = document.querySelector('input[name="st1"]:checked') ? document.querySelector('input[name="st1"]:checked').value : "";
  const st002 = document.querySelector('input[name="st2"]:checked') ? document.querySelector('input[name="st2"]:checked').value : "";
  const st003 = document.querySelector('input[name="st3"]:checked') ? document.querySelector('input[name="st3"]:checked').value : "";
  const st004 = document.querySelector('input[name="st4"]:checked') ? document.querySelector('input[name="st4"]:checked').value : "";
  const st005 = document.querySelector('input[name="st5"]:checked') ? document.querySelector('input[name="st5"]:checked').value : "";

  const p1 = document.getElementById("st1").value !== "" ? document.getElementById("st01").value + "," : "";
  const p2 = document.getElementById("st2").value !== "" ? document.getElementById("st02").value + "," : "";
  const p3 = document.getElementById("st3").value !== "" ? document.getElementById("st03").value + "," : "";
  const p4 = document.getElementById("st4").value !== "" ? document.getElementById("st04").value + "," : "";
  const p5 = document.getElementById("st5").value !== "" ? document.getElementById("st05").value + "," : "";

  // --------------------taking form data to an object --------------------


  const names = {
    st01: st1 + st001 + " " + p1,
    st02: st2 + st002 + " " + p2,
    st03: st3 + st003 + " " + p3,
    st04: st4 + st004 + " " + p4,
    st05: st5 + st005 + " " + p5
  }

  const formdata = {
    msjid: msjid,
    names: names.st01 + names.st02 + names.st03 + names.st04 + names.st05,
  }

  //  -------------------------- validating form details and throwing errors in error ids -------------------
  console.log(formdata.msjid)
  console.log(formdata.names)
  /*
  if (formdata.name == "0") {
    nmsg.innerHTML = "براہ کرم نام چنیں", window.location.hash = "#current-time", setTimeout(function () {
      nmsg.innerHTML = ""
    }, 5000)
  }
  else if (formdata.class.length < 1) {
    dmsg.innerHTML = "براہ کرم درجہ چنیں", window.location.hash = "#dmsg", setTimeout(function () {
      dmsg.innerHTML = ""
    }, 5000)
  }
  else if (formdata.hazri.length < 1) {
    hmsg.innerHTML = "براہ کرم حاضری میں سے کم از کم کوئی ایک چنیں", hdmsg.innerHTML = "براہ کرم حاضری میں سے کم از کم کوئی ایک چنیں", hnmsg.innerHTML = "براہ کرم حاضری میں سے کم از کم کوئی ایک چنیں", window.location.hash = "#attendance", setTimeout(function () {
      hmsg.innerHTML = "", hdmsg.innerHTML = "", hnmsg.innerHTML = ""
    }, 5000)
  }
  else if (formdata.namaz.length < 1) {
    namsg.innerHTML = "براہ کرم نماز میں سے کوئی ایک چنیں", window.location.hash = "#namsg", setTimeout(function () {
      namsg.innerHTML = ""
    }, 5000)
  }
  else if (formdata.tayyari.length < 1) {
    mmsg.innerHTML = "براہ کرم مکتب کی تیاری میں سے کوئی ایک چنیں", window.location.hash = "#mmsg", setTimeout(function () {
      mmsg.innerHTML = ""
    }, 5000)
  }
  else if (formdata.asbaq.length < 1) {
    smsg.innerHTML = "براہ کرم اسباق میں سے کوئی ایک چنیں", window.location.hash = "#smsg", setTimeout(function () {
      smsg.innerHTML = ""
    }, 5000)
  }
  else if (formdata.khidmat.length < 1) {
    kmsg.innerHTML = "براہ کرم خدمت میں سے کوئی ایک چنیں", window.location.hash = "#smsg", setTimeout(function () {
      kmsg.innerHTML = ""
    }, 5000)
  }
  // ---------------------- output after validation -------------------
  else {
    document.getElementById("loader").style.display = "block";

    // -------------sending details to the hidden (main) form-----------------
    let nname = document.getElementById("nname").value = formdata.naam
    let nclass = document.getElementById("nclass").value = formdata.class
    let nattendance = document.getElementById("nattendance").value = formdata.hazri
    let nnamaz = document.getElementById("nnamaz").value = formdata.namaz
    let ntayyari = document.getElementById("ntayyari").value = formdata.tayyari
    let nasbaq = document.getElementById("nasbaq").value = formdata.asbaq
    let nkhidmat = document.getElementById("nkhidmat").value = formdata.khidmat

    // -----------------------form submit script---------------------

    const scriptURL = 'https://script.google.com/macros/s/AKfycbzerlClZ6gC39DDGrCMdduyS3tDjXlr9kWvAkJg-_R2wtFHXfctZV4E2WwiLmyHGRye/exec'
    const form = document.forms['submit-to-google-sheet']
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(_response => {
          document.getElementById("loader").style.display = "none";

          allrt.classList.remove("hidden");
          allrt.classList.add("visible");
          almsg.classList.remove("text-dark");
          almsg.classList.add("text-success");
          almsg.innerText = `ماشا اللہ لا قو الا باللہ\n مبارک ہو \nآپکی آج کی مکمل تفصیل جمع کر لی گئی ہے`
        })
      form.reset()
        .catch(_error => {
          document.getElementById("loader").style.display = "none";

          allrt.classList.remove("hidden");
          allrt.classList.add("visible");
          almsg.classList.remove("text-dark");
          almsg.classList.add("text-danger");
          almsg.innerText = `انالله و انا الیہ راجعون\n ہمیں افسوس ہے ابھی آپکی تفصیل جمع نہیں ہو سکی ہے\n دوبارہ کوشش کریں"`
        })
    })
    // ------submiting the hidden form-----------
    return sub()
  }
}

function sub() {
  document.getElementById("submit").click()
}

// --------------------hiding alert box --------------

function okay() {
  allrt.classList.remove("visible")
  allrt.classList.add("hidden")
  almsg.classList.remove("text-success");
  almsg.classList.remove("text-danger");
}
*/
}