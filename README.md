# Recipe Finder

## Project Overview

Recipe Finder is a web application that fetches meal data from an external API and displays it to users. The application allows users to search for recipes and view detailed information about each meal, including ingredients, cooking instructions, and cuisine type. Users can also reveal images of the meals by clicking on the displayed recipe card.

## Features

- Fetches meal data from an external API.
- Displays meal information including name, ingredients, instructions, and cuisine type.
- Allows users to search for meals using a search box.
- Reveals meal images upon clicking a button on the recipe card.

## Code Breakdown

### Fetching Data

The application fetches data from a given API endpoint using the `fetch` function. The fetched data is then converted to JSON format and processed to display the meals.

### Search Functionality
 Implemented using an input event listener on the search box. It filters the displayed meals based on the user's input.

### Displaying Meals
 The `displayMeal` function is responsible for creating and displaying meal cards. Each card includes the meal name, ingredients, instructions, and cuisine type. The card also includes a button to reveal the meal image.

## Future Improvements
- Add a loading indicator while fetching data.
- Improve the styling and layout of the meal cards.
- Add error handling for the fetch request.
- Implement pagination for a large number of meals.
- Enhance the search functionality to include filtering by ingredients or cuisine.
- Add images to each meal Card.
- Add videos on how to cook the meals.
- Make the page more responsive.

## License
This project is licensed under the MIT License.

## Live Link
https://recipe-generator-neon.vercel.app/