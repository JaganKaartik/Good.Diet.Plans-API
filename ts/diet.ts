interface Diet {
  Type: string;
  Mode: string;
  Diet: {
    Breakfast: string;
    Lunch: string;
    Dinner: string;
  };
}

const diets: Diet[] = [
  {
    Type: "Keto",
    Mode: "Beginners",
    Diet: {
      Breakfast:
        "Two eggs fried in pastured butter served with sauteed greens.",
      Lunch:
        "A bunless grass-fed burger topped with cheese, mushrooms and avocado atop a bed of greens.",
      Dinner: " Pork chops with green beans sauteed in coconut oil.",
    },
  },
  {
    Type: "Keto",
    Mode: "Beginners",
    Diet: {
      Breakfast: "Mushroom omelet",
      Lunch: "Tuna salad with celery and tomato atop a bed of greens.",
      Dinner: "Roast chicken with cream sauce and sauteed broccoli.",
    },
  },
  {
    Type: "Keto",
    Mode: "Beginners",
    Diet: {
      Breakfast: "Bell pepper stuffed with cheese and eggs.",
      Lunch:
        "Arugula salad with hard-boiled eggs, turkey, avocado and blue cheese.",
      Dinner: "Grilled salmon with spinach sauteed in coconut oil.",
    },
  },
];
