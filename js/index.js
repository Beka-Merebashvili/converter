function convert() {
  let ingredient = document.getElementById("ingredient").value;
  let fromValue = parseFloat(document.getElementById("from").value);
  let fromUnit = document.getElementById("fromUnit").value;
  let toUnit = document.getElementById("toUnit").value;
  let result = 0;

  if (ingredient === "milk") {
    // Conversion factors for milk
    if (fromUnit === "milliliters" && toUnit === "milligrams") {
      result = fromValue * 1.03; // 1 milliliter of milk weighs approximately 1.03 grams
    } else if (fromUnit === "milliliters" && toUnit === "grams") {
      result = fromValue * 0.00103; // 1 milliliter is equivalent to 0.00103 grams
    } else if (fromUnit === "milliliters" && toUnit === "kilograms") {
      result = fromValue * 0.00000103; // 1 milliliter is equivalent to 0.00000103 kilograms
    } else if (fromUnit === "liters" && toUnit === "milligrams") {
      result = fromValue * 1030; // 1 liter of milk weighs approximately 1030 grams
    } else if (fromUnit === "liters" && toUnit === "grams") {
      result = fromValue * 1030; // 1 liter is equivalent to 1030 grams
    } else if (fromUnit === "liters" && toUnit === "kilograms") {
      result = fromValue * 1.03; // 1 liter is equivalent to 1.03 kilograms
    }
  } else if (ingredient === "water") {
    // Conversion factors for water
    if (fromUnit === "milliliters" && toUnit === "milligrams") {
      result = fromValue; // 1 milliliter of water is equivalent to 1 milligram
    } else if (fromUnit === "milliliters" && toUnit === "grams") {
      result = fromValue * 0.001; // 1 milliliter is equivalent to 0.001 grams
    } else if (fromUnit === "milliliters" && toUnit === "kilograms") {
      result = fromValue * 0.000001; // 1 milliliter is equivalent to 0.000001 kilograms
    } else if (fromUnit === "liters" && toUnit === "milligrams") {
      result = fromValue * 1000; // 1 liter of water weighs approximately 1000 grams
    } else if (fromUnit === "liters" && toUnit === "grams") {
      result = fromValue * 1000; // 1 liter is equivalent to 1000 grams
    } else if (fromUnit === "liters" && toUnit === "kilograms") {
      result = fromValue; // 1 liter is equivalent to 1 kilogram
    }
  } else if (ingredient === "oil") {
    // Conversion factors for oil
    if (fromUnit === "milliliters" && toUnit === "milligrams") {
      result = fromValue * 0.92; // 1 milliliter of oil weighs approximately 0.92 grams
    } else if (fromUnit === "milliliters" && toUnit === "grams") {
      result = fromValue * 0.001; // 1 milliliter is equivalent to 0.001 grams
    } else if (fromUnit === "milliliters" && toUnit === "kilograms") {
      result = fromValue * 0.000001; // 1 milliliter is equivalent to 0.000001 kilograms
    } else if (fromUnit === "liters" && toUnit === "milligrams") {
      result = fromValue * 920; // 1 liter of oil weighs approximately 920 grams
    } else if (fromUnit === "liters" && toUnit === "grams") {
      result = fromValue * 920; // 1 liter is equivalent to 920 grams
    } else if (fromUnit === "liters" && toUnit === "kilograms") {
      result = fromValue * 0.92; // 1 liter is equivalent to 0.92 kilograms
    }
  }

  document.getElementById("to").value = result;
}
