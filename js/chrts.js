
google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawAnnotations);

function drawAnnotations() {
      var data = google.visualization.arrayToDataTable([
        ['Sede', 'Students Enrollment', '#Dropout'],
        ['Santiago de Chile', 61, 35],
        ['CDMX', 70, 28],
        ['Lima', 46, 18],
        ['Arequipa', 20, 9],

      ]);

      var data = google.visualization.arrayToDataTable([
        ['Sede', 'Students Enrollment', {type: 'string', role: 'annotation'},
         '#Dropout', {type: 'string', role: 'annotation'}],
         ['Santiago de Chile', 61,'61 ', 35, '-35' ],
         ['CDMX', 70,'+100', 28, '-28'],
         ['Lima', 46, '+46', 18, '-18'],
        ['Arequipa', 20, '+20', 9, '-9']
      ]);

      var options = {
        title: '',
        chartArea: {width:'50%'},
        annotations: {
          alwaysOutside: true,
          textStyle: {
            fontSize: 10,
            auraColor: 'none',
            color: '#555'
          },
          boxStyle: {
            stroke: '#ccc',
            strokeWidth: 1,
            gradient: {
              color1: '#f3e5f5',
              color2: '#f3e5f5',
              x1: '0%', y1: '0%',
              x2: '10%', y2: '10%'
            }
          }
        },
        hAxis: {
          minValue: 0,
        },
        vAxis: {
          title: 'NUMBER STUDENTS'
        }
      };
      var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }
new Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'myfirstchart',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
    { year: '2008', value: 20 },
    { year: '2009', value: 10 },
    { year: '2010', value: 5 },
    { year: '2011', value: 5 },
    { year: '2012', value: 20 }
  ],
  // The name of the data record attribute that contains x-values.
  xkey: 'year',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['value'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['Value']
});
