// Free stock photos from Unsplash (https://unsplash.com/license).
// These are NOT Sugo's own food. Replace with real photos: either change an ID below,
// or set a full path such as "/images/pesto.jpg" (files go in public/images).
// If an image fails to load, the site shows a colored placeholder instead.
export const IMG = {
  pizza: "1513104890138-7c749659a591",
  margherita: "1574071318508-1cdbab80d002",
  pepperoni: "1628840042765-356cda07504e",
  spaghetti: "1473093295043-cdd812d0e601",
  pasta: "1621996346565-e3dbc646d9a9",
  pesto: "1551183053-bf91a1d81141",
  lasagna: "1574894709920-11b28e7367e3",
  steak: "1600891964092-4316c288032e",
  chicken: "1532550907401-a500c9a57435",
  coffee: "1495474472287-4d71bcdd2085",
  juice: "1600271886742-f049cd451bba",
  tiramisu: "1571877227200-a0d98ea607e9",
  interior: "1414235077428-338989a2e8c0",
  interior2: "1517248135467-4c7edcad34c4",
  kitchen: "1556910103-1c02745aae4d",
};

export const photoUrl = (id, w = 900) =>
  id.startsWith("/") || id.startsWith("http")
    ? id
    : `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;
