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

async function tableData(){
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
        const foodVar = document.createElement('tr');
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
        },
        {
            type: "stackedBar",
            name: "Serving Size",
            showInLegend: "true",
            xValueFormatString: "",
            yValueFormatString: "",
            dataPoints: [
                { label: selectedMeals[0].meal_name, y: selectedMeals[0].serving_size},
                { label: selectedMeals[1].meal_name, y: selectedMeals[1].serving_size },
                { label: selectedMeals[2].meal_name, y: selectedMeals[2].serving_size },
                { label: selectedMeals[3].meal_name, y: selectedMeals[3].serving_size },
                { label: selectedMeals[4].meal_name, y: selectedMeals[4].serving_size },
                { label: selectedMeals[5].meal_name, y: selectedMeals[5].serving_size },
                { label: selectedMeals[6].meal_name, y: selectedMeals[6].serving_size },
                { label: selectedMeals[7].meal_name, y: selectedMeals[7].serving_size },
                { label: selectedMeals[8].meal_name, y: selectedMeals[8].serving_size },
                { label: selectedMeals[9].meal_name, y: selectedMeals[9].serving_size }
            ] 
        },
        {
            type: "stackedBar",
            name: "Carbs",
            showInLegend: "true",
            xValueFormatString: "",
            yValueFormatString: "",
            dataPoints: [
                { label: selectedMeals[0].meal_name, y: selectedMeals[0].carbs },
                { label: selectedMeals[1].meal_name, y: selectedMeals[1].carbs },
                { label: selectedMeals[2].meal_name, y: selectedMeals[2].carbs },
                { label: selectedMeals[3].meal_name, y: selectedMeals[3].carbs },
                { label: selectedMeals[4].meal_name, y: selectedMeals[4].carbs },
                { label: selectedMeals[5].meal_name, y: selectedMeals[5].carbs },
                { label: selectedMeals[6].meal_name, y: selectedMeals[6].carbs },
                { label: selectedMeals[7].meal_name, y: selectedMeals[7].carbs },
                { label: selectedMeals[8].meal_name, y: selectedMeals[8].carbs },
                { label: selectedMeals[9].meal_name, y: selectedMeals[9].carbs }
            ] 
        },
        {
            type: "stackedBar",
            name: "Sodium",
            showInLegend: "true",
            xValueFormatString: "",
            yValueFormatString: "",
            dataPoints: [
                { label: selectedMeals[0].meal_name, y: selectedMeals[0].sodium },
                { label: selectedMeals[1].meal_name, y: selectedMeals[1].sodium },
                { label: selectedMeals[2].meal_name, y: selectedMeals[2].sodium },
                { label: selectedMeals[3].meal_name, y: selectedMeals[3].sodium },
                { label: selectedMeals[4].meal_name, y: selectedMeals[4].sodium },
                { label: selectedMeals[5].meal_name, y: selectedMeals[5].sodium },
                { label: selectedMeals[6].meal_name, y: selectedMeals[6].sodium },
                { label: selectedMeals[7].meal_name, y: selectedMeals[7].sodium },
                { label: selectedMeals[8].meal_name, y: selectedMeals[8].sodium },
                { label: selectedMeals[9].meal_name, y: selectedMeals[9].sodium }

            ] 
        },
        {
            type: "stackedBar",
            name: "Protein",
            showInLegend: "true",
            xValueFormatString: "",
            yValueFormatString: "",
            dataPoints: [
                { label: selectedMeals[0].meal_name, y: selectedMeals[0].protein},
                { label: selectedMeals[1].meal_name, y: selectedMeals[1].protein },
                { label: selectedMeals[2].meal_name, y: selectedMeals[2].protein },
                { label: selectedMeals[3].meal_name, y: selectedMeals[3].protein },
                { label: selectedMeals[4].meal_name, y: selectedMeals[4].protein },
                { label: selectedMeals[5].meal_name, y: selectedMeals[5].protein },
                { label: selectedMeals[6].meal_name, y: selectedMeals[6].protein },
                { label: selectedMeals[7].meal_name, y: selectedMeals[7].protein },
                { label: selectedMeals[8].meal_name, y: selectedMeals[8].protein },
                { label: selectedMeals[9].meal_name, y: selectedMeals[9].protein }

            ] 
        },
        {
            type: "stackedBar",
            name: "Fat",
            showInLegend: "true",
            xValueFormatString: "",
            yValueFormatString: "",
            dataPoints: [
                { label: selectedMeals[0].meal_name, y: selectedMeals[0].fat},
                { label: selectedMeals[1].meal_name, y: selectedMeals[1].fat },
                { label: selectedMeals[2].meal_name, y: selectedMeals[2].fat },
                { label: selectedMeals[3].meal_name, y: selectedMeals[3].fat },
                { label: selectedMeals[4].meal_name, y: selectedMeals[4].fat },
                { label: selectedMeals[5].meal_name, y: selectedMeals[5].fat },
                { label: selectedMeals[6].meal_name, y: selectedMeals[6].fat },
                { label: selectedMeals[7].meal_name, y: selectedMeals[7].fat },
                { label: selectedMeals[8].meal_name, y: selectedMeals[8].fat },
                { label: selectedMeals[9].meal_name, y: selectedMeals[9].fat }
            ] 
        },
        {
            type: "stackedBar",
            name: "Cholesterol",
            showInLegend: "true",
            xValueFormatString: "",
            yValueFormatString: "",
            dataPoints: [
                { label: selectedMeals[0].meal_name, y: selectedMeals[0].cholesterol},
                { label: selectedMeals[1].meal_name, y: selectedMeals[1].cholesterol },
                { label: selectedMeals[2].meal_name, y: selectedMeals[2].cholesterol },
                { label: selectedMeals[3].meal_name, y: selectedMeals[3].cholesterol },
                { label: selectedMeals[4].meal_name, y: selectedMeals[4].cholesterol },
                { label: selectedMeals[5].meal_name, y: selectedMeals[5].cholesterol },
                { label: selectedMeals[6].meal_name, y: selectedMeals[6].cholesterol },
                { label: selectedMeals[7].meal_name, y: selectedMeals[7].cholesterol },
                { label: selectedMeals[8].meal_name, y: selectedMeals[8].cholesterol },
                { label: selectedMeals[9].meal_name, y: selectedMeals[9].cholesterol }

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
    }

});
    return selectedMeals;
}
window.onload = tableData