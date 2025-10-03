
$(function(){
    $(".btn-1").click(function (){
        $(".img-1").hide(1000)
    })

      $(".btn-2").click(function (){
        $(".img-2").show(1000)
    })
    $(".btn-3").click(function (){
        $(".img-3").toggle(1000)
    })
    $(".btn-4").click(function (){
        $(".img-4").fadeIn(1000)
    })
    $(".btn-5").click(function (){
        $(".img-5").fadeOut(1000)
    })

    $(".btn-6").click(function (){
        $(".img-6").fadeToggle(1000)
    })

    $(".btn-7").click(function (){
        $(".img-7").slideUp(1000)
    })
    $(".btn-8").click(function (){
        $(".img-8").slideDown(1000)
    })
    $(".btn-9").click(function (){
        $(".img-9").slideToggle(1000)
    })

    
})