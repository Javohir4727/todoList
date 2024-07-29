"use strict";
let userInp = document.getElementById("userInp");
let table = document.getElementById("table");

const user = [];

function addUser() {
  const userName = userInp.value.trim();
  if (userName === "") {
    alert("Iltimos foydalanuvchi ismini kiriting!!!");
    return;
  }

  user.push({ name: userName });
  userInp.value = "";
  showUser(user);
  console.log(user);
}

function showUser(arr) {
  table.innerHTML = "";
  arr.forEach((element, i) => {
    var { name } = element;
    table.innerHTML += `
     <tr>
            <td>${i + 1}</td>
            <td>${name}</td>
     </tr>`;
  });
}


showUser(user);
