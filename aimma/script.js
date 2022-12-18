// ------------------ geting date and time------------------
function doDate() {
  var str = "";

  var days = ["اتوار", "سوموار", "منگل", "بدھ", "جمعرات", "جمعہ", "سنیچر"];
  var months = ["جنوری", "فروری", "مارچ", "اپریل", "مائی", "جون", "جلائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"];

  var now = new Date();

  str += days[now.getDay()] + " / " + now.getDate() + " / " + months[now.getMonth()] + " / " + now.getFullYear() + " - " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
  document.getElementById("current-time").innerHTML = str;
  document.getElementById("time").value = str;
}
setInterval(doDate, 1000);

// ----------- masjid name to participants select displaying----------

function visible() {
  let tabcontents = document.getElementsByClassName("hide");
  if(document.getElementById("name").value !== ""){
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("show");
  }
  document.getElementById("pn").classList.remove("hide");
  document.getElementById("pn").classList.add("show");
  document.getElementById(document.getElementById("name").value).classList.add("show");
}}

// -----------------------displaying and hidng attendance div------------------
/*
function clhifz() {
  document.getElementById("hifz").style.display = "block";
  document.getElementById("nazra").style.display = "none";
  document.getElementById("deeniyat").style.display = "none";
}
function clnazra() {
  document.getElementById("nazra").style.display = "block";
  document.getElementById("hifz").style.display = "none";
  document.getElementById("deeniyat").style.display = "none";
}
function cldeeniyat() {
  document.getElementById("deeniyat").style.display = "block";
  document.getElementById("hifz").style.display = "none";
  document.getElementById("nazra").style.display = "none";
}

// -------------------enabling and desabling hifz, nazra - attendance checkboxes-------------

function classchk() {
  if (document.getElementById("missed").checked === true) {
    document.getElementById("subah").disabled = true;
    document.getElementById("dopahar").disabled = true;
    document.getElementById("sham").disabled = true;
    document.getElementById("hc").disabled = true;
  }
  else {
    document.getElementById("subah").disabled = false;
    document.getElementById("dopahar").disabled = false;
    document.getElementById("sham").disabled = false;
    document.getElementById("hc").disabled = false;
  }
}

function ccchk() {
  if (document.getElementById("hc").checked === true) {
    document.getElementById("subah").disabled = true;
    document.getElementById("dopahar").disabled = true;
    document.getElementById("sham").disabled = true;
    document.getElementById("missed").disabled = true;
  }
  else {
    document.getElementById("subah").disabled = false;
    document.getElementById("dopahar").disabled = false;
    document.getElementById("sham").disabled = false;
    document.getElementById("missed").disabled = false;
  }
}


function desablemissed() {
  if (event.currentTarget.checked === true ||
    document.getElementById("subah").checked === true ||
    document.getElementById("dopahar").checked === true ||
    document.getElementById("sham").checked === true ||
    document.getElementById("hc").checked === true === true) {
    document.getElementById("missed").disabled = true;
    document.getElementById("hc").disabled = true;
  }
  else {
    document.getElementById("missed").disabled = false;
    document.getElementById("hc").disabled = false;
  }
}

function desabledmissed() {
  if (event.currentTarget.checked === true ||
    document.getElementById("nsubah").checked === true ||
    document.getElementById("ndopahar").checked === true === true) {
    document.getElementById("nmissed").disabled = true;
    document.getElementById("nc").disabled = true;
  }
  else {
    document.getElementById("nmissed").disabled = false;
    document.getElementById("nc").disabled = false;
  }
}
function desablesd() {
  if (document.getElementById("nmissed").checked === true) {
    document.getElementById("nsubah").disabled = true;
    document.getElementById("ndopahar").disabled = true;
    document.getElementById("nc").disabled = true;
  }
  else {
    document.getElementById("nsubah").disabled = false;
    document.getElementById("ndopahar").disabled = false;
    document.getElementById("nc").disabled = false;
  }
}

function desablesdc() {
  if (document.getElementById("nc").checked === true) {
    document.getElementById("nsubah").disabled = true;
    document.getElementById("ndopahar").disabled = true;
    document.getElementById("nmissed").disabled = true;
  }
  else {
    document.getElementById("nsubah").disabled = false;
    document.getElementById("ndopahar").disabled = false;
    document.getElementById("nmissed").disabled = false;
  }
}
*/

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
const dmsg = document.getElementById("dmsg")
const hmsg = document.getElementById("hmsg")
const hdmsg = document.getElementById("hdmsg")
const hnmsg = document.getElementById("hnmsg")
const namsg = document.getElementById("namsg")
const mmsg = document.getElementById("mmsg")
const smsg = document.getElementById("smsg")
const kmsg = document.getElementById("kmsg")


