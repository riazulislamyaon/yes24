var totop=document.querySelector(".to-top");
window.addEventListener("scroll",function(){
    if(window.pageYOffset>100){
        totop.classList.add("gg")
    }
    else(totop.classList.remove("gg")

    )
})
var shadow=document.querySelector(".navbar");
window.addEventListener("scroll",function(){
    shadow.classList.toggle("navbarshadow",window.scrollY>0)
   
})

$(document).ready(function(){
    $(".to-top").click(function(){
        $('html').animate({"scrollTop":0}, 1000)
    })
});
/*
$(document).ready(function(){
    $('#typewriteText').typewrite({
        actions: [
            {type: 'Hello. '},
            {type: '<br>'},
            {type: 'Weclome '},
            {delay: 1500},
            {remove: {num: 1, type: 'stepped'}},
            {select: {from: 11, to: 16}},
            {delay: 2000},
            {remove: {num: 5, type: 'whole'}},
            {delay: 300},
            {type: 'lcome to typewrite. '},
            {type: '<br>'},
            {type: 'It\'s so easy to setup and use.'},
            {remove: 'whole'}
        ]
    });
});*/


try {
    fetch(new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", { method: 'HEAD', mode: 'no-cors' })).then(function(response) {
      return true;
    }).catch(function(e) {
      var carbonScript = document.createElement("script");
      carbonScript.src = "//cdn.carbonads.com/carbon.js?serve=CK7DKKQU&placement=wwwjqueryscriptnet";
      carbonScript.id = "_carbonads_js";
      document.getElementById("carbon-block").appendChild(carbonScript);
    });
  } catch (error) {
    console.log(error);
  };