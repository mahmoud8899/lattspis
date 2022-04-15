import { Modal, Text, View } from 'react-native'
import React from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import COLORS from '../../Assistant/Color'
import { ProductName } from '../../Assistant/ProductName'
import ButtonScreen from '../ButtonScreen/ButtonScreen'

export default function DeletionAlert(props) {


    const { setCloseShow, closeShow } = props



    return <Modal
        animationType="slide"
        onRequestClose={() => setCloseShow(!closeShow)}
        visible={closeShow}
        transparent={true}

    >
        <View style={Styles.modal}>

            <View style={Styles.background} >
               <View style={Styles.removeText}>
               <Text style={Styles.Font} >{ProductName}</Text>
               </View>

               <View style={Styles.button}>
                    <ButtonScreen
                        Titel='Edit address'
                        ClassStyle
                        style={Styles.flex}

                    />
                </View>


                <View style={Styles.button}>
                    <ButtonScreen
                        Titel='remove address'
                        ClassStyle
                        style={Styles.flex}

                    />
                </View>
                <View style={Styles.button}>
                    <ButtonScreen
                        Titel='cancel'
                        ClassStyle
                        style={Styles.flex}
                        onPress={()=>setCloseShow(!closeShow)}
                    />
                </View>
            </View>

        </View>
    </Modal>
}





const Styles = ScaledSheet.create({

    modal: {
        padding: '100@s',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },

    removeText: {

        alignItems : 'center',
        marginBottom : '40@s'

    },
    Font: {

        fontSize : '30@s',
        fontWeight : 'bold'

    },
    background: {
        backgroundColor: COLORS.find,
        width: '280@s',
 
        borderRadius: '5@s',
        padding : '10@s'
        

    },
    button: {
        margin: 0,
        flexDirection: 'column'

    },
    flex: {
        backgroundColor: COLORS.notClick,
        height: '40@s',
        alignItems: 'center',
        marginBottom: '5@s',
        borderRadius : '5@s',
        justifyContent : 'center',
        
    }

})
