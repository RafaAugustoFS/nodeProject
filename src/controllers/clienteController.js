const clientService = require("../services/clienteService");

const clientController = {
    create: async (req, res) => {
        try {
          const client = await clientService.create(req.body);
          return res.status(201).json({
            msg: "Cliente criado com sucesso",
            cliente: client,
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
          const client = await clientService.update(req.params.id, req.body);
          if (!client) {
            return res.status(400).json({
              msg: "client não encontrado!",
            });
          }
          return res.status(200).json({
            msg: "client atualizado com sucesso",
            client,
          });
        } catch (error) {
          return res.status(500).json({
            msg: "Erro ao tentar o atualizar o cliente.",
          });
        }
      },
      getAll: async (req, res) => {
        try {
          const client = await clientService.getAll();
          return res.status(200).json({
            msg: "Clientes:",
            client,
          });
        } catch (error) {
          return res.status(500).json({
            msg: "Erro ao buscar os clientes.",
          });
        }
      },
      getOne: async (req, res) => {
        try {
          const client = await clientService.getById(req.params.id);
          if (!client) {
            return res.status(400).json({
              msg: "Cliente não encontrado!",
            });
          }
          return res.status(200).json({
            msg: "Cliente encontrado",
            client,
          });
        } catch (error) {
          return res.status(500).json({
            msg: "Erro ao buscar o cliente.",
          });
        }
      },
      delete: async (req, res) => {
        try {
          const client = await clientService.delete(req.params.id);
          if (!client) {
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
module.exports=clientController;