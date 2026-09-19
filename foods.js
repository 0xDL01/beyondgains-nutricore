export const foods = [

/* =========================================================
   ROTI / BHakri
========================================================= */

{
  id: "roti-plain",

  type: "prepared",

  category: "Roti & Breads",

  subcategory: "Roti",

  brand: null,

  name: "Whole Wheat Roti - Plain",

  preparation:
    "1 medium roti, no oil/ghee",

  diet: [
    "vegetarian",
    "vegan",
    "eggitarian",
    "nonveg"
  ],

  servingReference: {
    amount: 1,
    unit: "piece"
  },

  nutrition: {

    calories: 105,

    proteinG: 3.5,

    carbsG: 21,

    fatG: 0.8,

    fibreG: 3,

    calciumMg: 12,

    ironMg: 1.1,

    magnesiumMg: 35,

    potassiumMg: 110,

    sodiumMg: 3

  },

  units: [
    "piece"
  ]
},


{
  id: "roti-half-tsp-ghee",

  type: "prepared",

  category: "Roti & Breads",

  subcategory: "Roti",

  brand: null,

  name:
    "Roti + ½ tsp Ghee",

  preparation:
    "1 medium roti + about 2.5 ml ghee",

  diet: [
    "vegetarian",
    "eggitarian",
    "nonveg"
  ],

  servingReference: {
    amount: 1,
    unit: "piece"
  },

  nutrition: {

    calories: 126,

    proteinG: 3.5,

    carbsG: 21,

    fatG: 3.1,

    fibreG: 3

  },

  units: [
    "piece"
  ]
},


{
  id: "roti-one-tsp-ghee",

  type: "prepared",

  category: "Roti & Breads",

  subcategory: "Roti",

  brand: null,

  name:
    "Roti + 1 tsp Ghee",

  preparation:
    "1 medium roti + 5 ml ghee",

  diet: [
    "vegetarian",
    "eggitarian",
    "nonveg"
  ],

  servingReference: {
    amount: 1,
    unit: "piece"
  },

  nutrition: {

    calories: 146,

    proteinG: 3.5,

    carbsG: 21,

    fatG: 5.4,

    fibreG: 3

  },

  units: [
    "piece"
  ]
},


{
  id: "roti-one-tsp-oil",

  type: "prepared",

  category: "Roti & Breads",

  subcategory: "Roti",

  brand: null,

  name:
    "Roti + 1 tsp Oil",

  preparation:
    "1 medium roti + 5 ml cooking oil",

  diet: [
    "vegetarian",
    "vegan",
    "eggitarian",
    "nonveg"
  ],

  servingReference: {
    amount: 1,
    unit: "piece"
  },

  nutrition: {

    calories: 146,

    proteinG: 3.5,

    carbsG: 21,

    fatG: 5.4,

    fibreG: 3

  },

  units: [
    "piece"
  ]
},


{
  id: "jowar-bhakri",

  type: "prepared",

  category: "Roti & Breads",

  name:
    "Jowar Bhakri",

  preparation:
    "1 medium",

  diet: [
    "vegetarian",
    "vegan",
    "eggitarian",
    "nonveg"
  ],

  servingReference: {
    amount: 1,
    unit: "piece"
  },

  nutrition: {

    calories: 130,

    proteinG: 4,

    carbsG: 27,

    fatG: 1.2,

    fibreG: 3.5

  },

  units: [
    "piece"
  ]
},


{
  id: "bajra-roti",

  type: "prepared",

  category: "Roti & Breads",

  name:
    "Bajra Roti",

  preparation:
    "1 medium",

  diet: [
    "vegetarian",
    "vegan",
    "eggitarian",
    "nonveg"
  ],

  servingReference: {
    amount: 1,
    unit: "piece"
  },

  nutrition: {

    calories: 130,

    proteinG: 3.8,

    carbsG: 24,

    fatG: 2.5,

    fibreG: 4

  },

  units: [
    "piece"
  ]
},


{
  id: "ragi-roti",

  type: "prepared",

  category: "Roti & Breads",

  name:
    "Ragi Roti",

  preparation:
    "1 medium",

  diet: [
    "vegetarian",
    "vegan",
    "eggitarian",
    "nonveg"
  ],

  servingReference: {
    amount: 1,
    unit: "piece"
  },

  nutrition: {

    calories: 120,

    proteinG: 3,

    carbsG: 24,

    fatG: 1.4,

    fibreG: 3

  },

  units: [
    "piece"
  ]
},



/* =========================================================
   EGGS
========================================================= */

{
  id: "egg-whole",

  type: "fresh",

  category: "Protein",

  subcategory: "Eggs",

  name: "Whole Egg",

  preparation:
    "1 large egg",

  diet: [
    "eggitarian",
    "nonveg"
  ],

  servingReference: {
    amount: 1,
    unit: "piece"
  },

  nutrition: {

    calories: 72,

    proteinG: 6.3,

    carbsG: 0.4,

    fatG: 4.8,

    fibreG: 0,

    calciumMg: 28,

    ironMg: 0.9,

    phosphorusMg: 99,

    potassiumMg: 69,

    sodiumMg: 71,

    vitaminDug: 1,

    vitaminB12Ug: 0.45,

    folateUg: 24

  },

  units: [
    "piece"
  ]
},


{
  id: "egg-white",

  type: "fresh",

  category: "Protein",

  subcategory: "Eggs",

  name: "Egg White",

  preparation:
    "1 large egg white",

  diet: [
    "eggitarian",
    "nonveg"
  ],

  servingReference: {
    amount: 1,
    unit: "piece"
  },

  nutrition: {

    calories: 17,

    proteinG: 3.6,

    carbsG: 0.2,

    fatG: 0.1

  },

  units: [
    "piece"
  ]
},



/* =========================================================
   CHICKEN

   RAW and COOKED are separate.
========================================================= */

{
  id: "chicken-breast-raw",

  type: "fresh",

  category: "Protein",

  subcategory: "Chicken",

  name:
    "Chicken Breast - Raw",

  preparation:
    "Skinless, raw",

  diet: [
    "nonveg"
  ],

  servingReference: {
    amount: 100,
    unit: "g"
  },

  nutrition: {

    calories: 120,

    proteinG: 22.5,

    carbsG: 0,

    fatG: 2.6,

    fibreG: 0,

    ironMg: 0.4,

    magnesiumMg: 28,

    phosphorusMg: 210,

    potassiumMg: 330,

    sodiumMg: 45,

    zincMg: 0.7,

    vitaminB12Ug: 0.2

  },

  units: [
    "g"
  ]
},


{
  id: "chicken-breast-cooked",

  type: "prepared",

  category: "Protein",

  subcategory: "Chicken",

  name:
    "Chicken Breast - Cooked",

  preparation:
    "Cooked skinless",

  diet: [
    "nonveg"
  ],

  servingReference: {
    amount: 100,
    unit: "g"
  },

  nutrition: {

    calories: 165,

    proteinG: 31,

    carbsG: 0,

    fatG: 3.6,

    fibreG: 0,

    ironMg: 1,

    magnesiumMg: 29,

    phosphorusMg: 228,

    potassiumMg: 256,

    sodiumMg: 74,

    zincMg: 1

  },

  units: [
    "g"
  ]
},


{
  id: "chicken-thigh-raw",

  type: "fresh",

  category: "Protein",

  subcategory: "Chicken",

  name:
    "Chicken Thigh - Raw",

  preparation:
    "Skinless",

  diet: [
    "nonveg"
  ],

  servingReference: {
    amount: 100,
    unit: "g"
  },

  nutrition: {

    calories: 145,

    proteinG: 19,

    carbsG: 0,

    fatG: 7

  },

  units: [
    "g"
  ]
},



/* =========================================================
   PANEER / TOFU / DAIRY
========================================================= */

{
  id: "paneer-generic",

  type: "generic",

  category: "Protein",

  subcategory: "Paneer",

  name:
    "Paneer - Full Fat",

  preparation:
    "Generic",

  diet: [
    "vegetarian",
    "eggitarian",
    "nonveg"
  ],

  servingReference: {
    amount: 100,
    unit: "g"
  },

  nutrition: {

    calories: 265,

    proteinG: 18.3,

    carbsG: 1.2,

    fatG: 20.8,

    calciumMg: 480,

    phosphorusMg: 300

  },

  units: [
    "g"
  ]
},


{
  id: "amul-paneer",

  type: "branded",

  category: "Protein",

  subcategory: "Paneer",

  brand: "Amul",

  name:
    "Amul Fresh Paneer",

  preparation:
    "Branded paneer",

  diet: [
    "vegetarian",
    "eggitarian",
    "nonveg"
  ],

  servingReference: {
    amount: 100,
    unit: "g"
  },

  nutrition: {

    calories: 296,

    proteinG: 20,

    carbsG: 4.5,

    fatG: 22

  },

  units: [
    "g"
  ]
},


{
  id: "tofu-firm",

  type: "generic",

  category: "Protein",

  subcategory: "Tofu",

  name:
    "Firm Tofu",

  preparation:
    "Plain",

  diet: [
    "vegetarian",
    "vegan",
    "eggitarian",
    "nonveg"
  ],

  servingReference: {
    amount: 100,
    unit: "g"
  },

  nutrition: {

    calories: 144,

    proteinG: 17.3,

    carbsG: 2.8,

    fatG: 8.7,

    fibreG: 2.3,

    calciumMg: 683,

    ironMg: 2.7,

    magnesiumMg: 58,

    phosphorusMg: 190,

    potassiumMg: 237,

    sodiumMg: 14,

    zincMg: 1.6,

    folateUg: 29

  },

  units: [
    "g"
  ]
},


{
  id: "curd",

  type: "generic",

  category: "Dairy",

  name:
    "Plain Curd / Dahi",

  diet: [
    "vegetarian",
    "eggitarian",
    "nonveg"
  ],

  servingReference: {
    amount: 100,
    unit: "g"
  },

  nutrition: {

    calories: 61,

    proteinG: 3.5,

    carbsG: 4.7,

    fatG: 3.3,

    calciumMg: 121,

    potassiumMg: 155

  },

  units: [
    "g"
  ]
},


{
  id: "milk-cow",

  type: "generic",

  category: "Dairy",

  name:
    "Cow Milk",

  diet: [
    "vegetarian",
    "eggitarian",
    "nonveg"
  ],

  servingReference: {
    amount: 100,
    unit: "ml"
  },

  nutrition: {

    calories: 61,

    proteinG: 3.2,

    carbsG: 4.8,

    fatG: 3.3,

    calciumMg: 113,

    potassiumMg: 132,

    vitaminB12Ug: 0.45

  },

  units: [
    "ml"
  ]
},



/* =========================================================
   DAL / PULSES
========================================================= */

{
  id: "toor-dal-cooked",

  type: "prepared",

  category: "Dal & Pulses",

  name:
    "Toor Dal - Cooked",

  diet: [
    "vegetarian",
    "vegan",
    "eggitarian",
    "nonveg"
  ],

  servingReference: {
    amount: 100,
    unit: "g"
  },

  nutrition: {

    calories: 116,

    proteinG: 7,

    carbsG: 20,

    fatG: 1,

    fibreG: 7,

    ironMg: 1.3,

    magnesiumMg: 36,

    potassiumMg: 370,

    folateUg: 100

  },

  units: [
    "g"
  ]
},


{
  id: "moong-dal-cooked",

  type: "prepared",

  category: "Dal & Pulses",

  name:
    "Moong Dal - Cooked",

  diet: [
    "vegetarian",
    "vegan",
    "eggitarian",
    "nonveg"
  ],

  servingReference: {
    amount: 100,
    unit: "g"
  },

  nutrition: {

    calories: 105,

    proteinG: 7,

    carbsG: 19,

    fatG: 0.4,

    fibreG: 7.6,

    potassiumMg: 266,

    ironMg: 1.4

  },

  units: [
    "g"
  ]
},


{
  id: "masoor-dal-cooked",

  type: "prepared",

  category: "Dal & Pulses",

  name:
    "Masoor Dal - Cooked",

  diet: [
    "vegetarian",
    "vegan",
    "eggitarian",
    "nonveg"
  ],

  servingReference: {
    amount: 100,
    unit: "g"
  },

  nutrition: {

    calories: 116,

    proteinG: 9,

    carbsG: 20,

    fatG: 0.4,

    fibreG: 8,

    ironMg: 3.3,

    potassiumMg: 369,

    folateUg: 181

  },

  units: [
    "g"
  ]
},


{
  id: "rajma-cooked",

  type: "prepared",

  category: "Dal & Pulses",

  name:
    "Rajma - Cooked",

  diet: [
    "vegetarian",
    "vegan",
    "eggitarian",
    "nonveg"
  ],

  servingReference: {
    amount: 100,
    unit: "g"
  },

  nutrition: {

    calories: 127,

    proteinG: 8.7,

    carbsG: 22.8,

    fatG: 0.5,

    fibreG: 6.4,

    ironMg: 2.9,

    potassiumMg: 403,

    magnesiumMg: 45

  },

  units: [
    "g"
  ]
},


{
  id: "chickpeas-cooked",

  type: "prepared",

  category: "Dal & Pulses",

  name:
    "Chana / Chickpeas - Cooked",

  diet: [
    "vegetarian",
    "vegan",
    "eggitarian",
    "nonveg"
  ],

  servingReference: {
    amount: 100,
    unit: "g"
  },

  nutrition: {

    calories: 164,

    proteinG: 8.9,

    carbsG: 27.4,

    fatG: 2.6,

    fibreG: 7.6,

    ironMg: 2.9,

    potassiumMg: 291

  },

  units: [
    "g"
  ]
},



/* =========================================================
   RICE
========================================================= */

{
  id: "white-rice-cooked",

  type: "prepared",

  category: "Rice",

  name:
    "White Rice - Cooked",

  diet: [
    "vegetarian",
    "vegan",
    "eggitarian",
    "nonveg"
  ],

  servingReference: {
    amount: 100,
    unit: "g"
  },

  nutrition: {

    calories: 130,

    proteinG: 2.7,

    carbsG: 28.2,

    fatG: 0.3,

    fibreG: 0.4

  },

  units: [
    "g"
  ]
},


{
  id: "basmati-rice-cooked",

  type: "prepared",

  category: "Rice",

  name:
    "Basmati Rice - Cooked",

  diet: [
    "vegetarian",
    "vegan",
    "eggitarian",
    "nonveg"
  ],

  servingReference: {
    amount: 100,
    unit: "g"
  },

  nutrition: {

    calories: 130,

    proteinG: 2.7,

    carbsG: 28,

    fatG: 0.3,

    fibreG: 0.4

  },

  units: [
    "g"
  ]
},


{
  id: "brown-rice-cooked",

  type: "prepared",

  category: "Rice",

  name:
    "Brown Rice - Cooked",

  diet: [
    "vegetarian",
    "vegan",
    "eggitarian",
    "nonveg"
  ],

  servingReference: {
    amount: 100,
    unit: "g"
  },

  nutrition: {

    calories: 123,

    proteinG: 2.7,

    carbsG: 25.6,

    fatG: 1,

    fibreG: 1.6,

    magnesiumMg: 44

  },

  units: [
    "g"
  ]
},



/* =========================================================
   FRUITS
========================================================= */

...[
  ["banana","Banana",89,1.1,22.8,0.3,2.6,358,8.7],
  ["apple","Apple",52,0.3,13.8,0.2,2.4,107,4.6],
  ["mango","Mango",60,0.8,15,0.4,1.6,168,36.4],
  ["guava","Guava",68,2.6,14.3,1,5.4,417,228],
  ["orange","Orange",47,0.9,11.8,0.1,2.4,181,53.2],
  ["mosambi","Mosambi / Sweet Lime",43,0.8,10,0.2,2,170,30],
  ["papaya","Papaya",43,0.5,10.8,0.3,1.7,182,60.9],
  ["watermelon","Watermelon",30,0.6,7.6,0.2,0.4,112,8.1],
  ["muskmelon","Muskmelon",34,0.8,8.2,0.2,0.9,267,36.7],
  ["pomegranate","Pomegranate",83,1.7,18.7,1.2,4,236,10.2],
  ["grapes","Grapes",69,0.7,18.1,0.2,0.9,191,3.2],
  ["pineapple","Pineapple",50,0.5,13.1,0.1,1.4,109,47.8],
  ["chikoo","Chikoo / Sapota",83,0.4,20,1.1,5.3,193,14.7],
  ["pear","Pear",57,0.4,15.2,0.1,3.1,116,4.3],
  ["kiwi","Kiwi",61,1.1,14.7,0.5,3,312,92.7],
  ["strawberry","Strawberry",32,0.7,7.7,0.3,2,153,58.8],
  ["blueberry","Blueberry",57,0.7,14.5,0.3,2.4,77,9.7],
  ["dragon-fruit","Dragon Fruit",57,0.4,13,0.1,3,116,2.5],
  ["plum","Plum",46,0.7,11.4,0.3,1.4,157,9.5],
  ["peach","Peach",39,0.9,9.5,0.3,1.5,190,6.6],
  ["fig","Fresh Fig",74,0.8,19.2,0.3,2.9,232,2],
  ["dates","Dates",282,2.5,75,0.4,8,656,0],
  ["avocado","Avocado",160,2,8.5,14.7,6.7,485,10]
].map(item => ({

  id: `fruit-${item[0]}`,

  type: "fresh",

  category: "Fruits",

  name: item[1],

  preparation: "Raw",

  diet: [
    "vegetarian",
    "vegan",
    "eggitarian",
    "nonveg"
  ],

  servingReference: {
    amount: 100,
    unit: "g"
  },

  nutrition: {

    calories: item[2],

    proteinG: item[3],

    carbsG: item[4],

    fatG: item[5],

    fibreG: item[6],

    potassiumMg: item[7],

    vitaminCmg: item[8]

  },

  units: [
    "g"
  ]

})),



/* =========================================================
   VEGETABLES
========================================================= */

...[
  ["spinach","Spinach / Palak",23,2.9,3.6,0.4,2.2,558,28.1,99,2.7],
  ["tomato","Tomato",18,0.9,3.9,0.2,1.2,237,13.7,10,0.27],
  ["onion","Onion",40,1.1,9.3,0.1,1.7,146,7.4,23,0.21],
  ["potato","Potato",77,2,17.5,0.1,2.2,425,19.7,12,0.81],
  ["sweet-potato","Sweet Potato",86,1.6,20.1,0.1,3,337,2.4,30,0.61],
  ["carrot","Carrot",41,0.9,9.6,0.2,2.8,320,5.9,33,0.3],
  ["beetroot","Beetroot",43,1.6,9.6,0.2,2.8,325,4.9,16,0.8],
  ["radish","Radish",16,0.7,3.4,0.1,1.6,233,14.8,25,0.34],
  ["cucumber","Cucumber",15,0.7,3.6,0.1,0.5,147,2.8,16,0.28],
  ["cabbage","Cabbage",25,1.3,5.8,0.1,2.5,170,36.6,40,0.47],
  ["cauliflower","Cauliflower",25,1.9,5,0.3,2,299,48.2,22,0.42],
  ["broccoli","Broccoli",34,2.8,6.6,0.4,2.6,316,89.2,47,0.73],
  ["okra","Bhindi / Okra",33,1.9,7.5,0.2,3.2,299,23,82,0.62],
  ["brinjal","Brinjal / Eggplant",25,1,6,0.2,3,229,2.2,9,0.23],
  ["bottle-gourd","Bottle Gourd / Lauki",15,0.6,3.7,0,1.2,170,10.1,26,0.2],
  ["ridge-gourd","Ridge Gourd / Turai",20,1.2,4.4,0.2,1.1,139,12,18,0.4],
  ["bitter-gourd","Bitter Gourd / Karela",17,1,3.7,0.2,2.8,296,84,19,0.4],
  ["pumpkin","Pumpkin",26,1,6.5,0.1,0.5,340,9,21,0.8],
  ["capsicum-green","Green Capsicum",20,0.9,4.6,0.2,1.7,175,80.4,10,0.34],
  ["capsicum-red","Red Capsicum",31,1,6,0.3,2.1,211,127.7,7,0.43],
  ["green-peas","Green Peas",81,5.4,14.5,0.4,5.7,244,40,25,1.47],
  ["french-beans","French Beans",31,1.8,7,0.2,2.7,211,12.2,37,1.03],
  ["mushroom","Mushrooms",22,3.1,3.3,0.3,1,318,2.1,3,0.5],
  ["corn","Sweet Corn",86,3.3,19,1.4,2.7,270,6.8,2,0.52]
].map(item => ({

  id: `veg-${item[0]}`,

  type: "fresh",

  category: "Vegetables",

  name: item[1],

  preparation: "Raw",

  diet: [
    "vegetarian",
    "vegan",
    "eggitarian",
    "nonveg"
  ],

  servingReference: {
    amount: 100,
    unit: "g"
  },

  nutrition: {

    calories: item[2],

    proteinG: item[3],

    carbsG: item[4],

    fatG: item[5],

    fibreG: item[6],

    potassiumMg: item[7],

    vitaminCmg: item[8],

    calciumMg: item[9],

    ironMg: item[10]

  },

  units: [
    "g"
  ]

})),



/* =========================================================
   NUTS
========================================================= */

{
  id: "almonds",

  type: "fresh",

  category: "Nuts & Seeds",

  name: "Almonds",

  diet: [
    "vegetarian",
    "vegan",
    "eggitarian",
    "nonveg"
  ],

  servingReference: {
    amount: 100,
    unit: "g"
  },

  nutrition: {

    calories: 579,

    proteinG: 21.2,

    carbsG: 21.6,

    fatG: 49.9,

    fibreG: 12.5,

    calciumMg: 269,

    ironMg: 3.7,

    magnesiumMg: 270,

    potassiumMg: 733

  },

  units: [
    "g"
  ]
},


{
  id: "peanuts",

  type: "fresh",

  category: "Nuts & Seeds",

  name: "Peanuts",

  diet: [
    "vegetarian",
    "vegan",
    "eggitarian",
    "nonveg"
  ],

  servingReference: {
    amount: 100,
    unit: "g"
  },

  nutrition: {

    calories: 567,

    proteinG: 25.8,

    carbsG: 16.1,

    fatG: 49.2,

    fibreG: 8.5,

    magnesiumMg: 168,

    potassiumMg: 705

  },

  units: [
    "g"
  ]
},



/* =========================================================
   GHEE / OILS
========================================================= */

{
  id: "amul-ghee",

  type: "branded",

  category: "Ghee & Oils",

  brand: "Amul",

  name:
    "Amul Pure Ghee",

  diet: [
    "vegetarian",
    "eggitarian",
    "nonveg"
  ],

  servingReference: {
    amount: 100,
    unit: "g"
  },

  density: 0.91,

  nutrition: {

    calories: 900,

    proteinG: 0,

    carbsG: 0,

    fatG: 100

  },

  units: [
    "g",
    "ml",
    "tsp",
    "tbsp"
  ]
},


{
  id: "gowardhan-ghee",

  type: "branded",

  category: "Ghee & Oils",

  brand: "Gowardhan",

  name:
    "Gowardhan Cow Ghee",

  diet: [
    "vegetarian",
    "eggitarian",
    "nonveg"
  ],

  servingReference: {
    amount: 100,
    unit: "g"
  },

  density: 0.91,

  nutrition: {

    calories: 900,

    proteinG: 0,

    carbsG: 0,

    fatG: 100

  },

  units: [
    "g",
    "ml",
    "tsp",
    "tbsp"
  ]
},


{
  id: "grb-ghee",

  type: "branded",

  category: "Ghee & Oils",

  brand: "GRB",

  name:
    "GRB Pure Ghee",

  diet: [
    "vegetarian",
    "eggitarian",
    "nonveg"
  ],

  servingReference: {
    amount: 100,
    unit: "g"
  },

  density: 0.91,

  nutrition: {

    calories: 898,

    proteinG: 0,

    carbsG: 0,

    fatG: 99.8,

    saturatedFatG: 63.3

  },

  units: [
    "g",
    "ml",
    "tsp",
    "tbsp"
  ]
},


{
  id: "mustard-oil",

  type: "generic",

  category: "Ghee & Oils",

  name:
    "Mustard Oil",

  diet: [
    "vegetarian",
    "vegan",
    "eggitarian",
    "nonveg"
  ],

  servingReference: {
    amount: 100,
    unit: "g"
  },

  density: 0.92,

  nutrition: {

    calories: 884,

    proteinG: 0,

    carbsG: 0,

    fatG: 100

  },

  units: [
    "g",
    "ml",
    "tsp",
    "tbsp"
  ]
},


{
  id: "groundnut-oil",

  type: "generic",

  category: "Ghee & Oils",

  name:
    "Groundnut Oil",

  diet: [
    "vegetarian",
    "vegan",
    "eggitarian",
    "nonveg"
  ],

  servingReference: {
    amount: 100,
    unit: "g"
  },

  density: 0.91,

  nutrition: {

    calories: 884,

    proteinG: 0,

    carbsG: 0,

    fatG: 100

  },

  units: [
    "g",
    "ml",
    "tsp",
    "tbsp"
  ]
},


{
  id: "sunflower-oil",

  type: "generic",

  category: "Ghee & Oils",

  name:
    "Sunflower Oil",

  diet: [
    "vegetarian",
    "vegan",
    "eggitarian",
    "nonveg"
  ],

  servingReference: {
    amount: 100,
    unit: "g"
  },

  density: 0.92,

  nutrition: {

    calories: 884,

    proteinG: 0,

    carbsG: 0,

    fatG: 100

  },

  units: [
    "g",
    "ml",
    "tsp",
    "tbsp"
  ]
}

];


