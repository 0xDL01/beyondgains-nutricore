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



const allDiets = [
  "vegetarian",
  "vegan",
  "eggitarian",
  "nonveg"
];


const vegetarianDiets = [
  "vegetarian",
  "eggitarian",
  "nonveg"
];



/* ======================================================
   GENERIC FOOD MAKER
====================================================== */

function makeFood(
  id,
  name,
  category,
  kcal,
  protein,
  carbs,
  fat,
  fibre,
  extra = {}
) {

  return {

    id,

    name,

    category,

    description:
      extra.description ||
      "Per 100 g",

    diet:
      extra.diet ||
      allDiets,

    unit:
      extra.unit ||
      "g",

    pieceWeightG:
      extra.pieceWeightG ||
      null,

    nutritionPer100: {

      calories:
        kcal,

      proteinG:
        protein,

      carbsG:
        carbs,

      fatG:
        fat,

      fibreG:
        fibre,

      calciumMg:
        extra.calciumMg || 0,

      ironMg:
        extra.ironMg || 0,

      magnesiumMg:
        extra.magnesiumMg || 0,

      potassiumMg:
        extra.potassiumMg || 0,

      vitaminCmg:
        extra.vitaminCmg || 0,

      folateUg:
        extra.folateUg || 0

    }

  };

}



/* ======================================================
   FRUITS
====================================================== */

const fruits = [

  makeFood(
    "banana",
    "Banana",
    "Fruits",
    89,1.1,22.8,0.3,2.6,
    {
      unit:"piece",
      pieceWeightG:118,
      potassiumMg:358
    }
  ),

  makeFood(
    "apple",
    "Apple",
    "Fruits",
    52,0.3,13.8,0.2,2.4,
    {
      unit:"piece",
      pieceWeightG:182
    }
  ),

  makeFood(
    "mango",
    "Mango",
    "Fruits",
    60,0.8,15,0.4,1.6,
    {
      unit:"piece",
      pieceWeightG:200
    }
  ),

  makeFood(
    "orange",
    "Orange",
    "Fruits",
    47,0.9,11.8,0.1,2.4,
    {
      unit:"piece",
      pieceWeightG:130
    }
  ),

  makeFood(
    "mosambi",
    "Mosambi / Sweet Lime",
    "Fruits",
    43,0.8,10,0.2,2,
    {
      unit:"piece",
      pieceWeightG:150
    }
  ),

  makeFood(
    "guava",
    "Guava",
    "Fruits",
    68,2.6,14.3,1,5.4,
    {
      unit:"piece",
      pieceWeightG:100
    }
  ),

  makeFood(
    "papaya",
    "Papaya",
    "Fruits",
    43,0.5,10.8,0.3,1.7
  ),

  makeFood(
    "watermelon",
    "Watermelon",
    "Fruits",
    30,0.6,7.6,0.2,0.4
  ),

  makeFood(
    "muskmelon",
    "Muskmelon",
    "Fruits",
    34,0.8,8.2,0.2,0.9
  ),

  makeFood(
    "pomegranate",
    "Pomegranate",
    "Fruits",
    83,1.7,18.7,1.2,4,
    {
      unit:"piece",
      pieceWeightG:170
    }
  ),

  makeFood(
    "pineapple",
    "Pineapple",
    "Fruits",
    50,0.5,13.1,0.1,1.4
  ),

  makeFood(
    "green-grapes",
    "Green Grapes",
    "Fruits",
    69,0.7,18.1,0.2,0.9
  ),

  makeFood(
    "black-grapes",
    "Black Grapes",
    "Fruits",
    69,0.7,18,0.2,0.9
  ),

  makeFood(
    "chikoo",
    "Chikoo / Sapota",
    "Fruits",
    83,0.4,20,1.1,5.3,
    {
      unit:"piece",
      pieceWeightG:100
    }
  ),

  makeFood(
    "sitaphal",
    "Custard Apple / Sitaphal",
    "Fruits",
    94,2.1,23.6,0.3,4.4,
    {
      unit:"piece",
      pieceWeightG:160
    }
  ),

  makeFood(
    "pear",
    "Pear",
    "Fruits",
    57,0.4,15.2,0.1,3.1,
    {
      unit:"piece",
      pieceWeightG:178
    }
  ),

  makeFood(
    "kiwi",
    "Kiwi",
    "Fruits",
    61,1.1,14.7,0.5,3,
    {
      unit:"piece",
      pieceWeightG:75
    }
  ),

  makeFood(
    "strawberry",
    "Strawberry",
    "Fruits",
    32,0.7,7.7,0.3,2
  ),

  makeFood(
    "blueberry",
    "Blueberry",
    "Fruits",
    57,0.7,14.5,0.3,2.4
  ),

  makeFood(
    "dragon-fruit",
    "Dragon Fruit",
    "Fruits",
    57,0.4,13,0.1,3,
    {
      unit:"piece",
      pieceWeightG:250
    }
  ),

  makeFood(
    "peach",
    "Peach",
    "Fruits",
    39,0.9,9.5,0.3,1.5,
    {
      unit:"piece",
      pieceWeightG:150
    }
  ),

  makeFood(
    "plum",
    "Plum",
    "Fruits",
    46,0.7,11.4,0.3,1.4,
    {
      unit:"piece",
      pieceWeightG:66
    }
  ),

  makeFood(
    "litchi",
    "Litchi",
    "Fruits",
    66,0.8,16.5,0.4,1.3
  ),

  makeFood(
    "jackfruit",
    "Jackfruit",
    "Fruits",
    95,1.7,23.2,0.6,1.5
  ),

  makeFood(
    "amla",
    "Amla",
    "Fruits",
    44,0.9,10.2,0.6,4.3
  ),

  makeFood(
    "jamun",
    "Jamun",
    "Fruits",
    60,0.7,15.6,0.2,0.6
  ),

  makeFood(
    "avocado",
    "Avocado",
    "Fruits",
    160,2,8.5,14.7,6.7,
    {
      unit:"piece",
      pieceWeightG:150
    }
  ),

  makeFood(
    "fresh-fig",
    "Fresh Fig",
    "Fruits",
    74,0.8,19.2,0.3,2.9,
    {
      unit:"piece",
      pieceWeightG:50
    }
  )

];



