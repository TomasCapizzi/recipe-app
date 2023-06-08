export interface Meal {
    idMeal: number
    strMeal: string
    strMealThumb: string
    strInstructions: string
}

export interface MealContext {
    isFav: (meal: Meal, id?: number) => boolean
    addFav: (meal: Meal) => void
    favMeals: Meal[]
    removeFav: (id: number)=> void
    getFavs: () => void
}

export interface Category {
    strCategory: string
}