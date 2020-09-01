
const SOLICITACOES = '_SOLICITACOES';

export function ErroValidacao(errors){
    this.errors = errors;
}
export default class SolicitacoesService{

    validar = (solicitacao) =>{
        const errors = []

        if(!solicitacao.nome){
            errors.push('O campo Nome é obrigatório.')
        }

        if(!solicitacao.cpf || solicitacao.cpf <= 0){
            errors.push('O campo CPF deve ter um valor maior que zero.')
        }

        if(!solicitacao.rg || solicitacao.rg <= 0){
            errors.push('O campo RG é obrigatório.')
        }

        if(!solicitacao.endereco){
            errors.push('O campo Endereco deve ter um valor maior que zero.')
        }

        if(!solicitacao.cep){
            errors.push('O campo CEP é obrigatório.')
        }

        if(!solicitacao.complemento){
            errors.push('O campo Complemento é obrigatório.')
        }

        if(!solicitacao.nomedamae){
            errors.push('O campo Nome da Mãe é obrigatório.')
        }

        if(!solicitacao.nomedopai){
            errors.push('O campo Nome do pai é obrigatório.')
        }


        if(!solicitacao.telefonefixo || solicitacao.telefonefixo <= 0){
            errors.push('O campo Telefone(fixo) deve ter um valor maior que zero.')
        }

        if(!solicitacao.celular || solicitacao.celular <= 0){
            errors.push('O campo Celular deve ter um valor maior que zero.')
        }

        if(!solicitacao.valor){
            errors.push('O campo Valor é obrigatório.')
        }

        if(!solicitacao.parcela){
            errors.push('O campo Parcela é obrigatório.')
        }

        if(!solicitacao.pessoa){
            errors.push('O campo Pessoa é obrigatório.')
        }

        
        if(errors.length > 0){
            throw new ErroValidacao(errors)
        }
    }


        obterSolicitacoes = () =>{
            const solicitacoes = localStorage.getItem(SOLICITACOES)
            if(!solicitacoes){
                return [];
            }
            return JSON.parse(solicitacoes)
        }

        obterIndex = (valor) => {
            let index = null;
            this.obterSolicitacoes().forEach( (solicitacao, i) => {
                if(solicitacao.valor === valor){
                    index = i;
                
                }
            })
            return index;
        }


    deletar = (valor) => {
        const index =this.obterIndex(valor)
        if(index !== null){
            const solicitacoes = this.obterSolicitacoes()
            solicitacoes.splice(index,1)
            localStorage.setItem(SOLICITACOES, JSON.stringify(solicitacoes) )
            return solicitacoes
        }

    }




    salvar = (solicitacao) => {
      this.validar(solicitacao)
      let solicitacoes = localStorage.getItem(SOLICITACOES)

      if(!solicitacoes){
          solicitacoes = []
      }else{
          solicitacoes = JSON.parse(solicitacoes)
      }

      solicitacoes.push(solicitacao);

     

      localStorage.setItem(SOLICITACOES, JSON.stringify(solicitacoes) )
    }
}