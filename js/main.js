Date.prototype.getWeekNumber = function(){
  var d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
  var dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
  return Math.ceil((((d - yearStart) / 86400000) + 1)/7)
};



var d = new Date();
var day = d.getDay();
var week = d.getWeekNumber();


if (((week%2 ==0)&& (day == 6))|| ((week%2 ==1)&& (day == 5))){
	document.write("<h1> Bien sûr que oui ! </h1>");
	document.write('<img src="img/happy.gif" width="360" height="480" frameBorder="0">');
} else{
	document.write("<h1> Bien sûr que non ! </h1>");
	document.write('<img src="img/sad.gif" width="480" height="338" frameBorder="0" >');
}
