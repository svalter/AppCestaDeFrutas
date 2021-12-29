import React from 'react';
import { Image, Dimensions, StyleSheet } from 'react-native';

import Texto from '../../../components/Texto';

import imgTopo from '../../../../assets/topo.png';

const width = Dimensions.get('screen').width


export default function Topo({ titulo }) {
    return (
        <>
            <Image source={imgTopo} style={estilos.topo}></Image>
            <Texto style={estilos.titulo}>{titulo}</Texto>
        </>
    )
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,
    },
    titulo: {
        position: "absolute",
        width: "100%",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16,
        marginTop: 8,
    },
})