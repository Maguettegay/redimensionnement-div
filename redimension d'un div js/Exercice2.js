//button 1
let button1 = document.querySelector("#button1");
button1.addEventListener("click", function(){
    var rectangleBleu = document.getElementById("rectangleBleu");
    rectangleBleu.style.height = "300px";
})

//button 2

let button2 = document.getElementById("button2");
button2.addEventListener("click", function(){
    var rectangleBleu = document.getElementById("rectangleBleu");
    rectangleBleu.style.background="green";
})

//button 3

let button3 = document.getElementById("button3");
button3.addEventListener("click", function(){
    var rectangleBleu = document.getElementById("rectangleBleu");
    rectangleBleu.style.background="blue";
})

//button 4

let button4 = document.getElementById("button4");
button4.addEventListener("click", function(){
    var rectangleBleu = document.getElementById("rectangleBleu");
    rectangleBleu.style.display="none";
})

//button 5

let button5 = document.getElementById("button5");
button5.addEventListener("click", function(){
    var rectangleBleu = document.getElementById("rectangleBleu");
    rectangleBleu.style.display="block";
})




// $(document).ready(function(){
//     $("#button1").click(function(){
        
//         var div = $("#rectangleBleu");
//         div.animate({height: '300px'}, "slow");
//         div.animate({height: '100px'}, "slow");
        
//     });
// });

// //button2
// $(document).ready(function(){
//     $("#button2").click(function(){
//         document.getElementById("rectangleBleu").style.backgroundColor="green";
        
//     });
// });

// //button3
// $(document).ready(function(){
//     $("#button3").click(function(){
//         document.getElementById("rectangleBleu").style.backgroundColor="blue";
        
//     });
// });

// //button4
// $(document).ready(function(){
//     $("#button4").click(function(){
//         $("#rectangleBleu").hide(0);
        
//     });
// });

// //button5
// $(document).ready(function(){
//     $("#button5").click(function(){
//         $("#rectangleBleu").show(0);
        
//     });
// });