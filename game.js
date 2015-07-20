var jiaodao=
    document.getElementById("jiandao");

jiandao.onclick=function(){
  document.getElementById("my-result").src="https://raw.githubusercontent.com/baidu-ife/ife/master/2015_summer/asset/jiandao.jpg";
  
  var computerresult=Math.random();
  
  if(computerresult<0.33){
    //jiandao
    document.getElementById("computer-result").src="https://raw.githubusercontent.com/baidu-ife/ife/master/2015_summer/asset/jiandao.jpg";
    document.getElementById("result-test").innerHTML =" Tie";
    
  }else if(computerresult<0.67){
   //shitou 
    document.getElementById("computer-result").src="https://raw.githubusercontent.com/baidu-ife/ife/master/2015_summer/asset/shitou.jpg";
    document.getElementById("result-test").innerHTML ="Lose";
  }else{
    //bu
    document.getElementById("computer-result").src="https://raw.githubusercontent.com/baidu-ife/ife/master/2015_summer/asset/bu.jpg";document.getElementById("result-test").innerHTML =" Win";
  }
}

var shitou=
    document.getElementById("shitou");

shitou.onclick=function(){
  document.getElementById("my-result").src="https://raw.githubusercontent.com/baidu-ife/ife/master/2015_summer/asset/shitou.jpg";
  
  var computerresult=Math.random();
  
  if(computerresult<0.33){
    //jiandao
    document.getElementById("computer-result").src="https://raw.githubusercontent.com/baidu-ife/ife/master/2015_summer/asset/jiandao.jpg";
    document.getElementById("result-test").innerHTML =" Win";
    
  }else if(computerresult<0.67){
   //shitou 
    document.getElementById("computer-result").src="https://raw.githubusercontent.com/baidu-ife/ife/master/2015_summer/asset/shitou.jpg";
    document.getElementById("result-test").innerHTML ="Tie";
  }else{
    //bu
    document.getElementById("computer-result").src="https://raw.githubusercontent.com/baidu-ife/ife/master/2015_summer/asset/bu.jpg";document.getElementById("result-test").innerHTML =" Lose";
  }
}

var bu=
    document.getElementById("bu");

bu.onclick=function(){
  document.getElementById("my-result").src="https://raw.githubusercontent.com/baidu-ife/ife/master/2015_summer/asset/bu.jpg";
  
  var computerresult=Math.random();
  
  if(computerresult<0.33){
    //jiandao
    document.getElementById("computer-result").src="https://raw.githubusercontent.com/baidu-ife/ife/master/2015_summer/asset/jiandao.jpg";
    document.getElementById("result-test").innerHTML =" Lose";
    
  }else if(computerresult<0.67){
   //shitou 
    document.getElementById("computer-result").src="https://raw.githubusercontent.com/baidu-ife/ife/master/2015_summer/asset/shitou.jpg";
    document.getElementById("result-test").innerHTML ="Win";
  }else{
    //bu
    document.getElementById("computer-result").src="https://raw.githubusercontent.com/baidu-ife/ife/master/2015_summer/asset/bu.jpg";document.getElementById("result-test").innerHTML ="Tie";
  }
}