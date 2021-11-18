jQuery(document).ready(listo);


function listo()
{
    jQuery(".paw").click(function(e){
        e.preventDefault();
        jQuery("header .container nav").toggleClass("open");

        jQuery(".paw i").toggleClass("fa-times");
 
    });

}