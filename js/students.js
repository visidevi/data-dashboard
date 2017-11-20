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

	var tech = 0;
	var maxTech = 1800 * students[i].sprints.length
	var hse = 0;
	var maxHse = 1200 * students[i].sprints.length



	if (students[i].active == true) {
		profilestudent.classList.add("active");
		estado.appendChild(activa);

		//recorer las notas de los sprints

				for(var j=0 ; j < students[i].sprints.length;j++){
					tech += parseInt(students[i].sprints[j].score.tech);
					hse += parseInt(students[i].sprints[j].score.hse);
					// console.log(hse);
					// console.log(tech);
				}
				//boton donde van a estar los valores tech, hse
				var percentageshse = document.createElement('button');
				percentageshse.classList.add('borange')

				var percentagestech = document.createElement('button');
				percentagestech.classList.add('borange')

				profilestudent.appendChild(percentagestech);
				profilestudent.appendChild(percentageshse);

				var techFinal = tech * 100 / maxTech;
				var hseFinal = hse * 100 / maxHse;
				// console.log(hseFinal);
				// console.log(techFinal);
				var tech = document.createElement('h4');
				var hse = document.createElement('h4');
				var techTitle = document.createElement('p');
				var hseTitle = document.createElement('p');
				techTitle.textContent = 'Teck Skills';
				hseTitle.textContent = 'Life Skills';
				//Math.floor redondea hacia abajo
				tech.textContent = Math.floor(techFinal)+ '%';
				hse.textContent = Math.floor(hseFinal)+ '%';
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
var students= document.getElementById('students');
var overview = document.getElementById('overview');
var teachers= document.getElementById('teachers');
var assistance = document.getElementById('assistance');

function resumen(){

// class="sectionhiden"
	overview.classList = 'sectionshow overview'
	students.classList = 'sectionhiden'
	teachers.classList = 'sectionhiden'
	assistance.classList = 'sectionhiden'
}
function estudian(){

	overview.classList = 'sectionhiden'
	students.classList = 'sectionshow'
	teachers.classList = 'sectionhiden'
	assistance.classList = 'sectionhiden'
}
function teach(){
	overview.classList = 'sectionhiden'
	students.classList = 'sectionhiden'
	teachers.classList = 'sectionshow'
	assistance.classList = 'sectionhiden'
}
function assistan(){
	overview.classList = 'sectionhiden'
	students.classList = 'sectionhiden'
	teachers.classList = 'sectionhiden'
	assistance.classList = 'sectionshow'

}
/*
function cambiaVisibilidad() {
       var students= document.getElementById('students');
       var overview = document.getElementById('overview');
       var teachers= document.getElementById('teachers');
       var assistance = document.getElementById('assistance');
       if(students.style.display == 'block'){
           overview.style.display = 'none';
           teachers.style.display = 'none';
           assistance.style.display = 'none';
           students.style.display = 'block';
       }else{
        overview.style.display = 'block';
           students.style.display = 'block';
         }
   }
 var firstmenu = document.getElementById('firstmenu')

 var ul = document.createElement('ul');
 var overview = document.createElement('li');
 var estudiantes = document.createElement('li');
*/
 /*
 <nav class='firstmenu'>
              <ul>
                <li> <button id=''  onclick="cambiaVisibilidad()">OVERVIEW</button></li>
                <li> <button id='' onclick="cambiaVisibilidad()">STUDENTS</button></li>
                <li> <button id=''  onclick="cambiaVisibilidad()">TEACHERS</button></li>
                <li> <button id=''  onclick="cambiaVisibilidad()">assistance</button></li>
              </ul>
    </nav>
*/
