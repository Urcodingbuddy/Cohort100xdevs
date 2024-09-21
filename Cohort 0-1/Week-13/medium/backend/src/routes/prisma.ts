import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';

export const createPrismaClient = (datasourceUrl: string | undefined) => {
  return new PrismaClient({
    datasourceUrl,
  }).$extends(withAccelerate());
};
