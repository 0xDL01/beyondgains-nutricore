/*
===========================================================
NUTRICORE FOOD DATABASE

Rules:

1. Generic foods:
   reference nutrition estimates.

2. Branded foods:
   exact macros only if label/source was verified.

3. label-required:
   searchable, but the app refuses to invent macros.

4. Pune availability:
   "check-live" means brand/product is relevant to
   Pune but current store stock is not guaranteed.
===========================================================
*/


export const ALL_DIETS = [

  "vegetarian",

  "vegan",

  "eggitarian",

  "nonveg"

];


export const VEG_DAIRY = [

  "vegetarian",

  "eggitarian",

  "nonveg"

];


export const NONVEG = [
  "nonveg"
];


export const EGG = [

  "eggitarian",

  "nonveg"

];



/* =========================================================
   GENERIC CREATOR
========================================================= */

function generic(

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

    subcategory:
      extra.subcategory || "",

    brand:
      null,

    type:
      "generic",

    diet:
      extra.diet ||
      ALL_DIETS,

    description:
      extra.description ||
      "Generic reference",

    basis:
      extra.basis ||
      "100g",

    unit:
      extra.unit ||
      "g",

    pieceWeightG:
      extra.pieceWeightG ||
      null,

    nutritionStatus:
      "reference-generic",

    availability:
      "generic",

    nutrition: {

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

      sodiumMg:
        extra.sodiumMg || 0,

      zincMg:
        extra.zincMg || 0,

      vitaminCmg:
        extra.vitaminCmg || 0,

      vitaminDug:
        extra.vitaminDug || 0,

      vitaminB12Ug:
        extra.vitaminB12Ug || 0,

      folateUg:
        extra.folateUg || 0

    }

  };

}



/* =========================================================
   BRANDED CREATOR
========================================================= */

function branded(
  options
) {

  return {

    type:
      "branded",

    diet:
      VEG_DAIRY,

    category:
      "Branded Dairy",

    subcategory:
      "",

    availability:
      "check-live",

    nutritionStatus:
      "label-required",

    nutrition:
      null,

    ...options

  };

}



/* =========================================================
   FRUITS
========================================================= */

export const fruits = [

  generic(
    "banana",
    "Banana",
    "Fruits",
    89,
    1.1,
    22.8,
    0.3,
    2.6,
    {
      unit:
        "piece",

      pieceWeightG:
        118,

      potassiumMg:
        358,

      vitaminCmg:
        8.7
    }
  ),


  generic(
    "apple",
    "Apple",
    "Fruits",
    52,
    0.3,
    13.8,
    0.2,
    2.4,
    {
      unit:
        "piece",

      pieceWeightG:
        182
    }
  ),


  generic(
    "mango",
    "Mango",
    "Fruits",
    60,
    0.8,
    15,
    0.4,
    1.6,
    {
      unit:
        "piece",

      pieceWeightG:
        200,

      vitaminCmg:
        36.4
    }
  ),


  generic(
    "alphonso-mango",
    "Alphonso Mango / Hapus",
    "Fruits",
    60,
    0.8,
    15,
    0.4,
    1.6,
    {
      unit:
        "piece",

      pieceWeightG:
        180
    }
  ),


  generic(
    "kesar-mango",
    "Kesar Mango",
    "Fruits",
    60,
    0.8,
    15,
    0.4,
    1.6,
    {
      unit:
        "piece",

      pieceWeightG:
        200
    }
  ),


  generic(
    "orange",
    "Orange",
    "Fruits",
    47,
    0.9,
    11.8,
    0.1,
    2.4,
    {
      unit:
        "piece",

      pieceWeightG:
        130,

      vitaminCmg:
        53
    }
  ),


  generic(
    "mosambi",
    "Mosambi / Sweet Lime",
    "Fruits",
    43,
    0.8,
    10,
    0.2,
    2,
    {
      unit:
        "piece",

      pieceWeightG:
        150,

      vitaminCmg:
        30
    }
  ),


  generic(
    "guava",
    "Guava / Peru",
    "Fruits",
    68,
    2.6,
    14.3,
    1,
    5.4,
    {
      unit:
        "piece",

      pieceWeightG:
        100,

      potassiumMg:
        417,

      vitaminCmg:
        228
    }
  ),


  generic(
    "papaya",
    "Papaya",
    "Fruits",
    43,
    0.5,
    10.8,
    0.3,
    1.7,
    {
      potassiumMg:
        182,

      vitaminCmg:
        61
    }
  ),


  generic(
    "pomegranate",
    "Pomegranate / Anar",
    "Fruits",
    83,
    1.7,
    18.7,
    1.2,
    4,
    {
      unit:
        "piece",

      pieceWeightG:
        170,

      potassiumMg:
        236
    }
  ),


  generic(
    "watermelon",
    "Watermelon",
    "Fruits",
    30,
    0.6,
    7.6,
    0.2,
    0.4
  ),


  generic(
    "muskmelon",
    "Muskmelon / Kharbuja",
    "Fruits",
    34,
    0.8,
    8.2,
    0.2,
    0.9,
    {
      potassiumMg:
        267
    }
  ),


  generic(
    "pineapple",
    "Pineapple",
    "Fruits",
    50,
    0.5,
    13.1,
    0.1,
    1.4,
    {
      vitaminCmg:
        48
    }
  ),


  generic(
    "green-grapes",
    "Green Grapes",
    "Fruits",
    69,
    0.7,
    18.1,
    0.2,
    0.9
  ),


  generic(
    "black-grapes",
    "Black Grapes",
    "Fruits",
    69,
    0.7,
    18,
    0.2,
    0.9
  ),


  generic(
    "chikoo",
    "Chikoo / Sapota",
    "Fruits",
    83,
    0.4,
    20,
    1.1,
    5.3,
    {
      unit:
        "piece",

      pieceWeightG:
        100
    }
  ),


  generic(
    "custard-apple",
    "Custard Apple / Sitaphal",
    "Fruits",
    94,
    2.1,
    23.6,
    0.3,
    4.4,
    {
      unit:
        "piece",

      pieceWeightG:
        160
    }
  ),


  generic(
    "pear",
    "Pear / Nashpati",
    "Fruits",
    57,
    0.4,
    15.2,
    0.1,
    3.1,
    {
      unit:
        "piece",

      pieceWeightG:
        178
    }
  ),


  generic(
    "kiwi",
    "Kiwi",
    "Fruits",
    61,
    1.1,
    14.7,
    0.5,
    3,
    {
      unit:
        "piece",

      pieceWeightG:
        75,

      vitaminCmg:
        93
    }
  ),


  generic(
    "strawberry",
    "Strawberry",
    "Fruits",
    32,
    0.7,
    7.7,
    0.3,
    2,
    {
      vitaminCmg:
        59
    }
  ),


  generic(
    "blueberry",
    "Blueberry",
    "Fruits",
    57,
    0.7,
    14.5,
    0.3,
    2.4
  ),


  generic(
    "raspberry",
    "Raspberry",
    "Fruits",
    52,
    1.2,
    12,
    0.7,
    6.5
  ),


  generic(
    "blackberry",
    "Blackberry",
    "Fruits",
    43,
    1.4,
    10,
    0.5,
    5.3
  ),


  generic(
    "dragon-fruit",
    "Dragon Fruit",
    "Fruits",
    57,
    0.4,
    13,
    0.1,
    3,
    {
      unit:
        "piece",

      pieceWeightG:
        250
    }
  ),


  generic(
    "peach",
    "Peach",
    "Fruits",
    39,
    0.9,
    9.5,
    0.3,
    1.5,
    {
      unit:
        "piece",

      pieceWeightG:
        150
    }
  ),


  generic(
    "plum",
    "Plum",
    "Fruits",
    46,
    0.7,
    11.4,
    0.3,
    1.4,
    {
      unit:
        "piece",

      pieceWeightG:
        66
    }
  ),


  generic(
    "cherry",
    "Cherry",
    "Fruits",
    63,
    1.1,
    16,
    0.2,
    2.1
  ),


  generic(
    "litchi",
    "Litchi",
    "Fruits",
    66,
    0.8,
    16.5,
    0.4,
    1.3
  ),


  generic(
    "jackfruit-ripe",
    "Jackfruit - Ripe",
    "Fruits",
    95,
    1.7,
    23.2,
    0.6,
    1.5
  ),


  generic(
    "amla",
    "Amla / Indian Gooseberry",
    "Fruits",
    44,
    0.9,
    10.2,
    0.6,
    4.3,
    {
      vitaminCmg:
        250
    }
  ),


  generic(
    "jamun",
    "Jamun",
    "Fruits",
    60,
    0.7,
    15.6,
    0.2,
    0.6
  ),


  generic(
    "avocado",
    "Avocado",
    "Fruits",
    160,
    2,
    8.5,
    14.7,
    6.7,
    {
      unit:
        "piece",

      pieceWeightG:
        150,

      potassiumMg:
        485
    }
  ),


  generic(
    "fig-fresh",
    "Fresh Fig / Anjeer",
    "Fruits",
    74,
    0.8,
    19.2,
    0.3,
    2.9,
    {
      unit:
        "piece",

      pieceWeightG:
        50
    }
  ),


  generic(
    "dates",
    "Dates / Khajur",
    "Fruits",
    282,
    2.5,
    75,
    0.4,
    8
  ),


  generic(
    "apricot",
    "Apricot",
    "Fruits",
    48,
    1.4,
    11.1,
    0.4,
    2
  ),


  generic(
    "coconut-fresh",
    "Fresh Coconut",
    "Fruits",
    354,
    3.3,
    15.2,
    33.5,
    9
  ),


  generic(
    "tender-coconut-water",
    "Tender Coconut Water",
    "Fruits",
    19,
    0.7,
    3.7,
    0.2,
    1.1,
    {
      basis:
        "100ml",

      unit:
        "ml"
    }
  ),


  generic(
    "star-fruit",
    "Star Fruit",
    "Fruits",
    31,
    1,
    6.7,
    0.3,
    2.8
  ),


  generic(
    "passion-fruit",
    "Passion Fruit",
    "Fruits",
    97,
    2.2,
    23.4,
    0.7,
    10.4
  ),


  generic(
    "mulberry",
    "Mulberry",
    "Fruits",
    43,
    1.4,
    9.8,
    0.4,
    1.7
  )

];



