var svg = document.getElementById("s");


var infox = [14, 16 ,11, 15, 18,  22 ,19 ,18 ,22 , 17] ;

var infoy = [215, 325, 185, 332, 406 , 522, 412, 421, 445, 408];

var info =  [[14,215],[ 16,325] ,[11,185],[ 15,332],[ 18,406], [ 22,522] ,[19,412] ,[25,614] ,[23,544], [18,421] ,[22,445] , [17,408]] ;
   







var plot = function(){
    var container = d3.select("svg");
    var points = container.selectAll("circle"). data(info).enter().append("circle");
    points.attr("cx" , function(d){return d[0]*10;});
    points.attr("cy", function(d) {return  500 - d[1];});
    points.attr("r" , 5);
    points.attr("fill" , "black");
}

var label = function() {
    console.log("x: " +  this.getAttribute("cx").toString());
    console.log("y: " +  this.getAttribute("cy").toString());
}


plot();

var circles = document.getElementsByTagName("circle");
for (element in circles) {
    console.log(circles[element]);
    (circles[element]).addEventListener("click",label);
    //element.addEventListener("mouseout", labelOff);
			   
}
