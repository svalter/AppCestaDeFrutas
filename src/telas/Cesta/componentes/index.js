import React from 'react';
import { StyleSheet, Text, View, FlatList, ListHeaderComponent } from 'react-native';

import Texto from '../../../components/Texto';
import Topo from './Topo'
import Detalhes from './Detalhe';
import Item from './Item';

export default function Cesta({ topo, detalhes, itens }) {
    return (
        <>

            <FlatList
                data={itens.lista}
                renderItem={Item}
                keyExtractor={({ nome }) => nome}
                ListHeaderComponent={() => {
                    return (
                        <>
                            <Topo {...topo} />
                            <View style={estilos.cesta}>
                                <Detalhes {...detalhes} />
                                <Texto style={estilos.titulo}>{itens.titulo}</Texto>
                            </View>
                        </>
                    )
                }}
            />
        </>
    )
}


const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        lineHeight: 32,
        fontSize: 20,
    },
})