/* ======================================================
   VEGETABLES
====================================================== */

const vegetables = [

  makeFood(
    "spinach",
    "Spinach / Palak",
    "Vegetables",
    23,2.9,3.6,0.4,2.2
  ),

  makeFood(
    "methi",
    "Methi Leaves",
    "Vegetables",
    49,4.4,6,0.9,1.1
  ),

  makeFood(
    "amaranth",
    "Amaranth / Chaulai",
    "Vegetables",
    23,2.5,4,0.3,2.2
  ),

  makeFood(
    "cabbage",
    "Cabbage",
    "Vegetables",
    25,1.3,5.8,0.1,2.5
  ),

  makeFood(
    "cauliflower",
    "Cauliflower",
    "Vegetables",
    25,1.9,5,0.3,2
  ),

  makeFood(
    "broccoli",
    "Broccoli",
    "Vegetables",
    34,2.8,6.6,0.4,2.6
  ),

  makeFood(
    "carrot",
    "Carrot",
    "Vegetables",
    41,0.9,9.6,0.2,2.8
  ),

  makeFood(
    "beetroot",
    "Beetroot",
    "Vegetables",
    43,1.6,9.6,0.2,2.8
  ),

  makeFood(
    "radish",
    "Radish / Mooli",
    "Vegetables",
    16,0.7,3.4,0.1,1.6
  ),

  makeFood(
    "onion",
    "Onion",
    "Vegetables",
    40,1.1,9.3,0.1,1.7
  ),

  makeFood(
    "tomato",
    "Tomato",
    "Vegetables",
    18,0.9,3.9,0.2,1.2
  ),

  makeFood(
    "potato",
    "Potato",
    "Vegetables",
    77,2,17.5,0.1,2.2
  ),

  makeFood(
    "sweet-potato",
    "Sweet Potato",
    "Vegetables",
    86,1.6,20.1,0.1,3
  ),

  makeFood(
    "okra",
    "Bhindi / Okra",
    "Vegetables",
    33,1.9,7.5,0.2,3.2
  ),

  makeFood(
    "brinjal",
    "Brinjal",
    "Vegetables",
    25,1,6,0.2,3
  ),

  makeFood(
    "lauki",
    "Bottle Gourd / Lauki",
    "Vegetables",
    15,0.6,3.7,0,1.2
  ),

  makeFood(
    "turai",
    "Ridge Gourd / Turai",
    "Vegetables",
    20,1.2,4.4,0.2,1.1
  ),

  makeFood(
    "karela",
    "Bitter Gourd / Karela",
    "Vegetables",
    17,1,3.7,0.2,2.8
  ),

  makeFood(
    "pumpkin",
    "Pumpkin",
    "Vegetables",
    26,1,6.5,0.1,0.5
  ),

  makeFood(
    "cucumber",
    "Cucumber",
    "Vegetables",
    15,0.7,3.6,0.1,0.5
  ),

  makeFood(
    "green-capsicum",
    "Green Capsicum",
    "Vegetables",
    20,0.9,4.6,0.2,1.7
  ),

  makeFood(
    "red-capsicum",
    "Red Capsicum",
    "Vegetables",
    31,1,6,0.3,2.1
  ),

  makeFood(
    "green-peas",
    "Fresh Green Peas",
    "Vegetables",
    81,5.4,14.5,0.4,5.7
  ),

  makeFood(
    "french-beans",
    "French Beans",
    "Vegetables",
    31,1.8,7,0.2,2.7
  ),

  makeFood(
    "cluster-beans",
    "Cluster Beans / Guar",
    "Vegetables",
    35,3.2,7,0.4,3.7
  ),

  makeFood(
    "mushroom",
    "Button Mushroom",
    "Vegetables",
    22,3.1,3.3,0.3,1
  ),

  makeFood(
    "sweet-corn",
    "Sweet Corn",
    "Vegetables",
    86,3.3,19,1.4,2.7
  ),

  makeFood(
    "baby-corn",
    "Baby Corn",
    "Vegetables",
    26,2.5,5.9,0.4,2
  )

];



