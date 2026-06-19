const certificates = {

"ID50052": {
name: "Annie stephy",
course: "BCA",
college: "St. Anne's Arts and Science College",
year: "2026",
status: "Verified"
},

"ID50053": {
name: "David",
course: "B.Sc CS",
college: "ABC College",
year: "2025",
status: "Verified"
}

};

function verifyCertificate(){

let student =
document.getElementById("studentName")
.value
.trim()
.toLowerCase();

let cert =
document.getElementById("certificateID")
.value
.trim()
.toUpperCase();

let result =
document.getElementById("result");

if(
certificates[cert] &&
certificates[cert]
.name
.toLowerCase() === student
){

let data =
certificates[cert];

result.innerHTML = `
✅ Verified

<br><br>

Student:
${data.name}

<br>

Course:
${data.course}

<br>

College:
${data.college}

<br>

Year:
${data.year}

`;

result.style.color =
"green";

}

else{

result.innerHTML =
"❌ Invalid Certificate";

result.style.color =
"red";

}

}