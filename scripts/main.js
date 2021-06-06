// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}
	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices() {

	var restrict;

	if ((document.getElementById("LactoseIntolerant").checked) && (document.getElementById("NutAllergy").checked) && (document.getElementById("Organic").checked)) {
		restrict="LactoseIntolerantNutAllergyOrganic";
	} else if ((document.getElementById("LactoseIntolerant").checked) && (document.getElementById("Organic").checked)) {
		restrict="LacstoseIntolerantOrganic";
	} else if ((document.getElementById("NutAllergy").checked) && (document.getElementById("Organic").checked)) {
		restrict="NutAllergyOrganic";
	} else if ((document.getElementById("LactoseIntolerant").checked)) {
		restrict="LactoseIntolerant";
	} else if ((document.getElementById("NutAllergy").checked)){
		restrict="NutAllergy";
	} else if ((document.getElementById("Organic").checked)) {
		restrict="Organic"
	} else if ((document.getElementById("None").checked)) {
		restrict="None"
	}

	console.log(restrict);
	var optionArray = restrictListProducts(restrict); //RESTRICTED LIST

	var s2 = document.getElementById("displayProduct");
	s2.innerHTML="";

	var img = new Image(100);
	
		
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i];
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		s2.appendChild(checkbox);
		
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName));
		s2.appendChild(label);

		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));    
	}
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is $" + getTotalPrice(chosenProducts)));
		
}