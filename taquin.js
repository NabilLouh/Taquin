$('.victoire').hide()


var casevidetop = 300
var casevideleft = 300
var counthit = 0

var emplacement = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]


c1good = false
c2good = false
c3good = false
c4good = false
c5good = false
c6good = false
c7good = false
c8good = false
c9good = false
c10good = false
c11good = false
c12good = false
c13good = false
c14good = false
c15good = false
c16good = false

var max = emplacement.length - 1
var taille = emplacement.length - 1
var chrono;
var lancer = false;

position = Math.floor(Math.random() * max)
index = 0
casevidetop = 300
casevideleft = 300
counthit = 0

$('#debut').click(function() {
    emplacement = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    index = 0
    lancer = true
    casevidetop = 300
    casevideleft = 300
    counthit = 0
    lancer = true;
    $('.count').text("Nombre de coup : " + counthit);
    $('#tableau').show()
    $('.victoire').hide()


    clearInterval(chrono)
    var sec = 0
    var min = 0
    chrono = setInterval(function() {
        sec = sec + 1
        if (sec == 60) {
            min = min + 1
            sec = 0
        }
        $('.chrono').text('Temps : ' + min + ":" + sec)
    
    }, 1000)




    while (index <= max ) {
    
        taille = emplacement.length - 1
        position = Math.floor(Math.random() * taille)
       
    
    
    
        if (emplacement[position] == 1) {
            $('.case').eq(index).css("left", 0)
            $('.case').eq(index).css("top", 0)
        } else if (emplacement[position] == 2) {
            $('.case').eq(index).css("left", 100)
            $('.case').eq(index).css("top", 0)
        } else if (emplacement[position] == 3) {
            $('.case').eq(index).css("left", 200)
            $('.case').eq(index).css("top", 0)
        } else if (emplacement[position] == 4) {
            $('.case').eq(index).css("left", 300)
            $('.case').eq(index).css("top", 0)
        } if (emplacement[position] == 5) {
            $('.case').eq(index).css("left", 0)
            $('.case').eq(index).css("top", 100)
        } else if (emplacement[position] == 6) {
            $('.case').eq(index).css("left", 100)
            $('.case').eq(index).css("top", 100)
        } else if (emplacement[position] == 7) {
            $('.case').eq(index).css("left", 200)
            $('.case').eq(index).css("top", 100)
        } else if (emplacement[position] == 8) {
            $('.case').eq(index).css("left", 300)
            $('.case').eq(index).css("top", 100)
        } else if (emplacement[position] == 9) {
            $('.case').eq(index).css("left", 0)
            $('.case').eq(index).css("top", 200)
        } else if (emplacement[position] == 10) {
            $('.case').eq(index).css("left", 100)
            $('.case').eq(index).css("top", 200)
        } else if (emplacement[position] == 11) {
            $('.case').eq(index).css("left", 200)
            $('.case').eq(index).css("top", 200)
        } else if (emplacement[position] == 12) {
            $('.case').eq(index).css("left", 300)
            $('.case').eq(index).css("top", 200)
        } else if (emplacement[position] == 13) {
            $('.case').eq(index).css("left", 0)
            $('.case').eq(index).css("top", 300)
        } else if (emplacement[position] == 14) {
            $('.case').eq(index).css("left", 100)
            $('.case').eq(index).css("top", 300)
        } else if (emplacement[position] == 15) {
            $('.case').eq(index).css("left", 200)
            $('.case').eq(index).css("top", 300)
        } else if (emplacement[position] == 16) {
            $('.case').eq(index).css("left", 300)
            $('.case').eq(index).css("top", 300)
        } 
    
        emplacement.splice(position, 1);
        index = index + 1
    }
    
})





