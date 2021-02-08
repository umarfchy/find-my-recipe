function showDetails(param){
    document.getElementById('foodDetailsDiv').style.display = 'grid';
    const fetchLink ='https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + param
    fetch(fetchLink)
        .then(response => response.json())
        .then(mealObj => {
            // console.log(meal);
            const CardDetails = document.getElementById('foodDetailsDiv');
            const singleFoodName = mealObj.meals[0].strMeal;
            const singleFoodImage = mealObj.meals[0].strMealThumb;
            const singleCardInfo = `
                                    <img src="${singleFoodImage}" alt="">
                                    <h3>${singleFoodName}</h3>
                                    <h3>Ingredients:-</h3>
            `;
            // adding the html in details showcase
            const singleCardDetails = document.createElement('div');
            singleCardDetails.className = 'cardClicked'
            singleCardDetails.innerHTML = singleCardInfo;
            
            //adding ingredient items 
            const ul = document.createElement('ul')
            singleCardDetails.appendChild(ul);
            for (const property in mealObj.meals[0]) {
                let i = property.slice(0, 13);
                if (i === 'strIngredient' && 
                mealObj.meals[0][property] != ""
                ){
                    const li = document.createElement('li');
                    li.innerText = mealObj.meals[0][property];
                    ul.appendChild(li);
                }
            }
            
            CardDetails.appendChild(singleCardDetails);
        });
}



// Response on button
document.getElementById('btnClicked').addEventListener('click', ()=> {
    const searchedItem = document.getElementById('searchedItem').value;
    // const searchedItem = 'a'; 
    const fetchLink = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchedItem;

    fetch(fetchLink)
    .then(response => response.json())
    .then(data => data.meals.forEach(meal => {
        const cardsDiv = document.getElementById('cardsDiv');

        const singleCardInfo = `    <div onclick='showDetails(${meal.idMeal})' class="card">
                                    <img src="${meal.strMealThumb}" alt="">
                                    <h3>${meal.strMeal}</h3>
                                    </div>
            `;
        cardsDiv.innerHTML = cardsDiv.innerHTML + singleCardInfo;
    })
    );
});