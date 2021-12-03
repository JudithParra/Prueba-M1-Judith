$(document).ready(function (){

    $("a").click(function () {
        var gato = this.hash
  
        $("html, body").animate(
          {
            scrollTop: $(gato).offset().top -30
          },
          800
        )
      
    }) 
})

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

