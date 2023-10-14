function addNewWe() {
    const newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder", "Enter here");
    const weOb = document.getElementById("we");
    const weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAq() {
    const newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder", "Enter here");
    const aqOb = document.getElementById("aq");
    const aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);
}

function addNewec() {
    const newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("ecField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder", "Enter here");
    const ecOb = document.getElementById("ec");
    const ecAddButtonOb = document.getElementById("ecAddButton");

    ecOb.insertBefore(newNode, ecAddButtonOb);
}

function generateCV() {
    const nameField = document.getElementById("nameField").value;
    document.getElementById("nameT").textContent = nameField;
    document.getElementById("nameT2").textContent = nameField;

    document.getElementById("contactT").textContent = document.getElementById("contactField").value;
    document.getElementById("addressT").textContent = document.getElementById("addressField").value;

    document.getElementById("fbT").textContent = document.getElementById("fbField").value;
    document.getElementById("gtT").textContent = document.getElementById("gtField").value;
    document.getElementById("lkT").textContent = document.getElementById("lkField").value;

    document.getElementById("objectiveT").textContent = document.getElementById("objectiveField").value;

    const wes = document.querySelectorAll(".weField");
    let weList = document.getElementById("weT");
    weList.innerHTML = "";
    for (let i = 0; i < wes.length; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = wes[i].value;
        weList.appendChild(listItem);
    }

    const aqs = document.querySelectorAll(".aqField");
    let aqList = document.getElementById("aqT");
    aqList.innerHTML = "";
    for (let i = 0; i < aqs.length; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = aqs[i].value;
        aqList.appendChild(listItem);
    }

    const ecs = document.querySelectorAll(".ecField");
    let ecList = document.getElementById("ecT");
    ecList.innerHTML = "";
    for (let i = 0; i < ecs.length; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = ecs[i].value;
        ecList.appendChild(listItem);
    }

    const file = document.getElementById("imgField").files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = function () {
        document.getElementById("imgT").src = reader.result;
    }

    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";
}

function printCV() {
    window.print();
}
