const notificacaoService = require("../services/notificacaoService");

const notificacaoController = {
    create: async (req, res) => {
        try {
          const notificacao = await notificacaoService.create(req.body);
          return res.status(201).json({
            msg: "Notificação criado com sucesso",
            notificacao,
          });
        } catch (error) {
          console.error(error);
          return res.status(500).json({
            msg: "Erro ao tentar criar o cliente!",
          });
        }
      },
      update: async (req, res) => {
        try {
          const notificacao = await notificacaoService.update(req.params.id, req.body);
          if (!notificacao) {
            return res.status(400).json({
              msg: "client não encontrado!",
            });
          }
          return res.status(200).json({
            msg: "client atualizado com sucesso",
            notificacao,
          });
        } catch (error) {
          return res.status(500).json({
            msg: "Erro ao tentar o atualizar o cliente.",
          });
        }
      },
      getAll: async (req, res) => {
        try {
          const notificacao = await notificacaoService.getAll();
          return res.status(200).json({
            msg: "Clientes:",
            notificacao,
          });
        } catch (error) {
          return res.status(500).json({
            msg: "Erro ao buscar os clientes.",
          });
        }
      },
      getOne: async (req, res) => {
        try {
          const notificacao = await notificacaoService.getById(req.params.id);
          if (!notificacao) {
            return res.status(400).json({
              msg: "Cliente não encontrado!",
            });
          }
          return res.status(200).json({
            msg: "Cliente encontrado",
            notificacao,
          });
        } catch (error) {
          return res.status(500).json({
            msg: "Erro ao buscar o cliente.",
          });
        }
      },
      delete: async (req, res) => {
        try {
          const notificacao = await notificacaoService.delete(req.params.id);
          if (!notificacao) {
            return res.status(400).json({
              msg: "Cliente não encontrado.",
            });
          }
          return res.status(200).json({
            msg: "Cliente deletado.",
          });
        } catch (error) {
          return res.status(500).json({
            msg: "Erro ao deletar o cliente.",
          });
        }
      },
};
module.exports=notificacaoController;