/* =========================================================
   VEGETABLES
========================================================= */

export const vegetables = [

  generic(
    "spinach",
    "Spinach / Palak",
    "Vegetables",
    23,
    2.9,
    3.6,
    0.4,
    2.2,
    {
      potassiumMg:
        558,

      calciumMg:
        99,

      ironMg:
        2.7,

      magnesiumMg:
        79,

      vitaminCmg:
        28,

      folateUg:
        194
    }
  ),


  generic(
    "methi",
    "Methi Leaves",
    "Vegetables",
    49,
    4.4,
    6,
    0.9,
    1.1
  ),


  generic(
    "amaranth",
    "Amaranth / Chaulai",
    "Vegetables",
    23,
    2.5,
    4,
    0.3,
    2.2
  ),


  generic(
    "bathua",
    "Bathua",
    "Vegetables",
    43,
    4.2,
    7,
    0.8,
    4
  ),


  generic(
    "coriander",
    "Fresh Coriander",
    "Vegetables",
    23,
    2.1,
    3.7,
    0.5,
    2.8
  ),


  generic(
    "mint",
    "Mint / Pudina",
    "Vegetables",
    44,
    3.3,
    8.4,
    0.7,
    6.8
  ),


  generic(
    "lettuce",
    "Lettuce",
    "Vegetables",
    15,
    1.4,
    2.9,
    0.2,
    1.3
  ),


  generic(
    "cabbage",
    "Green Cabbage",
    "Vegetables",
    25,
    1.3,
    5.8,
    0.1,
    2.5
  ),


  generic(
    "red-cabbage",
    "Red Cabbage",
    "Vegetables",
    31,
    1.4,
    7.4,
    0.2,
    2.1
  ),


  generic(
    "cauliflower",
    "Cauliflower / Gobi",
    "Vegetables",
    25,
    1.9,
    5,
    0.3,
    2
  ),


  generic(
    "broccoli",
    "Broccoli",
    "Vegetables",
    34,
    2.8,
    6.6,
    0.4,
    2.6
  ),


  generic(
    "carrot",
    "Carrot / Gajar",
    "Vegetables",
    41,
    0.9,
    9.6,
    0.2,
    2.8
  ),


  generic(
    "beetroot",
    "Beetroot",
    "Vegetables",
    43,
    1.6,
    9.6,
    0.2,
    2.8
  ),


  generic(
    "radish",
    "Radish / Mooli",
    "Vegetables",
    16,
    0.7,
    3.4,
    0.1,
    1.6
  ),


  generic(
    "turnip",
    "Turnip / Shalgam",
    "Vegetables",
    28,
    0.9,
    6.4,
    0.1,
    1.8
  ),


  generic(
    "onion",
    "Onion",
    "Vegetables",
    40,
    1.1,
    9.3,
    0.1,
    1.7
  ),


  generic(
    "spring-onion",
    "Spring Onion",
    "Vegetables",
    32,
    1.8,
    7.3,
    0.2,
    2.6
  ),


  generic(
    "tomato",
    "Tomato",
    "Vegetables",
    18,
    0.9,
    3.9,
    0.2,
    1.2
  ),


  generic(
    "potato",
    "Potato",
    "Vegetables",
    77,
    2,
    17.5,
    0.1,
    2.2
  ),


  generic(
    "sweet-potato",
    "Sweet Potato / Ratale",
    "Vegetables",
    86,
    1.6,
    20.1,
    0.1,
    3
  ),


  generic(
    "yam",
    "Yam / Suran",
    "Vegetables",
    118,
    1.5,
    27.9,
    0.2,
    4.1
  ),


  generic(
    "taro",
    "Arbi / Taro Root",
    "Vegetables",
    112,
    1.5,
    26.5,
    0.2,
    4.1
  ),


  generic(
    "okra",
    "Bhindi / Okra",
    "Vegetables",
    33,
    1.9,
    7.5,
    0.2,
    3.2
  ),


  generic(
    "brinjal",
    "Brinjal / Baingan",
    "Vegetables",
    25,
    1,
    6,
    0.2,
    3
  ),


  generic(
    "bottle-gourd",
    "Bottle Gourd / Lauki / Doodhi",
    "Vegetables",
    15,
    0.6,
    3.7,
    0,
    1.2
  ),


  generic(
    "ridge-gourd",
    "Ridge Gourd / Turai / Dodka",
    "Vegetables",
    20,
    1.2,
    4.4,
    0.2,
    1.1
  ),


  generic(
    "bitter-gourd",
    "Bitter Gourd / Karela",
    "Vegetables",
    17,
    1,
    3.7,
    0.2,
    2.8
  ),


  generic(
    "snake-gourd",
    "Snake Gourd",
    "Vegetables",
    18,
    0.5,
    4.1,
    0.3,
    0.6
  ),


  generic(
    "ivy-gourd",
    "Ivy Gourd / Tindora / Tendli",
    "Vegetables",
    18,
    1.2,
    3.1,
    0.1,
    1.6
  ),


  generic(
    "pointed-gourd",
    "Pointed Gourd / Parwal",
    "Vegetables",
    20,
    1.2,
    4.4,
    0.2,
    2
  ),


  generic(
    "pumpkin",
    "Pumpkin / Kaddu",
    "Vegetables",
    26,
    1,
    6.5,
    0.1,
    0.5
  ),


  generic(
    "ash-gourd",
    "Ash Gourd / Petha",
    "Vegetables",
    13,
    0.4,
    3,
    0.2,
    2.9
  ),


  generic(
    "cucumber",
    "Cucumber / Kheera",
    "Vegetables",
    15,
    0.7,
    3.6,
    0.1,
    0.5
  ),


  generic(
    "zucchini",
    "Zucchini",
    "Vegetables",
    17,
    1.2,
    3.1,
    0.3,
    1
  ),


  generic(
    "capsicum-green",
    "Green Capsicum",
    "Vegetables",
    20,
    0.9,
    4.6,
    0.2,
    1.7
  ),


  generic(
    "capsicum-red",
    "Red Capsicum",
    "Vegetables",
    31,
    1,
    6,
    0.3,
    2.1
  ),


  generic(
    "capsicum-yellow",
    "Yellow Capsicum",
    "Vegetables",
    27,
    1,
    6.3,
    0.2,
    0.9
  ),


  generic(
    "green-chilli",
    "Green Chilli",
    "Vegetables",
    40,
    2,
    9,
    0.2,
    1.5
  ),


  generic(
    "green-peas",
    "Fresh Green Peas / Matar",
    "Vegetables",
    81,
    5.4,
    14.5,
    0.4,
    5.7
  ),


  generic(
    "french-beans",
    "French Beans",
    "Vegetables",
    31,
    1.8,
    7,
    0.2,
    2.7
  ),


  generic(
    "cluster-beans",
    "Cluster Beans / Guar",
    "Vegetables",
    35,
    3.2,
    7,
    0.4,
    3.7
  ),


  generic(
    "broad-beans",
    "Broad Beans",
    "Vegetables",
    88,
    7.9,
    17.6,
    0.7,
    7.5
  ),


  generic(
    "drumstick",
    "Drumstick / Moringa Pods",
    "Vegetables",
    37,
    2.1,
    8.5,
    0.2,
    3.2
  ),


  generic(
    "mushroom-button",
    "Button Mushroom",
    "Vegetables",
    22,
    3.1,
    3.3,
    0.3,
    1
  ),


  generic(
    "oyster-mushroom",
    "Oyster Mushroom",
    "Vegetables",
    33,
    3.3,
    6.1,
    0.4,
    2.3
  ),


  generic(
    "sweet-corn",
    "Sweet Corn",
    "Vegetables",
    86,
    3.3,
    19,
    1.4,
    2.7
  ),


  generic(
    "baby-corn",
    "Baby Corn",
    "Vegetables",
    26,
    2.5,
    5.9,
    0.4,
    2
  ),


  generic(
    "raw-banana",
    "Raw Banana",
    "Vegetables",
    89,
    1.1,
    23,
    0.3,
    2.6
  ),


  generic(
    "raw-jackfruit",
    "Raw Jackfruit",
    "Vegetables",
    95,
    1.7,
    23,
    0.6,
    1.5
  ),


  generic(
    "garlic",
    "Garlic",
    "Vegetables",
    149,
    6.4,
    33,
    0.5,
    2.1
  ),


  generic(
    "ginger",
    "Ginger",
    "Vegetables",
    80,
    1.8,
    17.8,
    0.8,
    2
  ),


  generic(
    "celery",
    "Celery",
    "Vegetables",
    14,
    0.7,
    3,
    0.2,
    1.6
  ),


  generic(
    "asparagus",
    "Asparagus",
    "Vegetables",
    20,
    2.2,
    3.9,
    0.1,
    2.1
  ),


  generic(
    "leek",
    "Leek",
    "Vegetables",
    61,
    1.5,
    14.2,
    0.3,
    1.8
  ),


  generic(
    "knol-khol",
    "Knol Khol / Kohlrabi",
    "Vegetables",
    27,
    1.7,
    6.2,
    0.1,
    3.6
  )

];



