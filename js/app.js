/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);

var menu= document.getElementById('subMenu');
var list = document.getElementById('hide');

var icon = document.createElement('i');
icon.setAttribute('class', 'fa fa-arrow-circle-down');
icon.setAttribute('aria-hidden','true');
menu.appendChild(icon);

var students = data.SCL['2017-2'].students;

var container = document.getElementById('students');

menu.addEventListener('click', function() {
	list.classList.toggle('show')

	var lima = document.getElementById('lima');
	var hL = document.getElementById('hideLima')
		lima.addEventListener('click', function(e) {
			hL.classList = 'show'
				hA.classList = 'hide'
				hC.classList = 'hide'
				hS.classList = 'hide'
				menu.removeChild(icon);
				menu.textContent = 'Lima '
				menu.appendChild(icon);
		});

		var lima62 = document.getElementById('genl62');
		lima62.addEventListener('click', function(e) {
			menu.removeChild(icon);
			menu.textContent = 'Lima 2016-II'
			menu.appendChild(icon);
			students = data.LIM['2016-2'].students
			container.innerHTML = ""
			addStudents()
		});
		var lima71 = document.getElementById('genl71');
		lima71.addEventListener('click', function(e) {
			menu.removeChild(icon);
			menu.textContent = 'Lima 2017-I'
			menu.appendChild(icon);
			students = data.LIM['2017-1'].students
			container.innerHTML = ""
			addStudents()
		});
		var lima72 = document.getElementById('genl72');
		lima72.addEventListener('click', function(e) {
			menu.removeChild(icon);
			menu.textContent = 'Lima 2017-II'
			menu.appendChild(icon);
			students = data.LIM['2017-2'].students
			container.innerHTML = ""
			addStudents()
		});

	var arequipa = document.getElementById('arequipa');
	var hA = document.getElementById('hideArequipa')
		arequipa.addEventListener('click', function(e) {
			hA.classList = 'show'
				hL.classList = 'hide'
				hC.classList = 'hide'
				hS.classList = 'hide'
				menu.removeChild(icon);
				menu.textContent = 'Arequipa '
				menu.appendChild(icon);
		});

		var aqp62 = document.getElementById('gena62');
		aqp62.addEventListener('click', function(e) {
			menu.removeChild(icon);
			menu.textContent = 'Arequipa 2016-II'
			menu.appendChild(icon);
			students = data.AQP['2016-2'].students
			container.innerHTML = ""
			addStudents()

		});
		var aqp71 = document.getElementById('gena71');
		aqp71.addEventListener('click', function(e) {
			menu.removeChild(icon);
			menu.textContent = 'Arequipa 2017-I'
			menu.appendChild(icon);
			students = data.AQP['2017-1'].students
			container.innerHTML = ""
			addStudents()
		});

	var cdmx = document.getElementById('cdmx');
	var hC = document.getElementById('hideCDMX')
		cdmx.addEventListener('click', function(e) {
			hC.classList = 'show'
				hA.classList = 'hide'
				hL.classList = 'hide'
				hS.classList = 'hide'
				menu.removeChild(icon);
				menu.textContent = 'cdmx '
				menu.appendChild(icon);
		});

		var cdmx71 = document.getElementById('genc71');
		cdmx71.addEventListener('click', function(e) {
			menu.removeChild(icon);
			menu.textContent = 'cdmx 2017-I'
			menu.appendChild(icon);
			students = data.CDMX['2017-1'].students
			container.innerHTML = ""
			addStudents()

		});
		var cdmx72 = document.getElementById('genc72');
		cdmx72.addEventListener('click', function(e) {
			menu.removeChild(icon);
			menu.textContent = 'cdmx 2017-II'
			menu.appendChild(icon);
			students = data.CDMX['2017-2'].students
			container.innerHTML = ""
			addStudents()
		});
	var santiago = document.getElementById('santiago');
	var hS = document.getElementById('hideSantiago')
	santiago.addEventListener('click', function(e) {
		hS.classList = 'show'
			hA.classList = 'hide'
			hC.classList = 'hide'
			hL.classList = 'hide'
			menu.removeChild(icon);
			menu.textContent = 'Santiago '
			menu.appendChild(icon);
	});
});

var santiago62 = document.getElementById('gens62');
santiago62.addEventListener('click', function(e) {
	menu.removeChild(icon);
	menu.textContent = 'Santiago 2016-II'
	menu.appendChild(icon);
	students = data.SCL['2016-2'].students
	container.innerHTML = ""
	addStudents()
});
var santiago71 = document.getElementById('gens71');
santiago71.addEventListener('click', function(e) {
	menu.removeChild(icon);
	menu.textContent = 'Santiago 2017-I'
	menu.appendChild(icon);
	students = data.SCL['2017-1'].students
	container.innerHTML = ""
	addStudents()
});
var santiago72 = document.getElementById('gens72');
santiago72.addEventListener('click', function(e) {
	menu.removeChild(icon);
	menu.textContent = 'Santiago 2017-II'
	menu.appendChild(icon);
	 students = data.SCL['2017-2'].students
	 container.innerHTML = ""
	 addStudents()
});



 function hamburger (){
 	var menuhamburger=document.createElement('div');
 	menuhamburger.setAttribute('class', 'hamburger');

 	 var buttonclose = document.createElement('i')
	 buttonclose.setAttribute('class','fa fa-times-circle');
	 buttonclose.setAttribute('aria-hidden',"true");

	 menuhamburger.appendChild(buttonclose);

 //FOTO NOMBRE PERFIL

	var profile = document.createElement('div')
	profile.setAttribute('class', 'profile')

	var imgprofile = document.createElement('img');
	imgprofile.setAttribute('src',"assets/images/profilepic.jpg")
	imgprofile.setAttribute('class', 'img')

	var profilename = document.createElement('h4');
	profilename.textContent = 'VALENTINA SMITH';

	var  tms = document.createElement('p')
	tms.textContent=' TMs - Santiago de Chile'

	var span = document.createElement('span')
	var profilearrow = document.createElement('i');
	 profilearrow.setAttribute('class','fa fa-arrow-circle-down');
	 profilearrow.setAttribute('aria-hidden',"true");

	 span.appendChild(profilearrow)
	 //arreglar la flecha

	profile.appendChild(imgprofile);
	profile.appendChild(profilename);
	profile.appendChild(tms)
	//profilename.appendChild(span)

	menuhamburger.appendChild(profile)

	var ul=document.createElement('ul');
 	var addstudent=document.createElement('li');
 	var removestudent=document.createElement('li');
 	var addsprint=document.createElement('li');


 	ul.appendChild(addstudent);
 	ul.appendChild(removestudent);
 	ul.appendChild(addsprint);



 	addstudent.textContent = 'Add student';
 	removestudent.textContent = 'Remove student';
 	addsprint.textContent = 'Add Sprint';


	menuhamburger.appendChild(ul);

	document.body.appendChild(menuhamburger);

	buttonclose.addEventListener('click',function(){
		document.body.removeChild(menuhamburger);
	});
 };
console.log('hola')

//var footer = document.getElementById('footer')
//footer.textContent='© 2017 Laboratoria, Data Dashboard';


var contJedi = document.getElementById('teachers');

var profileJedi = document.createElement('div');
contJedi.appendChild(profileJedi)

//imagen foto de perfil
var profileimg= document.createElement('img')

profileJedi.appendChild(imgprofile)

//nombre
var spaName  = document.createElement('span');
var Jedi = document.createElement('h5');

Jedi.appendChild(spaName);
profileJedi.appendChild(Jedi)
