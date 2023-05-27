function convert() {
  const ingredient = document.getElementById("ingredient").value;
  const fromValue = parseFloat(document.getElementById("from").value);
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;
  let result = 0;

  const conversionFactors = {
    milk: {
      milliliters: {
        milligrams: 1.03,
        grams: 0.00103,
        kilograms: 0.00000103,
      },
      liters: {
        milligrams: 1030,
        grams: 1030,
        kilograms: 1.03,
      },
    },
    water: {
      milliliters: {
        milligrams: 1,
        grams: 0.001,
        kilograms: 0.000001,
      },
      liters: {
        milligrams: 1000,
        grams: 1000,
        kilograms: 1,
      },
    },
    oil: {
      milliliters: {
        milligrams: 0.92,
        grams: 0.001,
        kilograms: 0.000001,
      },
      liters: {
        milligrams: 920,
        grams: 920,
        kilograms: 0.92,
      },
    },
  };

  if (
    conversionFactors[ingredient] &&
    conversionFactors[ingredient][fromUnit] &&
    conversionFactors[ingredient][fromUnit][toUnit]
  ) {
    result = fromValue * conversionFactors[ingredient][fromUnit][toUnit];
  }

  document.getElementById("to").value = result;
}
