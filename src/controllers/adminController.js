const Admin = require("../models/admin");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const adminService = require("../services/adminService");

const adminController = {
  login: async (req, res) => {
    try {
      const {email,senha} = req.body;

      const admin = await Admin.findOne({ where :{ email } });

      if(!admin){
          return res.status(400).json({
              msg: "Email ou senha incorretos!!"
          })
      }

      const isValida = await bcrypt.compare(senha, admin.senha);
      
       if(!isValida){
          return res.status(400).json({
              msg: "Email ou senha incorretos!!"
          })
       }   

       const token = jwt.sign({ email: admin.email, nome: admin.nome }, process.env.SECRET, {expiresIn: '1h'});

      return res.status(200).json({
        msg: "Login realizado!",
        token
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o suporte!" });
    }
  },
  create: async (req, res) => {
    try {
      const admin = await adminService.create(req.body);
      return res.status(201).json({
        msg: "Administrador criado com sucesso",
        Administrador: admin,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Erro ao tentar criar o administrador!",
      });
    }
  },
  update: async (req, res) => {
    try {
      const admin = await adminService.update(req.params.id, req.body);
      if (!admin) {
        return res.status(400).json({
          msg: "admin não encontrado!",
        });
      }
      return res.status(200).json({
        msg: "admin atualizado com sucesso",
        admin,
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Erro ao tentar o atualizar o usuário.",
      });
    }
  },
  getAll: async (req, res) => {
    try {
      const admin = await adminService.getAll();
      return res.status(200).json({
        msg: "Usuários:",
        admin,
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Erro ao buscar os usuários.",
      });
    }
  },
  getOne: async (req, res) => {
    try {
      const admin = await adminService.getById(req.params.id);
      if (!admin) {
        return res.status(400).json({
          msg: "admin não encontrado!",
        });
      }
      return res.status(200).json({
        msg: "Usuário encontrado",
        admin,
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Erro ao buscar o usuário.",
      });
    }
  },
  delete: async (req, res) => {
    try {
      const admin = await adminService.delete(req.params.id);
      if (!admin) {
        return res.status(400).json({
          msg: "Usuário não encontrado.",
        });
      }
      return res.status(200).json({
        msg: "Usuário deletado.",
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Erro ao deletar o usuário.",
      });
    }
  },
};
module.exports = adminController;