function NewRecipe(){
    return(
        <>
            <h1>New Recipe</h1>

            <form>
                <label for='recipe-name'>Recipe Name:</label>
                <input
                type="text"
                id="recipe-name"
                />
                {/* <input type="image"/> */}
                <br/>
                <br/>
                <label for='recipe-desc'>Recipe Description: </label>
                <textarea 
                id="recipe-desc"
                />
                <br />
                <br/>
                <label for='recipe-inst'>Recipe Instructions: </label>
                <textarea 
                type="text"
                id="recipe-inst"
                />
                <br/>
                <br/>
                <h2>Allergens</h2>
                <div className="allergens">
                    <label for="milk">Milk</label>
                    <input 
                    type="checkbox"
                    id="milk"
                    />
                    <label for="eggs">Egg</label>
                    <input 
                    type="checkbox"
                    id="eggs"
                    />
                    <label for="fish">Fish</label>
                    <input 
                    type="checkbox"
                    id="fish"
                    />
                    <label for="shlfish">Shelfish</label>
                    <input 
                    type="checkbox"
                    id="shlfish"
                    />
                    <label for="tnut">Tree Nut</label>
                    <input 
                    type="checkbox"
                    id="tnut"
                    />
                    <label for="pnut">Peanut</label>
                    <input 
                    type="checkbox"
                    id="pnut"
                    />
                    <label for="gluten">Gluten</label>
                    <input 
                    type="checkbox"
                    id="gluten"
                    />
                    <label for="soy">Soybeans</label>
                    <input 
                    type="checkbox"
                    id="soy"
                    />
               </div>
               <br/>
               <h2>Diets</h2>
               <div className="diets">
                    <label for="veggie">Vegetarian</label>
                    <input 
                    type="checkbox"
                    id="veggie"
                    />
                    <label for="vegan">Vegan</label>
                    <input 
                    type="checkbox"
                    id="vegan"
                    />
                    <label for="Keto">Keto</label>
                    <input 
                    type="checkbox"
                    id="keto"
                    />
                    <label for="lowsd">Low Sodium</label>
                    <input 
                    type="checkbox"
                    id="lowsd"
                    />
                    <label for="cardiac">Cardiac</label>
                    <input 
                    type="checkbox"
                    id="cardiac"
                    />
                    <label for="halal">Halal</label>
                    <input 
                    type="checkbox"
                    id="halal"
                    />
                    <label for="kosher">Kosher</label>
                    <input 
                    type="checkbox"
                    id="kosher"
                    />
                    <label for="highfib">High Fiber</label>
                    <input 
                    type="checkbox"
                    id="highfib"
                    />
                </div>
                <br/>
                <h2>Ingredients</h2>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input 
                                    type="text"
                                    />
                                </td>
                                <td>
                                    <input 
                                    type="text"
                                    />
                                </td>
                            </tr>
                        </tbody>
                        <button>Add Ingredient</button>
                    </table>
                </div>
                <br/>
                <br/>
                <button type='submit'>Submit Recipe</button>
            </form>
        </>
    )
}

export default NewRecipe;