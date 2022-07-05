import React from 'react'
import { Modal, View, } from 'react-native'


export default function ModelComponent(props) {
    const { closeShow, setCloseShow ,Data } = props




    return <Modal animationType="slide"
        onRequestClose={() => setCloseShow(!closeShow)}
        visible={closeShow}
        transparent={true}>
        {Data}
    </Modal>
}