showData();

function saveData() {
    let name, number, cnt;
    name = document.getElementById("name").value;
    number = document.getElementById("number").value;

    cnt = document.getElementById("cnt").value;

    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
    if (user_records.some((v) => {
            return v.name == name
        })) {
        alert("duplicate data");
    } else {
        user_records.push({
            "name": name,
            "number": number,
            "cnt": cnt
        })
        localStorage.setItem("users", JSON.stringify(user_records));
    }
    showData();
}

function showData() {
    document.getElementById("showUsers").innerHTML = "";
    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
    if (user_records) {
        for (let i = 0; i < user_records.length; i++) {
            let addDiv = document.createElement('div');
            addDiv.className = "row";
            addDiv.innerHTML = '  <div class="col-sm-4" style="padding: 10px;">' + user_records[i].name + '</div><div class="col-sm-4" style="padding: 10px;">' + user_records[i].number + '</div><div class="col-sm-4" style="padding: 10px;">' + user_records[i].cnt + '</div>';
            document.getElementById("showUsers").appendChild(addDiv);

        }
    }
}

function clearData(users) {
    localStorage.removeItem("users")
}