/* =========================================================
   DAL / PULSES / SPROUTS
========================================================= */

export const pulses = [

  generic(
    "toor-dal-cooked",
    "Toor Dal - Cooked",
    "Dal & Pulses",
    116,
    7,
    20,
    1,
    7,
    {
      description:
        "Cooked pigeon pea dal"
    }
  ),


  generic(
    "moong-dal-cooked",
    "Yellow Moong Dal - Cooked",
    "Dal & Pulses",
    105,
    7,
    19,
    0.4,
    7.6
  ),


  generic(
    "green-moong-cooked",
    "Whole Green Moong - Cooked",
    "Dal & Pulses",
    105,
    7,
    19,
    0.4,
    7.6
  ),


  generic(
    "masoor-dal-cooked",
    "Masoor Dal - Cooked",
    "Dal & Pulses",
    116,
    9,
    20,
    0.4,
    8
  ),


  generic(
    "urad-dal-cooked",
    "Urad Dal - Cooked",
    "Dal & Pulses",
    116,
    8,
    20,
    0.5,
    7
  ),


  generic(
    "chana-dal-cooked",
    "Chana Dal - Cooked",
    "Dal & Pulses",
    164,
    9,
    27,
    2.6,
    7.6
  ),


  generic(
    "rajma-cooked",
    "Rajma - Cooked",
    "Dal & Pulses",
    127,
    8.7,
    22.8,
    0.5,
    6.4
  ),


  generic(
    "kabuli-chana-cooked",
    "Kabuli Chana - Cooked",
    "Dal & Pulses",
    164,
    8.9,
    27.4,
    2.6,
    7.6
  ),


  generic(
    "kala-chana-cooked",
    "Kala Chana - Cooked",
    "Dal & Pulses",
    164,
    8.9,
    27,
    2.6,
    7.6
  ),


  generic(
    "lobia-cooked",
    "Lobia / Black-Eyed Peas - Cooked",
    "Dal & Pulses",
    116,
    7.7,
    20.8,
    0.5,
    6.5
  ),


  generic(
    "dry-green-peas-cooked",
    "Dried Green Peas - Cooked",
    "Dal & Pulses",
    118,
    8.3,
    21,
    0.4,
    8
  ),


  generic(
    "yellow-peas-cooked",
    "Yellow Peas - Cooked",
    "Dal & Pulses",
    118,
    8,
    21,
    0.4,
    8
  ),


  generic(
    "matki-cooked",
    "Matki / Moth Beans - Cooked",
    "Dal & Pulses",
    117,
    8,
    20,
    0.5,
    7
  ),


  generic(
    "kulith-cooked",
    "Horse Gram / Kulith - Cooked",
    "Dal & Pulses",
    120,
    8,
    21,
    0.5,
    5
  ),


  generic(
    "soybeans-cooked",
    "Soybeans - Cooked",
    "Dal & Pulses",
    173,
    16.6,
    9.9,
    9,
    6
  ),


  generic(
    "soy-chunks-dry",
    "Soy Chunks - Dry",
    "Dal & Pulses",
    345,
    52,
    33,
    0.5,
    13,
    {
      description:
        "Dry weight before soaking"
    }
  ),


  generic(
    "moong-sprouts",
    "Moong Sprouts",
    "Sprouts",
    30,
    3,
    5.9,
    0.2,
    1.8,
    {
      description:
        "Raw sprouts"
    }
  ),


  generic(
    "matki-sprouts",
    "Matki / Moth Bean Sprouts",
    "Sprouts",
    35,
    3.5,
    6,
    0.4,
    2
  ),


  generic(
    "chana-sprouts",
    "Chana Sprouts",
    "Sprouts",
    120,
    7,
    20,
    2,
    6
  ),


  generic(
    "mixed-sprouts",
    "Mixed Sprouts",
    "Sprouts",
    80,
    6,
    13,
    1,
    4
  ),


  generic(
    "alfalfa-sprouts",
    "Alfalfa Sprouts",
    "Sprouts",
    23,
    4,
    2.1,
    0.7,
    1.9
  ),


  generic(
    "soybean-sprouts",
    "Soybean Sprouts",
    "Sprouts",
    122,
    13,
    9.6,
    6.7,
    1.1
  )

];



