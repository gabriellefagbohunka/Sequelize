// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
//   }

// async function getMeals(){
//     console.log('data request');
//     const diningRequest = await fetch('/api/wholeMeal');
//     const diningData = await diningRequest.json();
//     return diningData;
// }

// async function windowActions(){
//     console.log('loaded window');
//     const results = await getMeals();
//     const meals = results.data;

//     const mealArray = [1,2,3,4,5,6,7,8,9,10];
//     const selectedMeals = mealArray.map((element) => {
//         const random = getRandomIntInclusive(0, meals.length -1);
//         return meals[random];
//     });

// console.table(selectedMeals);
// const y = document.querySelector('.target');
// arrayd.forEach((z) => {
//     const foodVar = document.createElement('tr')
//     foodVar.innerHTML =`
//         <td>${z.meal_id}<td/>
//         <td>${z.meal_name}<td/>
//         <td>${z.hall_address}<td/>`
//         <td>${z.hall_address}<td/>;
//         y.append(foodVar);

//         const chart = new CanvasJS.Chart("chartContainer", {
// animationEnabled: true,
// title:{
// text: "Food Macro Table"
// },
// axisX: {
// valueFormatString: ""
// },
// axisY: {
// prefix: ""
// },
// toolTip: {
// shared: true
// },
// legend:{
// cursor: "pointer",
// itemclick: toggleDataSeries
// },
// data: [{
// type: "stackedBar",
// name: "Meal ID",
// showInLegend: "true",
// xValueFormatString: "",
// yValueFormatString: "",
// dataPoints: [
// { x:selectedMeals[0].meal_name, y:selectedMeals[0].meal_id },
// { x:selectedMeals[1].meal_name, y:selectedMeals[1].meal_id },
// { x:selectedMeals[2].meal_name, y:selectedMeals[2].meal_id},
// { x:selectedMeals[3].meal_name, y:selectedMeals[3].meal_id },
// { x:selectedMeals[4].meal_name, y:selectedMeals[4].meal_id },
// { x:selectedMeals[5].meal_name, y:selectedMeals[5].meal_id},
// { x:selectedMeals[6].meal_name, y:selectedMeals[6].meal_id },
// { x:selectedMeals[7].meal_name, y:selectedMeals[7].meal_id},
// { x:selectedMeals[8].meal_name, y:selectedMeals[8].meal_id},
// { x:selectedMeals[9].meal_name, y:selectedMeals[9].meal_id}
// ]
// },
// {
//     type: "stackedBar",
//     name: "Meal Name",
//     showInLegend: "true",
//     xValueFormatString: "",
//     yValueFormatString: "",
//     dataPoints: [
//     { x:selectedMeals[0].meal_name, y:selectedMeals[0].meal_name },
//     { x:selectedMeals[1].meal_name, y:selectedMeals[1].meal_name },
//     { x:selectedMeals[2].meal_name, y:selectedMeals[2].meal_name},
//     { x:selectedMeals[3].meal_name, y:selectedMeals[3].meal_name },
//     { x:selectedMeals[4].meal_name, y:selectedMeals[4].meal_name },
//     { x:selectedMeals[5].meal_name, y:selectedMeals[5].meal_name},
//     { x:selectedMeals[6].meal_name, y:selectedMeals[6].meal_name },
//     { x:selectedMeals[7].meal_name, y:selectedMeals[7].meal_name},
//     { x:selectedMeals[8].meal_name, y:selectedMeals[8].meal_name},
//     { x:selectedMeals[9].meal_name, y:selectedMeals[9].meal_name}
//     ]
// },
// {
//     type: "stackedBar",
//     name: "Meal Calories",
//     showInLegend: "true",
//     xValueFormatString: "",
//     yValueFormatString: "",
//     dataPoints: [
//     { x:selectedMeals[0].meal_name, y:selectedMeals[0].meal_calories },
//     { x:selectedMeals[1].meal_name, y:selectedMeals[1].meal_calories },
//     { x:selectedMeals[2].meal_name, y:selectedMeals[2].meal_calories},
//     { x:selectedMeals[3].meal_name, y:selectedMeals[3].meal_calories },
//     { x:selectedMeals[4].meal_name, y:selectedMeals[4].meal_calories },
//     { x:selectedMeals[5].meal_name, y:selectedMeals[5].meal_calories},
//     { x:selectedMeals[6].meal_name, y:selectedMeals[6].meal_calories },
//     { x:selectedMeals[7].meal_name, y:selectedMeals[7].meal_calories},
//     { x:selectedMeals[8].meal_name, y:selectedMeals[8].meal_calories},
//     { x:selectedMeals[9].meal_name, y:selectedMeals[9].meal_calories}
//     ]
// },
// {
// type: "stackedBar",
// name: "Dessert",
// showInLegend: "true",
// xValueFormatString: "DD, MMM",
// yValueFormatString: "$#,##0",
// dataPoints: [
// { x: new Date(2017, 0, 30), y: 61 },
// { x: new Date(2017, 0, 31), y: 55 },
// { x: new Date(2017, 1, 1), y: 61 },
// { x: new Date(2017, 1, 2), y: 75 },
// { x: new Date(2017, 1, 3), y: 80 },
// { x: new Date(2017, 1, 4), y: 85 },
// { x: new Date(2017, 1, 5), y: 105 }
// ]
// },
// {
// type: "stackedBar",
// name: "Takeaway",
// showInLegend: "true",
// xValueFormatString: "DD, MMM",
// yValueFormatString: "$#,##0",
// dataPoints: [
// { x: new Date(2017, 0, 30), y: 52 },
// { x: new Date(2017, 0, 31), y: 55 },
// { x: new Date(2017, 1, 1), y: 20 },
// { x: new Date(2017, 1, 2), y: 35 },
// { x: new Date(2017, 1, 3), y: 30 },
// { x: new Date(2017, 1, 4), y: 45 },
// { x: new Date(2017, 1, 5), y: 25 }
// ]
// }]
// });
// chart.render();

// function toggleDataSeries(e) {
// if(typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
// e.dataSeries.visible = false;
// }
// else {
// e.dataSeries.visible = true;
// }
// chart.render();
// }

// }
// });

// window.onload = windowActions()