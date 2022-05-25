var casevidetop = 300
var casevideleft = 300



$('.case').click(function() {
    console.log($(this).position().top)
    console.log($(this).position().left)
   
    caseclickTop = $(this).position().top
    caseclickLeft = $(this).position().left

    $(this).css("left", casevideleft + 'px');
    $(this).css("top", casevidetop + 'px')


    casevidetop = caseclickTop
    casevideleft = caseclickLeft

})