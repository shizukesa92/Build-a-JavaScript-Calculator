$(document).ready(function(){
   
  var operators = ["-", "+", "/", "*"],
      equation = "0",
      current = "0",
      history = 0;

  $("button").click(function(){
     //$("#console").html(eval("9-9"));
    if (this.value == "AC"){
        $("#preVal").html("0");
        $("#curVal").html("0");
        equation = "0";
        current = "0";
        return;
    }
    
    if (this.value == "CE"){
      $("#curVal").html("0");
      return;
    }
    
    if (operators.indexOf(this.value) !== -1 && operators.indexOf(current) !== -1){
      return;
    }
    
    var currentText = $("#curVal").text();

    if (current == "="){
      if(operators.indexOf(this.value) == -1){
        equation = "0";
        $("#preVal").html("0");
      } 
      $("#curVal").html("0");
    }
    
    if (operators.indexOf(current) !== -1){
       $("#preVal").append(current);
    }
    
    if (operators.indexOf(this.value) !== -1){
      //for next line must use .text().length otherwise length will be wrong  
       if(current == "="||($("#preVal").text() == 0 || $("#preVal").text().length > 20)){
        $("#preVal").html(currentText);
      } else {
        $("#preVal").append(currentText);
      } 
    }
    current = this.value;

    if (this.value == "="){
      $("#preVal").append(currentText);
      $("#curVal").html(eval(equation));
      equation = $("#curVal").text();
      return;
    } else {
      equation += this.value;
    }
    
    if ($("#curVal").text() != 0 && operators.indexOf($("#curVal").text()) == -1 && operators.indexOf(this.value) == -1){
      $("#curVal").append(this.value);
    } else {
      $("#curVal").html(this.value);
    }
    
  });
  
  
  
  
  
  
  
  
  
  
  
  
});