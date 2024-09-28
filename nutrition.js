const nutritionData = {
    "cornflakes": { calories: 100, protein: 2, fiber: 1 },
    "oatmeal": { calories: 150, protein: 5, fiber: 4 },
    "granola": { calories: 200, protein: 6, fiber: 3 },
    "cheerios": { calories: 120, protein: 3, fiber: 2 },
    "poha": { calories: 250, protein: 5, fiber: 2 },
    "upma": { calories: 300, protein: 8, fiber: 3 },
    "idli": { calories: 50, protein: 2, fiber: 1 },
    "dosa": { calories: 100, protein: 3, fiber: 1 },
    "chapati": { calories: 120, protein: 4, fiber: 2 },
    "biryani": { calories: 400, protein: 18, fiber: 2 },
    "dal": { calories: 200, protein: 14, fiber: 6 }
  };
  
  document.getElementById('calculateButton').addEventListener('click', function() {
    const foodName = document.getElementById('foodName').value.toLowerCase();
    const nutrition = nutritionData[foodName];
  
    if (nutrition) {
      document.getElementById('calories').textContent = nutrition.calories;
      document.getElementById('protein').textContent = nutrition.protein;
      document.getElementById('fiber').textContent = nutrition.fiber;
    } else {
      document.getElementById('calories').textContent = 'N/A';
      document.getElementById('protein').textContent = 'N/A';
      document.getElementById('fiber').textContent = 'N/A';
      alert('Nutrition information for this food is not available.');
    }
  });
  