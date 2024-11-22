const Transacao = require("../models/transacao");

const transacaoService ={
    create: async (transacao) =>{
        try {
            return await Transacao.create({
                id_conta: transacao.id_conta,
                tipo_conta: transacao.tipo_conta,
                tipo_transacao: transacao.tipo_transacao,
                valor:transacao.valor,
                data_transacao:transacao.data
            })
        } catch (error) {
            throw new Error("Erro ao criar a transação!")
        }
    },
    getById: async (id) => {
        try {
          const atributte = await Transacao.findByPk(id);
          if (!atributte) {
            return null;
          }
          return atributte;
        } catch (error) {
          throw new Error("Ocorreu um erro ao buscar a transação");
        }
      },
      getAll: async () => {
        try {
          return await Transacao.findAll();
        } catch (error) {
          throw new Error("Ocorreu um erro ao buscar todas as transações.");
        }
      },
      delete: async (id) => {
        try {
          const transacao = await Transacao.findByPk(id);
          if (!transacao) {
            return null;
          }
          await transacao.destroy();
          return transacao;
        } catch (error) {
          throw new Error("Ocorreu um erro ao deletar a transação.");
        }
      },
}
module.exports=transacaoService;