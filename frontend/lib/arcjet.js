import arcjet, { shield, tokenBucket, detectBot } from "@arcjet/next";

// Base Arcjet instance with global protections
// NOTE: Using DRY_RUN mode - logs but never blocks (safe for development)
export const aj = arcjet({
  key: process.env.ARCJET_KEY,
  rules: [
    // Shield WAF - protect against common attacks
    shield({
      mode: "DRY_RUN", // Changed to DRY_RUN for development
    }),

    // Bot protection - allow search engines only
    detectBot({
      mode: "DRY_RUN", // Changed to DRY_RUN for development
      allow: ["CATEGORY:SEARCH_ENGINE"],
    }),
  ],
});

// Free tier pantry scan limits (10 scans per month)
export const freePantryScans = aj.withRule(
  tokenBucket({
    mode: "DRY_RUN", // Changed to DRY_RUN - no blocking during development
    characteristics: ["userId"],
    refillRate: 10,
    interval: "30d",
    capacity: 10,
  })
);

// Free tier meal recommendations (5 per month)
export const freeMealRecommendations = aj.withRule(
  tokenBucket({
    mode: "DRY_RUN", // Changed to DRY_RUN - no blocking during development
    characteristics: ["userId"],
    refillRate: 5,
    interval: "30d",
    capacity: 5,
  })
);

// Pro tier - effectively unlimited
export const proTierLimit = aj.withRule(
  tokenBucket({
    mode: "DRY_RUN", // Changed to DRY_RUN - no blocking during development
    characteristics: ["userId"],
    refillRate: 1000,
    interval: "1d",
    capacity: 1000,
  })
);
