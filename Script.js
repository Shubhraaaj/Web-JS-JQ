function fortuneTeller(){
	var children = [0,1,2,3,4];
	var partner = ["Rita", "Gita", "Sita", "Bita", "Mita"];
	var location = ["Kolkata", "Dhanbad", "Ranchi", "Hyderabad", "Mumbai"];
	var job = ["Entrepreneur", "Singer", "Dancer", "Businessman", "Actor"];
	var fortune = "You will be a " + job[randomNumber()] + " in " +
	location[randomNumber()] + ", and married to " + partner[randomNumber()] +
	" with " + children[randomNumber()] + " Children."; 
	return fortune;
}

function randomNumber()
{
	return Math.floor(Math.random()*5);
}

function ageCalculator()
{
	var birthyear = 1995;
	var futureyear = 2025;
	var age = futureyear - birthyear;
	var result = "I will be either " + age + " or " + (age-1) +
	 " in " + futureyear;
	return result;
}

function lifetimeSupply()
{
	var currentAge = 22;
	var maximumAge = 80;
	var amountPerDay = 10000;
	var totalAmount = ((maximumAge - currentAge) * 365) *
	amountPerDay;
	return "You will need Rs." + totalAmount + ".00 to last you until" +
	" the ripe old age of " + maximumAge;
}

function geometrizer()
{
	var radius = 5.2;
	return "Area: " + (2 * 3.14 * radius).toFixed(2) + " | Circumference: " +
	(3.14 * radius * radius).toFixed(2);
}

function temperature()
{
	var celcius = 38.0;
	var fahrenheit = 98.0;
	var c2f = (celcius*9)/5 + 32;
	var f2c = ((fahrenheit - 32) * 5)/9;
	var celText = celcius + 
	" Degrees celcius in fahrenheit will be " + c2f.toFixed(1) +
	" Degrees fahrenheit.";
	var fahText = fahrenheit + 
	" Degrees fahrenheit in celcius will be " + f2c.toFixed(1) +
	" Degrees celcius.";
	return celText + " | " + fahText;
}

function recipeCard()
{
	var recipe = {
		title: "Mole", 
		servings: "2", 
		ingredients: ["cinnamon", "cumin", "cocoa"]
	};
	var result = "<li>" + recipe.title + "</li>" +
	"<li>Serves: " + recipe.servings + "</li>" +
	"<li>Ingredients:</li>";
	for(var i = 0; i < recipe.ingredients.length; i++)
		result += "<li>" + recipe.ingredients[i] + "</li>";
	return result;
}

function readingList()
{
	var books = [
		{
			title: "The Alchemist",
			author: "Paulo Coelho",
			alreadyRead: true
		},
		{
			title: "The Monk who sold his Ferrari",
			author: "Rohit Sharma",
			alreadyRead: false
		},
		{
			title: "Two States",
			author: "Chetan Bhagat",
			alreadyRead: true
		},
		{
			title: "The Great Gatsby",
			author: "F.Scott Fitzagerald",
			alreadyRead: false
		},
		{
			title: "The Wings of Fire",
			author: "APJ Abdul Kalam",
			alreadyRead: false
		}
	];
	var result = "";
	for(var i = 0; i<books.length; i++)
	{
		if(books[i].alreadyRead==true)
		result += "<li>You already read \"" + books[i].title + "\" by " +
				books[i].author + "</li>";
	else
		result += "<li>You still need to read \"" + books[i].title + "\" by " +
				books[i].author  + "</li>";		
	}/*
	result += books.forEach(status());*/
	return result;
}

function status(value, index, array)
{
	if(array[index].alreadyRead==true)
		return "You already read \"" + array[index].title + "\" by " +
				array[index].author;
	else
		return "You still need to read \"" + array[index].title + "\" by " +
				array[index].author;
}


function googleYahoo()
{
	var img = document.getElementById();
	img.width = 400;
	img.src = 'https://www.logostage.com/logos/yahoo.GIF';
	var button = document.getElementById();
	button.innerHTML = "Yahoo";
}

function bodyFont()
{
	document.getElementsByTagName("body").style.font-family = 
	"Arial, sans-serif";

}

function googleYahoo(){
	var googleImage = document.getElementById('hplogo');
    googleImage.width = 400;
	googleImage.src = 'https://sportzwiki.com/wp-content/uploads/2016/12/Yahoo.jpg';
	googleImage.srcset = 'https://sportzwiki.com/wp-content/uploads/2016/12/Yahoo.jpg';
	var button = document.getElementsByName('btnK');
	//button.innerHTML = 'Yahoo';
	button[0].value = 'Yahoo';

}