$('.case').click(function() {
    if (lancer == true) {
       
        caseclickTop = $(this).position().top
        caseclickLeft = $(this).position().left

       /* counthit = counthit + 1
        $('.count').text("Nombre de coup : " + counthit);

        $(this).css("left", casevideleft + 'px');
        $(this).css("top", casevidetop + 'px')


        casevidetop = caseclickTop
        casevideleft = caseclickLeft*/


        if ((caseclickTop + 100 == casevidetop && caseclickLeft == casevideleft) 
        || (caseclickTop - 100 == casevidetop && caseclickLeft == casevideleft)
        || (caseclickLeft - 100 == casevideleft && caseclickTop == casevidetop)
        || (caseclickLeft + 100 == casevideleft && caseclickTop == casevidetop)) {
            counthit = counthit + 1
            $('.count').text("Nombre de coup : " + counthit);

            $(this).css("left", casevideleft + 'px');
            $(this).css("top", casevidetop + 'px')


            casevidetop = caseclickTop
            casevideleft = caseclickLeft
        }

        console.log($('#case1').position().top)
        console.log($('#case1').position().left)

        
        if ($('#case1').position().top == 0 && $('#case1').position().left == 0) {
            c1good = true
        } else {
            c1good = false
        }
        if ($('#case2').position().top == 0 && $('#case2').position().left == 100) {
            c2good = true
        } else {
            c2good = false
        } 
        if ($('#case3').position().top == 0 && $('#case3').position().left == 200) {
            c3good = true
        } else {
            c3good = false
        }
        if ($('#case4').position().top == 0 && $('#case4').position().left == 300) {
            c4good = true
        } else {
            c4good = false
        }
        if ($('#case5').position().top == 100 && $('#case5').position().left == 0) {
            c5good = true
        } else {
            c5good = false
        }
        if ($('#case6').position().top == 100 && $('#case6').position().left == 100) {
            c6good = true
        } else {
            c6good = false
        }
        if ($('#case7').position().top == 100 && $('#case7').position().left == 200) {
            c7good = true
        } else {
            c7good = false
        }
        if ($('#case8').position().top == 100 && $('#case8').position().left == 300) {
            c8good = true
        } else {
            c8good = false
        }
        if ($('#case9').position().top == 200 && $('#case9').position().left == 0) {
            c9good = true
        } else {
            c9good = false
        }
        if ($('#case10').position().top == 200 && $('#case10').position().left == 100) {
            c10good = true
        } else {
            c10good = false
        }
        if ($('#case11').position().top == 200 && $('#case11').position().left == 200) {
            c11good = true
        } else {
            c11good = false
        }
        if ($('#case12').position().top == 200 && $('#case12').position().left == 300) {
            c12good = true
        } else {
            c12good = false
        }
        if ($('#case13').position().top == 300 && $('#case13').position().left == 0) {
            c13good = true
        } else {
            c13good = false
        }
        if ($('#case14').position().top == 300 && $('#case14').position().left == 100) {
            c14good = true
        } else {
            c14good = false
        }
        if ($('#case15').position().top == 300 && $('#case15').position().left == 200) {
            c15good = true
        } else {
            c15good = false
        }
        if ($('#case16').position().top == 0 && $('#case16').position().left == 0) {
            c16good = true
        } else {
            c16good = false
        }



       


        console.log("c1 est " + c1good)
        console.log("c2 est " + c2good)
        console.log("c3 est " + c3good)
        console.log("c4 est " + c4good)
        console.log("c5 est " + c5good)
        console.log($('#case5').position().top)
        console.log($('#case5').position().left)
        console.log("c6 est " + c6good)
        console.log("c7 est " + c7good)
        console.log($('#case7').position().top)
        console.log($('#case7').position().left)
        console.log("c8 est " + c8good)
        console.log("c9 est " + c9good)
        console.log("c10 est " + c10good)
        console.log("c11 est " + c11good)
        console.log("c12 est " + c12good)
        console.log("c13 est " + c13good)
        console.log("c14 est " + c14good)
        console.log("c15 est " + c15good)
        console.log("c16 est " + c16good)
        console.log($('#case16').position().top)
        console.log($('#case16').position().left)

        
        if (c1good == true && c2good == true && c3good == true && c4good == true && c5good == true && c6good == true && 
            c7good == true && c8good == true && c9good == true && c10good == true && c11good == true && c12good == true && 
            c13good == true && c14good == true && c15good == true) {
            clearInterval(chrono)
            $('#tableau').hide()
            $('.victoire').show()
            lancer = false
        } 


       
        

    }
    


   


    
   
})



