//hide the iframe's
$(".wikiCont").hide();
$(".RwikiCont").hide();
//when the dom is ready.
$("container").ready(function(){ 
///call up the wiki api and then perform a search based on what was typed in the search box
$("#SubBtn").click(function(){
    event.preventDefault();
    var Fquery = $("#Search");
    var qTerm = Fquery.val();
    var url = $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&limit=1&format=json&search="+qTerm+"&origin=*",function(data){
        function searchWiki(){
            $(".wikiTitle").html(""+data[1][0]);
            $(".wikiLink").html(""+data[2]);
            $(".wikiCont").attr('src',data[3][0]);
            console.log(qTerm);
            console.log(url);
            console.log(data);
        }
        searchWiki();
    });
    });
    });
    var rurl = "https://en.wikipedia.org/wiki/Special:Random";
    //show a random wiki page
    $("#shoRandom").click(function(){
        $(".RwikiCont").attr('src',rurl);
        $(".RwikiCont").show();
    });
    //shows the searched wiki page
      $("#shoFrame").click(function(){
        $(".wikiCont").show();
    });
    $("#hideAll").click(function(){
        $(".wikiCont").hide("slow");
        $(".RwikiCont").hide("slow");
    });
