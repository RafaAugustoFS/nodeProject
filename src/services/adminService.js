const Admin = require("../models/admin");
const bcrypt = require('bcryptjs');

const adminService = {
  create: async (admin) => {
    try {
      if (!admin.senha) {
        throw new Error("Senha não fornecida.");
      }
      
      const senhaCrypto = await bcrypt.hash(admin.senha, 10);
      
      return await Admin.create({
        nome: admin.nome,
        email: admin.email,
        idade: admin.idade,
        senha: senhaCrypto,
      });
    } catch (error) {
      console.log(error)
      throw new Error("Erro ao criar o administrador!");
    }
  },
  update: async (id, adminToUpdate) => {
    try {
      const admin = await Admin.findByPk(id);
      if (!admin) {
        return null;
      }
      await admin.update(adminToUpdate);
      await admin.save();
      return admin;
    } catch (error) {
      throw new Error("Ocorreu um erro ao atualizar o usuário.");
    }
  },
  getById: async (id) => {
    try {
      const atributte = await Admin.findByPk(id);
      if (!atributte) {
        return null;
      }
      return atributte;
    } catch (error) {
      throw new Error("Ocorreu um erro ao buscar o usuário");
    }
  },
  getAll: async () => {
    try {
      return await Admin.findAll();
    } catch (error) {
      throw new Error("Ocorreu um erro ao buscar todos usuários.");
    }
  },
  delete: async (id) => {
    try {
      const admin = await Admin.findByPk(id);
      if (!admin) {
        return null;
      }
      await admin.destroy();
      return admin;
    } catch (error) {
      throw new Error("Ocorreu um erro ao deletar o usuário.");
    }
  },
};
module.exports = adminService;