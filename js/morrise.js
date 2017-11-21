
new Morris.Bar({
  // ID of the element in which to draw the chart.
  element: 'enrollment',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
    { sprints: 'S1', AM: 52,PM: 58 },
    { sprints: 'S2', AM: 50,PM: 55},
    { sprints: 'S3', AM: 48,PM: 50},
    { sprints: 'S4', AM: 42 ,PM: 50},
  ],
  // The name of the PMata record attribute that contains x-AMs.
  xkey: 'sprints',
  // A list of names of data record attributes that contain y-AMs.
  ykeys: ['AM','PM'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['Turno AM','Turno PM'],
  resize: true,
  barColors:['#F9A91A', '#333333']
});

new Morris.Area({
  element: 'area-example',
  data: [
    { y: '2006', a: 100, b: 90 },
    { y: '2007', a: 75,  b: 65 },
    { y: '2008', a: 50,  b: 40 },
    { y: '2009', a: 75,  b: 65 },
    { y: '2010', a: 50,  b: 40 },
    { y: '2011', a: 75,  b: 65 },
    { y: '2012', a: 100, b: 90 }
  ],
  xkey: 'y',
  ykeys: ['a', 'b'],
  labels: ['Series A', 'Series B'],
  resize: true,
  lineColors:['#F9A91A', '#333333']
});

new Morris.Donut({
  element: 'donut-example',
  data: [
    {label: "70% Arriba del promedio", value: 105},
    {label: "30% Por debajo del promedio", value: 35},
  ],
  resize: true,
  colors:['#F9A91A', '#333333']

});
