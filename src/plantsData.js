const img = (label, bg) =>
  `https://placehold.co/300x300/${bg}/ffffff/png?text=${encodeURIComponent(label)}`;

const plantsArray = [
  {
    category: 'Air Purifying Plants',
    plants: [
      { name: 'Snake Plant', image: img('Snake Plant', '3a5a40'), description: 'Removes toxins from the air, low maintenance.', cost: '$15' },
      { name: 'Spider Plant', image: img('Spider Plant', '588157'), description: 'Great for hanging baskets, purifies air.', cost: '$12' },
      { name: 'Peace Lily', image: img('Peace Lily', '344e41'), description: 'Beautiful white blooms, cleans indoor air.', cost: '$18' },
      { name: 'Boston Fern', image: img('Boston Fern', '2d6a4f'), description: 'Lush green fronds, improves humidity.', cost: '$14' },
      { name: 'Rubber Plant', image: img('Rubber Plant', '1b4332'), description: 'Glossy leaves, easy to care for.', cost: '$20' },
      { name: 'Areca Palm', image: img('Areca Palm', '40916c'), description: 'Tropical feel, natural humidifier.', cost: '$25' },
    ],
  },
  {
    category: 'Aromatic Plants',
    plants: [
      { name: 'Lavender', image: img('Lavender', '7b2cbf'), description: 'Calming scent, great for relaxation.', cost: '$10' },
      { name: 'Rosemary', image: img('Rosemary', '52796f'), description: 'Fragrant herb, perfect for cooking.', cost: '$8' },
      { name: 'Mint', image: img('Mint', '2a9d8f'), description: 'Fresh scent, versatile culinary herb.', cost: '$7' },
      { name: 'Jasmine', image: img('Jasmine', '9d4edd'), description: 'Sweet floral fragrance, night bloomer.', cost: '$16' },
      { name: 'Basil', image: img('Basil', '4d908e'), description: 'Aromatic herb, kitchen essential.', cost: '$6' },
      { name: 'Eucalyptus', image: img('Eucalyptus', '277da1'), description: 'Refreshing scent, spa-like ambiance.', cost: '$17' },
    ],
  },
  {
    category: 'Succulents',
    plants: [
      { name: 'Aloe Vera', image: img('Aloe Vera', '606c38'), description: 'Healing gel, thrives on neglect.', cost: '$9' },
      { name: 'Echeveria', image: img('Echeveria', '80b918'), description: 'Rosette shaped, colorful varieties.', cost: '$11' },
      { name: 'Jade Plant', image: img('Jade Plant', '386641'), description: 'Symbol of good luck, hardy plant.', cost: '$13' },
      { name: 'Haworthia', image: img('Haworthia', '55a630'), description: 'Compact size, striking striped leaves.', cost: '$10' },
      { name: 'Zebra Cactus', image: img('Zebra Cactus', '2b9348'), description: 'Unique patterned foliage, low water.', cost: '$12' },
      { name: 'Burro\'s Tail', image: img('Burros Tail', '007f5f'), description: 'Trailing succulent, perfect for shelves.', cost: '$15' },
    ],
  },
];

export default plantsArray;
