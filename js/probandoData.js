/*
agregar asistencia y las autoevaluaciones de lms (auxilio)
promedio asistencia que no sea eterna mejorar colores
agregar turnos am/pm
*/
/*datos sede santiago chile*/
var DATAscl = data.SCL

  var genS62 = data.SCL['2016-2']

    var studentS62 = data.SCL['2016-2'].students

    /*estudiantes activas/inactivas en esta generacion en esta sede*/
          var activeS62 = 0
          var inactiveS62 = 0
            for (var i = 0; i < studentS62.length; i++) {
            if (studentS62[i].active === true) {
              activeS62++
            }else{
              inactiveS62++
            }
          }

  var genS71 = data.SCL['2017-1']

    var studentS71 = data.SCL['2017-1'].students

    /*estudiantes activas/inactivas en esta generacion en esta sede*/
          var activeS71 = 0
          var inactiveS71 = 0
            for (var i = 0; i < studentS71.length; i++) {
            if (studentS71[i].active === true) {
              activeS71++
            }else{
              inactiveS71++
            }
          }

  var genS72 = data.SCL['2017-2']

    var studentS72 = data.SCL['2017-2'].students

    /*estudiantes activas/inactivas en esta generacion en esta sede*/
          var activeS72 = 0
          var inactiveS72 = 0
            for (var i = 0; i < studentS72.length; i++) {
            if (studentS72[i].active === true) {
              activeS72++
            }else{
              inactiveS72++
            }
          }


/*datos sede Arequipa*/
var DATAaqp = data.AQP

  var genA62 = data.AQP['2016-2']

    var studentA62 = data.AQP['2016-2'].students

    /*estudiantes activas/inactivas en esta generacion en esta sede*/
          var activeA62 = 0
          var inactiveA62 = 0
            for (var i = 0; i < studentA62.length; i++) {
            if (studentA62[i].active === true) {
              activeA62++
            }else{
              inactiveA62++
            }
          }

  var genA71 = data.AQP['2017-1']

    var studentA71 = data.AQP['2017-1'].students

    /*estudiantes activas/inactivas en esta generacion en esta sede*/
          var activeA71 = 0
          var inactiveA71 = 0
            for (var i = 0; i < studentA71.length; i++) {
            if (studentA71[i].active === true) {
              activeA71++
            }else{
              inactiveA71++
            }
          }

/*datos sede ciudad de mexico*/
var DATAcdmx = data.CDMX

  var genC71 = data.CDMX['2017-1']

    var studentC71 = data.CDMX['2017-1'].students

    /*estudiantes activas/inactivas en esta generacion en esta sede*/
          var activeC71 = 0
          var inactiveC71 = 0
            for (var i = 0; i < studentC71.length; i++) {
            if (studentC71[i].active === true) {
              activeC71++
            }else{
              inactiveC71++
            }
          }

  var genC72 = data.CDMX['2017-2']

    var studentC72 = data.CDMX['2017-2'].students

    /*estudiantes activas/inactivas en esta generacion en esta sede*/
          var activeC72 = 0
          var inactiveC72 = 0
            for (var i = 0; i < studentC72.length; i++) {
            if (studentC72[i].active === true) {
              activeC72++
            }else{
              inactiveC72++
            }
          }


/*datos sede lima*/
var DATAlim = data.LIM

  var genL62 = data.LIM['2016-2']

    var studentL62 = data.LIM['2016-2'].students

    /*estudiantes activas/inactivas en esta generacion en esta sede*/
          var activeL62 = 0
          var inactiveL62 = 0
            for (var i = 0; i < studentL62.length; i++) {
            if (studentL62[i].active === true) {
              activeL62++
            }else{
              inactiveL62++
            }
          }

  var genL71 = data.LIM['2017-1']

    var studentL71 = data.LIM['2017-1'].students

    /*estudiantes activas/inactivas en esta generacion en esta sede*/
          var activeL71 = 0
          var inactiveL71 = 0
            for (var i = 0; i < studentL71.length; i++) {
            if (studentL71[i].active === true) {
              activeL71++
            }else{
              inactiveL71++
            }
          }

  var genL72 = data.LIM['2017-2']

    var studentL72 = data.LIM['2017-2'].students

    /*estudiantes activas/inactivas en esta generacion en esta sede*/
          var activeL72 = 0
          var inactiveL72 = 0
            for (var i = 0; i < studentL72.length; i++) {
            if (studentL72[i].active === true) {
              activeL72++
            }else{
              inactiveL72++
            }
          }
