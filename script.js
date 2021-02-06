// cardsDiv => all cards are here
//appendchild will be done over here

// https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=pin')
.then(response => response.json())
.then(data => foodName(data));

// Following section will be used for template literal
const foodName = inputArray => {
    const cardsDiv = document.getElementById('cardsDiv')
    inputArray.meals.forEach(meal => {
        //getting the name and image of the food in html
        const singleFoodName = meal.strMeal;
        const singleFoodImage = meal.strMealThumb;
        const singleCardInfo = `
                                <img src="${singleFoodImage}" alt="">
                                <h3>${singleFoodName}</h3>
        `

        // adding the html in cards showcase
        const singleCard = document.createElement('div');
        singleCard.className = 'card';
        singleCard.innerHTML = singleCardInfo;
        cardsDiv.appendChild(singleCard);
    });
}

// const foodName = inputArray => {
//     const cardsDiv = document.getElementById('cardsDiv')
//     inputArray.meals.forEach(meal => {
//         //making single card
//         const singleFoodName = meal.strMeal;
//         const singleFoodImage = meal.strMealThumb;    
//         const singleCard = `
//                                 <img src="${singleFoodImage}" alt="">
//                                 <h3>${singleFoodName}</h3>
//         `;
//         //adding card image and name in a div 
//         const singleCardDiv = document.createElement('div');
//         singleCardDiv.className = 'card';
//         // singleCardDiv.innerHTML = singleCard;
//         cardsDiv.appendChild(singleCardDiv);
//     });
// }

// testing purpose data
// fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=tom')
// .then(response => response.json())
// .then(data => console.log(data));


    // const singleFoodName = inputArray.meals[0].strMeal;
    // const singleFoodImage = inputArray.meals[0].strMealThumb;
    // const cardsDiv = document.getElementById('cardsDiv')
    // const singleCard = `<div class="card">
    //                         <img src="${singleFoodImage}" alt="">
    //                         <h3>${singleFoodName}</h3>
    //                     </div>
    // `
    // cardsDiv.innerHTML = singleCard;