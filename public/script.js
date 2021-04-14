async function diningHalls() {
    const apif = await fetch('/api/dining');
    const x = await apif.json();
    const arrayd = x.data;
    const y = document.querySelector('.target'); 
    arrayd.forEach((z) => {
        const foodVar = document.createElement('tr')
        foodVar.innerHTML =`
            <td>${z.hall_id}</td>
            <td>${z.hall_name}</td>
            <td>${z.hall_address}</td>
        `;
        y.append(foodVar)
    });
}
window.onload = diningHalls();

