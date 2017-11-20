var container = document.getElementById('students');
console.log(container);

var students = data.SCL['2017-2'].students;
console.log(students);


for (var i = 0; i < students.length; i++) {
	if(Object.keys(students[i]).name != ""){
	
	//un div para agregar una estudiante
	var profilestudent = document.createElement('div');
	profilestudent.classList.add('students');
	container.appendChild(profilestudent)

	//imagen foto de perfil
	var imgprofile= document.createElement('img')
	imgprofile.classList.add('profilepic')
	imgprofile.setAttribute('src', students[i].photo)

	profilestudent.appendChild(imgprofile)

	//nombre 
	var info  = document.createElement('span');
	var namem = document.createElement('h5');
	namem.textContent=(students[i].name);
	info.appendChild(namem);
	profilestudent.appendChild(info)

	var estado = document.createElement('span');
	info.appendChild(estado)
	//activa inactiva
	var activa = document.createElement("p");
	activa.textContent = "Alumna Activa";
	activa.style.color = "#007c4d"

	var inactiva = document.createElement("p");
	inactiva.textContent = "Alumna Inactiva";
	inactiva.style.color = "#ba0000"

	if (students[i].active == true) {
		profilestudent.classList.add("student-active");
		estado.appendChild(activa);
	}else if (students[i].active == false) {
		profilestudent.classList.add("student-inactive");
		estado.appendChild(inactiva);
	}


	}
}
//div estudiantes*/
/*
var students = document.getElementById('students');
//icono de lupa 
var icons= document.createElement('i');
icons.setAttribute('class',"fa fa-search");
//input
var input= document.createElement('input');
input.setAttribute('type','name')
input.setAttribute('placeholder',"Ingresa el nombre..")

//agregamos el input al seccion students
students.appendChild(icons);
students.appendChild(input);

var article = document.createElement('article')

//un div para agregar una estudiante
var profilestudent = document.createElement('div');
profilestudent.setAttribute('class','studenprofile');

//imagen de estudiante
var imgprofile = document.createElement('img');
imgprofile.setAttribute('src','http://dummyimage.com/236x238.png/dddddd/000000');
//nombre de estudiante

var info  = document.createElement('span');
var namem = document.createElement('h5');
namem.textContent='nombre del estudiante'
//especializacion de estudiante

var specializacion = document.createElement('h6')
specializacion.textContent= 'student specializacion'

info.appendChild(namem);
info.appendChild(specializacion);

profilestudent.appendChild(imgprofile);
profilestudent.appendChild(info);

students.appendChild(profilestudent);
//tag de estudios 
var studies = document.createElement('span');
studies.setAttribute('class','studies');
var span1=document.createElement('button');
span1.textContent='JAVASCRIPT';

var span2=document.createElement('button');
span2.textContent='APIs';

var span3=document.createElement('button');
span3.textContent='JQUERY';

studies.appendChild(span1);
studies.appendChild(span2);
studies.appendChild(span3);

students.appendChild(studies);


var percentages = document.createElement('span');
var percent = document.createElement('h1');
percent.textContent='95.6%';

var textskills = document.createElement('h6');
textskills.textContent='text skills';
percentages.appendChild(percent);
percentages.appendChild(textskills);

students.appendChild(percentages);

var seeprofile = document.createElement('span');
seeprofile.textContent = 'See profile'
var caretrigth = document.createElement('i')

caretrigth.setAttribute('class',"fa fa-caret-right");

seeprofile.appendChild(caretrigth);
students.appendChild(seeprofile);

/*funciona para estudiantes */
//







//or (var i = 0; i < data.SCL['2016-2'].students.length; i++) {
//	console.log(data.SCL['2016-2'].students[i].name);
//	container.innerHTML += '<p>La estudiante número ' + [i+1] + ' es: ' + data.SCL['2016-2'].students[i].name + '</p>';
//}
