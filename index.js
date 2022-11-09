function startDate() {
  const sdate = document.getElementById("sdate").value;
  const edate = document.getElementById("edate").value;
  const date = new Date();
  const datestring = date.toLocaleDateString("km-KH", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  if (sdate === datestring || sdate < datestring) {
    alert("Pradžios data negali būti ankstesnė ar sutapti su šiandienos data");
    document.getElementById("sdate").valueAsDate = null;
    document.getElementById("edate").valueAsDate = null;
  }
}

function endDate() {
  const sdate = document.getElementById("sdate").value;
  const edate = document.getElementById("edate").value;
  const info = document.getElementById("info");
  if (edate < sdate) {
    document.getElementById("edate").valueAsDate = null;
    document.getElementById("sdate").valueAsDate = null;
    info.textContent = "";
    alert("Pabaigos data negali būti ankstesnė už pradžios datą");
  } else {
    const date1 = new Date(edate);
    const date2 = new Date(sdate);
    const difference = date1.getTime() - date2.getTime();
    const daysDifference = difference / (1000 * 3600 * 24);
    if (daysDifference > 20) {
      info.textContent = `Užsakant paslaugą ${daysDifference} d., taikoma 15% nuolaida`;
      info.style.color = "#95c935";
    } else if (daysDifference > 10 && daysDifference < 21) {
      info.textContent = `Užsakant paslaugą ${daysDifference} d., taikoma 10% nuolaida`;
      info.style.color = "#c8bd2a";
    } else if (daysDifference > 4 && daysDifference < 11) {
      info.textContent = `Užsakant paslaugą ${daysDifference} d., taikoma 5% nuolaida`;
      info.style.color = "#5da5a5";
    }
  }
}

const checkbox = document.getElementById("subs");
const email = document.getElementById("email");

checkbox.addEventListener("click", function handleClick() {
  if (checkbox.checked) {
    email.style.display = "block";
    email.required = true;
  } else {
    email.style.display = "none";
    email.required = false;
  }
});

let dropdownList = document.getElementById("selection");
dropdownList.onchange = () => {
  const text = document.getElementById("htxt");
  const fname = document.getElementById("fname");
  const lname = document.getElementById("lname");
  const btn = document.getElementById("btn");
  const phone = document.getElementById("phone");
  const label1 = document.getElementById("label1");
  const label2 = document.getElementById("label2");
  const sdate = document.getElementById("sdate");
  const edate = document.getElementById("edate");
  const label3 = document.getElementById("label3");
  const email = document.getElementById("email");
  text.style.color = dropdownList.value;
  fname.style.color = dropdownList.value;
  fname.style.borderBottomColor = dropdownList.value;
  lname.style.color = dropdownList.value;
  lname.style.borderBottomColor = dropdownList.value;
  phone.style.color = dropdownList.value;
  phone.style.borderBottomColor = dropdownList.value;
  label1.style.color = dropdownList.value;
  label2.style.color = dropdownList.value;
  sdate.style.color = dropdownList.value;
  sdate.style.borderBottomColor = dropdownList.value;
  edate.style.color = dropdownList.value;
  edate.style.borderBottomColor = dropdownList.value;
  label3.style.color = dropdownList.value;
  email.style.color = dropdownList.value;
  email.style.borderBottomColor = dropdownList.value;
  btn.style.backgroundColor = dropdownList.value;
};