// ---------------- form submit with validation -------------

var allrt = document.getElementById("alert")// alrt box
var almsg = document.getElementById("almsg") // art msg

function submit() {
  // --------------------- collecting data -------------------
  const naam = document.getElementById("name").value

  const clh = document.getElementById("clh").checked ? document.getElementById("clh").value : "";
  const cln = document.getElementById("cln").checked ? document.getElementById("cln").value : "";
  const cld = document.getElementById("cld").checked ? document.getElementById("cld").value : "";

  const subah = document.getElementById("subah").checked ? document.getElementById("subah").value + "،" : "";
  const dopahar = document.getElementById("dopahar").checked ? document.getElementById("dopahar").value + "،" : "";
  const sham = document.getElementById("sham").checked ? document.getElementById("sham").value + "،" : "";
  const hc = document.getElementById("hc").checked ? document.getElementById("hc").value + "،" : "";

  const missed = document.getElementById("missed").checked ? document.getElementById("missed").value + "،" : "";

  const hazir = document.getElementById("dhazir").checked ? document.getElementById("dhazir").value + "،" : "";
  const gherhazir = document.getElementById("dgherhazir").checked ? document.getElementById("dgherhazir").value + "،" : "";
  const dc = document.getElementById("dc").checked ? document.getElementById("dc").value + "،" : "";

  const nsubah = document.getElementById("nsubah").checked ? document.getElementById("nsubah").value + "،" : ""
  const ndopahar = document.getElementById("ndopahar").checked ? document.getElementById("ndopahar").value + "،" : ""
  const nc = document.getElementById("nc").checked ? document.getElementById("nc").value + "،" : ""

  const nmissed = document.getElementById("nmissed").checked ? document.getElementById("nmissed").value : ""

  const fajr = document.getElementById("fajr").checked ? document.getElementById("fajr").value + "،" : "";
  const zuhr = document.getElementById("zuhr").checked ? document.getElementById("zuhr").value + "،" : "";
  const asr = document.getElementById("asr").checked ? document.getElementById("asr").value + "،" : "";
  const maghrib = document.getElementById("maghrib").checked ? document.getElementById("maghrib").value + "،" : "";
  const isha = document.getElementById("isha").checked ? document.getElementById("isha").value + "،" : "";

  const none = document.getElementById("none").checked ? document.getElementById("none").value + "،" : "";

  const kiya = document.getElementById("kiya").checked ? document.getElementById("kiya").value + "،" : ""
  const nahin_kiya = document.getElementById("nahin_kiya").checked ? document.getElementById("nahin_kiya").value + "،" : ""

  const bdhe = document.getElementById("bdhe").checked ? document.getElementById("bdhe").value + "،" : ""
  const nahin_bdhe = document.getElementById("nahin_bdhe").checked ? document.getElementById("nahin_bdhe").value + "،" : ""

  const k_kiya = document.getElementById("k_kiya").checked ? document.getElementById("k_kiya").value + "،" : ""
  const k_nahin_kiya = document.getElementById("k_nahin_kiya").checked ? document.getElementById("k_nahin_kiya").value + "،" : ""

  // --------------------taking form data to an object --------------------

  const formdata = {
    naam: naam,
    class: clh + cln + cld,
    hazri: subah + dopahar + sham + missed + hazir + gherhazir + nsubah + ndopahar + nmissed + hc + dc + nc,
    namaz: fajr + zuhr + asr + maghrib + isha + none,
    tayyari: kiya + nahin_kiya,
    asbaq: bdhe + nahin_bdhe,
    khidmat: k_kiya + k_nahin_kiya,
  }
  //  -------------------------- validating form details and throwing errors in error ids -------------------
  if (formdata.naam.length == "") {
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