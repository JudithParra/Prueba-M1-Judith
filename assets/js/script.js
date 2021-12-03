/*evento click- smooth scroll*/
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

/*función para tooltips*/
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

