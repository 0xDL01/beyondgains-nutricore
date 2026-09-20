import {

  foods,

  ALL_DIETS

} from "./foods.js";


const $ =
  id =>
    document.getElementById(id);



/* ======================================================
   PLAN
====================================================== */

const plan =
  JSON.parse(

    localStorage.getItem(
      "nutricorePlan"
    ) || "{}"

  );


const targets = {

  calories:
    plan.calories || 2000,

  protein:
    plan.protein || 120,

  carbs:
    plan.carbs || 220,

  fat:
    plan.fat || 65,

  fibre:
    plan.fibre || 28

};


$("targetCalories").textContent =
  targets.calories;


$("targetProtein").textContent =
  `${targets.protein} g`;


$("targetCarbs").textContent =
  `${targets.carbs} g`;


$("targetFat").textContent =
  `${targets.fat} g`;


$("targetFibre").textContent =
  `${targets.fibre} g`;



const dietNames = {

  vegetarian:
    "Vegetarian",

  eggitarian:
    "Vegetarian + Eggs",

  nonveg:
    "Non-Vegetarian",

  vegan:
    "Vegan"

};


$("dietTypeDisplay").textContent =

  plan.diet

    ? `${dietNames[plan.diet] || plan.diet} mode — search the complete library and build the exact serving you eat.`

    : "Search the complete library and build the exact serving you eat.";



/* ======================================================
   BUILDERS + MEALS
====================================================== */

const builders = [

  {
    id:
      "builder-roti",

    name:
      "Roti",

    category:
      "Roti & Breads",

    brand:
      null,

    type:
      "builder",

    description:
      "Choose size and exact ghee/oil amount",

    diet:
      ALL_DIETS,

    unit:
      "piece",

    builderType:
      "roti",

    nutritionStatus:
      "builder",

    options: {

      size: [
        "Small",
        "Medium",
        "Large"
      ],

      fatType: [
        "None",
        "Ghee",
        "Oil"
      ],

      fatAmount: [
        0,
        2.5,
        5,
        7.5,
        10,
        15
      ]

    }

  },


  {
    id:
      "builder-coffee",

    name:
      "Coffee Builder",

    category:
      "Coffee & Tea",

    brand:
      null,

    type:
      "builder",

    description:
      "Americano, espresso, latte, cappuccino, flat white, mocha and more",

    diet:
      ALL_DIETS,

    unit:
      "cup",

    builderType:
      "coffee",

    nutritionStatus:
      "builder",

    options: {

      coffeeType: [
        "Americano",
        "Espresso",
        "Doppio",
        "Latte",
        "Cappuccino",
        "Flat White",
        "Cortado",
        "Macchiato",
        "Mocha"
      ],

      size: [
        "Small",
        "Medium",
        "Large"
      ],

      milk: [
        "None",
        "Whole Milk",
        "Low Fat Milk",
        "Soy Milk",
        "Oat Milk"
      ],

      sugar: [
        0,
        1,
        2,
        3
      ],

      syrup: [
        "None",
        "Vanilla",
        "Caramel",
        "Hazelnut"
      ]

    }

  },


  {
    id:
      "builder-tea",

    name:
      "Tea / Chai Builder",

    category:
      "Coffee & Tea",

    brand:
      null,

    type:
      "builder",

    description:
      "Black tea, green tea or milk chai with adjustable sugar",

    diet:
      ALL_DIETS,

    unit:
      "cup",

    builderType:
      "tea",

    nutritionStatus:
      "builder",

    options: {

      teaType: [
        "Black Tea",
        "Green Tea",
        "Milk Tea",
        "Masala Chai"
      ],

      milk: [
        "None",
        "Whole Milk",
        "Low Fat Milk",
        "Soy Milk",
        "Oat Milk"
      ],

      sugar: [
        0,
        1,
        2,
        3
      ],

      size: [
        "Small",
        "Medium",
        "Large"
      ]

    }

  },


  {
    id:
      "builder-dosa",

    name:
      "Dosa",

    category:
      "Indian Meals",

    brand:
      null,

    type:
      "builder",

    description:
      "Plain, masala or paneer dosa with adjustable oil",

    diet:
      ALL_DIETS,

    unit:
      "piece",

    builderType:
      "dosa",

    nutritionStatus:
      "builder",

    options: {

      dosaType: [
        "Plain",
        "Masala",
        "Paneer"
      ],

      oil: [
        0,
        2.5,
        5,
        10
      ]

    }

  },


  {
    id:
      "builder-paratha",

    name:
      "Paratha",

    category:
      "Indian Meals",

    brand:
      null,

    type:
      "builder",

    description:
      "Plain, aloo or paneer paratha with exact added fat",

    diet: [
      "vegetarian",
      "eggitarian",
      "nonveg"
    ],

    unit:
      "piece",

    builderType:
      "paratha",

    nutritionStatus:
      "builder",

    options: {

      parathaType: [
        "Plain",
        "Aloo",
        "Paneer"
      ],

      fatType: [
        "None",
        "Ghee",
        "Oil"
      ],

      fatAmount: [
        0,
        2.5,
        5,
        10
      ]

    }

  },


  {
    id:
      "poha",

    name:
      "Poha",

    category:
      "Indian Meals",

    brand:
      null,

    type:
      "meal",

    description:
      "Generic cooked bowl",

    diet:
      ALL_DIETS,

    unit:
      "bowl",

    nutritionStatus:
      "reference-generic",

    basis:
      "1 bowl",

    nutrition: {

      calories:
        250,

      proteinG:
        6,

      carbsG:
        42,

      fatG:
        7,

      fibreG:
        4

    }

  },


  {
    id:
      "upma",

    name:
      "Upma",

    category:
      "Indian Meals",

    brand:
      null,

    type:
      "meal",

    description:
      "Generic cooked bowl",

    diet: [
      "vegetarian",
      "eggitarian",
      "nonveg"
    ],

    unit:
      "bowl",

    nutritionStatus:
      "reference-generic",

    basis:
      "1 bowl",

    nutrition: {

      calories:
        230,

      proteinG:
        6,

      carbsG:
        36,

      fatG:
        7,

      fibreG:
        4

    }

  },


  {
    id:
      "idli",

    name:
      "Idli",

    category:
      "Indian Meals",

    brand:
      null,

    type:
      "meal",

    description:
      "Medium idli",

    diet:
      ALL_DIETS,

    unit:
      "piece",

    nutritionStatus:
      "reference-generic",

    basis:
      "1 piece",

    nutrition: {

      calories:
        58,

      proteinG:
        2,

      carbsG:
        12,

      fatG:
        0.4,

      fibreG:
        0.8

    }

  },


  {
    id:
      "vada-pav",

    name:
      "Vada Pav",

    category:
      "Indian Meals",

    brand:
      null,

    type:
      "meal",

    description:
      "Generic serving",

    diet:
      ALL_DIETS,

    unit:
      "piece",

    nutritionStatus:
      "reference-generic",

    basis:
      "1 piece",

    nutrition: {

      calories:
        300,

      proteinG:
        7,

      carbsG:
        47,

      fatG:
        10,

      fibreG:
        4

    }

  },


  {
    id:
      "pav-bhaji",

    name:
      "Pav Bhaji",

    category:
      "Indian Meals",

    brand:
      null,

    type:
      "meal",

    description:
      "2 pav + bhaji, generic serving",

    diet: [
      "vegetarian",
      "eggitarian",
      "nonveg"
    ],

    unit:
      "plate",

    nutritionStatus:
      "reference-generic",

    basis:
      "1 plate",

    nutrition: {

      calories:
        430,

      proteinG:
        11,

      carbsG:
        65,

      fatG:
        14,

      fibreG:
        8

    }

  },


  {
    id:
      "misal-pav",

    name:
      "Misal Pav",

    category:
      "Indian Meals",

    brand:
      null,

    type:
      "meal",

    description:
      "Generic serving",

    diet:
      ALL_DIETS,

    unit:
      "plate",

    nutritionStatus:
      "reference-generic",

    basis:
      "1 plate",

    nutrition: {

      calories:
        480,

      proteinG:
        17,

      carbsG:
        67,

      fatG:
        16,

      fibreG:
        11

    }

  }

];



