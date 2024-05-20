var client = require("@prisma/client");
const prisma = new client.PrismaClient();

async function register(data) {
  delete data.verifyPassword;
  await prisma.client.create({ data });
}

module.exports = { register };