/* =========================================================
   GENERIC DAIRY
========================================================= */

export const dairyGeneric = [

  generic(
    "cow-milk",
    "Cow Milk",
    "Dairy",
    61,
    3.2,
    4.8,
    3.3,
    0,
    {
      diet:
        VEG_DAIRY,

      basis:
        "100ml",

      unit:
        "ml",

      calciumMg:
        113,

      vitaminB12Ug:
        0.45
    }
  ),


  generic(
    "buffalo-milk",
    "Buffalo Milk",
    "Dairy",
    97,
    3.8,
    5.2,
    6.9,
    0,
    {
      diet:
        VEG_DAIRY,

      basis:
        "100ml",

      unit:
        "ml"
    }
  ),


  generic(
    "toned-milk",
    "Toned Milk - Generic",
    "Dairy",
    58,
    3,
    4.8,
    3,
    0,
    {
      diet:
        VEG_DAIRY,

      basis:
        "100ml",

      unit:
        "ml",

      calciumMg:
        110
    }
  ),


  generic(
    "skim-milk",
    "Skim Milk - Generic",
    "Dairy",
    36,
    3.1,
    5,
    0.4,
    0,
    {
      diet:
        VEG_DAIRY,

      basis:
        "100ml",

      unit:
        "ml",

      calciumMg:
        110
    }
  ),


  generic(
    "curd-plain",
    "Plain Curd / Dahi",
    "Dairy",
    61,
    3.5,
    4.7,
    3.3,
    0,
    {
      diet:
        VEG_DAIRY,

      calciumMg:
        121
    }
  ),


  generic(
    "greek-yogurt-plain",
    "Greek Yogurt - Plain",
    "Dairy",
    73,
    9.9,
    3.9,
    1.9,
    0,
    {
      diet:
        VEG_DAIRY
    }
  ),


  generic(
    "paneer-full-fat",
    "Paneer - Full Fat Generic",
    "Dairy",
    265,
    18.3,
    1.2,
    20.8,
    0,
    {
      diet:
        VEG_DAIRY,

      calciumMg:
        480
    }
  ),


  generic(
    "paneer-low-fat",
    "Paneer - Low Fat Generic",
    "Dairy",
    165,
    23,
    3,
    6,
    0,
    {
      diet:
        VEG_DAIRY
    }
  ),


  generic(
    "buttermilk",
    "Buttermilk / Chaas",
    "Dairy",
    40,
    3.3,
    4.8,
    1,
    0,
    {
      diet:
        VEG_DAIRY,

      basis:
        "100ml",

      unit:
        "ml"
    }
  ),


  generic(
    "lassi-unsweetened",
    "Lassi - Unsweetened",
    "Dairy",
    62,
    3.2,
    5,
    3.3,
    0,
    {
      diet:
        VEG_DAIRY,

      basis:
        "100ml",

      unit:
        "ml"
    }
  ),


  generic(
    "butter",
    "Butter",
    "Dairy",
    717,
    0.9,
    0.1,
    81.1,
    0,
    {
      diet:
        VEG_DAIRY
    }
  ),


  generic(
    "ghee",
    "Ghee",
    "Dairy",
    900,
    0,
    0,
    100,
    0,
    {
      diet:
        VEG_DAIRY
    }
  ),


  generic(
    "cream",
    "Fresh Cream",
    "Dairy",
    340,
    2.1,
    2.8,
    36,
    0,
    {
      diet:
        VEG_DAIRY
    }
  ),


  generic(
    "cheddar",
    "Cheddar Cheese",
    "Dairy",
    403,
    24.9,
    1.3,
    33.1,
    0,
    {
      diet:
        VEG_DAIRY
    }
  ),


  generic(
    "mozzarella",
    "Mozzarella Cheese",
    "Dairy",
    280,
    28,
    3.1,
    17,
    0,
    {
      diet:
        VEG_DAIRY
    }
  )

];



