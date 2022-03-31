import { NegociacoesDoDia } from "../interfaces/negociacao-do-dia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService {
    public obterNegociacoesDoDia(): Promise<Negociacao[]> {
        // operação assíncrona: requisição fecha para o endereço da api
        return fetch('http://localhost:8080/dados')
            // resposta do backend
            .then(res => res.json()) // convertendo a resposta recebida em json
            .then((dados: Array<NegociacoesDoDia>) => { // retorna dados resultante da linha acima como array (foi tipado o retorno com interface)
                return dados.map(dadoDeHoje => { // vai retornar array de negociações
                    return new Negociacao( // dados sendo convertidos em instancia de negociação
                        new Date(), // data atual (não vem da api)
                        dadoDeHoje.vezes,
                        dadoDeHoje.montante
                    )
                })
            })
    }
}