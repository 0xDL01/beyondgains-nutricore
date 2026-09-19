const $ = id =>
  document.getElementById(id);


function selected(name) {

  return document.querySelector(
    `input[name="${name}"]:checked`
  )?.value;

}


function getConditions() {

  return [
    ...document.querySelectorAll(
      ".condition:checked"
    )
  ].map(
    item => item.value
  );

}


/* =========================================
   BMI
========================================= */

function calculateBMI(
  weight,
  heightCm
) {

  const heightM =
    heightCm / 100;

  return (
    weight /
    (heightM * heightM)
  );

}


function getBMIStatus(bmi) {

  if (bmi < 18.5) {
    return "Underweight range";
  }

  if (bmi < 25) {
    return "Healthy range";
  }

  if (bmi < 30) {
    return "Overweight range";
  }

  return "Higher BMI range";

}


/* =========================================
   BMR - MIFFLIN ST JEOR
========================================= */

function calculateBMR(
  weight,
  height,
  age,
  sex
) {

  const sexValue =
    sex === "male"
      ? 5
      : -161;


  return (

    10 * weight +

    6.25 * height -

    5 * age +

    sexValue

  );

}


/* =========================================
   PROTEIN

   During fat loss we use the lower of
   current weight and target weight.

   This helps avoid extremely high targets
   when someone currently carries
   considerably more body weight.
========================================= */

function calculateProtein(
  currentWeight,
  targetWeight,
  goal,
  age
) {

  let referenceWeight =
    currentWeight;


  if (
    goal === "lose" &&
    targetWeight > 0 &&
    targetWeight < currentWeight
  ) {

    referenceWeight =
      targetWeight;

  }


  let proteinPerKg = 1.4;


  if (goal === "lose") {

    proteinPerKg = 1.6;

  }


  if (goal === "maintain") {

    proteinPerKg = 1.4;

  }


  if (goal === "gain") {

    proteinPerKg = 1.6;

  }


  if (goal === "muscle") {

    proteinPerKg = 1.8;

  }


  if (age >= 65) {

    proteinPerKg =
      Math.max(
        proteinPerKg,
        1.2
      );

  }


  return (
    referenceWeight *
    proteinPerKg
  );

}


/* =========================================
   CALORIES
========================================= */

function calculateGoalCalories(
  tdee,
  goal
) {

  switch (goal) {

    case "lose":

      return tdee - 500;


    case "gain":

      return tdee + 300;


    case "muscle":

      return tdee + 250;


    default:

      return tdee;

  }

}


/* =========================================
   MACROS
========================================= */

function calculateMacros(
  calories,
  protein,
  weight
) {

  const proteinCalories =
    protein * 4;


  const fat =
    Math.max(

      weight * 0.7,

      calories * 0.25 / 9

    );


  const fatCalories =
    fat * 9;


  const carbCalories =
    Math.max(

      0,

      calories -
      proteinCalories -
      fatCalories

    );


  return {

    protein,

    fat,

    carbs:
      carbCalories / 4

  };

}


/* =========================================
   FIBRE
========================================= */

function calculateFibre(
  calories
) {

  return Math.round(
    calories *
    14 /
    1000
  );

}


/* =========================================
   HEALTH FLAGS
========================================= */

function renderHealthFlags(
  conditions
) {

  const flags = [];


  if (
    conditions.includes(
      "hypertension"
    )
  ) {

    flags.push({

      title:
        "Blood pressure",

      text:
        "The diet builder will highlight sodium and lower-sodium choices."

    });

  }


  if (
    conditions.includes(
      "diabetes"
    ) ||
    conditions.includes(
      "prediabetes"
    )
  ) {

    flags.push({

      title:
        "Blood glucose",

      text:
        "Carbohydrates, fibre and sugars will be shown prominently. Individual diabetes treatment targets should come from a clinician."

    });

  }


  if (
    conditions.includes(
      "cholesterol"
    )
  ) {

    flags.push({

      title:
        "Cholesterol",

      text:
        "Saturated fat will be highlighted when food data are available."

    });

  }


  if (
    conditions.includes(
      "lactose"
    )
  ) {

    flags.push({

      title:
        "Lactose intolerance",

      text:
        "Dairy foods can be excluded from automatic suggestions."

    });

  }


  if (
    conditions.includes(
      "kidney"
    )
  ) {

    flags.push({

      title:
        "Kidney condition",

      text:
        "The app will not automatically recommend increasing potassium, phosphorus or protein because requirements can vary substantially."

    });

  }


  $("healthFlags").innerHTML =

    flags.map(

      item => `

        <div class="health-flag">

          <strong>
            ${item.title}
          </strong>

          <p>
            ${item.text}
          </p>

        </div>

      `

    ).join("");

}