/* =========================================================
   BRANDED DAIRY
========================================================= */

export const brandedDairy = [

  branded({

    id:
      "amul-taaza",

    brand:
      "Amul",

    name:
      "Amul Taaza Toned Milk",

    description:
      "Official label value",

    basis:
      "100ml",

    unit:
      "ml",

    nutritionStatus:
      "verified-label",

    source:
      "Amul official product page",

    availability:
      "check-live",

    nutrition: {

      calories:
        58,

      proteinG:
        3,

      carbsG:
        4.7,

      fatG:
        3,

      fibreG:
        0,

      calciumMg:
        110,

      ironMg:
        0,

      magnesiumMg:
        0,

      potassiumMg:
        0,

      sodiumMg:
        0,

      zincMg:
        0,

      vitaminCmg:
        0,

      vitaminDug:
        0,

      vitaminB12Ug:
        0,

      folateUg:
        0

    }

  }),


  branded({

    id:
      "amul-gold",

    brand:
      "Amul",

    name:
      "Amul Gold Full Cream Milk",

    description:
      "Official label value",

    basis:
      "100ml",

    unit:
      "ml",

    nutritionStatus:
      "verified-label",

    source:
      "Amul official product page",

    nutrition: {

      calories:
        87,

      proteinG:
        3,

      carbsG:
        5,

      fatG:
        6,

      fibreG:
        0,

      calciumMg:
        120,

      ironMg:
        0,

      magnesiumMg:
        0,

      potassiumMg:
        0,

      sodiumMg:
        0,

      zincMg:
        0,

      vitaminCmg:
        0,

      vitaminDug:
        0,

      vitaminB12Ug:
        0,

      folateUg:
        0

    }

  }),


  branded({

    id:
      "amul-slim-trim",

    brand:
      "Amul",

    name:
      "Amul Slim 'n' Trim Milk",

    description:
      "Official label value",

    basis:
      "100ml",

    unit:
      "ml",

    nutritionStatus:
      "verified-label",

    source:
      "Amul official product page",

    nutrition: {

      calories:
        46,

      proteinG:
        3.2,

      carbsG:
        5,

      fatG:
        1.5,

      fibreG:
        0,

      calciumMg:
        120,

      ironMg:
        0,

      magnesiumMg:
        0,

      potassiumMg:
        0,

      sodiumMg:
        0,

      zincMg:
        0,

      vitaminCmg:
        0,

      vitaminDug:
        0,

      vitaminB12Ug:
        0,

      folateUg:
        0

    }

  }),


  branded({

    id:
      "amul-masti-dahi",

    brand:
      "Amul",

    name:
      "Amul Masti Dahi",

    description:
      "Official label value",

    basis:
      "100g",

    unit:
      "g",

    nutritionStatus:
      "verified-label",

    source:
      "Amul official product page",

    nutrition: {

      calories:
        61.5,

      proteinG:
        4,

      carbsG:
        4.4,

      fatG:
        3.1,

      fibreG:
        0,

      calciumMg:
        138,

      ironMg:
        0,

      magnesiumMg:
        0,

      potassiumMg:
        0,

      sodiumMg:
        0,

      zincMg:
        0,

      vitaminCmg:
        0,

      vitaminDug:
        0,

      vitaminB12Ug:
        0,

      folateUg:
        0

    }

  }),


  branded({

    id:
      "amul-low-fat-dahi",

    brand:
      "Amul",

    name:
      "Amul Low Fat Dahi",

    description:
      "Official label value",

    basis:
      "100g",

    unit:
      "g",

    nutritionStatus:
      "verified-label",

    source:
      "Amul official product page",

    nutrition: {

      calories:
        38.1,

      proteinG:
        4,

      carbsG:
        4.4,

      fatG:
        0.5,

      fibreG:
        0,

      calciumMg:
        138,

      ironMg:
        0,

      magnesiumMg:
        0,

      potassiumMg:
        0,

      sodiumMg:
        0,

      zincMg:
        0,

      vitaminCmg:
        0,

      vitaminDug:
        0,

      vitaminB12Ug:
        0,

      folateUg:
        0

    }

  }),


  branded({

    id:
      "amul-malai-paneer",

    brand:
      "Amul",

    name:
      "Amul Malai Paneer",

    description:
      "Official label value",

    basis:
      "100g",

    unit:
      "g",

    nutritionStatus:
      "verified-label",

    source:
      "Amul official product page",

    nutrition: {

      calories:
        323,

      proteinG:
        20,

      carbsG:
        4.5,

      fatG:
        25,

      fibreG:
        0,

      calciumMg:
        480,

      ironMg:
        0,

      magnesiumMg:
        0,

      potassiumMg:
        0,

      sodiumMg:
        0,

      zincMg:
        0,

      vitaminCmg:
        0,

      vitaminDug:
        0,

      vitaminB12Ug:
        0,

      folateUg:
        0

    }

  }),


  branded({

    id:
      "katraj-dahi",

    brand:
      "Katraj Dairy",

    name:
      "Katraj Curd / Dahi",

    description:
      "Official Katraj nutrition value",

    basis:
      "100g",

    unit:
      "g",

    nutritionStatus:
      "verified-label",

    source:
      "Katraj Dairy official product page",

    nutrition: {

      calories:
        62,

      proteinG:
        3.8,

      carbsG:
        4.5,

      fatG:
        3.1,

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

      sodiumMg:
        0,

      zincMg:
        0,

      vitaminCmg:
        0,

      vitaminDug:
        0,

      vitaminB12Ug:
        0,

      folateUg:
        0

    }

  }),


  branded({

    id:
      "chitale-milk",

    brand:
      "Chitale Dairy",

    name:
      "Chitale Milk",

    description:
      "Pune/Maharashtra brand — current pack label required"

  }),


  branded({

    id:
      "chitale-dahi",

    brand:
      "Chitale Dairy",

    name:
      "Chitale Dahi",

    description:
      "Pune/Maharashtra brand — current pack label required"

  }),


  branded({

    id:
      "chitale-paneer",

    brand:
      "Chitale Dairy",

    name:
      "Chitale Paneer",

    description:
      "Pune/Maharashtra brand — current pack label required"

  }),


  branded({

    id:
      "katraj-paneer",

    brand:
      "Katraj Dairy",

    name:
      "Katraj Malai Paneer",

    description:
      "Official product exists; current pack macro label required"

  }),


  branded({

    id:
      "katraj-toned-milk",

    brand:
      "Katraj Dairy",

    name:
      "Katraj Toned Milk",

    description:
      "Pune local dairy — current pack label required"

  }),


  branded({

    id:
      "katraj-cow-milk",

    brand:
      "Katraj Dairy",

    name:
      "Katraj Cow Milk",

    description:
      "Pune local dairy — current pack label required"

  }),


  branded({

    id:
      "milky-mist-paneer",

    brand:
      "Milky Mist",

    name:
      "Milky Mist Paneer",

    description:
      "Listed in Pune delivery catalogues — label verification required"

  }),


  branded({

    id:
      "milky-mist-hp-paneer",

    brand:
      "Milky Mist",

    name:
      "Milky Mist High Protein Low Fat Paneer",

    description:
      "Full current nutrition label required"

  }),


  branded({

    id:
      "milky-mist-greek-yogurt",

    brand:
      "Milky Mist",

    name:
      "Milky Mist Greek Yogurt",

    description:
      "Listed in Pune delivery catalogues — label verification required"

  }),


  branded({

    id:
      "milky-mist-skyr",

    brand:
      "Milky Mist",

    name:
      "Milky Mist Skyr Yogurt",

    description:
      "Full current label required"

  }),


  branded({

    id:
      "akshayakalpa-paneer",

    brand:
      "Akshayakalpa Organic",

    name:
      "Akshayakalpa Organic Malai Paneer",

    description:
      "Listed in Pune delivery catalogues — label verification required"

  }),


  branded({

    id:
      "akshayakalpa-hp-paneer",

    brand:
      "Akshayakalpa Organic",

    name:
      "Akshayakalpa Organic High Protein Paneer",

    description:
      "Current pack label required"

  }),


  branded({

    id:
      "akshayakalpa-curd",

    brand:
      "Akshayakalpa Organic",

    name:
      "Akshayakalpa Organic Curd",

    description:
      "Listed in Pune delivery catalogues — label verification required"

  }),


  branded({

    id:
      "nandini-toned-milk",

    brand:
      "Nandini",

    name:
      "Nandini Toned Milk",

    description:
      "Listed in Pune delivery catalogues — label verification required"

  }),


  branded({

    id:
      "nandini-curd",

    brand:
      "Nandini",

    name:
      "Nandini Curd",

    description:
      "Listed in Pune delivery catalogues — label verification required"

  }),


  branded({

    id:
      "nandini-paneer",

    brand:
      "Nandini",

    name:
      "Nandini Fresh Paneer",

    description:
      "Listed in Pune delivery catalogues — label verification required"

  }),


  branded({

    id:
      "gowardhan-milk",

    brand:
      "Gowardhan",

    name:
      "Gowardhan Fresh Toned Milk",

    description:
      "Label verification required"

  }),


  branded({

    id:
      "gowardhan-curd",

    brand:
      "Gowardhan",

    name:
      "Gowardhan Curd",

    description:
      "Label verification required"

  }),


  branded({

    id:
      "gowardhan-paneer",

    brand:
      "Gowardhan",

    name:
      "Gowardhan Paneer Classic Block",

    description:
      "Listed in Pune delivery catalogues — label verification required"

  }),


  branded({

    id:
      "heritage-milk",

    brand:
      "Heritage",

    name:
      "Heritage Toned Milk",

    description:
      "Listed in Pune delivery catalogues — label verification required"

  }),


  branded({

    id:
      "heritage-curd",

    brand:
      "Heritage",

    name:
      "Heritage Total Curd",

    description:
      "Listed in Pune delivery catalogues — label verification required"

  }),


  branded({

    id:
      "heritage-paneer",

    brand:
      "Heritage",

    name:
      "Heritage Fresh Paneer",

    description:
      "Listed in Pune delivery catalogues — label verification required"

  }),


  branded({

    id:
      "mother-dairy-toned",

    brand:
      "Mother Dairy",

    name:
      "Mother Dairy Toned Milk",

    description:
      "Current pack label required"

  }),


  branded({

    id:
      "mother-dairy-curd",

    brand:
      "Mother Dairy",

    name:
      "Mother Dairy Classic Curd",

    description:
      "Label verification required"

  }),


  branded({

    id:
      "mother-dairy-paneer",

    brand:
      "Mother Dairy",

    name:
      "Mother Dairy Fresh Paneer",

    description:
      "Listed in Pune delivery catalogues — label verification required"

  }),


  branded({

    id:
      "country-delight-paneer",

    brand:
      "Country Delight",

    name:
      "Country Delight Taaza Paneer",

    description:
      "Listed in Pune delivery catalogue — label verification required"

  }),


  branded({

    id:
      "desi-farms-paneer",

    brand:
      "Desi Farms",

    name:
      "Desi Farms Low Fat Paneer",

    description:
      "Listed in Pune delivery catalogue — label verification required"

  }),


  branded({

    id:
      "sids-farm-paneer",

    brand:
      "Sid's Farm",

    name:
      "Sid's Farm Malai Paneer",

    description:
      "Label verification required"

  }),


  branded({

    id:
      "id-fresh-paneer",

    brand:
      "iD Fresh",

    name:
      "iD Fresh Soft & Creamy Paneer",

    description:
      "Listed in Pune delivery catalogue — label verification required"

  }),


  branded({

    id:
      "hatsun-paneer",

    brand:
      "Hatsun",

    name:
      "Hatsun Fresh Paneer",

    description:
      "Label verification required"

  }),


  branded({

    id:
      "godrej-jersey-paneer",

    brand:
      "Godrej Jersey",

    name:
      "Godrej Jersey Super Soft Paneer",

    description:
      "Label verification required"

  }),


  branded({

    id:
      "epigamia-greek-natural",

    brand:
      "Epigamia",

    name:
      "Epigamia Greek Yogurt - Natural",

    description:
      "Label verification required"

  })

];



