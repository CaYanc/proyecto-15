$(document).ready(function(){

    // cambian los iconos con mouseenter

    $("i").mouseenter(function(){
        $(this).css("color","#fff")
    })
    $("i").mouseleave(function(){
        $(this).css("color","#000")
    })

    // cambiar de color los botones cuando mouseenter

    $("button").mouseenter(function(){
        $(this).css("background","#694305")
    })
    $("button").mouseleave(function(){
        $(this).css("background","#FFA410")
    })

    // animacion de los input en mouseenter

    $("input").focus(function(){
        $(this).css("background-color","rgb(250 200 100)")
    })
    $("input").blur(function(){
        $(this).css("background-color","white")
    })

//    animacion del logo inical de la app

    $("#logo").mouseenter(function(){
        $(this).fadeOut("700");
        $("#p-logo").fadeOut("700");
      });
    $("#logo").mouseleave(function(){
        $(this).fadeIn("");
        $("#p-logo").fadeIn("");
      });

// cambios de section con un click

    $("#btn-inicio").click(function(){
        $(".section1").addClass("d-none");
        $(".section2").removeClass("d-none");

    });

    $("#btn-register").click(function(){
        $(".section2").addClass("d-none");
        $(".section3").removeClass("d-none");
    });

    $(".productos").click(function(){
        $(".section3").addClass("d-none");
        $(".section4").removeClass("d-none");
    });

    // volver atras con un click <

    $("#btn-volver").click(function(){
        $(".section4").addClass("d-none")
        $(".section3").removeClass("d-none")
    })
});