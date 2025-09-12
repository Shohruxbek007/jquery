$(document).ready(function(){


$(".text1").click(function(){
 let x = $(this).css("color",)
 let h = $(this).css("font-size")
        $(".text2").css("color",`${x}`)
        $(".text2").css("font-size",`${h}`)

   
})
$(".text2").click(function(){
    let x = $(this).css("color",)
    let h = $(this).css("font-size")
           $(".text3").css("color",`${x}`)
           $(".text3").css("font-size",`${h}`)
   
      
   })
   $(".text3").click(function(){
    let x = $(this).css("color",)
    let h = $(this).css("font-size")
           $(".text4").css("color",`${x}`)
           $(".text4").css("font-size",`${h}`)
   
      
   })
   $(".text4").click(function(){
    let x = $(this).css("color",)
    let h = $(this).css("font-size")
           $(".text1").css("color",`${x}`)
           $(".text1").css("font-size",`${h}`)
   
      
   })


   $(".pic1").click(function(){
    let x = $(this).css("box-shadow",)

           $(".pic2").css("box-shadow",`${x}`)
        
   
      
   })
   $(".pic2").click(function(){
    let x = $(this).css("box-shadow",)

           $(".pic3").css("box-shadow",`${x}`)
        
   
      
   })

   $(".pic3").click(function(){
    let x = $(this).css("box-shadow",)

           $(".pic1").css("box-shadow",`${x}`)
        
   
      
   })



})



