function clock() { 
  var d = new Date(); 
  var day = d.getDate(); 
  var year = d.getFullYear(); 
  var month = d.getMonth(); 
  var hours = d.getHours(); 
  var minutes = d.getMinutes(); 
  var seconds = d.getSeconds();  
  if (hours > 12){  
    tod = 'PM'  hours = hours-12 
  }else{  
    tod = 'AM' 
  } 
  return month + '-' + day + '-' + year + ';' + hours + ':' + minutes + ':' + seconds + ' ' + tod
}

//Could shorten variables by combining day, month, and year - hours, minutes, seconds
