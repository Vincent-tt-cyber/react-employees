const { prisma } = require("../prisma/prisma-client");

const all = async (req, res) => {
  try {
    const employees = await prisma.employee.findMany();
    res.json(employees);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Не удалось получить сотрудников",
    });
  }
};
const add = async (req, res) => {
  try {
    const { firstName, lastName, addresss } = req.body;

    if (!firstName || !lastName || !addresss || !age) {
      res.json(employees);
      return res.status(400).json({
        message: "Все поля обязательные",
      });
    }

    const employee = await prisma.user.update({
      where: {
        id: req.user.id,
      },
      data: {
        createdEmployee: {
          create: data,
        },
      },
    });

    return res.status(200).json(employee);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Не удалось получить сотрудников",
    });
  }
};

module.exports = {
  all,
  add,
};
