// var userCount = (localStorage.getItem('userCount')===null)?0:(localStorage.getItem('userCount'));
// var memberCount = (localStorage.getItem('memberCount')===null)?0:(localStorage.getItem('memberCount'));
// var totalMembers = (localStorage.getItem('totalMembers')===null)?0:(localStorage.getItem('totalMembers'));

$(document).ready(function() {
	// window.localStorage.clear();
	// console.log(count);
	alert("aloo");
	initializePage();
})

function initializePage() {

	// var newDivHead = document.createElement("div");
	// for debugging
	//newDivHead.innerHTML = '<h2>Total # members in the world: '+userCount+'</h2>'+'<div class="jumbotron">';
	// newDivHead.innerHTML = '<h2>Total Group members: '+memberCount+'</h2>'+'<div class="jumbotron">';
	// document.getElementById("myGroup").appendChild(newDivHead);

	// for(var i = 0; i < count; i++){
	// 	if(localStorage.getItem("myGroup"+i) !== null){
	// 		var newDiv = document.createElement("div");
	// 		newDiv.innerHTML = '<h2 class=member'+i+'>'+'{{groups['+i+'].name}}'+'</h2>'+
	// 			'<a class="btn btn-primary pull-right removeBtn'+i+'" onclick="removeMember(this)" id="removeBtn'+i+'">'+
	//                             '<i class="fa fa-pencil"></i>'+
	//                             'Remove'+ 
	//                         '</a>';
	// 		document.getElementById("myGroup").appendChild(newDiv);
	// 	}
	// }

	// var endDiv = document.createElement("div");
	// endDiv.innerHTML = "</div>";
	// document.getElementById("myGroup").appendChild(endDiv);


	buttonStuff();

}


function removeMember(elem) {

	$(".member"+elem.id[9]).remove();
	$(".removeBtn"+elem.id[9]).remove();
	// localStorage.removeItem("myGroup"+elem.id[9]);
	// memberCount--;
	// localStorage.setItem('memberCount', memberCount);
	history.go(0);


}

function buttonStuff() {


	var modal = document.getElementById('myModal');


	// Get the button that opens the modal
	var btn = document.getElementById("myBtn");

	var addMember = document.getElementById("addMember");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("cancelBtn")[0];

	// When the user clicks on the button, open the modal 
	btn.onclick = function() {
	    modal.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	    modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}




	// addMember.onclick = function createDiv() {
	 	//history.go(0);
	// 	//check if valid and show error if not
	// 	//check if user exists
	// 		//add user to group
	// 	//else error
	// 	var matchName = "";
	// 	var matchEmail = "";

	// 	var username = document.getElementById("addName").value;
 //    	var email = document.getElementById("addEmail").value;

 //    	for(var i = 0; i < userCount; i++){
	//       console.log(localStorage.getItem("userName"+i));
	//       console.log(localStorage.getItem("userEmail"+i));
	//       if(localStorage.getItem("userName"+i) == username)
	//         matchName = username;
	//       if(localStorage.getItem("userEmail"+i) == email)
	//         matchEmail = email;
	//     }
	//     if ( matchName == "" || matchEmail == ""){
	//       alert ("User or Email invalid or not found");
	//       return false;
	//     } 
	//     else{
	//       //add to div and save
	//       localStorage.setItem("myGroup"+memberCount, username);
	//       memberCount++;
	//       totalMembers++;
	//       localStorage.setItem("memberCount", memberCount);
	//       localStorage.setItem("totalMembers", totalMembers);
	// 	  history.go(0); //refresh page
	//     }

	// }


}

function groupAlert() {
	// if(error.responseText == 'groupAlert')
	alert("invalid user or email");
}

