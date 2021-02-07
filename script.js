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
            singleCard.id = 'card-no-' + i;
            singleCard.onclick = showDetails;
            singleCard.innerHTML = singleCardInfo;
            cardsDiv.appendChild(singleCard);
            
        }
    }
})


function showDetails(){
    document.getElementById('foodDetailsDiv').style.display = 'block';
    console.log(this.id);
}


// testing purpose data
// fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=tom')
// .then(response => response.json())
// .then(data => console.log(data));


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