/* ======================================================
   DALS / LENTILS / PULSES

   These are COOKED values unless stated.
====================================================== */

const pulses = [

  makeFood(
    "toor-dal",
    "Toor Dal - Cooked",
    "Dal & Pulses",
    116,7,20,1,7,
    {
      description:
        "Cooked pigeon pea dal"
    }
  ),

  makeFood(
    "moong-dal",
    "Yellow Moong Dal - Cooked",
    "Dal & Pulses",
    105,7,19,0.4,7.6
  ),

  makeFood(
    "green-moong",
    "Whole Green Moong - Cooked",
    "Dal & Pulses",
    105,7,19,0.4,7.6
  ),

  makeFood(
    "masoor-dal",
    "Masoor Dal - Cooked",
    "Dal & Pulses",
    116,9,20,0.4,8
  ),

  makeFood(
    "urad-dal",
    "Urad Dal - Cooked",
    "Dal & Pulses",
    116,8,20,0.5,7
  ),

  makeFood(
    "chana-dal",
    "Chana Dal - Cooked",
    "Dal & Pulses",
    164,9,27,2.6,7.6
  ),

  makeFood(
    "rajma",
    "Rajma - Cooked",
    "Dal & Pulses",
    127,8.7,22.8,0.5,6.4
  ),

  makeFood(
    "white-chickpeas",
    "White Chickpeas / Kabuli Chana",
    "Dal & Pulses",
    164,8.9,27.4,2.6,7.6
  ),

  makeFood(
    "black-chana",
    "Kala Chana - Cooked",
    "Dal & Pulses",
    164,8.9,27,2.6,7.6
  ),

  makeFood(
    "lobia",
    "Lobia / Black-Eyed Peas - Cooked",
    "Dal & Pulses",
    116,7.7,20.8,0.5,6.5
  ),

  makeFood(
    "dried-green-peas",
    "Dried Green Peas - Cooked",
    "Dal & Pulses",
    118,8.3,21,0.4,8
  ),

  makeFood(
    "dried-yellow-peas",
    "Yellow Peas - Cooked",
    "Dal & Pulses",
    118,8,21,0.4,8
  ),

  makeFood(
    "moth-beans",
    "Moth Beans / Matki - Cooked",
    "Dal & Pulses",
    117,8,20,0.5,7
  ),

  makeFood(
    "horse-gram",
    "Horse Gram / Kulith - Cooked",
    "Dal & Pulses",
    120,8,21,0.5,5
  ),

  makeFood(
    "soybean-cooked",
    "Soybeans - Cooked",
    "Dal & Pulses",
    173,16.6,9.9,9,6
  ),

  makeFood(
    "soy-chunks-dry",
    "Soy Chunks - Dry",
    "Dal & Pulses",
    345,52,33,0.5,13,
    {
      description:
        "Dry weight before soaking"
    }
  )

];



