function mine(x, y) {
  return x * y;
}
let z = "The result  Is " + mine(4, 5);
// let style=<div>{z}</div>
document.getElementById("fun").innerHTML = `<div>${z}</div>`;

const person = {
  Firstname: "kartheek",
  lastname: "kottapalli",
  Favcolor: "black",
  Favsport: "settle",
  fullname: function () {
    return this.Firstname + " " + this.lastname;
  },
};

document.getElementById("Obj").innerHTML = person.fullname();
console.log(person.Favcolor);

let text = `his name is "kartheek"`;
document.getElementById("string").innerHTML = text;

// Work with array
let list = ["kartheek", "Vinod", "Ajay", "Anita"];

l = list.length;
let x = "<ul>";
for (let i = 0; i < l; i++) {
  x += "<li>" + list[i] + "</li>";
}
x += "</ul>";
document.getElementById("students").innerHTML = x;



