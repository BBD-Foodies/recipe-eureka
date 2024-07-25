const MEAL_TYPE_ENUMS = ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snack', 'Brunch'];
const MEASUREMENT_ENUMS = ['g', 'tbsp', 'tsp', 'ml', 'cup', 'whole', 'handful', 'pinch'];

const VALID_FIELDS = ['RecipeName', 'Categories', 'Allergens', 'DietaryRequirements', 'MealType', 'Ingredients', 'ServingSize', 'RequiredCookware', "currentPage", "perPage" ];

const GROUP_BY_FIELDS = ['MealType', 'Categories', 'Allergens', 'DietaryRequirements'];

const UPDATE_ALLOWED_FIELDS = ['RecipeName', 'Categories', 'Allergens', 'DietaryRequirements', 'MealType', 'Ingredients', 'ServingSize', 'RequiredCookware', 'Steps', 'PrepTimeMax', 'PrepTimeMin'];

module.exports = {
    UPDATE_ALLOWED_FIELDS,
    GROUP_BY_FIELDS,
    MEAL_TYPE_ENUMS,
    MEASUREMENT_ENUMS,
    VALID_FIELDS
};
