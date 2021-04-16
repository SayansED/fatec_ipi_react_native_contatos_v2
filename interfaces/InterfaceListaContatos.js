import React from  'react';

import {
    View,
    Text,
    StyleSheet,
    Platform,
    FlatList
}
from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import BotaoHeader from '../componentes/BotaoHeader';

import { useSelector } from 'react-redux';
import ContatoItem from '../componentes/ContatoItem';

const InterfaceListaContatos = (props) => {

    const contatos = useSelector (estado => estado.contatos.contatos);

    return (
        <FlatList 
            data={contatos}
            keyExtractor={contato => contato.id}
            renderItem={
                contato => (
                    <ContatoItem 
                        nomeContato={contato.item.nome}
                        onSelect={() => {
                            props.navigation.navigate('DetalhesDoContato', {
                                nomeContato: contato.item.nome, 
                                idContato: contato.item.id,
                                telefoneContato: contato.item.telefone
                            })
                        }}
                        imagem={contato.item.imagemURI}
                        telefone={contato.item.telefone}
                        id={contato.item.id}
                    />
                )
            }
        />
    )
};

InterfaceListaContatos.navigationOptions = dadosNavegacao => {
    return {
        headerTitle: "Lista de contatos",
        headerRight: () => {
            return (
                <HeaderButtons 
                    HeaderButtonComponent={BotaoHeader}>
                    <Item
                        title="Adicionar"
                        iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                        onPress={() => {
                            dadosNavegacao.navigation.navigate ("NovoContato");
                        }}
                    />
                </HeaderButtons>
            )
        }
    }
}

const estilos = StyleSheet.create ({

});

export default InterfaceListaContatos;