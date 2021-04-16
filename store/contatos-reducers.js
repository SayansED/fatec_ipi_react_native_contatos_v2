import { ADD_CONTATO } from "./contatos-actions";
import Contato from '../models/Contato';

const estadoInicial = {
    contatos: []
};

var contador = 10;

export default (estado = estadoInicial, action) => {
    switch (action.type) {
        case ADD_CONTATO:
            const contato = new Contato (
                (contador).toString(),
                action.dadosContato.nomeContato, 
                action.dadosContato.telefone,
                action.dadosContato.imagemURI
            );
            contador = contador + 2;
            return {
                contatos: estado.contatos.concat(contato)
            }
        default:
            return estado;
    }
}