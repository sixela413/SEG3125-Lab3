// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Peaches $1.99 ❀",
		lactose: true,
		nutAllergy: true,
		organic: true,
		price: 1.99
	},
	{
		name: "Whipped Cream $1.99",
		lactose: false,
		nutAllergy: true,
		price: 1.99
	},
	{
		name: "Apples $2.99 ❀",
		lactose: true,
		nutAllergy: true,
		organic: true,
		price: 2.99
	},
	{
		name: "Grapes $2.99 ❀",
		lactose: true,
		nutAllergy: true,
		organic: true,
		price: 2.99
	},
	{
		name: "Red Bell Peppers $2.99 ❀",
		lactose: true,
		nutAllergy: true,
		organic: true,
		price: 2.99
	},
	{
		name: "Honey $3.99",
		lactose: true,
		nutAllergy:false,
		organic: false,
		price: 3.99
	},
	{
		name: "Butter $3.99",
		lactose: false,
		nutAllergy: true,
		organic: false,
		price: 3.99
	},
	{
		name: "Chocolate Chip Cookies $4.50",
		lactose: true,
		nutAllergy:false,
		organic: false,
		price: 4.50
	},
	{
		name: "Yogurt $4.50",
		lactose: false,
		nutAllergy: true,
		organic: false,
		price: 4.50
	},
	{
		name: "Trail Mix $4.99",
		lactose: true,
		nutAllergy:false,
		organic: false,
		price: 4.99
	},
	{
		name: "Avocados $4.99 ❀",
		lactose: true,
		nutAllergy: true,
		organic: true,
		price: 4.99
	},
	{
		name: "Reese's Peanut Butter Cups $5.00",
		lactose: true,
		nutAllergy:false,
		organic: false,
		price: 5.00
	},
	{
		name: "Vanilla Ice Cream $6.00",
		lactose: false,
		nutAllergy: true,
		organic: false,
		price: 6.00
	},
	{
		name: "Organic Honey $6.99 ❀",
		lactose: true,
		nutAllergy:false,
		organic: true,
		price: 6.99
	},
	{
		name: "Organic Yogurt $7.99 ❀",
		lactose: true,
		nutAllergy:false,
		organic: true,
		price: 7.99
	},
	{
		name: "Organic Butter $7.99 ❀",
		lactose: true,
		nutAllergy:false,
		organic: true,
		price: 7.99
	},
	{
		name: "Organic Vanilla Ice Cream $9.99 ❀",
		lactose: true,
		nutAllergy:false,
		organic: true,
		price: 9.99
	},
];
	


// given restrictions provided, make a reduced list of products ❀
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(restriction) {	
	let product_names = [];

	for (let i=0; i<products.length; i+=1) {
		if ((restriction == "LactoseIntolerantNutAllergy") && (products[i].lactose == true && products[i].nutAllergy == true)){
			product_names.push(products[i].name);
		}
		else if ((restriction == "LacstoseIntolerantOrganic") && (products[i].lactose == true && products[i].organic == true)){
			product_names.push(products[i].name);
		}
		else if ((restriction == "NutAllergyOrganic") && (products[i].nutAllergy == true && products[i].organic == true)){
			product_names.push(products[i].name);
		}
		else if ((restriction == "LactoseIntolerantNutAllergyOrganic") && (products[i].lactose == true && products[i].nutAllergy == true && products[i].organic == true)){
			product_names.push(products[i].name);
		}
		else if ((restriction == "LactoseIntolerant") && (products[i].lactose == true)){
			product_names.push(products[i].name);
		}
		else if ((restriction == "NutAllergy") && (products[i].nutAllergy == true)){
			product_names.push(products[i].name);
		}
		else if ((restriction == "Organic") && (products[i].organic == true)){
			product_names.push(products[i].name);
		}
		else if (restriction == "None"){
			product_names.push(products[i].name);
		}	
	
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}