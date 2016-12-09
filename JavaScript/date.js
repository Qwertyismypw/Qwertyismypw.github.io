function clock() { 
  var d = new Date(); 
  var day = d.getDate(); 
  var year = d.getFullYear(); 
  var month = d.getMonth(); 
  var hours = d.getHours(); 
  var minutes = d.getMinutes(); 
  var seconds = d.getSeconds();  
  if (hours > 12){  
    tod = 'PM';  
    hours = hours-12; 
  }else{  
    tod = 'AM'; 
  }
  if (day.toString().length<2){  day = '0'+day 
  } 
  if (month.toString().length<2){  
    month = '0'+month 
  } 
  if (hours.toString().length<2){  
    hours = '0'+hours 
  } 
  if (minutes.toString().length<2){ 
      minutes = '0'+minutes 
  } 
  if (seconds.toString().length<2){  
        seconds = '0'+seconds 
  }
  var change = month + '-' + day + '-' + year + ';' + hours + ':' + minutes + ':' + seconds + ' ' + tod;
  return setInterval(change, 1)
}

//Could shorten variables by combining day, month, and year - hours, minutes, seconds
