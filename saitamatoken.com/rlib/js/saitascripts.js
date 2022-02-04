function scroll_to(clicked_link, nav_height) {
	var element_class = clicked_link.attr('href').replace('#', '.');
	var scroll_to = 0;
	//console.log(element_class);
	if(element_class != '.saitahome') {
//		element_class += '-container';
		scroll_to = $(element_class).offset().top - nav_height;
	}
	if($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({scrollTop: scroll_to}, 1000);
	}
}


function IphoneCheck(that) {
    if (that.value == "Ios") {
        document.getElementById("saitaudidlabel").style.display = "block";
        document.getElementById("saitaudid").style.display = "block";
    } else {
        document.getElementById("saitaudidlabel").style.display = "none";
        document.getElementById("saitaudid").style.display = "none";
    }
}


function gensaitapricechart(id){
   let location = window.location.href;
//	console.log(location);
   $.post(location+"controller/saitachartcontroller.php",{"saitadata":{"saitacmd":"getsaitapricedata"}})
    .done(function(data) {
       var saitaresult = $.parseJSON(data);
       var options = {
         type: 'line',
         data: {
             labels: saitaresult.time,
         datasets: [
	      {
	        label: 'Saitama Price',
	        data: saitaresult.price,
         	borderWidth: 1,
	        fill: false,
                borderColor: 'rgb(39,174,96)',
                tension: 0.1
    	 }	
	 ]
       },
        options: {
	    elements: {
                    point:{
                        radius: 0
                    }
                },	
  	   scales: {
           yAxes: [{
           ticks: {
	     reverse: false
         }
       }]
    }
  }
}

var ctx = document.getElementById('saitaChart').getContext('2d');
new Chart(ctx, options);
   }); 
         
}

function capFirst(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}

