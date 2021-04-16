import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import InterfaceContatoEstilo from '../interfaces/InterfaceContatoEstilo';
import InterfaceListaContatos from '../interfaces/InterfaceListaContatos';
import InterfaceContatoNovo from '../interfaces/InterfaceContatoNovo';

const NavegadorContatos = createStackNavigator ({
    ListaDeContatos: InterfaceListaContatos,
    DetalhesDoContato: InterfaceContatoEstilo,
    NovoContato: InterfaceContatoNovo
});

export default createAppContainer (NavegadorContatos);