// cardsDiv => all cards are here
//appendchild will be done over here

// https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

document.getElementById('btnClicked').addEventListener('click', ()=> {
    // document.querySelectorAll('.card').forEach(card => {
    //     card.style.display = none;
    // })

    const searchedItem = document.getElementById('searchedItem').value;
    const fetchLink = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchedItem;

    fetch(fetchLink)
    .then(response => response.json())
    .then(data => foodName(data));

    // Following section will be used for template literal
    const foodName = apiObject => {
        const cardsDiv = document.getElementById('cardsDiv')
        for (let i = 0; i < apiObject.meals.length; i++) {
            const meal = apiObject.meals[i];
            //getting the name and image of the food in html
            const singleFoodName = meal.strMeal;
            const singleFoodImage = meal.strMealThumb;
            const singleCardInfo = `
                                    <img src="${singleFoodImage}" alt="">
                                    <h3>${singleFoodName}</h3>
            `;
            // adding the html in cards showcase
            const singleCard = document.createElement('div');
            singleCard.className = 'card';
            singleCard.id = meal.idMeal;
            singleCard.onclick = showDetails;
            singleCard.innerHTML = singleCardInfo;
            cardsDiv.appendChild(singleCard);
            
        }
    }
})


function showDetails(){
    document.getElementById('foodDetailsDiv').style.display = 'grid';
    const fetchLink ='https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + this.id
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
            `;
            // adding the html in cards showcase
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






// testing purpose data
fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')
.then(response => response.json())
.then(data => console.log(data));


// document.getElementById('btnClicked').addEventListener('click', ()=> {
//     const searchedItem = document.getElementById('searchedItem').value;
//     const fetchLink = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchedItem;

//     fetch(fetchLink)
//     .then(response => response.json())
//     .then(data => foodName(data));

//     // Following section will be used for template literal
//     const foodName = inputArray => {
//         const cardsDiv = document.getElementById('cardsDiv')
//         inputArray.meals.forEach(meal => {
//             //getting the name and image of the food in html
//             const singleFoodName = meal.strMeal;
//             const singleFoodImage = meal.strMealThumb;
//             const singleCardInfo = `
//                                     <img src="${singleFoodImage}" alt="">
//                                     <h3>${singleFoodName}</h3>
//             `
//             // adding the html in cards showcase
//             const singleCard = document.createElement('div');
//             singleCard.className = 'card';
//             singleCard.innerHTML = singleCardInfo;
//             cardsDiv.appendChild(singleCard);
//         });
//     }
// })


