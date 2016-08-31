'use strict';

module.exports = function(ts) {
  var now = Math.round(Date.now() / 1000)
  ts = Math.round(new Date(ts).getTime() / 1000)
  var diff = now - ts

  console.log(`now-${now} ts-${ts} diff-${diff}`)

  switch (true) {
  	case diff < 60:
    	return 'Ahora'
    case diff < 3600:
    	var mins = Math.floor(diff / 60);
    	return 'Hace ' + (mins === 1 ? 'un minuto' : mins + ' minutos');
    case diff < 86400:
    	var hours = Math.floor(diff / 3600);
    	return 'Hace ' + (hours === 1 ? 'una hora' : hours + ' horas');
    case diff < 2678400:
    	var days = Math.floor(diff / 86400);
    	return 'Hace ' + (days === 1 ? 'un dia' : days + ' dias');
    case diff < 32140800:
    	var months = Math.floor(diff / 2678400);
    	return 'Hace ' + (months === 1 ? 'un mes' : months + ' meses');
    default:
    	var years = Math.floor(diff / 32140800);
    	return 'Hace ' + (years === 1 ? 'un año ' : years + ' años');
  }
}
