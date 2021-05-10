import React, { useState } from "react";
import styled from "styled-components";

export default function Home() {
  const ingredientArray = [
    ["", 0],
    ["Agar", 2.4],
    ["Almond Paste", 5.396],
    ["Almonds, Sliced", 2.958],
    ["Almonds, Slivered", 1.792],
    ["Almonds, Whole", 2.375],
    ["Apples, Dried and Diced", 1.771],
    ["Apples, Peeled and Sliced", 2.354],
    ["Apricots, Dried and Diced", 2.667],
    ["Baking Powder", 4.0],
    ["Baking Soda", 6.0],
    ["Bananas", 4.729],
    ["Barley", 4.438],
    ["Barley Flakes", 1.917],
    ["Bell Peppers, Diced", 2.958],
    ["Berries", 2.958],
    ["Blueberries, Dried", 3.25],
    ["Blueberries, Fresh", 3.542],
    ["Bread Crumbs, White", 2.333],
    ["Bread Crumbs, Panko", 1.042],
    ["Buckwheat", 3.542],
    ["Bulgur", 3.167],
    ["Butter", 4.708],
    ["Buttermilk", 4.667],
    ["Caraway Seeds", 3.0],
    ["Carrots, Grated", 2.063],
    ["Carrots, Puréed", 5.333],
    ["Carrots, Diced", 2.958],
    ["Cashews, Chopped", 2.354],
    ["Cashews, Whole", 2.354],
    ["Celery, Diced", 2.958],
    ["Cheese, Grated", 2.354],
    ["Cheese, Feta", 2.354],
    ["Cheese, Ricotta", 4.729],
    ["Cheese, Parmesan (Grated)", 2.083],
    ["Cherries, Dried", 2.958],
    ["Cherries, Frozen", 2.354],
    ["Chives", 0.875],
    ["Chocolate Chips", 3.542],
    ["Citrus Peel, Candied", 3.542],
    ["Cocoa Powder", 1.75],
    ["Coconut, (Shredded/Sweetened)", 1.771],
    ["Coconut, (Shredded/Unsweetened)", 2.354],
    ["Coconut, Large Flakes", 1.25],
    ["Cookie Crumbs", 1.771],
    ["Corn Syrup", 6.5],
    ["Cornmeal, Coarse", 2.875],
    ["Cornmeal, Cereal Grade", 3.25],
    ["Cornstarch", 2.333],
    ["Cranberries, Dried", 2.375],
    ["Cranberries, (Fresh/Frozen)", 2.063],
    ["Cream", 4.729],
    ["Cream Cheese", 4.729],
    ["Currants", 2.958],
    ["Dates, Chopped", 3.104],
    ["Egg (57g per)", 6.333],
    ["Egg Whites (30g per)", 5],
    ["Egg Whites, Dry", 1.833],
    ["Egg Yolks (18g per)", 6],
    ["Espresso Powder", 2.333],
    ["Figs, (Dried/Chopped)", 3.104],
    ["Flax Meal", 2.083],
    ["Flaxseed", 2.917],
    ["Flour, All-Purpose", 2.5],
    ["Flour, Almond", 2],
    ["Flour, Bread", 2.5],
    ["Flour, Cake", 2.5],
    ["Garlic, Per Head", 113.0],
    ["Garlic, Minced", 4.667],
    ["Garlic, (Peeled/Sliced)", 3.104],
    ["Ginger, Crystallized", 4.0],
    ["Ginger, Fresh, Sliced", 4.75],
    ["Graham Cracker Crumbs, Boxed", 2.063],
    ["Graham Crackers, Crushed", 2.958],
    ["Grape Nuts", 2.375],
    ["Hazelnut Spread", 6.667],
    ["Hazelnuts, Whole", 2.958],
    ["Honey", 7.083],
    ["Jam", 6.438],
    ["Lard", 4.708],
    ["Leeks, Diced", 1.917],
    ["Macadamia Nuts, Whole", 3.104],
    ["Malt Syrup", 7.167],
    ["Malted Milk Powder", 2.917],
    ["Maple Sugar", 3.25],
    ["Maple Syrup", 6.5],
    ["Marshmallow Cream", 1.771],
    ["Marshmallow Fluff", 2.667],
    ["Marshmallows, Mini", 0.896],
    ["Mayonnaise", 4.708],
    ["Milk, Evaporated", 5.333],
    ["Milk, Whole", 4.729],
    ["Milk, Dry", 1.75],
    ["Milk, Sweetened Condensed", 6.5],
    ["Millet", 4.292],
    ["Molasses", 7.083],
    ["Mushrooms, Sliced", 1.625],
    ["Oat Bran", 2.208],
    ["Oats, Rolled", 2.063],
    ["Oats, Quick Cooking", 1.854],
    ["Oats, (Steel Cut/Raw)", 4.125],
    ["Oats, (Steel Cut/Cooked)", 5.313],
    ["Oil", 4.125],
    ["Olives, Sliced", 2.958],
    ["Onion, Diced", 2.958],
    ["Peaches, (Peeled/Diced)", 3.542],
    ["Peanut Butter", 5.625],
    ["Peanuts", 2.958],
    ["Pears, (Peeled/Diced)", 3.396],
    ["Pecans, Chopped", 2.354],
    ["Persimmon Pulp", 5.021],
    ["Pesto", 4.667],
    ["Pine Nuts", 2.958],
    ["Pineapple, Diced", 3.542],
    ["Pistachio Paste", 6.5],
    ["Pistachios", 2.5],
    ["Polenta", 3.396],
    ["Popcorn, Popped", 0.109],
    ["Poppy Seeds", 3.0],
    ["Potatoes, Mashed", 4.438],
    ["Praline Paste", 6.5],
    ["Pumpkin, Canned", 4.729],
    ["Quinoa, Dry", 3.688],
    ["Quinoa, Cooked", 3.833],
    ["Raisins, Loose", 3.104],
    ["Raisins, Packed", 3.542],
    ["Raspberries", 2.5],
    ["Rhubarb, Diced", 2.5],
    ["Rice, Cooked", 3.542],
    ["Rice, Dry", 4.125],
    ["Rice Krispies", 0.583],
    ["Rye Flakes", 1.333],
    ["Salt, Kosher (Diamond)", 2.667],
    ["Salt, Kosher (Morton's)", 5.333],
    ["Salt, Iodized", 6],
    ["Sesame Seeds", 2.958],
    ["Shallots, Sliced", 3.25],
    ["Shortening", 3.833],
    ["Sour Cream", 4.729],
    ["Splenda", 0.521],
    ["Strawberries, Sliced", 3.479],
    ["Sugar, Granulated", 4.167],
    ["Sugar, Powdered", 2.365],
    ["Sugar, Brown", 4.438],
    ["Sugar, Demerara", 4.583],
    ["Sundried Tomatoes, Dry", 3.542],
    ["Sunflower Seeds", 2.917],
    ["Tahini Paste", 5.333],
    ["Tapioca", 3.5],
    ["Toffee Bits", 3.25],
    ["Toffee Chunks", 3.25],
    ["Walnuts, Whole", 2.667],
    ["Walnuts, Chopped", 2.354],
    ["Water", 4.656],
    ["Wheat Berries", 3.833],
    ["Wheat bran", 1.333],
    ["Wheat Flakes", 2.333],
    ["Wheat germ", 2.333],
    ["Xanthan Gum", 3.5],
    ["Yeast, Instant", 3],
    ["Yogurt", 4.729],
    ["Zucchini, Shredded", 3.333],
  ];
  const unitArray = [
    // [Measure, teaspoons in that measurement]
    ["Teaspoons", 1],
    ["Tablespoons", 3],
    ["Cups", 48],
    ["Pints", 96],
    ["Quarts", 192],
    ["Gallons", 384],
  ];
  const initialConversion = {
    quantity: "",
    units: 1,
    ingredients: 0,
  };
  const [conversion, setConversion] = useState(initialConversion);
  const [display, setDisplay] = useState("0");
  let { units, quantity, ingredients } = conversion;

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisplay((quantity * units * ingredientArray[ingredients][1]).toFixed(0));
  };

  const handleChange = (e) => {
    setConversion({ ...conversion, [e.target.name]: e.target.value });
    setDisplay("0");
  };

  return (
    <MainDisplay>
      <h1>Volume to Grams</h1>

      <SelectContainer onSubmit={handleSubmit}>
        <HowMuch>
          <input
            type="number"
            name="quantity"
            value={quantity}
            min="0"
            step=".01"
            placeholder="0"
            autoComplete="off"
            onChange={handleChange}
          />
          <select name="units" value={units} onChange={handleChange}>
            {unitArray.map((unit, idx) => (
              <option key={idx} value={unit[1]}>
                {unit[0]}
              </option>
            ))}
          </select>
        </HowMuch>
        <h2>of</h2>
        <select name="ingredients" value={ingredients} onChange={handleChange}>
          {ingredientArray.map((ing, idx) => (
            <option value={idx} key={idx}>
              {ing[0]}
            </option>
          ))}
        </select>
        <button type="submit">Weigh It</button>

        <h2>{display} grams</h2>
        <button
          type="clear"
          onClick={() => {
            setConversion(initialConversion);
            setDisplay("0");
          }}>
          Clear
        </button>
      </SelectContainer>
    </MainDisplay>
  );
}

const MainDisplay = styled.div`
  display: flex;
  background: #89ddff;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  h1 {
    max-width: 300px;
  }
`;

const SelectContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-around;
  color: #cbe7ff;
  border: 1px #0f2433 solid;
  padding: 20px;
  background: #3d5366;

  select {
    width: 70%;
  }

  button {
    margin-top: 10px;
    background: #4db2ff;
    font-size: 1.3rem;
    font-weight: 600;
    box-shadow: none;
    border-color: black;
    width: 50%;
    color: #0f2433;
  }
  h2 {
    margin: 4px 0;
  }
`;
const HowMuch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  input {
    width: 75px;
    margin-right: 10px;
  }
`;
