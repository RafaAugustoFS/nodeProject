const Conta = require("../models/conta");

const contaService ={
    create: async (conta) =>{
        try {
            return await Conta.create({
                id_cliente: conta.id_cliente,
                saldo: conta.saldo
            })
        } catch (error) {
            throw new Error("Erro ao criar conta!")
        }
    },
    getById: async (id) => {
        try {
          const atributte = await Conta.findByPk(id);
          if (!atributte) {
            return null;
          }
          return atributte;
        } catch (error) {
          throw new Error("Ocorreu um erro ao buscar a conta");
        }
      },
      getAll: async () => {
        try {
          return await Conta.findAll();
        } catch (error) {
          throw new Error("Ocorreu um erro ao buscar todas as contas.");
        }
      },
      delete: async (id) => {
        try {
          const conta = await Conta.findByPk(id);
          if (!conta) {
            return null;
          }
          await conta.destroy();
          return conta;
        } catch (error) {
          throw new Error("Ocorreu um erro ao deletar a conta.");
        }
      },
}
module.exports=contaService;