/* =========================================================
   FISH
========================================================= */

export const fish = [

  generic(
    "rohu",
    "Rohu / Rui",
    "Fish & Seafood",
    97,
    16.6,
    0,
    3.7,
    0,
    {
      diet:
        NONVEG,

      description:
        "Raw reference"
    }
  ),


  generic(
    "katla",
    "Katla / Catla",
    "Fish & Seafood",
    111,
    19,
    0,
    3.2,
    0,
    {
      diet:
        NONVEG,

      description:
        "Raw reference"
    }
  ),


  generic(
    "surmai",
    "Surmai / Seer / King Fish",
    "Fish & Seafood",
    125,
    21,
    0,
    4.5,
    0,
    {
      diet:
        NONVEG,

      description:
        "Raw reference"
    }
  ),


  generic(
    "rawas",
    "Rawas / Indian Salmon",
    "Fish & Seafood",
    172,
    20,
    0,
    10,
    0,
    {
      diet:
        NONVEG,

      description:
        "Raw reference"
    }
  ),


  generic(
    "white-pomfret",
    "White Pomfret / Paplet",
    "Fish & Seafood",
    104,
    18.5,
    0,
    3,
    0,
    {
      diet:
        NONVEG,

      description:
        "Raw reference"
    }
  ),


  generic(
    "black-pomfret",
    "Black Pomfret / Halwa",
    "Fish & Seafood",
    120,
    19,
    0,
    4.5,
    0,
    {
      diet:
        NONVEG,

      description:
        "Raw reference"
    }
  ),


  generic(
    "bangda",
    "Bangda / Indian Mackerel",
    "Fish & Seafood",
    205,
    19,
    0,
    14,
    0,
    {
      diet:
        NONVEG,

      description:
        "Raw reference"
    }
  ),


  generic(
    "basa",
    "Basa / Pangasius",
    "Fish & Seafood",
    90,
    15,
    0,
    3,
    0,
    {
      diet:
        NONVEG,

      description:
        "Raw reference"
    }
  ),


  generic(
    "tilapia",
    "Tilapia / Jalebi Fish",
    "Fish & Seafood",
    96,
    20.1,
    0,
    1.7,
    0,
    {
      diet:
        NONVEG,

      description:
        "Raw reference"
    }
  ),


  generic(
    "bhetki",
    "Bhetki / Barramundi",
    "Fish & Seafood",
    124,
    23,
    0,
    2.6,
    0,
    {
      diet:
        NONVEG,

      description:
        "Raw reference"
    }
  ),


  generic(
    "sardine",
    "Sardine",
    "Fish & Seafood",
    208,
    24.6,
    0,
    11.5,
    0,
    {
      diet:
        NONVEG,

      description:
        "Reference value"
    }
  ),


  generic(
    "tuna",
    "Tuna",
    "Fish & Seafood",
    132,
    28,
    0,
    1.3,
    0,
    {
      diet:
        NONVEG,

      description:
        "Raw reference"
    }
  ),


  generic(
    "salmon",
    "Salmon",
    "Fish & Seafood",
    208,
    20.4,
    0,
    13.4,
    0,
    {
      diet:
        NONVEG,

      description:
        "Raw reference"
    }
  ),


  generic(
    "prawns",
    "Prawns / Shrimp",
    "Fish & Seafood",
    85,
    20,
    0,
    0.5,
    0,
    {
      diet:
        NONVEG,

      description:
        "Raw reference"
    }
  ),


  generic(
    "crab",
    "Crab",
    "Fish & Seafood",
    87,
    18,
    0,
    1.1,
    0,
    {
      diet:
        NONVEG,

      description:
        "Raw reference"
    }
  ),


  generic(
    "squid",
    "Squid / Calamari",
    "Fish & Seafood",
    92,
    15.6,
    3.1,
    1.4,
    0,
    {
      diet:
        NONVEG,

      description:
        "Raw reference"
    }
  ),


  generic(
    "bombay-duck",
    "Bombay Duck / Bombil",
    "Fish & Seafood",
    89,
    18,
    0,
    1.5,
    0,
    {
      diet:
        NONVEG,

      description:
        "Raw reference"
    }
  )

];