/* ======================================================
   ALL FOODS
====================================================== */

const allFoods = [

  ...builders,

  ...foods

];



/* ======================================================
   STATE
====================================================== */

let activeCategory =
  "All";


let meal =
  JSON.parse(

    localStorage.getItem(
      "nutricoreMealV5"
    ) || "[]"

  );


let activeFood =
  null;


let quantity =
  "1";


let unit =
  "g";


let selections =
  {};



/* ======================================================
   AVAILABLE FOOD
====================================================== */

function availableFoods() {

  if (!plan.diet) {

    return allFoods;

  }


  return allFoods.filter(

    food =>

      (
        food.diet ||
        ALL_DIETS
      )
      .includes(
        plan.diet
      )

  );

}



/* ======================================================
   STORAGE
====================================================== */

function saveMeal() {

  localStorage.setItem(

    "nutricoreMealV5",

    JSON.stringify(meal)

  );

}



/* ======================================================
   STATUS BADGE
====================================================== */

function statusBadge(food) {

  if (
    food.nutritionStatus ===
    "verified-label"
  ) {

    return `

      <span class="mini-badge verified">
        verified label
      </span>

    `;

  }


  if (
    food.nutritionStatus ===
    "label-required"
  ) {

    return `

      <span class="mini-badge pending">
        label verification required
      </span>

    `;

  }


  if (
    food.nutritionStatus ===
    "reference-generic"
  ) {

    return `

      <span class="mini-badge verified">
        reference value
      </span>

    `;

  }


  return "";

}



/* ======================================================
   FILTERS
====================================================== */

