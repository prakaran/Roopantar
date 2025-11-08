import { neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@/lib/generated/prisma/client";
import ws from "ws";

// Enable WebSocket connections (for Node.js environments)
neonConfig.webSocketConstructor = ws;

const connectionString = process.env.DATABASE_URL!;

// ✅ Create Prisma adapter using connection string
const adapter = new PrismaNeon({ connectionString });

// ✅ Initialize Prisma client with the adapter
export const prisma = new PrismaClient({ adapter }).$extends({
  result: {
    product: {
      price: {
        compute(product) {
          return product.price.toString();
        },
      },
      rating: {
        compute(product) {
          return product.rating.toString();
        },
      },
    },
  },
});