jQuery(document).ready(function() {
    var test = $(window).width();
    if (test < 1090) {
       $('#saitamainnav').removeClass('navbar-expand-lg');
    } else {
       $('#saitamainnav').addClass('navbar-expand-lg');
    }

    $('a.scroll-link').on('click', function(e) {
       if (!(location.search.indexOf('=')>=0)) {
 	  e.preventDefault();
	  scroll_to($(this), $('nav').outerHeight());
       }else{
         window.location.href = "index.html";
       }
    });
	
    $('.saitahome').backstretch("rlib/img/saitahome-bg.jpg");
    $('.saitamission').backstretch("rlib/img/saitamission.png");
    $('.saitaecosystem-burn').backstretch("rlib/img/saitagrid.png");
    $('.saitamask').backstretch("rlib/img/saitamaskgrid.png");
    $('.saitamaskdesc').backstretch("rlib/img/saitamaskmountain.jpg");
    $('.saitamask-eco').backstretch("rlib/img/saitamaskmountain-2.png");
    $('.saitawhitepaper').backstretch("rlib/img/whitepaper-bg.png");
    $('.saitahtb1').backstretch("rlib/img/saitahtb-bg1.png");
    $('.saitahtb2').backstretch("rlib/img/saitahtb-bg2.png");
    $('.saitahtb3').backstretch("rlib/img/saitahtb-bg3.png");
    $('.saitaroad').backstretch("rlib/img/saitagrid.png");
    $('.saitatransparency1').backstretch("rlib/img/saitablack-bg.png");
    $('.saitatransparency2').backstretch("rlib/img/saitablack-bg.png");
    $('.saitatransparency3').backstretch("rlib/img/saitablack-bg.png");
    $('.saitatransparency4').backstretch("rlib/img/saitagrid.png");
    $('.saitacommunity').backstretch("rlib/img/community-bg.png");
    $('.saitacontact').backstretch("rlib/img/contact-bg.png");
    $('.saitapresshead').backstretch("rlib/img/map.jpg");
    $('.saitavegashead').backstretch("rlib/img/vegashead.jpg");
    $('.saitabetacontact').backstretch("rlib/img/beta-contact-bg.jpg");
    
       new WOW().init();

      gensaitapricechart('#test');
  
    $('#saitaTeamModal').on('show.bs.modal', function (event) {
       var button = $(event.relatedTarget); 
       var saitadev = button.data('saitadev'); 
       var saitateamtitle = capFirst(saitadev);	    
       let location = window.location.href;
	    
       switch(saitadev){
         /*case 'steve':
             var saitateamuser = "Rocket Crypto";
             var saitateambio = "I am a crypto content creator on YT. I have a degree in finance and have a financial background in audit and financial statement analysis. I am a member of the Saitama Dev team. I have a passion for video creation, editing, finance, crypto and to use those skills to better our world we live in. I am privileged to be able to contribute my share of skills and talents towards bringing awareness of SAITAMA to the masses.";
         break;*/		       
         case 'manpreet':
             var saitateamuser = "M Kay";
             var saitateambio = "An entrepreneur with over 15years of experience in developing and running successful businesses in Africa, India and the U.K. Passion for community based projects, drives me to work harder to achieve my goals.";
         break;
         case 'max':
             var saitateamuser = "MaxEquation or MaxSaitama";
             var saitateambio = "Max is a technologist leaning towards a polymath which has been exposed to many different capacities and roles from system administration, programming, software engineering, data scientist and serial entrepreneurial business owner over the course of a short 15 year career in different industries. He has worn many different hats over the years from individual contributions to managing large teams of engineers & projects spanning multiple continents while providing guidance, leadership and enthusiasm through global corporations and entrepreneurial ventures of his own. Has been around the cryptosphere for over a decade. <br><br> “Genius is 1% talent and 99% percent hard work…”  – Albert Einstein";
	     var saitatwitter  = 'https://twitter.com/maxequation';
         break;
         case 'russell':
             var saitateamuser = "Cryptoguru0101";
             var saitateambio = "MBA business management with emphasis in finance <br><br> Former Berkshire Hathaway subsidiary owner <br><br> 4 years working project development in crypto";
	     var saitatwitter  = 'https://twitter.com/Saitamaguru1';
         break;
         case 'nam':
             var saitateamuser = "Ntran1234";
             var saitateambio = "Born and raised in Vietnam, moved to the U.S seven years ago, Bachelor in Biochemistry, changing career to Sale/Marketing/Management with 3 years + experience. In charge of marketing wallet and marketing strategies.";
         break;
         case 'gabriel':
             var saitateamuser = "Gabmaru";
             var saitateambio = "Gabriel K is the father of two little boys, a Buddhist lay practitioner and Creative Director currently based in Rio de Janeiro, Brazil. With over 20 years of experience working in the Media and Advertising industries, he is now leading Branding and Content at Saitama Inu. Gabriel’s experience includes 12 years as Head of Creative at a major global media company, developing content platforms and campaigns for brands like Coca-Cola, ABSOLUT, Budweiser, Intel, Samsung, Ford, HBO and many others. When he is not brainstorming and creating at work, Gabriel is brainstorming and creating with his kids.";
         break;
         case 'aaron':
             var saitateamuser = "Elonmansour";
             var saitateambio = "• Double major in Supply Chain Management and Finance <br><br> • Business Analyst, implementation, quality assurance. <br><br>• Contract Manager for Oil and Gas. <br> Audits and ensures contracts are in line with corporate goals and objectives. Leads complex contract negotiations. <br> Saitama Creative video maker,  and marketing content creator";
         break;
         default:      
             var saitateamuser = "";
             var saitateambio = "";
       }	    

       var saitateaminfo = location+"rlib/img/team/"+saitadev+"-info.png";
       var saitateampic = location+"rlib/img/team/"+saitadev+"-lg.png";
	    

       var modal = $(this)
  
	    
      
       modal.find('#saitateamtitle').html(saitateamtitle);
       modal.find('#saitateamuser').html(saitateamuser);
       $('.protwittericon').attr('href', saitatwitter);	    
       if(saitadev == 'max'){
       $('#saitateambio').css({"line-height": "1.2", "font-size": "15px"});
       }
       modal.find('#saitateambio').html(saitateambio);
       document.getElementById('saitateaminfo').src=saitateaminfo;
       $('#saitateampic').css("background-image", "url('"+saitateampic+"')");
	    
       	    
    })	


       $("#saitasendmail").click(function(event){
	 var saitaname = $("#saitaname"). val();
	 var saitamail = $("#saitamail"). val();
         if (saitaname == '' || saitamail == ''){
	   $.toast({
              heading: 'Error',
              text: 'You have an empty required field please check your name or email.',
              showHideTransition: 'fade',
              icon: 'error'
           })
	 }else{
            let location = window.location.href; 		 
            var formdata = $('#saitadevcontact').serialize();
            $.post(location+"controller/saitamailcontroller.php",{"saitadata":{"saitacmd":"sendsaitamail","saitaformdata":formdata}})
            .done(function(data) {
                 var saitaresult = $.parseJSON(data);
		 if(saitaresult == 'success'){
	           $.toast({
                      heading: 'Success',
                      text: 'We have received your email someone from the team will get back to you shortly.<br><br> - Saitama Wolfpack',
                      showHideTransition: 'fade',
                      icon: 'success'
                 })       		   
		 }else  if(saitaresult == 'error'){
                    $.toast({
                      heading: 'Error',
                      text: 'We have encountered an error sending your email, please reach out to the dev team on telegram.<br><br> - Saitama Wolfpack',
                      showHideTransition: 'fade',
                      icon: 'success'
                    })
		 }
            });
	 }
       });

	$("#saitabetasend").click(function(event){

         var saitaname = $("#saitaname"). val();
         var saitamail = $("#saitamail"). val();
         var saitadevice = $("#saitadevice"). val();
         var saitaudid = $("#saitaudid"). val();
         var saitaage = $("#saitaage"). val();
         var saitalevel = $("#saitalevel"). val();
         var saitacareer = $("#saitacareer"). val();

         if (saitaname == '' || saitamail == '' || saitadevice == '' || saitaage == '' | saitalevel == '' || saitacareer == ''){
           $.toast({
              heading: 'Error',
              text: 'You have an empty field all are required, please check again.',
              showHideTransition: 'fade',
              icon: 'error'
           })
         }else{
            let location = window.location.href;
		 location = location.split('?')[0];
            var formdata = $('#saitabetasignup').serialize();
            $.post(location+"controller/saitabetasignup.php",{"saitadata":{"saitacmd":"saveabetasignup","saitaformdata":formdata}})
            .done(function(data) {
                 var saitaresult = $.parseJSON(data);
                 if(saitaresult == 'success'){
                   $.toast({
                      heading: 'Success',
                      text: 'We have received your submission! you will hear back from the team shortly.<br><br> - Saitama Wolfpack',
                      showHideTransition: 'fade',
                      icon: 'success'
                 });
		 $('#saitabetasignup').trigger("reset");	  
                 }else  if(saitaresult == 'error'){
                    $.toast({
                      heading: 'Error',
                      text: 'We have encountered an error sending your submission, please reach out to the dev team on telegram.<br><br> - Saitama Wolfpack',
                      showHideTransition: 'fade',
                      icon: 'error'
                    });
                 }
            });
         }
       });
});
