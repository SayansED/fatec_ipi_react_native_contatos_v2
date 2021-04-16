import React, { useState } from 'react'
import {
    View,
    Button,
    Image,
    Text,
    StyleSheet
} from 'react-native';

import * as ImagePicker from 'expo-image-picker';

import cores from '../constantes/cores';

const Fotografar = (props) => {

    const [imagemURI, setImagemURI] = useState();

    const Bater = async () => {
        const foto = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality:1
        });
        setImagemURI(foto.uri);
        props.onFotoFotografada(foto.uri);
    }
    return (
        <View style={estilos.principal}>
            <View style={estilos.previewDaImagem}>
                {
                    imagemURI ?
                    <Image
                    source={{uri: imagemURI}}
                    style={estilos.imagem}
                    />
                    :
                    <Text>Não há fotos</Text>
                }
            </View>
            <Button 
                title="Fotografar"
                color={cores.primary}
                onPress={Bater}
            />
        </View>
    );
}

const estilos = StyleSheet.create({
    principal: {
        alignItems: 'center',
        marginBottom: 16
        },
    previewDaImagem: {
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
        borderColor: '#CCC',
        borderWidth: 1
        },
    imagem: {
        width: '100%',
        height: '100%'
    }       
});

export default Fotografar;