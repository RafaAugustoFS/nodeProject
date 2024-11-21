const Client = require('../models/cliente')

const clientService = {
    create: async (client) => {
        try {
          return await Client.create({
            nome_cliente: client.nome,
            email_cliente: client.email
          });
        } catch (error) {
          console.log(error);
          throw new Error("Erro ao criar o cliente!");
        }
      },
      update: async (id, clientToUpdate) => {
        try {
          const client = await Client.findByPk(id);
          if (!client) {
            return null;
          }
          await client.update(clientToUpdate);
          await client.save();
          return client;
        } catch (error) {
          throw new Error("Ocorreu um erro ao atualizar o usuário.");
        }
      },
      getById: async (id) => {
        try {
          const atributte = await Client.findByPk(id);
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
          return await Client.findAll();
        } catch (error) {
          throw new Error("Ocorreu um erro ao buscar todos usuários.");
        }
      },
      delete: async (id) => {
        try {
          const client = await Client.findByPk(id);
          if (!client) {
            return null;
          }
          await client.destroy();
          return client;
        } catch (error) {
          throw new Error("Ocorreu um erro ao deletar o usuário.");
        }
      },
}
module.exports = clientService;