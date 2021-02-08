// function showDetails(cardID){
//     document.getElementById('foodDetailsDiv').style.display = 'grid';
//     const fetchLink ='https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + cardID
//     fetch(fetchLink)
//         .then(response => response.json())
//         .then(mealObj => {
//             // console.log(meal);
//             const CardDetails = document.getElementById('foodDetailsDiv');
//             const singleFoodName = mealObj.meals[0].strMeal;
//             const singleFoodImage = mealObj.meals[0].strMealThumb;
//             const singleCardInfo = `
//                                     <img src="${singleFoodImage}" alt="">
//                                     <h3>${singleFoodName}</h3>
//                                     <h3>Ingredients:-</h3>
//             `;
//             // adding the html in details showcase
//             const singleCardDetails = document.createElement('div');
//             singleCardDetails.className = 'cardClicked'
//             singleCardDetails.innerHTML = singleCardInfo;
            
//             //adding ingredient items 
//             const ul = document.createElement('ul')
//             singleCardDetails.appendChild(ul);
//             for (const property in mealObj.meals[0]) {
//                 let i = property.slice(0, 13);
//                 if (i === 'strIngredient' && 
//                 mealObj.meals[0][property] != ""
//                 ){
//                     const li = document.createElement('li');
//                     li.innerText = mealObj.meals[0][property];
//                     ul.appendChild(li);
//                 }
//             }
            
//             CardDetails.appendChild(singleCardDetails);
//         });
// }

function showDetails(cardID){
    document.getElementById('foodDetailsDiv').style.display = 'grid';
    const fetchLink ='https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + cardID
    fetch(fetchLink)
        .then(response => response.json())
        .then(mealObj => mealObj.meals.forEach(meal => {
                        // console.log(meal);
            const cardDetails = document.getElementById('foodDetailsDiv');
            const singleCardInfo = `<div class ='cardClicked'> 
                                    <img src="${meal.strMealThumb}" alt="">
                                    <h3>${meal.strMeal}</h3>
                                    <h3>Ingredients:-</h3>
                                    </div>
            `;
            const ul = document.createElement('ul');

            for (const property in meal) {
                if (property.slice(0, 13) === 'strIngredient' && 
                    meal[property] != "") {
                        const li = document.createElement('li');
                        li.innerText = meal[property];
                        ul.appendChild(li);
                }
            }
            // console.log(singleCardInfo);
            // cardDetails.innerHTML = cardDetails.innerHTML + singleCardInfo;
        }));
        //     {
        //     // console.log(meal);
        //     const CardDetails = document.getElementById('foodDetailsDiv');
        //     const singleFoodName = mealObj.meals[0].strMeal;
        //     const singleFoodImage = mealObj.meals[0].strMealThumb;
        //     const singleCardInfo = `<div class = 'cardClicked'> 
        //                             <img src="${singleFoodImage}" alt="">
        //                             <h3>${singleFoodName}</h3>
        //                             <h3>Ingredients:-</h3>
        //                             <ul class ='ingredients'></ul>
        //                             </div>
        //     `;
        //     CardDetails.innerHTML = CardDetails.innerHTML + singleCardInfo;
        //     // adding the html in details showcase
        //     // const singleCardDetails = document.createElement('div');
        //     // singleCardDetails.className = 'cardClicked'
        //     // singleCardDetails.innerHTML = singleCardInfo;
            
        //     //adding ingredient items 
        //     // const ul = document.getElementsByClassName('ingredients');
        //     // document.getElementsByClassName('cardClicked').appendChild(ul);
        //     for (const property in mealObj.meals[0]) {
        //         let i = property.slice(0, 13);
        //         if (i === 'strIngredient' && 
        //         mealObj.meals[0][property] != ""
        //         ){
        //             const ul = document.getElementsByClassName('ingredients');
        //             // const li = document.createElement('li');
        //             // // li.innerText = mealObj.meals[0][property];
        //             // li.innerText = 'umar'
        //             // // ul.innerHTML = ul.innerHTML + li;
        //             // ul.appendChild(li);
        //             // // console.log(ul, li);

        //             const li = document.createElement('li');
        //             li.innerText = mealObj.meals[0][property];
        //             // console.log(li);
        //             // ul.innerHTML = ul.innerHTML + li
        //             console.log(ul);
        //         }
        //     }
            
        //     // CardDetails.appendChild(singleCardDetails);
        // });
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
        // card template html
        const singleCardInfo = `    <div onclick='showDetails(${meal.idMeal})' class="card">
                                    <img src="${meal.strMealThumb}" alt="">
                                    <h3>${meal.strMeal}</h3>
                                    </div>
            `;
        // adding the card in showcase section
        cardsDiv.innerHTML = cardsDiv.innerHTML + singleCardInfo;
    })
    );
});