/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);

var menu= document.getElementById('subMenu');
var list = document.getElementById('hide');


menu.addEventListener('click', function() {
	list.classList.toggle('show')

	var lima = document.getElementById('lima');
	var hL = document.getElementById('hideLima')
		lima.addEventListener('change', function(e) {
			hL.classList.toggle('show')
		});

	var arequipa = document.getElementById('arequipa');
	var hA = document.getElementById('hideArequipa')
		arequipa.addEventListener('change', function(e) {
			hA.classList.toggle('show')
		});

	var cdmx = document.getElementById('cdmx');
	var hC = document.getElementById('hideCDMX')
		cdmx.addEventListener('change', function(e) {
			hC.classList.toggle('show')
		});

	var santiago = document.getElementById('santiago');
	var hS = document.getElementById('hideSantiago')
	santiago.addEventListener('change', function(e) {
		hS.classList.toggle('show')
	});
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

	var profilename = document.createElement('h3');
	profilename.textContent = 'Valentina Smith';

	var span = document.createElement('span')
	var profilearrow = document.createElement('i');
	 profilearrow.setAttribute('class','fa fa-arrow-circle-down');
	 profilearrow.setAttribute('aria-hidden',"true");

	 span.appendChild(profilearrow)
	 //arreglar la flecha

	profile.appendChild(imgprofile);
	profile.appendChild(profilename);
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

console.log(ul);

	menuhamburger.appendChild(ul);

	document.body.appendChild(menuhamburger);

	buttonclose.addEventListener('click',function(){
		document.body.removeChild(menuhamburger);
		console.log('hola')
	});



 };
console.log('hola')

