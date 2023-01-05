// Framer-Motion variants for adverts detail, profiles detail, leave adverts and inscription
export const variantsDetail = {
  show: {
    opacity: 1,
    rotate: [0, 3, 0],
    x: [-500, 100, 0],
    transition: {
      duration: 0.3,
    },
  },
  hide: {
    opacity: 0,
    rotate: [0, 3, 0],
    x: [0, 100, -500],
    transition: {
      duration: 0.3,
    },
  },
};

// Framer-Motion variants for cards
export const variantsCards = {
  show: {
    opacity: 1,
    rotate: [0, -3, 0],
    x: [500, -100, 0],
    transition: {
      duration: 0.3,
    },
  },
  hide: {
    opacity: 0,
    rotate: [0, -3, 0],
    x: [0, -100, 500],
    transition: {
      duration: 0.3,
    },
  },
};

// Framer-Motion variants for page Not Found
export const variantsNotFound = {
  show: {
    opacity: 1,
    y: [20, 0, 15, 0, 10, 0, 5, 0],
    transition: {
      duration: 0.3,
    },
  },
  hide: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

// Simple framer-motion variant
export const variantsSimple = {
  show: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  hide: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};
