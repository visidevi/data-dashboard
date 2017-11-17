/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
var menu= document.getElementById('subMenu');
var list = document.getElementById('hide');
//llamamos las clases de los items
menu.addEventListener('click', function() {
	list.classList.toggle('show')
});

 function hamburger (){
 	var menuhamburger=document.createElement('div');
 	menuhamburger.setAttribute('class', 'hamburger');

 	var ul=document.createElement('ul');
 	var user=document.createElement('li');
 	var addstudent=document.createElement('li');
 	var removestudent=document.createElement('li');
 	var addsprint=document.createElement('li');


 	 var buttonclose = document.createElement('i')
	 buttonclose.setAttribute('class','fa fa-times-circle');
	 buttonclose.setAttribute('aria-hidden',"true");

	 menuhamburger.appendChild(buttonclose);

	var img = document.createElement('img');
	img.setAttribute('src',"assets/images/profilepic.jpg")
	img.setAttribute('class', 'img')



	ul.appendChild(img);
	
 	ul.appendChild(user);
 	ul.appendChild(addstudent);
 	ul.appendChild(removestudent);
 	ul.appendChild(addsprint);

    
 	user.textContent = 'Valentina Smith';
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
