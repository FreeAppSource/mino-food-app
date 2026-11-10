export const appInfo = {
  title: 'Mino Food',
  onboardingTitle: 'Enjoy the experience',
  onboardingDesc: "Don’t feel like going out? No problem, we’ll deliver your order. In bed! :)",
  progressSearching: 'Searching Places',
  progressPercent: '55%',
};

export const activeDish = {
  id: 'dish-1',
  title: 'Grilled Salmon & Seasonal Ramen',
  bannerHeadline: 'All Ingredients are always fresh and natural!',
  description: "Grilled salmon and veggies make for a colorful and balanced seafood dinner that's ready in just minutes. The grill turns the salmon flaky and moist while tenderizing the crispy pepper and onion pieces. Round out the meal with brown rice or quinoa.",
  image: require('../assets/images/dish_hero.png'),
  price: 33.00,
  originalPrice: 55.00,
  rating: 4.8,
  reviewsCount: 142,
  deliveryTime: '60 Min',
  deliveryFee: 'Free',
  nutrition: {
    ingredients: 'Ramen, Beef, Muer, Chinese, Cabbage.',
    caloriePortion: '1040 kcal',
    protein: '58 Gr.',
    fat: '18 Gr.',
  },
  tabs: ['Info', 'Packages', 'Ingredients', 'Photo'],
};

export const reviewsData = {
  overallRating: '4.6',
  maxRating: 'Out of 5.0',
  totalReviews: 248,
  deliveryTime: '60 Min',
  deliveryFee: 'Free',
  breakdown: [
    { label: 'Excellent', percentage: 76 },
    { label: 'Very Good', percentage: 16 },
    { label: 'Average', percentage: 5 },
    { label: 'Poor', percentage: 2 },
    { label: 'Terrible', percentage: 1 },
  ],
  popularTags: ['Popular Foods', 'Ramen', 'Salmon', 'Healthy', 'Fresh Cabbage', 'Quick Delivery'],
  reviewsList: [
    {
      id: 'rev-1',
      name: 'Bonnie R. Miller',
      date: '20 Mar 2020, 10:30 AM',
      rating: 5,
      avatar: require('../assets/images/reviewer_bonnie.png'),
      comment: 'Only use filler text that be edit length an format to match the characteristics of real content as closely as possible use poorly formatted filler text you may get a completely.',
    },
    {
      id: 'rev-2',
      name: 'Amacheah Chukwudi',
      date: '20 Mar 2020, 10:30 AM',
      rating: 5,
      avatar: require('../assets/images/reviewer_amacheah.png'),
      comment: 'The characteristics of real content as closely as possible use poorly formatted filler text you may get a completely.',
    },
    {
      id: 'rev-3',
      name: 'David K. Henderson',
      date: '19 Mar 2020, 08:45 PM',
      rating: 4,
      avatar: null,
      comment: 'The salmon was perfectly tender and the broth is rich and comforting. Will order again!',
    },
  ],
};

export const driverData = {
  title: 'Find driver',
  driverName: 'Mr. John Watson',
  role: 'Driver',
  avatar: require('../assets/images/driver_john.png'),
  destination: 'St 3, High streetCleveland',
  deliveryTime: '60 Min',
  deliveryFee: 'Free',
  phone: '+1 (555) 749-1920',
  vehicle: 'Honda Civic (Silver) • Plate #MN-492',
  rating: '4.9 (180 deliveries)',
  nearbyDriversCount: 7,
};

export const checkoutData = {
  title: 'Checkout',
  subtotal: 60.00,
  promoDiscountPercent: 40,
  promoDiscountStr: '40% discount on all products',
  discountAmount: 27.00,
  total: 33.00,
  deliveryFee: 'Free',
  address: 'St 3, High streetCleveland',
  phone: '+1 (555) 923-4412',
  items: [
    {
      id: 'item-1',
      title: 'Grilled Salmon Bowl Deluxe',
      subtitle: 'With grilled peppers & onions',
      price: 35.00,
      qty: 1,
      image: require('../assets/images/dish_hero.png'),
    },
    {
      id: 'item-2',
      title: 'Artisan Beef Ramen & Muer',
      subtitle: 'Chinese cabbage, soft boiled egg',
      price: 25.00,
      qty: 1,
      image: require('../assets/images/dish_hero.png'),
    },
  ],
};
