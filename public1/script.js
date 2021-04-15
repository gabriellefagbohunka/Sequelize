function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

async function getMeals(){
    console.log('data request');
    const diningRequest = await fetch('/api/wholeMeal');
    const diningData = await diningRequest.json();
    return diningData;
}

async function windowActions(){
    console.log('loaded window');
    const results = await getMeals();
    const meals = results.data;

    const mealArray = [1,2,3,4,5,6,7,8,9,10];
    const selectedMeals = mealArray.map((element) => {
        const random = getRandomIntInclusive(0, meals.length -1);
        return meals[random];
    });

    console.table(selectedMeals);
    const y = document.querySelector('.target');
    selectedMeals.forEach((z) => {
        const foodVar = document.createElement('tr')
        foodVar.innerHTML =`
        <td>${z.meal_id}</td>
        <td>${z.meal_name}</td>
        <td>${z.calories}</td>
        <td>${z.serving_size}</td>
        <td>${z.carbs}</td>
        <td>${z.sodium}</td>
        <td>${z.protein}</td>
        <td>${z.fat}</td>
        <td>${z.cholesterol}</td>
        `;
        
        y.append(foodVar);
    });

}
window.onload = windowActions;

window.onload = function () {

        const chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title:{
        text: "Food Macro Table"
        },
        axisX: {
        valueFormatString: ""
        },
        axisY: {
        prefix: ""
        },
        toolTip: {
        shared: true
        },
        legend:{
        cursor: "pointer",
        itemclick: toggleDataSeries
        },

        data: [{
            type: "stackedBar",
            name: "Meal Calories",
            showInLegend: "true",
            xValueFormatString: "",
            yValueFormatString: "",
            dataPoints: [
            { label:selectedMeals[0].meal_name, y:selectedMeals[0].calories },
            { label:selectedMeals[1].meal_name, y:selectedMeals[1].calories },
            { label:selectedMeals[2].meal_name, y:selectedMeals[2].calories },
            { label:selectedMeals[3].meal_name, y:selectedMeals[3].calories },
            { label:selectedMeals[4].meal_name, y:selectedMeals[4].calories },
            { label:selectedMeals[5].meal_name, y:selectedMeals[5].calories },
            { label:selectedMeals[6].meal_name, y:selectedMeals[6].calories },
            { label:selectedMeals[7].meal_name, y:selectedMeals[7].calories },
            { label:selectedMeals[8].meal_name, y:selectedMeals[8].calories },
            { label:selectedMeals[9].meal_name, y:selectedMeals[9].calories }
            ]
        }] 
    });  
chart.render();

function toggleDataSeries(e) {
    if(typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
        e.dataSeries.visible = false;
    }
    else {
        e.dataSeries.visible = true;
    }
    chart.render();
    }); 
    // } 
}

// window.onload = windowActions;