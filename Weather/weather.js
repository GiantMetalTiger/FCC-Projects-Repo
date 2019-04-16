///shows the users location
$(".container").ready(function(){ 
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }else{
        $("#local").html("Function Not supported by your browser.");
    }
    function showPosition(position){
       var Lat = position.coords.latitude;
       var Lon = position.coords.longitude;
       $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat="+Lat+"&lon="+Lon,function(wData){
        //shows the data about the weather
        var tem = wData.main.temp;
        var fh;
        var cl; 
        $(".city").html(""+wData.name);
        $(".weather").html(""+wData.weather[0].main);
        $(".temp").html(""+wData.main.temp+"C");
        $(".icon").html($(".wicon").attr('src',wData.weather[0].icon));
        //celsius to fahrenheit
        $("#fh").click(function(){
            fh = tem +32 ;
            Math.round(fh);
           console.log(fh);
            $(".temp").html(fh+"F");
        });
        //fahrenheit to celsius
        $("#clc").click(function(){
            cl = fh -32;
            Math.round(fh);
            console.log(cl);
            $(".temp").html(cl+"C");
        });
        console.log(tem);
       console.log(wData);  
    });
}
});