/* =========================================
   MAIN CALCULATION
========================================= */

function calculatePlan() {

  const age =
    Number(
      $("age").value
    );


  const sex =
    $("sex").value;


  const height =
    Number(
      $("height").value
    );


  const weight =
    Number(
      $("weight").value
    );


  const targetWeight =
    Number(
      $("targetWeight").value
    );


  const activity =
    Number(
      $("activity").value
    );


  const months =
    Number(
      $("months").value
    );


  const goal =
    selected("goal");


  const diet =
    selected("diet");


  const conditions =
    getConditions();


  const bmi =
    calculateBMI(
      weight,
      height
    );


  const bmr =
    calculateBMR(
      weight,
      height,
      age,
      sex
    );


  const tdee =
    bmr *
    activity;


  let calories =
    calculateGoalCalories(
      tdee,
      goal
    );


  calories =
    Math.max(
      1200,
      calories
    );


  const protein =
    calculateProtein(

      weight,

      targetWeight,

      goal,

      age

    );


  const macros =
    calculateMacros(

      calories,

      protein,

      weight

    );


  const fibre =
    calculateFibre(
      calories
    );


  const plan = {

    age,

    sex,

    height,

    weight,

    targetWeight,

    activity,

    months,

    goal,

    diet,

    conditions,

    bmi:
      Number(
        bmi.toFixed(1)
      ),

    bmr:
      Math.round(bmr),

    tdee:
      Math.round(tdee),

    calories:
      Math.round(calories),

    protein:
      Math.round(macros.protein),

    carbs:
      Math.round(macros.carbs),

    fat:
      Math.round(macros.fat),

    fibre

  };


  localStorage.setItem(

    "nutricorePlan",

    JSON.stringify(plan)

  );


  $("bmi").textContent =
    plan.bmi;


  $("bmiStatus").textContent =
    getBMIStatus(bmi);


  $("bmr").textContent =
    plan.bmr;


  $("tdee").textContent =
    plan.tdee;


  $("goalCalories").textContent =
    plan.calories;


  $("protein").textContent =
    plan.protein;


  $("carbs").textContent =
    plan.carbs;


  $("fat").textContent =
    plan.fat;


  $("fibre").textContent =
    plan.fibre;


  $("heroTDEE").textContent =
    `${plan.tdee} kcal`;


  $("heroCalories").textContent =
    `${plan.calories} kcal`;


  $("heroProtein").textContent =
    `${plan.protein} g`;


  renderHealthFlags(
    conditions
  );


  $("results").scrollIntoView({

    behavior: "smooth",

    block: "start"

  });

}


/* =========================================
   EVENTS
========================================= */

$("calculateButton")
  .addEventListener(

    "click",

    calculatePlan

  );


$("startButton")
  .addEventListener(

    "click",

    () => {

      $("calculator")
        .scrollIntoView({

          behavior:
            "smooth"

        });

    }

  );


/* =========================================
   LOAD SAVED PLAN
========================================= */

const saved =
  localStorage.getItem(
    "nutricorePlan"
  );


if (saved) {

  const plan =
    JSON.parse(saved);


  $("heroTDEE").textContent =
    `${plan.tdee} kcal`;


  $("heroCalories").textContent =
    `${plan.calories} kcal`;


  $("heroProtein").textContent =
    `${plan.protein} g`;

}