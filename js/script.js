let desk=0;
let mob=0;



function clickdesktop(){

	if (desk==0) {
		document.getElementById("show_hide").style.display= "flex";
		document.getElementById("compdesk").style.backgroundColor="hsl(212, 23%, 69%)";
		document.getElementById("activodesk").style.display="block";
		document.getElementById("desactivadodesk").style.display="none";
		desk=1;
	}
	else{
		document.getElementById("show_hide").style.display= "none";
		document.getElementById("compdesk").style.backgroundColor="hsl(210, 46%, 95%)";
		document.getElementById("activodesk").style.display="none";
		document.getElementById("desactivadodesk").style.display="block";

		desk=0;
	}
	

}

function clickmobile(){

	if (mob==0) {
		document.getElementById("mobile").style.display= "flex";
		document.getElementById("avatarmobile").style.display= "none";
		document.getElementById("contemob").style.backgroundColor="hsl(217, 19%, 35%)";
		document.getElementById("compmobile").style.backgroundColor="hsl(212, 23%, 69%)";
		document.getElementById("activomob").style.display="block";
		document.getElementById("desactivamob").style.display="none";
		mob=1;
		
	}
	else{
		document.getElementById("mobile").style.display= "none";
		document.getElementById("avatarmobile").style.display= "flex";
		document.getElementById("contemob").style.backgroundColor="white";
		document.getElementById("compmobile").style.backgroundColor="hsl(210, 46%, 95%)";
		document.getElementById("activomob").style.display="none";
		document.getElementById("desactivamob").style.display="block";
		mob=0;
	}


}