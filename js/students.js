/*console.log(data)
var students = data.SCL['2017-2'].students.active;
var inactivos={};
var activos={};

function students(){
	for (var i = 0 ; i < students.length ; i++) {

	}if(students[i]== false){
		inactivos++;
	}else if {
		activos++;
	}
	students();
}*/
/*console.log(data);

var menu= document.getElementById('subMenu');
var list = document.getElementById('hide');


//llamamos las clases de los items
menu.addEventListener('click', function() {
	list.classList.toggle('show')

	var lima = document.getElementById('lima');
		lima.addEventListener('click', function(e) {
				var gn = document.getElementById('hideLima')
					gn.classList.toggle('show')
			});
		lima.addEventListener('blur', function(e) {
				var gn = document.getElementById('hideLima')
					gn.classList.toggle('show')
			});

	var arequipa = document.getElementById('arequipa');
		arequipa.addEventListener('click', function(e) {
				var gn = document.getElementById('hideArequipa')
					gn.classList.toggle('show')
			});
		arequipa.addEventListener('blur', function(e) {
				var gn = document.getElementById('hideArequipa')
					gn.classList.toggle('show')
			});

	var cdmx = document.getElementById('cdmx');
		cdmx.addEventListener('click', function(e) {
				var gn = document.getElementById('hideCDMX')
					gn.classList.toggle('show')
			});
		cdmx.addEventListener('blur', function(e) {
				var gn = document.getElementById('hideCDMX')
					gn.classList.toggle('show')
			});

	var santiago = document.getElementById('santiago');
	santiago.addEventListener('click', function(e) {
			var gn = document.getElementById('hideSantiago')
				gn.classList.toggle('show')
		});
	santiago.addEventListener('blur', function(e) {
			var gn = document.getElementById('hideSantiago')
				gn.classList.toggle('show')
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
//div estudiantes*/

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
var namem = document.createElement('h1');
namem.textContent='nombre del estudiante'
//especializacion de estudiante

var specializacion = document.createElement('h2')
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






/*
 <span> 
                <button>JAVASCRIPT</button>
                <button>APIs</button>
                <button>JQUERY</button>
            </span>
          </span>
            <span>
              <h1>95.6%</h1>
              <h6>TECH SKILLS</h6>
            </span>
            <span>
              <h1>95.6%</h1>
              <h6>TECH SKILLS</h6>
            </span>
            <span>
              <h1>95.6%</h1>
              <h6>TECH SKILLS</h6>
            </span>
          <span>
            <ul class='see'>
              <li>see profile <i class="fa fa-caret-right" aria-hidden="true"></i>
              </li>
            </ul>
            
          </span>

          
        </div>



   */


