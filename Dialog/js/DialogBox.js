function createDialog()
{
	var dialogDiv =	document.createElement("DIV");
	var dialogTop =	document.createElement("DIV");
	var dialogContent =	document.createElement("DIV");
	var dialogBottom =	document.createElement("DIV");
	var okButton = document.createElement("BUTTON");
	var cancelButton = document.createElement("BUTTON");

	dialogDiv.id="DIALOGDIV";
	dialogDiv.style.width="550px";
	dialogDiv.style.background="#f0efee";
	dialogDiv.style.display="none";
	dialogDiv.style.boxShadow="5px 6px #888888";

	dialogTop.id="DIALOGTOP";
	dialogTop.style.height="40px";
	dialogTop.style.background="#3b3f45";

	dialogContent.id="DIALOGCONTENT";
	dialogContent.style.minHeight="200px";
	dialogContent.style.maxHeight="300px";
	dialogContent.style.overflowX="hidden";
	dialogContent.style.overflowY="scroll";
	dialogContent.style.textOverflow="ellipsis"
	dialogContent.style.padding="5px";

	dialogBottom.id="DIALOGBOTTOM";
	dialogBottom.style.padding="5px";

	okButton.appendChild(document.createTextNode("Ok"));
	okButton.style.marginLeft="180px";
	
	cancelButton.appendChild(document.createTextNode("Cancel"));
	cancelButton.style.marginLeft="10px";
	cancelButton.setAttribute("onclick","closeDialog()");
	
	dialogBottom.appendChild(okButton);
	dialogBottom.appendChild(cancelButton);
	
	dialogDiv.appendChild(dialogTop);
	dialogDiv.appendChild(dialogContent);
	dialogDiv.appendChild(dialogBottom);

	return dialogDiv;
}

function showDialog(message)
{
	var myDialog = document.getElementById("DIALOGDIV");
	if(!myDialog)
	{
		var centerTag = document.createElement("CENTER");
		myDialog = createDialog();
		centerTag.appendChild(myDialog);
		document.body.append(centerTag);
	}
	var content = document.getElementById("DIALOGCONTENT");
	content.appendChild(document.createTextNode(message));
	myDialog.style.display="inline-block";
}

function closeDialog()
{
	var myDialog = document.getElementById("DIALOGDIV");
	if(myDialog)
	{
		var content = document.getElementById("DIALOGCONTENT");
		content.innerHTML="";
		myDialog.style.display="none";
	}
}