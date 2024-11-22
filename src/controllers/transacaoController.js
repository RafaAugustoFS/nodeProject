const transacaoService = require('../services/transacaoService')

const transacaoController={
    create: async (req, res) => {
        try {
          const transacao = await transacaoService.create(req.body);
          return res.status(201).json({
            msg: "Transação criada com sucesso",
            transacao,
          });
        } catch (error) {
          console.error(error);
          return res.status(500).json({
            msg: "Erro ao tentar criar a transacao!",
          });
        }
      },
      getAll: async (req, res) => {
        try {
          const transacao = await transacaoService.getAll();
          return res.status(200).json({
            msg: "Transações:",
            transacao,
          });
        } catch (error) {
          return res.status(500).json({
            msg: "Erro ao buscar as transções.",
          });
        }
      },
      getOne: async (req, res) => {
        try {
          const transacao = await transacaoService.getById(req.params.id);
          if (!transacao) {
            return res.status(400).json({
              msg: "Transação não encontrado!",
            });
          }
          return res.status(200).json({
            msg: "Transação encontrada",
            transacao,
          });
        } catch (error) {
          return res.status(500).json({
            msg: "Erro ao buscar a transacao.",
          });
        }
      },
      delete: async (req, res) => {
        try {
          const transacao = await transacaoService.delete(req.params.id);
          if (!transacao) {
            return res.status(400).json({
              msg: "Transação não encontrada.",
            });
          }
          return res.status(200).json({
            msg: "Transação deletada.",
          });
        } catch (error) {
          return res.status(500).json({
            msg: "Erro ao deletar a transação.",
          });
        }
      },
};
module.exports=transacaoController;