function renderFilters() {

  const categories = [

    "All",

    ...new Set(

      availableFoods()
        .map(
          food =>
            food.category
        )

    )

  ];


  $("filterRow").innerHTML =

    categories.map(

      category => `

        <button
          class="
            filter-button
            ${
              category ===
              activeCategory
                ? "active"
                : ""
            }
          "
          data-filter="${category}"
        >

          ${category}

        </button>

      `

    ).join("");


  document
    .querySelectorAll(
      "[data-filter]"
    )
    .forEach(

      button => {

        button.onclick =
          () => {

            activeCategory =
              button.dataset.filter;


            renderFilters();

            renderFoods();

          };

      }

    );

}



/* ======================================================
   QUICK FOODS
====================================================== */

function renderQuick() {

  const ids = [

    "builder-roti",

    "builder-coffee",

    "builder-tea",

    "chicken-breast-raw",

    "egg-whole",

    "paneer-full-fat",

    "moong-dal-cooked",

    "moong-sprouts",

    "amul-taaza",

    "amul-masti-dahi",

    "rohu",

    "banana"

  ];


  const list =
    availableFoods()
      .filter(
        food =>
          ids.includes(
            food.id
          )
      );


  $("quickFoodGrid").innerHTML =

    list.map(

      food => `

        <button
          class="quick-food-card"
          data-open-food="${food.id}"
        >

          <strong>

            ${
              food.brand
                ? `${food.brand} · `
                : ""
            }

            ${food.name}

          </strong>

          <span>
            ${food.description || ""}
          </span>

          <span class="quick-plus">
            +
          </span>

        </button>

      `

    ).join("");


  bindOpen();

}



/* ======================================================
   FOOD LIST
====================================================== */

