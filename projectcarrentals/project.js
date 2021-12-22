function traffic(){
    location.replace("Triff.html");
}
function login(){
    location.replace("loginform.html");
}
function host(){
    location.replace("hostpolices.html");
}
function help(){
    location.replace("HelpandSupport.html");
}
function home(){
    location.replace("Home.html");
}
function alert1(){
    alert("Please Confirm to proceed");
    location.replace("loginform.html");
}
function car1(){
    location.replace("https://www.zoomcar.com/in/hyderabad/faqs#1")
}
function book1(){
    location.replace("https://www.zoomcar.com/in/hyderabad/faqs#2");
}
function pay1(){
    location.replace("https://www.zoomcar.com/in/hyderabad/faqs#3");
}
function wal1(){
    location.replace("https://www.zoomcar.com/in/hyderabad/faqs#4")
}
function dea1(){
    location.replace("https://www.zoomcar.com/in/hyderabad/faqs#4")
}
function live1(){
    location.replace("https://www.zoomcar.com/in/hyderabad/faqs#5")
}
$(document).ready(function(){
    $("#book1").mouseover(function(){
        $("#book1").css({width:"200px"})
    });
    $("#book1").mouseout(function(){
        $("#book1").css({width:"100px"})
    });

    $("#car1").mouseover(function(){
        $("#car1").css({width:"200px"})
    })
    $("#car1").mouseout(function(){
        $("#car1").css({width:"100px"})

    })
    $("#pay1").mouseover(function(){
        $("#pay1").css({width:"200px"})
    });
    $("#pay1").mouseout(function(){
        $("#pay1").css({width:"100px"})
    });
    $("#wal1").mouseover(function(){
        $("#wal1").css({width:"200px"})
    });
    $("#wal1").mouseout(function(){
        $("#wal1").css({width:"100px"})
    });
    $("#dea1").mouseover(function(){
        $("#dea1").css({width:"200px"})
    });
    $("#dea1").mouseout(function(){
        $("#dea1").css({width:"100px"})
    });
    $("#live1").mouseover(function(){
        $("#live1").css({width:"200px"})
    });
    $("#live1").mouseout(function(){
        $("#live1").css({width:"100px"})
    });
    })