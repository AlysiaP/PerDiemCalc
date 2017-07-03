/*
 *  Author: Alysia Petti
 *  Date: 2017-07-02
 *  Description: Simple financial calculator to compute allocated amount for meals. 
 */

//Meals Per day
function mealsPerDay(perDiemRate)
{
	return perDiemRate - 5;
}

//Less than 20 hrs travel
function mealsPercentage(perDiemRate)
{
	return mealsPerDay(perDiemRate)*0.75;
}

//total of meals minus incidentals
function totalMealsTwenty(perDiemRate)
{
	return mealsPercentage(perDiemRate) + 5;
}

//CONFERENCE MEALS for 20 hours or less

//1 meal
function oneMealConference(perDiemRate)
{
	return mealsPerDay(perDiemRate)*0.75;
}

//total 1 meal provided
function totalOneMealConference(perDiemRate)
{
	return oneMealConference(perDiemRate) + 5;
}

//2 meals
function twoMealsConference(perDiemRate)
{
	return mealsPerDay(perDiemRate)*0.35;
}

//total 2 meals provided
function totalTwoMealsConference(perDiemRate)
{
	return twoMealsConference(perDiemRate) + 5;
}

//CONFERENCE MEALS for 10 hours or less

//1 meal
function oneMeal(perDiemRate)
{
	return mealsPercentage(perDiemRate)*0.75;
}

//total for 1 meal
function totalOneMeal(perDiemRate)
{
	return oneMeal(perDiemRate) + 5;
}

//2 meals
function twoMeals(perDiemRate)
{
	return mealsPercentage(perDiemRate)*0.35;
}

//total for 2 meals
function totalTwoMeals(perDiemRate)
{
	return twoMeals(perDiemRate) + 5;
}



//get values for each variable being called in the above functions
function getRates()
{
	var perDiemRate = document.getElementsByName("PerDiemRate")[0].value;
	document.getElementsByName("MealPerDay")[0].value = mealsPerDay(perDiemRate);
	document.getElementsByName("MealsPercentage")[0].value = mealsPercentage(perDiemRate);
	document.getElementsByName("LessThanTwenty")[0].value = totalMealsTwenty(perDiemRate);
	document.getElementsByName("OneMealConference")[0].value = oneMealConference(perDiemRate);
	document.getElementsByName("TotalOneMealConference")[0].value = totalOneMealConference(perDiemRate);
	document.getElementsByName("TwoMealsConference")[0].value = twoMealsConference(perDiemRate);
	document.getElementsByName("TotalTwoMealsConference")[0].value = totalTwoMealsConference(perDiemRate);
	document.getElementsByName("OneMeal")[0].value = Math.round(oneMeal(perDiemRate)*100)/100;
	document.getElementsByName("TotalOneMeal")[0].value = Math.round(totalOneMeal(perDiemRate)*100)/100;
	document.getElementsByName("TwoMeals")[0].value = Math.round(twoMeals(perDiemRate)*100)/100;
	document.getElementsByName("TotalTwoMeals")[0].value = Math.round(totalTwoMeals(perDiemRate)*100)/100;
	
}

//reset function for all values
function resetFields()
{
	document.getElementsByName("PerDiemRate")[0].value = 0;
	document.getElementsByName("MealPerDay")[0].value = 0;
	document.getElementsByName("MealsPercentage")[0].value = 0;
	document.getElementsByName("LessThanTwenty")[0].value = 0;
	document.getElementsByName("OneMealConference")[0].value = 0;
	document.getElementsByName("TotalOneMealConference")[0].value = 0;
	document.getElementsByName("TwoMealsConference")[0].value = 0;
	document.getElementsByName("TotalTwoMealsConference")[0].value = 0;
	document.getElementsByName("OneMeal")[0].value = 0;
	document.getElementsByName("TotalOneMeal")[0].value = 0;
	document.getElementsByName("TwoMeals")[0].value = 0;
	document.getElementsByName("TotalTwoMeals")[0].value = 0;
	
}
