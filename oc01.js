var nameInput = document.querySelector("#name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");
const telInput = document.getElementById("tel");
const nameAlert = document.getElementById("namealert");
const emailAlert = document.getElementById("emailalert");
const ageAlert = document.getElementById("agealert");
const telAlert = document.getElementById("telalert");
const submitAlert = document.getElementById("submitalert");
const submitBtn = document.getElementsByClassName("btn")[0];
const deleteBtns = document.querySelectorAll('a');

nameInput.addEventListener('focus', checkName);
nameInput.addEventListener('input', checkName);
nameInput.addEventListener('blur', checkName);
emailInput.addEventListener('focus', checkEmail);
emailInput.addEventListener('input', checkEmail);
emailInput.addEventListener('blur', checkEmail);
ageInput.addEventListener('focus', checkAge);
ageInput.addEventListener('input', checkAge);
ageInput.addEventListener('blur', checkAge);
telInput.addEventListener('focus', checkTel);
telInput.addEventListener('input', checkTel);
telInput.addEventListener('blur', checkTel);
submitBtn.addEventListener('click', checkAndSubmitFunc);
for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener('click', deleteRow);
}




function checkName() {
    if (!nameInput.value) {
        nameAlert.innerHTML = "Please Input your Name";
        nameAlert.style.color = "grey";
        return 0
    } else if (!(nameInput.value.match("^[a-zA-Z]{1,15}$") ||
        nameInput.value.match("^[\u4e00-\u9fa5]{1,5}$"))) {
        nameAlert.innerHTML = "Wrong Format ⛔️";
        nameAlert.style.color = "red";
        return 0
    } else {
        nameAlert.innerHTML = "Right Format ✅";
        nameAlert.style.color = "green";
        return 1
    }
}

function checkEmail() {
    if (!emailInput.value) {
        emailAlert.innerHTML = "Please Input your Email";
        emailAlert.style.color = "grey";
        return 0
    } else if (!emailInput.value.match("^[0-9a-zA-Z.]+@[0-9a-zA-Z.]+$")) {
        emailAlert.innerHTML = "Wrong Format ⛔️";
        emailAlert.style.color = "red";
        return 0
    } else {
        emailAlert.innerHTML = "Right Format ✅";
        emailAlert.style.color = "green";
        return 1
    }
}

function checkAge() {
    if (!ageInput.value) {
        ageAlert.innerHTML = "Please Input your Age";
        ageAlert.style.color = "grey";
        return 0
    } else if (ageInput.value <= 0 || ageInput.value > 99) {
        ageAlert.innerHTML = "Wrong Format ⛔️";
        ageAlert.style.color = "red";
        return 0
    } else {
        ageAlert.innerHTML = "Right Format ✅";
        ageAlert.style.color = "green";
        return 1
    }
}

function checkTel() {
    if (!telInput.value) {
        telAlert.innerHTML = "Please Input your Tel";
        telAlert.style.color = "grey";
        return 0
    } else if (!telInput.value.match("^[0-9]{11}$")) {
        telAlert.innerHTML = "Wrong Format ⛔️";
        telAlert.style.color = "red";
        return 0
    } else {
        telAlert.innerHTML = "Right Format ✅";
        telAlert.style.color = "green";
        return 1
    }
}

function addRow() {
    //nameInput.value, ageInput.value, telInput.value, emailInput.value
    const showTable = document.querySelector("tbody");
    const newRow = document.createElement("tr");
    for (let i = 0; i < 5; i++) {
        const newData = document.createElement("td");
        newRow.appendChild(newData);
    }
    const newRowList = newRow.children

    newRowList[0].innerHTML = nameInput.value;
    newRowList[1].innerHTML = ageInput.value;
    newRowList[2].innerHTML = telInput.value;
    newRowList[3].innerHTML = emailInput.value;
    newRowList[4].innerHTML = '<a href="javascript:;">delete</a>';
    newDeleteBtn = newRowList[4].children[0];
    newDeleteBtn.addEventListener('click', deleteRow);
    showTable.appendChild(newRow);
}

function checkAndSubmitFunc() {
    if (checkName() && checkAge() && checkEmail() && checkTel()) {
        addRow();
        nameInput.value = "";
        ageInput.value = "";
        telInput.value = "";
        emailInput.value = "";
        nameAlert.innerHTML = "";
        ageAlert.innerHTML = "";
        telAlert.innerHTML = "";
        emailAlert.innerHTML = "";
        alert("Submit Successfully ✅");
    } else {
        alert("Check your Info ⛔️");
        submitAlert.style.color = "red";
    }
}

function deleteRow() {
    let row = this.parentNode.parentNode;
    document.querySelector('tbody').removeChild(row);
    alert('Delete Successfully ✅');
}