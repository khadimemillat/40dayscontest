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
  document.getElementById("ftime").value = str;
}
setInterval(doDate, 1000);

// --------------------------------------------------------------------------------
function input() {
  return visible()
}

// ---------setting left time from today----------
function daysleft() {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();
  today = dd + '/' + mm + '/' + yyyy;
  // To set two dates to two variables
  let date1 = today;
  let date2 = new Date("01/01/2023");
  // To calculate the time difference of two dates
  let Difference_In_Time = date2.getTime() - new Date().getTime();
  // To calculate the no. of days between two dates
  let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  //To display the final no. of days (result)
  let day = "Day " + (40 - Math.trunc(Difference_In_Days));
  document.getElementById("doc").innerText = day
  document.getElementById("fday").value = day
}
setInterval(daysleft, 1000);


// ----------- masjid name to participants select displaying----------

function visible() {
  let tabcontents = document.getElementsByClassName("hide");
  if (document.getElementById("name").value !== "") {
    for (tabcontent of tabcontents) {
      tabcontent.classList.remove("show");
    }
    document.getElementById(document.getElementById("name").value).classList.add("show");
  } else if (document.getElementById("name").value === " ") {
    document.getElementById("pn").style.display = "none";
  }
  document.getElementById("fmname").value = event.currentTarget.value
  return enable()
}
function enable() {
  if (document.getElementById("name").value !== " ") {
    document.getElementById("details").style.display = "block";
    document.getElementById("pn").style.display = "block";
  }
}

function chk() {
  let details2 = document.getElementById("details2")
  if (event.currentTarget.value !== "0") {
    details2.style.display = "block";
    document.getElementById("fpname").value = document.querySelector('.show').value
  }
}

// -------------------enabling and desabling namaz checkboxes-------------

function namazcheck() {
  if (document.getElementById("none").checked == true) {
    document.getElementById("fajr").disabled = true;
    document.getElementById("zuhr").disabled = true;
    document.getElementById("asr").disabled = true;
    document.getElementById("maghrib").disabled = true;
    document.getElementById("isha").disabled = true;
    document.getElementById("vitr").disabled = true;
  }
  else {
    document.getElementById("fajr").disabled = false;
    document.getElementById("zuhr").disabled = false;
    document.getElementById("asr").disabled = false;
    document.getElementById("maghrib").disabled = false;
    document.getElementById("isha").disabled = false;
    document.getElementById("vitr").disabled = false;
  }
}

function desableNone() {
  if (event.currentTarget.checked === true ||
    document.getElementById("fajr").checked === true ||
    document.getElementById("zuhr").checked === true ||
    document.getElementById("asr").checked === true ||
    document.getElementById("maghrib").checked === true ||
    document.getElementById("isha").checked === true ||
    document.getElementById("vitr").checked === true === true) {
    document.getElementById("none").disabled = true;
  }
  else {
    document.getElementById("none").disabled = false;
  }
}

// -------------------------error messages ids -----------------------------

const nmsg = document.getElementById("nmsg")
const mmsg = document.getElementById("mmsg")
const kmsg = document.getElementById("kmsg")

// ---------------- form submit with validation -------------

let allrt = document.getElementById("alert")// alrt box
let almsg = document.getElementById("almsg") // art msg

function submit() {
  // --------------------- collecting data -------------------

  const fajr = document.getElementById("fajr").checked ? document.getElementById("fajr").value + "،" : "";
  const zuhr = document.getElementById("zuhr").checked ? document.getElementById("zuhr").value + "،" : "";
  const asr = document.getElementById("asr").checked ? document.getElementById("asr").value + "،" : "";
  const maghrib = document.getElementById("maghrib").checked ? document.getElementById("maghrib").value + "،" : "";
  const isha = document.getElementById("isha").checked ? document.getElementById("isha").value + "،" : "";
  const vitr = document.getElementById("vitr").checked ? document.getElementById("vitr").value : "";

  const none = document.getElementById("none").checked ? document.getElementById("none").value : "";

  const kiya = document.getElementById("m_kiya").checked ? document.getElementById("m_kiya").value : ""
  const nahin_kiya = document.getElementById("m_nahin_kiya").checked ? document.getElementById("m_nahin_kiya").value : ""

  const k_kiya = document.getElementById("k_kiya").checked ? document.getElementById("k_kiya").value : ""
  const k_nahin_kiya = document.getElementById("k_nahin_kiya").checked ? document.getElementById("k_nahin_kiya").value : ""

  // --------------------taking form data to an object --------------------

  const formdata = {
    namaz: fajr + zuhr + asr + maghrib + isha + vitr + none,
    mashq: kiya + nahin_kiya,
    khidmat: k_kiya + k_nahin_kiya,
  }
  //  -------------------------- validating form details and throwing errors in error ids -------------------
  if (formdata.namaz.length < 1) {
    nmsg.innerHTML = "براہ کرم نماز میں سے کوئی ایک چنیں", window.location.hash = "#nmsg", setTimeout(function () {
      nmsg.innerHTML = ""
    }, 5000);
  }
  else if (formdata.mashq.length < 1) {
    mmsg.innerText = "dsafsdfsa", window.location.hash = "#mmsg", setTimeout(function () {
      mmsg.innerText = ""
    }, 5000);
  }
  else if (formdata.khidmat.length < 1) {
    kmsg.innerHTML = "dsfasdfsdf", window.location.hash = "#kmsg", setTimeout(function () {
      kmsg.innerHTML = ""
    }, 5000);
  }

  // ---------------------- output after validation -------------------
  else {
    document.getElementById("loader").style.display = "block";

    // -------------sending details to the hidden (main) form-----------------

    document.getElementById("fnamaz").value = formdata.namaz
    document.getElementById("fmashq").value = formdata.mashq
    document.getElementById("fkhidmat").value = formdata.khidmat
    document.getElementById("fmname").value = document.getElementById("name").value
    document.getElementById("fpname").value = document.querySelector('.show').value

    // -----------------------form submit script---------------------

    let scriptURL //= 'https://script.google.com/macros/s/AKfycbzicx9kyx33XlGkFx_-l4K9i9ejF5vQV0flkLUsYeprtPRGBAUK5e0g2IxFU9Y-04M1/exec';
    let sval = document.getElementById("name").value

    if (sval == 'مسجد مولانا افتخار صاحب') {
      scriptURL = 'https://script.google.com/macros/s/AKfycbzicx9kyx33XlGkFx_-l4K9i9ejF5vQV0flkLUsYeprtPRGBAUK5e0g2IxFU9Y-04M1/exec'
    }
    else if (sval == '') {
      scriptURL = ''
    }
    else if (sval == '') {
      scriptURL = ''
    }
    // const scriptURL = 'https://script.google.com/macros/s/AKfycbw8RKLAkdzE7Md3RCHcc6JjDfxe8M-2jUvp9R3qzud4EVvE7epnSbsNty8RrZ83pQij/exec'
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