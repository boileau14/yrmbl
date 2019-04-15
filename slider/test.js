$(document).ready(function() {
    
function scheduleHover(){
    $('#nav-schedule')
        .off('mouseover mouseleave click')
        .on({
            mouseover: function(){
                TweenMax.to("#nav-schedule div", 0.3, { x: -26, transformOrigin:"50% 50%", ease:Power1.easeInOut });
            },
             mouseleave: function(){
                 TweenMax.to("#nav-schedule div", 0.3, { x: 0, transformOrigin:"50% 50%", ease:Power1.easeInOut });
            },
            click: function(){
                $('#nav-schedule').off('mouseover mouseleave click');
                $("#slider").animate({ left: "+=718px", width: "0", opactity: 0 }, 600);
                $("#slider-spacer").fadeOut(600);
                    
                TweenMax.to("#nav-schedule div", 0.3, { x: 0, transformOrigin:"50% 50%", ease:Power1.easeInOut, repeat:0 });
                    
                setTimeout(function(){ $("#nav-schedule span").removeClass("nav-arrow-tri-down"); },300);
                    /* remove blue? setTimeout(function(){ $("#nav-schedule div").removeClass("nav-arrow-blue"); },300); */
                $('#nav-schedule div').css({ left: "303px" });
                
                TweenMax.to("#nav-schedule div", 0.6, { delay:0.3, x: -26, transformOrigin:"50% 50%", ease:Power1.easeInOut, repeat:0 });
                    
                setTimeout(function(){ $("#nav-schedule span").addClass("nav-arrow-tri"); },500);
                    /* add red ? setTimeout(function(){ $("#nav-schedule div").addClass("nav-arrow"); },500);*/
                $('#schedule').css({ left: "0" });
                $("#schedule").delay(600).animate({ width: "+=716px",direction: "right" }, 600);
                $("#content-spacer").delay(600).fadeIn(0);
                
            }
        });
}

$('#link-1').click(function(){
                TweenMax.to("#nav-schedule div", 0.3, { x: 0, transformOrigin:"50% 50%", ease:Power1.easeInOut });
                setTimeout(function(){ $("#nav-schedule span").removeClass("nav-arrow-tri"); },300);
                setTimeout(function(){ $("#nav-schedule span").addClass("nav-arrow-tri-down"); },500);
                $("#schedule").animate({ left: "+=718px", width: "0", opactity: 0 }, 600);
                $("#content-spacer").fadeOut(600);
                $("#slider").css({ left: "0", width: "718px" });
                $("#slider-spacer").delay(600).slideDown(600);
                $("#nav-schedule div").fadeIn(300);
    
   scheduleHover();
});

scheduleHover();
    
    });
