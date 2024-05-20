var client = require("@prisma/client");
const prisma = new client.PrismaClient();
var bcrypt = require('bcrypt');

async function register(data) {
  delete data.verifyPassword;
  data.password = await bcrypt.hash(data.password, 10);
  try {
    await prisma.client.create({ data });
  } catch (error) {
    console.log(error);
  }

}

async function getOne(condition) {
  return prisma.client.findFirst({ where: condition })
}

module.exports = { register, getOne };
