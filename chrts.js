
var pie = function(){
 google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      // Define the chart to be drawn.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Studens');
      data.addColumn('number', 'Percentage');
      data.addRows([
        ['Nitrogen', 0.78],
        ['Oxygen', 0.21],
        ['Other', 0.01]
      ]);
       var options = {'title':'How Much Pizza I Ate Last Night',
                       'width':400,
                       'height':300};

      // Instantiate and draw the chart.
      var chart = new google.visualization.PieChart(document.getElementById('myPieChart'));
      chart.draw(data, options);
    }
 }

 console.log(data)
   var students = data.SCL['2017-2'].students[0].active;
  var inactivos='';
  var activos='';

function estudiantes(){

  for (var i = 0 ; i < students.length ; i++) {

  }if(students[i] == true){
    inactivos ++;
  } else {
     activos ++;
  }
  console.log('hola');
}
estudiantes();