function renderFoods() {

  const query =

    $("foodSearch")
      .value
      .trim()
      .toLowerCase();


  let list =
    availableFoods();


  if (
    activeCategory !==
    "All"
  ) {

    list =
      list.filter(

        food =>
          food.category ===
          activeCategory

      );

  }


  if (query) {

    list =
      list.filter(

        food =>

          [

            food.name,

            food.brand,

            food.category,

            food.subcategory,

            food.description

          ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase()
          .includes(query)

      );

  }


  $("foodCount").textContent =
    `${list.length} foods`;


  $("foodList").innerHTML =

    list.map(

      food => {

        const basis =

          food.basis ||

          (
            food.unit === "ml"
              ? "100ml"

              : food.unit === "piece"
                ? "1 piece"

                : "100g"
          );


        const macro =

          food.nutrition

            ? `

              ${Math.round(
                food.nutrition.calories || 0
              )} kcal

              ·

              ${(
                food.nutrition.proteinG ||
                0
              ).toFixed(1)}g protein

              / ${basis}

            `

            : "Exact nutrition not yet verified";


        return `

          <div class="food-item">

            <div class="food-name">

              <strong>

                ${
                  food.brand
                    ? `${food.brand} — `
                    : ""
                }

                ${food.name}

              </strong>


              <span>

                ${food.description || ""}

                ·

                ${macro}

              </span>


              <div class="food-badges">

                ${statusBadge(food)}

                ${
                  food.type === "branded"

                    ? `

                      <span class="mini-badge pune">
                        Pune: check-live
                      </span>

                    `

                    : ""
                }

              </div>

            </div>


            <button
              class="food-add"
              data-open-food="${food.id}"
              aria-label="Add ${food.name}"
            >
              +
            </button>

          </div>

        `;

      }

    ).join("");


  bindOpen();

}



/* ======================================================
   OPEN BUTTONS
====================================================== */

function bindOpen() {

  document
    .querySelectorAll(
      "[data-open-food]"
    )
    .forEach(

      button => {

        button.onclick =
          () => {

            openCalculator(
              button.dataset.openFood
            );

          };

      }

    );

}



/* ======================================================
   OPEN CALCULATOR
====================================================== */

function openCalculator(id) {

  activeFood =
    allFoods.find(
      food =>
        food.id === id
    );


  if (!activeFood) {
    return;
  }


  selections = {};


  if (
    activeFood.options
  ) {

    Object.entries(
      activeFood.options
    )
    .forEach(

      ([key, values]) => {

        selections[key] =
          values[0];

      }

    );

  }


  if (
    activeFood.builderType ===
    "coffee" ||

    activeFood.builderType ===
    "tea"
  ) {

    unit =
      "cup";

    quantity =
      "1";

  }


  else if (

    activeFood.unit ===
    "piece" ||

    activeFood.unit ===
    "bowl" ||

    activeFood.unit ===
    "plate"

  ) {

    unit =
      activeFood.unit;

    quantity =
      "1";

  }


  else if (
    activeFood.pieceWeightG
  ) {

    unit =
      "piece";

    quantity =
      "1";

  }


  else {

    unit =
      activeFood.unit ||
      "g";


    quantity =
      "100";

  }


  $("calculatorFoodName")
    .textContent =
      activeFood.name;


  $("calculatorBrand")
    .textContent =

      activeFood.brand

        ? activeFood.brand

        : activeFood.category;


  $("calculatorStatus")
    .textContent =

      activeFood.nutritionStatus ===
      "verified-label"

        ? "Verified label"

        : activeFood.nutritionStatus ===
          "label-required"

          ? "Label verification required"

          : activeFood.nutritionStatus ===
            "reference-generic"

            ? "Reference estimate"

            : "Custom builder";


  $("calculatorFoodDescription")
    .textContent =
      activeFood.description ||
      "Configure serving";


  renderOptions();

  updatePreview();


  $("foodCalculatorOverlay")
    .classList
    .add("open");

}



/* ======================================================
   OPTION LABELS
====================================================== */

function optionTitle(key) {

  return {

    size:
      "Size",

    fatType:
      "Added fat",

    fatAmount:
      "Fat per item",

    coffeeType:
      "Coffee type",

    milk:
      "Milk",

    sugar:
      "Sugar",

    syrup:
      "Syrup",

    teaType:
      "Tea type",

    dosaType:
      "Dosa type",

    oil:
      "Oil used",

    parathaType:
      "Paratha type"

  }[key] || key;

}



function optionValue(
  key,
  value
) {

  if (
    key === "fatAmount" ||
    key === "oil"
  ) {

    return {

      0:
        "None",

      2.5:
        "½ tsp",

      5:
        "1 tsp",

      7.5:
        "1½ tsp",

      10:
        "2 tsp",

      15:
        "1 tbsp"

    }[value] ||

    `${value} ml`;

  }


  if (
    key === "sugar"
  ) {

    return `${value} tsp`;

  }


  return value;

}



/* ======================================================
   RENDER OPTIONS
====================================================== */

function renderOptions() {

  let html =
    "";


  if (
    activeFood.pieceWeightG
  ) {

    html += `

      <div class="calculator-option-group">

        <span>
          Measure as
        </span>


        <div class="scroll-options">

          <button
            class="
              option-chip
              ${
                unit === "piece"
                  ? "selected"
                  : ""
              }
            "
            data-unit-choice="piece"
          >
            Piece
          </button>


          <button
            class="
              option-chip
              ${
                unit === "g"
                  ? "selected"
                  : ""
              }
            "
            data-unit-choice="g"
          >
            Grams
          </button>

        </div>

      </div>

    `;

  }


  if (
    activeFood.options
  ) {

    html +=

      Object.entries(
        activeFood.options
      )
      .map(

        ([key, values]) => `

          <div class="calculator-option-group">

            <span>
              ${optionTitle(key)}
            </span>


            <div class="scroll-options">

              ${
                values.map(

                  value => `

                    <button
                      class="
                        option-chip
                        ${
                          selections[key] ===
                          value
                            ? "selected"
                            : ""
                        }
                      "
                      data-option-key="${key}"
                      data-option-value="${value}"
                    >

                      ${optionValue(
                        key,
                        value
                      )}

                    </button>

                  `

                ).join("")
              }

            </div>

          </div>

        `

      ).join("");

  }


  $("calculatorOptions")
    .innerHTML =
      html;



  document
    .querySelectorAll(
      "[data-unit-choice]"
    )
    .forEach(

      button => {

        button.onclick =
          () => {

            unit =
              button.dataset.unitChoice;


            quantity =
              unit === "piece"
                ? "1"
                : "100";


            renderOptions();

            updatePreview();

          };

      }

    );



  document
    .querySelectorAll(
      "[data-option-key]"
    )
    .forEach(

      button => {

        button.onclick =
          () => {

            const key =
              button.dataset.optionKey;


            selections[key] =

              activeFood
                .options[key]
                .find(

                  value =>

                    String(value) ===
                    button.dataset.optionValue

                );


            renderOptions();

            updatePreview();

          };

      }

    );

}



/* ======================================================
   NUTRITION MULTIPLIER
====================================================== */

function multiplyNutrition(
  data,
  multiplier
) {

  const result = {};


  for (
    const [key, value]
    of Object.entries(
      data || {}
    )
  ) {

    result[key] =
      Number(
        value || 0
      ) *
      multiplier;

  }


  return result;

}



/* ======================================================
   STANDARD FOOD
====================================================== */

function calculateStandard(
  amount
) {

  if (
    !activeFood.nutrition
  ) {

    return null;

  }


  if (

    activeFood.unit ===
    "piece" &&

    !activeFood.pieceWeightG &&

    activeFood.basis ===
    "1 piece"

  ) {

    return multiplyNutrition(

      activeFood.nutrition,

      amount

    );

  }


  if (

    [
      "piece",
      "bowl",
      "plate"
    ]
    .includes(
      activeFood.unit
    ) &&

    activeFood.basis &&

    activeFood.basis
      .startsWith("1 ")

  ) {

    return multiplyNutrition(

      activeFood.nutrition,

      amount

    );

  }


  let baseAmount =
    100;


  let actual =
    amount;


  if (
    unit === "piece" &&
    activeFood.pieceWeightG
  ) {

    actual =
      activeFood.pieceWeightG *
      amount;

  }


  return multiplyNutrition(

    activeFood.nutrition,

    actual /
    baseAmount

  );

}



/* ======================================================
   ROTI
====================================================== */

function calculateRoti(
  quantity
) {

  const sizeFactor = {

    Small:
      0.8,

    Medium:
      1,

    Large:
      1.25

  }[
    selections.size
  ] || 1;


  const addedFat =

    selections.fatType ===
    "None"

      ? 0

      : Number(
          selections.fatAmount ||
          0
        ) *
        0.91;


  return {

    calories:

      (
        105 *
        sizeFactor +

        addedFat *
        9
      ) *
      quantity,


    proteinG:

      3.5 *
      sizeFactor *
      quantity,


    carbsG:

      21 *
      sizeFactor *
      quantity,


    fatG:

      (
        0.8 *
        sizeFactor +

        addedFat
      ) *
      quantity,


    fibreG:

      3 *
      sizeFactor *
      quantity

  };

}



/* ======================================================
   COFFEE
====================================================== */

function calculateCoffee(
  quantity
) {

  const type =
    selections.coffeeType;


  const size =
    selections.size;


  const milk =
    selections.milk;


  const black = {

    Americano: {

      Small:
        [3,0.2,0.5,0],

      Medium:
        [5,0.3,0.8,0],

      Large:
        [7,0.4,1.1,0]

    },


    Espresso: {

      Small:
        [3,0.2,0.5,0],

      Medium:
        [3,0.2,0.5,0],

      Large:
        [3,0.2,0.5,0]

    },


    Doppio: {

      Small:
        [6,0.4,1,0],

      Medium:
        [6,0.4,1,0],

      Large:
        [6,0.4,1,0]

    },


    Latte: {

      Small:
        [5,0.3,1,0],

      Medium:
        [5,0.3,1,0],

      Large:
        [6,0.4,1.2,0]

    },


    Cappuccino: {

      Small:
        [4,0.3,0.8,0],

      Medium:
        [5,0.3,1,0],

      Large:
        [6,0.4,1.2,0]

    },


    "Flat White": {

      Small:
        [5,0.3,1,0],

      Medium:
        [5,0.3,1,0],

      Large:
        [6,0.4,1.2,0]

    },


    Cortado: {

      Small:
        [5,0.3,1,0],

      Medium:
        [5,0.3,1,0],

      Large:
        [5,0.3,1,0]

    },


    Macchiato: {

      Small:
        [4,0.3,0.8,0],

      Medium:
        [5,0.3,1,0],

      Large:
        [5,0.3,1,0]

    },


    Mocha: {

      Small:
        [25,0.5,5,0.5],

      Medium:
        [25,0.5,5,0.5],

      Large:
        [30,0.6,6,0.6]

    }

  };


  const base =
    black[type][size];


  const milkPerMedium = {

    None:
      [0,0,0,0],

    "Whole Milk":
      [122,6.3,9.5,6.6],

    "Low Fat Milk":
      [92,6.7,9.8,3],

    "Soy Milk":
      [80,7,4,4],

    "Oat Milk":
      [120,3,16,5]

  }[milk];


  const sizeFactor = {

    Small:
      0.75,

    Medium:
      1,

    Large:
      1.3

  }[size];


  const fraction =

    type === "Latte"
      ? 1

      : type === "Cappuccino"
        ? 0.7

      : type === "Flat White"
        ? 0.8

      : type === "Cortado"
        ? 0.4

      : type === "Macchiato"
        ? 0.1

      : type === "Mocha"
        ? 0.8

      : (
          milk === "None"
            ? 0
            : 0.12
        );


  const milkFactor =
    fraction *
    sizeFactor;


  const sugar =
    Number(
      selections.sugar ||
      0
    );


  const syrupCalories =

    selections.syrup ===
    "None"

      ? 0

      : 60;


  const syrupCarbs =

    selections.syrup ===
    "None"

      ? 0

      : 15;


  return {

    calories:

      (
        base[0] +

        milkPerMedium[0] *
        milkFactor +

        sugar *
        16 +

        syrupCalories
      ) *
      quantity,


    proteinG:

      (
        base[1] +

        milkPerMedium[1] *
        milkFactor
      ) *
      quantity,


    carbsG:

      (
        base[2] +

        milkPerMedium[2] *
        milkFactor +

        sugar *
        4 +

        syrupCarbs
      ) *
      quantity,


    fatG:

      (
        base[3] +

        milkPerMedium[3] *
        milkFactor
      ) *
      quantity,


    fibreG:
      0

  };

}



/* ======================================================
   TEA
====================================================== */

function calculateTea(
  quantity
) {

  const sizeFactor = {

    Small:
      0.75,

    Medium:
      1,

    Large:
      1.3

  }[
    selections.size
  ] || 1;


  const milk = {

    None:
      [0,0,0,0],

    "Whole Milk":
      [55,2.8,4,3],

    "Low Fat Milk":
      [40,3,4,1.3],

    "Soy Milk":
      [45,3.5,3,2],

    "Oat Milk":
      [55,1.3,8,2]

  }[
    selections.milk
  ];


  const sugar =
    Number(
      selections.sugar ||
      0
    );


  const base =

    selections.teaType ===
    "Masala Chai"

      ? 8

      : 2;


  return {

    calories:

      (
        base +

        milk[0] *
        sizeFactor +

        sugar *
        16
      ) *
      quantity,


    proteinG:

      milk[1] *
      sizeFactor *
      quantity,


    carbsG:

      (
        milk[2] *
        sizeFactor +

        sugar *
        4
      ) *
      quantity,


    fatG:

      milk[3] *
      sizeFactor *
      quantity,


    fibreG:
      0

  };

}



/* ======================================================
   DOSA
====================================================== */

function calculateDosa(
  quantity
) {

  const data = {

    Plain:
      [170,4,29,4.5,1.5],

    Masala:
      [320,7,51,10,4],

    Paneer:
      [390,14,42,18,4]

  }[
    selections.dosaType
  ];


  const oilFat =

    Number(
      selections.oil ||
      0
    ) *
    0.92;


  return {

    calories:

      (
        data[0] +

        oilFat *
        9
      ) *
      quantity,


    proteinG:

      data[1] *
      quantity,


    carbsG:

      data[2] *
      quantity,


    fatG:

      (
        data[3] +
        oilFat
      ) *
      quantity,


    fibreG:

      data[4] *
      quantity

  };

}



/* ======================================================
   PARATHA
====================================================== */

function calculateParatha(
  quantity
) {

  const data = {

    Plain:
      [165,5,30,3,3],

    Aloo:
      [230,6,42,4,5],

    Paneer:
      [270,12,34,9,4]

  }[
    selections.parathaType
  ];


  const extraFat =

    selections.fatType ===
    "None"

      ? 0

      : Number(
          selections.fatAmount ||
          0
        ) *
        0.91;


  return {

    calories:

      (
        data[0] +

        extraFat *
        9
      ) *
      quantity,


    proteinG:

      data[1] *
      quantity,


    carbsG:

      data[2] *
      quantity,


    fatG:

      (
        data[3] +
        extraFat
      ) *
      quantity,


    fibreG:

      data[4] *
      quantity

  };

}



/* ======================================================
   CALCULATE CURRENT
====================================================== */

function calculateFood() {

  const amount =
    Number(
      quantity
    ) || 0;


  if (
    activeFood.builderType ===
    "roti"
  ) {

    return calculateRoti(
      amount
    );

  }


  if (
    activeFood.builderType ===
    "coffee"
  ) {

    return calculateCoffee(
      amount
    );

  }


  if (
    activeFood.builderType ===
    "tea"
  ) {

    return calculateTea(
      amount
    );

  }


  if (
    activeFood.builderType ===
    "dosa"
  ) {

    return calculateDosa(
      amount
    );

  }


  if (
    activeFood.builderType ===
    "paratha"
  ) {

    return calculateParatha(
      amount
    );

  }


  return calculateStandard(
    amount
  );

}



/* ======================================================
   PREVIEW
====================================================== */

function updatePreview() {

  $("calculatorQuantity")
    .textContent =
      quantity;


  $("calculatorUnitLabel")
    .textContent =
      unit;


  $("calculatorQuantityLabel")
    .textContent =

      (
        unit === "cup" ||

        unit === "piece" ||

        unit === "bowl" ||

        unit === "plate"
      )

        ? "Servings"

        : "Amount";


  const data =
    calculateFood();


  const unavailable =
    !data;


  $("calculatorCalories")
    .textContent =

      unavailable

        ? "—"

        : Math.round(
            data.calories ||
            0
          );


  $("calculatorProtein")
    .textContent =

      unavailable

        ? "—"

        : `${(
            data.proteinG ||
            0
          ).toFixed(1)} g`;


  $("calculatorCarbs")
    .textContent =

      unavailable

        ? "—"

        : `${(
            data.carbsG ||
            0
          ).toFixed(1)} g`;


  $("calculatorFat")
    .textContent =

      unavailable

        ? "—"

        : `${(
            data.fatG ||
            0
          ).toFixed(1)} g`;


  $("calculatorAdd")
    .disabled =
      unavailable;


  if (unavailable) {

    $("calculatorWarning")
      .classList
      .remove("hidden");


    $("calculatorWarning")
      .textContent =

        "Exact current nutrition has not been verified for this branded product, so NutriCore will not invent values or add it to your totals. Use the generic equivalent for now, or add the current pack label to the database later.";

  }

  else {

    $("calculatorWarning")
      .classList
      .add("hidden");

  }

}



/* ======================================================
   NUMBER PAD
====================================================== */

document
  .querySelectorAll(
    "[data-number]"
  )
  .forEach(

    button => {

      button.onclick =
        () => {

          const character =
            button.dataset.number;


          if (
            character === "." &&
            quantity.includes(".")
          ) {

            return;

          }


          quantity =

            quantity === "0" &&
            character !== "."

              ? character

              : quantity +
                character;


          updatePreview();

        };

    }

  );



$("calculatorBackspace")
  .onclick =
    () => {

      quantity =
        quantity
          .slice(0,-1) ||
        "0";


      updatePreview();

    };



$("calculatorClear")
  .onclick =
    () => {

      quantity =
        "0";


      updatePreview();

    };



$("calculatorClose")
  .onclick =
    () => {

      $("foodCalculatorOverlay")
        .classList
        .remove("open");

    };



$("foodCalculatorOverlay")
  .onclick =
    event => {

      if (
        event.target ===
        $("foodCalculatorOverlay")
      ) {

        $("foodCalculatorOverlay")
          .classList
          .remove("open");

      }

    };



/* ======================================================
   MEAL NAME
====================================================== */

function mealName() {

  if (
    activeFood.builderType ===
    "roti"
  ) {

    const fat =

      selections.fatType ===
      "None"

        ? ""

        : ` + ${selections.fatAmount} ml ${selections.fatType}`;


    return `${selections.size} Roti${fat}`;

  }


  if (
    activeFood.builderType ===
    "coffee"
  ) {

    return `

      ${selections.size}

      ${selections.coffeeType}

      ${
        selections.milk !== "None"

          ? ` · ${selections.milk}`

          : ""
      }

    `.replace(/\s+/g," ").trim();

  }


  if (
    activeFood.builderType ===
    "tea"
  ) {

    return `

      ${selections.size}

      ${selections.teaType}

    `.replace(/\s+/g," ").trim();

  }


  if (
    activeFood.builderType ===
    "dosa"
  ) {

    return `${selections.dosaType} Dosa`;

  }


  if (
    activeFood.builderType ===
    "paratha"
  ) {

    return `${selections.parathaType} Paratha`;

  }


  return activeFood.brand

    ? `${activeFood.brand} ${activeFood.name}`

    : activeFood.name;

}



/* ======================================================
   ADD TO MEAL
====================================================== */

$("calculatorAdd")
  .onclick =
    () => {

      const nutrition =
        calculateFood();


      if (!nutrition) {
        return;
      }


      meal.push({

        uid:
          Date.now() +
          Math.random(),

        name:
          mealName(),

        quantity:
          Number(
            quantity
          ),

        unit,

        nutrition

      });


      saveMeal();

      renderMeal();


      $("foodCalculatorOverlay")
        .classList
        .remove("open");

    };



/* ======================================================
   RENDER MEAL
====================================================== */

function renderMeal() {

  if (!meal.length) {

    $("mealItems")
      .innerHTML = `

        <div class="empty-state">

          Nothing added yet.

          <br><br>

          Search fruit, vegetables,
          dal, sprouts, dairy, fish
          or a branded product and
          configure the amount you ate.

        </div>

      `;

  }

  else {

    $("mealItems")
      .innerHTML =

        meal.map(

          (item,index) => `

            <div class="meal-item">

              <div class="meal-item-name">

                <strong>
                  ${item.name}
                </strong>

                <span>

                  ${item.quantity}

                  ${item.unit}

                  ·

                  ${
                    Math.round(
                      item.nutrition.calories ||
                      0
                    )
                  } kcal

                  ·

                  ${
                    (
                      item.nutrition.proteinG ||
                      0
                    ).toFixed(1)
                  } g protein

                </span>

              </div>


              <button
                class="remove-food"
                data-remove="${index}"
              >
                ×
              </button>

            </div>

          `

        ).join("");

  }


  document
    .querySelectorAll(
      "[data-remove]"
    )
    .forEach(

      button => {

        button.onclick =
          () => {

            meal.splice(

              Number(
                button.dataset.remove
              ),

              1

            );


            saveMeal();

            renderMeal();

          };

      }

    );


  updateTotals();

}



/* ======================================================
   TOTALS
====================================================== */

function updateTotals() {

  const total = {

    calories:
      0,

    proteinG:
      0,

    carbsG:
      0,

    fatG:
      0,

    fibreG:
      0,

    calciumMg:
      0,

    ironMg:
      0,

    magnesiumMg:
      0,

    potassiumMg:
      0,

    vitaminCmg:
      0,

    vitaminDug:
      0,

    vitaminB12Ug:
      0,

    folateUg:
      0

  };


  meal.forEach(

    item => {

      Object.keys(
        total
      )
      .forEach(

        key => {

          total[key] +=

            Number(
              item.nutrition[key] ||
              0
            );

        }

      );

    }

  );


  $("mealCalories")
    .textContent =
      `${Math.round(
        total.calories
      )} kcal`;


  $("mealProtein")
    .textContent =
      `${total.proteinG.toFixed(1)} g`;


  $("mealCarbs")
    .textContent =
      `${total.carbsG.toFixed(1)} g`;


  $("mealFat")
    .textContent =
      `${total.fatG.toFixed(1)} g`;



  const caloriePercent =

    total.calories /
    targets.calories *
    100;


  $("progressText")
    .textContent =
      `${Math.round(
        caloriePercent
      )}%`;


  $("progressBar")
    .style.width =
      `${Math.min(
        caloriePercent,
        100
      )}%`;


  const calorieLeft =

    targets.calories -
    total.calories;


  $("calorieRemainingText")
    .textContent =

      calorieLeft >= 0

        ? `${Math.round(
            calorieLeft
          )} kcal remaining`

        : `${Math.abs(
            Math.round(
              calorieLeft
            )
          )} kcal over`;



  const proteinPercent =

    total.proteinG /
    targets.protein *
    100;


  $("proteinProgressText")
    .textContent =
      `${Math.round(
        proteinPercent
      )}%`;


  $("proteinProgressBar")
    .style.width =
      `${Math.min(
        proteinPercent,
        100
      )}%`;


  const proteinLeft =

    targets.protein -
    total.proteinG;


  $("proteinRemainingText")
    .textContent =

      proteinLeft >= 0

        ? `${proteinLeft.toFixed(1)} g remaining`

        : `${Math.abs(
            proteinLeft
          ).toFixed(1)} g above`;


  renderMicros(
    total
  );


  renderSuggestion(
    total
  );

}



/* ======================================================
   MICRONUTRIENTS
====================================================== */

function renderMicros(
  total
) {

  const nutrients = [

    [
      "Fibre",
      "fibreG",
      targets.fibre,
      "g"
    ],

    [
      "Calcium",
      "calciumMg",
      1000,
      "mg"
    ],

    [
      "Iron",
      "ironMg",
      plan.sex === "female"
        ? 18
        : 8,
      "mg"
    ],

    [
      "Magnesium",
      "magnesiumMg",
      plan.sex === "female"
        ? 320
        : 420,
      "mg"
    ],

    [
      "Potassium",
      "potassiumMg",
      3400,
      "mg"
    ],

    [
      "Vitamin C",
      "vitaminCmg",
      plan.sex === "female"
        ? 75
        : 90,
      "mg"
    ],

    [
      "Vitamin D",
      "vitaminDug",
      15,
      "µg"
    ],

    [
      "Vitamin B12",
      "vitaminB12Ug",
      2.4,
      "µg"
    ],

    [
      "Folate",
      "folateUg",
      400,
      "µg"
    ]

  ];


  $("micronutrients")
    .innerHTML =

      nutrients.map(

        ([
          name,
          key,
          target,
          unit
        ]) => {

          const value =
            total[key] ||
            0;


          const percentage =

            Math.min(

              value /
              target *
              100,

              100

            );


          return `

            <div class="micro-card">

              <div class="micro-top">

                <span>
                  ${name}
                </span>

                <strong>

                  ${value.toFixed(1)}

                  /

                  ${target}

                  ${unit}

                </strong>

              </div>


              <div class="micro-bar">

                <div
                  style="
                    width:${percentage}%
                  "
                ></div>

              </div>

            </div>

          `;

        }

      ).join("");

}



/* ======================================================
   SUGGESTIONS
====================================================== */

function renderSuggestion(
  total
) {

  const proteinRemaining =

    Math.max(

      0,

      targets.protein -
      total.proteinG

    );


  let message;


  if (
    proteinRemaining >
    30
  ) {

    message =

      plan.diet ===
      "nonveg"

        ? `

          About

          <strong>
            ${Math.round(
              proteinRemaining
            )} g protein
          </strong>

          remains.

          Chicken, fish, eggs,
          paneer, tofu, soy,
          dal and sprouts are
          available in the library.

        `

        : `

          About

          <strong>
            ${Math.round(
              proteinRemaining
            )} g protein
          </strong>

          remains.

          Use paneer, tofu,
          soy, dal and sprouts

          ${
            plan.diet ===
            "eggitarian"

              ? ", or eggs"

              : ""
          }

          as appropriate.

        `;

  }

  else {

    message = `

      Protein is close to target.

      Use the remaining calories
      to improve vegetable,
      fruit, pulse and
      micronutrient variety.

    `;

  }


  $("suggestionBox")
    .innerHTML = `

      <h3>
        Today's balance
      </h3>

      <p>
        ${message}
      </p>

    `;

}



/* ======================================================
   EVENTS
====================================================== */

$("foodSearch")
  .oninput =
    renderFoods;


$("clearMealButton")
  .onclick =
    () => {

      meal = [];

      saveMeal();

      renderMeal();

    };



/* ======================================================
   INIT
====================================================== */

renderFilters();

renderQuick();

renderFoods();

renderMeal();