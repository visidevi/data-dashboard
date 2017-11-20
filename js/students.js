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
	activa.style.color = "#2F9F1F";

	var inactiva = document.createElement("p");
	inactiva.textContent = "Alumna Inactiva";
	inactiva.style.color = '#BF4C32';

	var scoreTech = 0;
	var maxTech = 1800 * students[i].sprints.length;
	var scoreHse = 0;
	var maxHse = 1200 * students[i].sprints.length;



	if (students[i].active == true) {
		profilestudent.classList.add("active");
		estado.appendChild(activa);

				for(var j=0 ; j < students[i].sprints.length;j++){
					scoreTech += parseInt(students[i].sprints[j].score.tech);
					scoreHse += parseInt(students[i].sprints[j].score.hse);
					// console.log(scoreHse);
					// console.log(scoreTech);
				}
				var percentageshse = document.createElement('button');
				percentageshse.classList.add('borange')

				var percentagestech = document.createElement('button');
				percentagestech.classList.add('borange')

				profilestudent.appendChild(percentagestech);
				profilestudent.appendChild(percentageshse);

				var techFinal = scoreTech * 100 / maxTech;
				var hseFinal = scoreHse * 100 / maxHse;
				// console.log(hseFinal);
				// console.log(techFinal);
				var tech = document.createElement('h4');
				var hse = document.createElement('h4');
				var techTitle = document.createElement('p');
				var hseTitle = document.createElement('p');
				techTitle.textContent = 'Teck Skills';
				hseTitle.textContent = 'Life Skills';
				tech.textContent = techFinal.toFixed(2)+ '%';
				hse.textContent = hseFinal.toFixed(2)+ '%';
				percentagestech.appendChild(tech);
				percentagestech.appendChild(techTitle);
				percentageshse.appendChild(hse);
				percentageshse.appendChild(hseTitle);


			} else if (students[i].active == false) {
		profilestudent.classList.add("inactive");
		estado.appendChild(inactiva);
		var datanone = document.createElement('p')
		datanone.textContent='NO REGISTRA DATA'
		inactiva.appendChild(datanone)
	}

	}
}

function iactive(){
	var activeStudent = document.getElementsByClassName('active');
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
