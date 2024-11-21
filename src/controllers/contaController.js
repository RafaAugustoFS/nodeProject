const contaService = require("../services/contaService");

const contaController = {
  create: async (req, res) => {
    try {
      const conta = await contaService.create(req.body);
      return res.status(201).json({
        msg: "Conta criada com sucesso",
        Conta: conta,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Erro ao tentar criar a conta!",
      });
    }
  },
  getAll: async (req, res) => {
    try {
      const conta = await contaService.getAll();
      return res.status(200).json({
        msg: "Contas:",
        conta,
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Erro ao buscar as contas.",
      });
    }
  },
  getOne: async (req, res) => {
    try {
      const conta = await contaService.getById(req.params.id);
      if (!conta) {
        return res.status(400).json({
          msg: "Conta não encontrado!",
        });
      }
      return res.status(200).json({
        msg: "conta encontrada",
        conta,
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Erro ao buscar a conta.",
      });
    }
  },
  delete: async (req, res) => {
    try {
      const conta = await contaService.delete(req.params.id);
      if (!conta) {
        return res.status(400).json({
          msg: "Conta não encontrado.",
        });
      }
      return res.status(200).json({
        msg: "Conta deletada.",
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Erro ao deletar a conta.",
      });
    }
  },
};
module.exports = contaController;
