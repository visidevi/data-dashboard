
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
        width: 700,
        height: 540,
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
              color1: '#FFC107',
              color2: '#FFD507',
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