/* =========================================================
   MEAT & EGGS
========================================================= */

export const proteins = [

  generic(
    "chicken-breast-raw",
    "Chicken Breast - Raw",
    "Meat & Eggs",
    120,
    22.5,
    0,
    2.6,
    0,
    {
      diet:
        NONVEG,

      description:
        "Skinless raw weight"
    }
  ),


  generic(
    "chicken-thigh-raw",
    "Chicken Thigh - Raw",
    "Meat & Eggs",
    145,
    19,
    0,
    7,
    0,
    {
      diet:
        NONVEG
    }
  ),


  generic(
    "chicken-breast-cooked",
    "Chicken Breast - Cooked",
    "Meat & Eggs",
    165,
    31,
    0,
    3.6,
    0,
    {
      diet:
        NONVEG
    }
  ),


  generic(
    "mutton-raw",
    "Mutton / Goat - Raw",
    "Meat & Eggs",
    143,
    20.6,
    0,
    6.3,
    0,
    {
      diet:
        NONVEG
    }
  ),


  generic(
    "egg-whole",
    "Whole Egg",
    "Meat & Eggs",
    72,
    6.3,
    0.4,
    4.8,
    0,
    {
      diet:
        EGG,

      basis:
        "1 piece",

      unit:
        "piece",

      pieceWeightG:
        null
    }
  ),


  generic(
    "egg-white",
    "Egg White",
    "Meat & Eggs",
    17,
    3.6,
    0.2,
    0.1,
    0,
    {
      diet:
        EGG,

      basis:
        "1 piece",

      unit:
        "piece",

      pieceWeightG:
        null
    }
  )

];



