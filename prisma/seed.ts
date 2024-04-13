import prisma from "./prisma-client";

export async function main() {
  if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASS) {
    throw new Error("ROOT CREDENTAILS must be set in the environment");
  }

  const admin = {
    email: process.env.ADMIN_EMAIL,
    password: process.env.ADMIN_PASS,
  };

  await prisma.admin.create({ data: admin });
}

main();
