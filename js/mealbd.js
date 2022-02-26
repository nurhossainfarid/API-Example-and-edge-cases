const searchMeal = () => {
    const searchInput = document.getElementById(`search-input`);
    const searchText = searchInput.value;
    // search input empty 
    const invalid = document.getElementById('invalid-text');
    if (searchInput.value == 0) {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerText = 'Sorry, this types of food not found';
        invalid.appendChild(div)
    } else {
        // load meal api
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
        searchInput.value = '';
    }
}

const displayMeals = meals => {
    const searchResult = document.getElementById('search-result');
    // searchResult.innerHTML = '';
    searchResult.textContent = '';
    if (meals == -1) {
        debugger;
        console.log('hello');
    } else {
        meals.forEach(meal => {
            // console.log(meal);
            const div = document.createElement('div');
            div.classList.add('col-4');
            div.innerHTML = `
            <div onclick='detailMeals(${meal.idMeal})' class="card">
                <img height='250px' src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
                </div>
            </div>
            `;
            searchResult.appendChild(div);
        });
    }
}

const detailMeals = mealID => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealsDetail(data))
}

const displayMealsDetail = meal => {
    console.log(meal.meals[0]);
    const singleMealDetail = document.getElementById('single-meal-details');
    singleMealDetail.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img height='250px' src="${meal.meals[0].strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.meals[0].strMeal}</h5>
        <p class="card-text">${meal.meals[0].strInstructions.slice(0, 250)}</p>
        <a href="${meal.meals[0].strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    singleMealDetail.appendChild(div);
}