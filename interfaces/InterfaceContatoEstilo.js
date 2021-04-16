import React from  'react';

import {
    View,
    Text,
    StyleSheet
}
from 'react-native';

const InterfaceContatoEstilo = (props) => {
    return (
        <View>
            <Text>Interface: detalhes do contato</Text>
        </View>
    )
};

InterfaceContatoEstilo.navigationOptions = (dadosNav) => {
    return {
        headerTitle: dadosNav.navigation.getParam ('nomeContato')
    }
}

const estilos = StyleSheet.create ({

});

export default InterfaceContatoEstilo;