/* =========================================================
   HELPERS
========================================================= */

export function getFoodById(id) {

  return foods.find(
    food =>
      food.id === id
  );

}


/* =========================================================
   CALCULATE NUTRITION

   Supports:
   grams
   millilitres
   teaspoons
   tablespoons
   pieces
========================================================= */

export function calculateNutrition(
  food,
  amount,
  unit
) {

  let multiplier = 1;


  /* PIECES */

  if (
    unit === "piece" &&
    food.servingReference.unit === "piece"
  ) {

    multiplier =
      amount /
      food.servingReference.amount;

  }


  /* ML-BASED FOODS */

  else if (
    unit === "ml" &&
    food.servingReference.unit === "ml"
  ) {

    multiplier =
      amount /
      food.servingReference.amount;

  }


  else {

    let grams =
      amount;


    if (unit === "ml") {

      grams =
        amount *
        (food.density || 1);

    }


    if (unit === "tsp") {

      grams =

        amount *

        5 *

        (food.density || 1);

    }


    if (unit === "tbsp") {

      grams =

        amount *

        15 *

        (food.density || 1);

    }


    multiplier =
      grams /
      food.servingReference.amount;

  }


  const result = {};


  Object.entries(
    food.nutrition
  ).forEach(

    ([key, value]) => {

      result[key] =

        value == null

          ? null

          : value *
            multiplier;

    }

  );


  return result;

}