/* =========================================================
   RICE / GRAINS
========================================================= */

export const grains = [

  generic(
    "rice-white-cooked",
    "White Rice - Cooked",
    "Rice & Grains",
    130,
    2.7,
    28.2,
    0.3,
    0.4,
    {
      description:
        "Cooked weight"
    }
  ),


  generic(
    "basmati-cooked",
    "Basmati Rice - Cooked",
    "Rice & Grains",
    130,
    2.7,
    28,
    0.3,
    0.4,
    {
      description:
        "Cooked weight"
    }
  ),


  generic(
    "brown-rice-cooked",
    "Brown Rice - Cooked",
    "Rice & Grains",
    123,
    2.7,
    25.6,
    1,
    1.6,
    {
      description:
        "Cooked weight"
    }
  ),


  generic(
    "indrayani-rice-cooked",
    "Indrayani Rice - Cooked",
    "Rice & Grains",
    130,
    2.7,
    28,
    0.3,
    0.4,
    {
      description:
        "Generic cooked reference"
    }
  ),


  generic(
    "ambemohar-rice-cooked",
    "Ambemohar Rice - Cooked",
    "Rice & Grains",
    130,
    2.7,
    28,
    0.3,
    0.4,
    {
      description:
        "Generic cooked reference"
    }
  ),


  generic(
    "oats-dry",
    "Oats - Dry",
    "Rice & Grains",
    389,
    16.9,
    66.3,
    6.9,
    10.6
  ),


  generic(
    "quinoa-cooked",
    "Quinoa - Cooked",
    "Rice & Grains",
    120,
    4.4,
    21.3,
    1.9,
    2.8,
    {
      description:
        "Cooked weight"
    }
  ),


  generic(
    "dalia-cooked",
    "Broken Wheat / Dalia - Cooked",
    "Rice & Grains",
    83,
    3.1,
    18.6,
    0.2,
    4.5,
    {
      description:
        "Cooked weight"
    }
  ),


  generic(
    "jowar-cooked",
    "Jowar / Sorghum - Cooked",
    "Rice & Grains",
    119,
    3.5,
    25.4,
    1.1,
    2.7,
    {
      description:
        "Cooked reference"
    }
  ),


  generic(
    "bajra-cooked",
    "Bajra / Pearl Millet - Cooked",
    "Rice & Grains",
    119,
    3.5,
    23.7,
    1.4,
    1.3,
    {
      description:
        "Cooked reference"
    }
  ),


  generic(
    "ragi-cooked",
    "Ragi / Finger Millet - Cooked",
    "Rice & Grains",
    119,
    3.5,
    25,
    1,
    2.7,
    {
      description:
        "Cooked reference"
    }
  )

];



/* =========================================================
   NUTS & SEEDS
========================================================= */

export const nutsSeeds = [

  generic(
    "almonds",
    "Almonds",
    "Nuts & Seeds",
    579,
    21.2,
    21.6,
    49.9,
    12.5
  ),


  generic(
    "walnuts",
    "Walnuts",
    "Nuts & Seeds",
    654,
    15.2,
    13.7,
    65.2,
    6.7
  ),


  generic(
    "cashews",
    "Cashews",
    "Nuts & Seeds",
    553,
    18.2,
    30.2,
    43.8,
    3.3
  ),


  generic(
    "pistachios",
    "Pistachios",
    "Nuts & Seeds",
    560,
    20.2,
    27.2,
    45.3,
    10.6
  ),


  generic(
    "peanuts",
    "Peanuts",
    "Nuts & Seeds",
    567,
    25.8,
    16.1,
    49.2,
    8.5
  ),


  generic(
    "pumpkin-seeds",
    "Pumpkin Seeds",
    "Nuts & Seeds",
    559,
    30.2,
    10.7,
    49,
    6
  ),


  generic(
    "sunflower-seeds",
    "Sunflower Seeds",
    "Nuts & Seeds",
    584,
    20.8,
    20,
    51.5,
    8.6
  ),


  generic(
    "chia-seeds",
    "Chia Seeds",
    "Nuts & Seeds",
    486,
    16.5,
    42.1,
    30.7,
    34.4
  ),


  generic(
    "flax-seeds",
    "Flax Seeds",
    "Nuts & Seeds",
    534,
    18.3,
    28.9,
    42.2,
    27.3
  ),


  generic(
    "sesame-seeds",
    "Sesame Seeds",
    "Nuts & Seeds",
    573,
    17.7,
    23.4,
    49.7,
    11.8
  )

];



/* =========================================================
   COMBINED EXPORT
========================================================= */

export const foods = [

  ...fruits,

  ...vegetables,

  ...pulses,

  ...dairyGeneric,

  ...brandedDairy,

  ...fish,

  ...proteins,

  ...grains,

  ...nutsSeeds

];



export function getFoodById(
  id
) {

  return foods.find(
    food =>
      food.id === id
  );

}