/* ======================================================
   SPROUTS
====================================================== */

const sprouts = [

  makeFood(
    "moong-sprouts",
    "Moong Sprouts",
    "Sprouts",
    30,3,5.9,0.2,1.8,
    {
      description:
        "Raw sprouted mung beans"
    }
  ),

  makeFood(
    "matki-sprouts",
    "Matki / Moth Bean Sprouts",
    "Sprouts",
    35,3.5,6,0.4,2
  ),

  makeFood(
    "chana-sprouts",
    "Chana Sprouts",
    "Sprouts",
    120,7,20,2,6
  ),

  makeFood(
    "mixed-sprouts",
    "Mixed Sprouts",
    "Sprouts",
    80,6,13,1,4
  ),

  makeFood(
    "alfalfa-sprouts",
    "Alfalfa Sprouts",
    "Sprouts",
    23,4,2.1,0.7,1.9
  ),

  makeFood(
    "soybean-sprouts",
    "Soybean Sprouts",
    "Sprouts",
    122,13,9.6,6.7,1.1
  )

];



/* ======================================================
   BUILDERS
====================================================== */

const builders = [

  {
    id:
      "roti-builder",

    name:
      "Roti",

    category:
      "Roti & Breads",

    description:
      "Choose size and added fat",

    diet:
      allDiets,

    builderType:
      "roti",

    unit:
      "piece",

    base: {
      calories:105,
      proteinG:3.5,
      carbsG:21,
      fatG:0.8,
      fibreG:3
    },

    options: {

      size:[
        "Small",
        "Medium",
        "Large"
      ],

      fatType:[
        "None",
        "Ghee",
        "Oil"
      ],

      fatAmount:[
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
      "coffee-builder",

    name:
      "Coffee",

    category:
      "Coffee & Tea",

    description:
      "Espresso, Americano, latte and more",

    diet:
      allDiets,

    builderType:
      "coffee",

    unit:
      "cup",

    options: {

      coffeeType:[
        "Espresso",
        "Americano",
        "Latte",
        "Cappuccino",
        "Flat White",
        "Cortado",
        "Macchiato",
        "Mocha"
      ],

      milk:[
        "None",
        "Whole Milk",
        "Low Fat Milk",
        "Soy Milk",
        "Oat Milk"
      ],

      sugar:[
        0,1,2,3
      ],

      syrup:[
        "None",
        "Vanilla",
        "Caramel",
        "Hazelnut"
      ],

      size:[
        "Small",
        "Medium",
        "Large"
      ]

    }
  },


  {
    id:
      "tea-builder",

    name:
      "Tea",

    category:
      "Coffee & Tea",

    description:
      "Black, green or milk tea",

    diet:
      allDiets,

    builderType:
      "tea",

    unit:
      "cup",

    options: {

      teaType:[
        "Black Tea",
        "Green Tea",
        "Milk Tea",
        "Masala Chai"
      ],

      milk:[
        "None",
        "Whole Milk",
        "Low Fat Milk",
        "Soy Milk",
        "Oat Milk"
      ],

      sugar:[
        0,1,2,3
      ]

    }
  }

];



/* ======================================================
   PROTEIN
====================================================== */

const proteins = [

  {
    id:"chicken",

    name:
      "Chicken Breast - Raw",

    category:
      "Protein",

    description:
      "Raw skinless",

    diet:[
      "nonveg"
    ],

    unit:"g",

    nutritionPer100:{
      calories:120,
      proteinG:22.5,
      carbsG:0,
      fatG:2.6,
      fibreG:0
    }
  },


  {
    id:"egg",

    name:
      "Whole Egg",

    category:
      "Protein",

    description:
      "Large egg",

    diet:[
      "eggitarian",
      "nonveg"
    ],

    unit:"piece",

    nutritionPerPiece:{
      calories:72,
      proteinG:6.3,
      carbsG:0.4,
      fatG:4.8,
      fibreG:0
    }
  },


  {
    id:"paneer",

    name:
      "Paneer",

    category:
      "Protein",

    description:
      "Full-fat generic",

    diet:
      vegetarianDiets,

    unit:"g",

    nutritionPer100:{
      calories:265,
      proteinG:18.3,
      carbsG:1.2,
      fatG:20.8,
      fibreG:0
    }
  },


  {
    id:"tofu",

    name:
      "Firm Tofu",

    category:
      "Protein",

    description:
      "Plain",

    diet:
      allDiets,

    unit:"g",

    nutritionPer100:{
      calories:144,
      proteinG:17.3,
      carbsG:2.8,
      fatG:8.7,
      fibreG:2.3
    }
  }

];



/* ======================================================
   ALL FOODS
====================================================== */

const allFoods = [

  ...builders,

  ...proteins,

  ...pulses,

  ...sprouts,

  ...fruits,

  ...vegetables

];



/* ======================================================
   STATE
====================================================== */

let category =
  "All";


let meal =
  JSON.parse(
    localStorage.getItem(
      "nutricoreMealV4"
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
      food.diet.includes(
        plan.diet
      )
  );

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
      item => `

        <button
          class="
            filter-button
            ${
              category === item
                ? "active"
                : ""
            }
          "
          data-category="${item}"
        >
          ${item}
        </button>

      `
    ).join("");


  document
    .querySelectorAll(
      "[data-category]"
    )
    .forEach(
      button => {

        button.onclick =
          () => {

            category =
              button.dataset.category;

            renderFilters();

            renderFoods();

          };

      }
    );

}



/* ======================================================
   QUICK
====================================================== */

function renderQuick() {

  const quickIds = [

    "roti-builder",
    "coffee-builder",
    "moong-dal",
    "rajma",
    "moong-sprouts",
    "green-peas",
    "chicken",
    "egg",
    "paneer",
    "banana",
    "spinach",
    "white-chickpeas"

  ];


  const foods =
    availableFoods()
      .filter(
        food =>
          quickIds.includes(
            food.id
          )
      );


  $("quickFoodGrid").innerHTML =
    foods.map(
      food => `

        <button
          class="quick-food-card"
          data-food="${food.id}"
        >

          <strong>
            ${food.name}
          </strong>

          <span>
            ${food.description}
          </span>

          <span class="quick-plus">
            +
          </span>

        </button>

      `
    ).join("");


  bindFoodButtons();

}



/* ======================================================
   RENDER LIBRARY
====================================================== */

function renderFoods() {

  const search =
    $("foodSearch")
      .value
      .trim()
      .toLowerCase();


  let foods =
    availableFoods();


  if (
    category !==
    "All"
  ) {

    foods =
      foods.filter(
        food =>
          food.category ===
          category
      );

  }


  if (search) {

    foods =
      foods.filter(
        food =>
          `${food.name} ${food.category} ${food.description}`
            .toLowerCase()
            .includes(search)
      );

  }


  $("foodCount").textContent =
    `${foods.length} foods`;


  $("foodList").innerHTML =
    foods.map(
      food => `

        <div class="food-item">

          <div class="food-name">

            <strong>
              ${food.name}
            </strong>

            <span>

              ${food.description}

              ·

              ${
                food.builderType
                  ? "customise"
                  : food.unit === "piece"
                    ? "by piece"
                    : "per serving"
              }

            </span>

          </div>


          <button
            class="food-add"
            data-food="${food.id}"
          >
            +
          </button>

        </div>

      `
    ).join("");


  bindFoodButtons();

}



function bindFoodButtons() {

  document
    .querySelectorAll(
      "[data-food]"
    )
    .forEach(
      button => {

        button.onclick =
          () =>
            openCalculator(
              button.dataset.food
            );

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
    ).forEach(
      ([key, values]) => {

        selections[key] =
          values[0];

      }
    );

  }


  if (
    activeFood.unit ===
    "piece"
  ) {

    unit = "piece";

    quantity = "1";

  }

  else {

    unit = "g";

    quantity = "100";

  }


  $("calculatorFoodName")
    .textContent =
      activeFood.name;


  $("calculatorFoodDescription")
    .textContent =
      activeFood.description;


  renderOptions();

  updatePreview();


  $("foodCalculatorOverlay")
    .classList
    .add("open");

}



/* ======================================================
   OPTIONS
====================================================== */

function renderOptions() {

  let html = "";


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
            data-unit="piece"
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
            data-unit="g"
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

    Object.entries(
      activeFood.options
    ).forEach(
      ([key, values]) => {

        html += `

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
                          selections[key] === value
                            ? "selected"
                            : ""
                        }
                      "
                      data-option="${key}"
                      data-value="${value}"
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

        `;

      }
    );

  }


  $("calculatorOptions")
    .innerHTML =
      html;


  document
    .querySelectorAll(
      "[data-unit]"
    )
    .forEach(
      button => {

        button.onclick =
          () => {

            unit =
              button.dataset.unit;


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
      "[data-option]"
    )
    .forEach(
      button => {

        button.onclick =
          () => {

            const key =
              button.dataset.option;


            const original =
              activeFood
                .options[key]
                .find(
                  value =>
                    String(value) ===
                    button.dataset.value
                );


            selections[key] =
              original;


            renderOptions();

            updatePreview();

          };

      }
    );

}



function optionTitle(key) {

  const labels = {

    size:"Size",

    fatType:
      "Added Fat",

    fatAmount:
      "Fat Amount",

    coffeeType:
      "Coffee",

    milk:
      "Milk",

    sugar:
      "Sugar",

    syrup:
      "Syrup",

    teaType:
      "Tea"

  };


  return (
    labels[key] ||
    key
  );

}



function optionValue(
  key,
  value
) {

  if (
    key === "fatAmount"
  ) {

    const labels = {
      0:"None",
      2.5:"½ tsp",
      5:"1 tsp",
      7.5:"1½ tsp",
      10:"2 tsp",
      15:"1 tbsp"
    };


    return labels[value];

  }


  if (
    key === "sugar"
  ) {

    return `${value} tsp`;

  }


  return value;

}



/* ======================================================
   FOOD NUTRITION
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
    activeFood.nutritionPerPiece
  ) {

    return multiply(
      activeFood.nutritionPerPiece,
      amount
    );

  }


  let grams =
    amount;


  if (
    unit === "piece" &&
    activeFood.pieceWeightG
  ) {

    grams =
      activeFood.pieceWeightG *
      amount;

  }


  return multiply(
    activeFood.nutritionPer100,
    grams / 100
  );

}



function multiply(
  data,
  multiplier
) {

  const result = {};


  Object.entries(
    data
  ).forEach(
    ([key,value]) => {

      result[key] =
        Number(
          value || 0
        ) *
        multiplier;

    }
  );


  return result;

}



/* ======================================================
   ROTI
====================================================== */

function calculateRoti(amount) {

  const sizeFactor = {

    Small:0.8,

    Medium:1,

    Large:1.25

  }[
    selections.size
  ];


  let addedFat =
    0;


  if (
    selections.fatType !==
    "None"
  ) {

    addedFat =
      Number(
        selections.fatAmount
      ) *
      0.91;

  }


  return {

    calories:
      (
        105 *
        sizeFactor +
        addedFat * 9
      ) *
      amount,

    proteinG:
      3.5 *
      sizeFactor *
      amount,

    carbsG:
      21 *
      sizeFactor *
      amount,

    fatG:
      (
        0.8 *
        sizeFactor +
        addedFat
      ) *
      amount,

    fibreG:
      3 *
      sizeFactor *
      amount

  };

}



/* ======================================================
   COFFEE
====================================================== */

function calculateCoffee(amount) {

  const coffeeMap = {

    Espresso:
      [3,0.2,0.5,0],

    Americano:
      [5,0.3,1,0],

    Latte:
      [15,0.5,2,0],

    Cappuccino:
      [10,0.5,1.5,0],

    "Flat White":
      [10,0.5,1.5,0],

    Cortado:
      [8,0.4,1,0],

    Macchiato:
      [6,0.3,0.8,0],

    Mocha:
      [80,2,15,2]

  };


  const milkMap = {

    None:
      [0,0,0,0],

    "Whole Milk":
      [90,5,7,5],

    "Low Fat Milk":
      [65,5,7,2],

    "Soy Milk":
      [70,6,5,3],

    "Oat Milk":
      [90,2,14,3]

  };


  const coffee =
    coffeeMap[
      selections.coffeeType
    ];


  const milk =
    milkMap[
      selections.milk
    ];


  const sugar =
    Number(
      selections.sugar
    );


  const syrup =
    selections.syrup ===
    "None"
      ? 0
      : 60;


  const sizeFactor = {

    Small:0.8,

    Medium:1,

    Large:1.3

  }[
    selections.size
  ];


  return {

    calories:
      (
        coffee[0] +
        milk[0] +
        sugar * 16 +
        syrup
      ) *
      sizeFactor *
      amount,

    proteinG:
      (
        coffee[1] +
        milk[1]
      ) *
      sizeFactor *
      amount,

    carbsG:
      (
        coffee[2] +
        milk[2] +
        sugar * 4 +
        (
          selections.syrup ===
          "None"
            ? 0
            : 15
        )
      ) *
      sizeFactor *
      amount,

    fatG:
      (
        coffee[3] +
        milk[3]
      ) *
      sizeFactor *
      amount,

    fibreG:0

  };

}



/* ======================================================
   TEA
====================================================== */

function calculateTea(amount) {

  const milkMap = {

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

  };


  const milk =
    milkMap[
      selections.milk
    ];


  const sugar =
    Number(
      selections.sugar
    );


  return {

    calories:
      (
        2 +
        milk[0] +
        sugar * 16
      ) *
      amount,

    proteinG:
      milk[1] *
      amount,

    carbsG:
      (
        milk[2] +
        sugar * 4
      ) *
      amount,

    fatG:
      milk[3] *
      amount,

    fibreG:0

  };

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


  const nutrition =
    calculateFood();


  $("calculatorCalories")
    .textContent =
      Math.round(
        nutrition.calories || 0
      );


  $("calculatorProtein")
    .textContent =
      `${(
        nutrition.proteinG || 0
      ).toFixed(1)} g`;


  $("calculatorCarbs")
    .textContent =
      `${(
        nutrition.carbsG || 0
      ).toFixed(1)} g`;


  $("calculatorFat")
    .textContent =
      `${(
        nutrition.fatG || 0
      ).toFixed(1)} g`;

}



/* ======================================================
   KEYPAD
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


          if (
            quantity === "0" &&
            character !== "."
          ) {

            quantity =
              character;

          }

          else {

            quantity +=
              character;

          }


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



/* ======================================================
   ADD
====================================================== */

$("calculatorAdd")
  .onclick =
    () => {

      const nutrition =
        calculateFood();


      meal.push({

        name:
          activeFood.name,

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
   CLOSE
====================================================== */

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
   MEAL
====================================================== */

function saveMeal() {

  localStorage.setItem(
    "nutricoreMealV4",
    JSON.stringify(meal)
  );

}



function renderMeal() {

  if (!meal.length) {

    $("mealItems")
      .innerHTML = `

        <div class="empty-state">

          Your food list is empty.

          <br><br>

          Search for dal, sprouts,
          fruit, vegetables, chicken,
          paneer, eggs or any other food.

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
                      item.nutrition.calories
                    )
                  } kcal

                  ·

                  ${
                    (
                      item.nutrition.proteinG ||
                      0
                    ).toFixed(1)
                  }g protein

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

    calories:0,

    proteinG:0,

    carbsG:0,

    fatG:0,

    fibreG:0,

    calciumMg:0,

    ironMg:0,

    magnesiumMg:0,

    potassiumMg:0,

    vitaminCmg:0,

    folateUg:0

  };


  meal.forEach(
    item => {

      Object.keys(
        total
      ).forEach(
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


  updateProgress(total);

  renderMicros(total);

  renderSuggestion(total);

}



/* ======================================================
   PROGRESS
====================================================== */

function updateProgress(total) {

  const caloriesPercent =
    total.calories /
    targets.calories *
    100;


  $("progressBar")
    .style.width =
      `${Math.min(
        caloriesPercent,
        100
      )}%`;


  $("progressText")
    .textContent =
      `${Math.round(
        caloriesPercent
      )}%`;


  const calorieLeft =
    targets.calories -
    total.calories;


  $("calorieRemainingText")
    .textContent =
      calorieLeft >= 0

        ? `${Math.round(calorieLeft)} kcal remaining`

        : `${Math.abs(Math.round(calorieLeft))} kcal over`;


  const proteinPercent =
    total.proteinG /
    targets.protein *
    100;


  $("proteinProgressBar")
    .style.width =
      `${Math.min(
        proteinPercent,
        100
      )}%`;


  $("proteinProgressText")
    .textContent =
      `${Math.round(
        proteinPercent
      )}%`;


  const proteinLeft =
    targets.protein -
    total.proteinG;


  $("proteinRemainingText")
    .textContent =
      proteinLeft >= 0

        ? `${proteinLeft.toFixed(1)} g remaining`

        : `${Math.abs(proteinLeft).toFixed(1)} g above`;

}



/* ======================================================
   MICRO
====================================================== */

function renderMicros(total) {

  const nutrients = [

    [
      "Fibre",
      total.fibreG,
      targets.fibre,
      "g"
    ],

    [
      "Calcium",
      total.calciumMg,
      1000,
      "mg"
    ],

    [
      "Iron",
      total.ironMg,
      plan.sex === "female"
        ? 18
        : 8,
      "mg"
    ],

    [
      "Magnesium",
      total.magnesiumMg,
      plan.sex === "female"
        ? 320
        : 420,
      "mg"
    ],

    [
      "Potassium",
      total.potassiumMg,
      3400,
      "mg"
    ],

    [
      "Vitamin C",
      total.vitaminCmg,
      plan.sex === "female"
        ? 75
        : 90,
      "mg"
    ],

    [
      "Folate",
      total.folateUg,
      400,
      "µg"
    ]

  ];


  $("micronutrients")
    .innerHTML =
      nutrients.map(
        item => {

          const [
            name,
            value,
            target,
            unit
          ] =
            item;


          const percent =
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
                    width:${percent}%
                  "
                ></div>

              </div>

            </div>

          `;

        }
      ).join("");

}



/* ======================================================
   SUGGESTION
====================================================== */

function renderSuggestion(total) {

  const proteinLeft =
    Math.max(
      0,
      targets.protein -
      total.proteinG
    );


  let text;


  if (
    proteinLeft > 25
  ) {

    text = `

      You still need about

      <strong>
        ${Math.round(proteinLeft)} g
        protein
      </strong>.

      Try chicken, eggs, paneer,
      tofu, soy chunks, dal,
      chickpeas or sprouts depending
      on your diet preference.

    `;

  }

  else {

    text = `

      Protein is close to target.
      Use vegetables, fruit, pulses
      and sprouts to improve fibre
      and micronutrient variety.

    `;

  }


  $("suggestionBox")
    .innerHTML = `

      <h3>
        Today's balance
      </h3>

      <p>
        ${text}
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