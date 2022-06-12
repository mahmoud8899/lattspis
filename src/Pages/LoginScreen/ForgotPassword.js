
import { View, Text, Modal, TouchableOpacity } from 'react-native'
import FontsDefault from "../../Assistant/FontDefault"
import Icon from 'react-native-vector-icons/Ionicons'
import ButtonScreen from "../../Components/ButtonScreen/ButtonScreen"
import { ValtionMe } from "../../Assistant/validation"
import Input from "../../Components/InputScreen/Input"
import { ForgetPasswordAction } from '../../Redux/Action/AuthAction'
import React, { Fragment, useState } from "react"
import Styles from "./Style"
import { useDispatch, useSelector } from 'react-redux'
import { CloseScreen, ForgotRemove } from '../../Components/CloseConponent/ColseConponent'
import { ErrorComponent, InputError } from '../../Components/ErrorComponent/ErrorComponent'
import { ErrorServer, TextEmpty } from '../../Assistant/ErrorText'

export default function ForgotPassword(props) {
    // params oppen and close...
    const { showModal, setShowModal } = props

    const dispatch = useDispatch()

    // user check ut event error and loading
    const userLogin = useSelector((state) => state?.userLogin)
    const { error, loading, forgetPassword } = userLogin

    // input to forgot password 
    const [email, setEmail] = useState('')




    // close forgot password 
    function CloseALL() {
        setShowModal(!showModal)
        // this is remove state mangmint
        ForgotRemove(dispatch)
        // this is remove error

        error !== null && CloseScreen(dispatch)
    }


    // send data to server 
    function SendData() {


        return dispatch(ForgetPasswordAction({ email }))
    }



    // correction information
    const [inputKey, setInputKey] = useState('')
    function CheckInputKey(id, validation) {
        setInputKey('')
        if (ValtionMe(id, validation)) {

            // console.log('checkOppen')

            return SendData()
        } else {
            return setInputKey(TextEmpty)
        }

    }

    return <Modal
        animationType="slide"
        onRequestClose={() => setShowModal(!showModal)}
        visible={showModal}
        transparent={true}
    >
        <TouchableOpacity
            style={Styles.first}
            onPress={CloseALL}
        ></TouchableOpacity>

        <View style={Styles.LastContainer}>
            <View style={Styles.route}>
                <TouchableOpacity onPress={CloseALL}
                    style={[FontsDefault.ContainerIcon, Styles.marginx]}>
                    <Icon name='close-outline' style={[FontsDefault.iconCenter, FontsDefault.fontIcon, FontsDefault.fontColorWith]} />
                </TouchableOpacity>
            </View>

            <View>
                {error ?

                    <View style={Styles.marginTopFirst}>
                        <ErrorComponent Error={ErrorServer} />
                    </View>
                    :

                    forgetPassword ?

                        <Text style={[Styles.marginTopFirst, FontsDefault.TitleFont, FontsDefault.fontColorBlack]}>
                            {forgetPassword}
                        </Text>

                        :

                        <Fragment>
                            <Text style={[FontsDefault.TitleFont, FontsDefault.fontColorBlack]}>
                                Forgot password
                            </Text>
                            <Text style={[FontsDefault.fontDescription, FontsDefault.fontColorBlack, Styles.textMessage,]} >
                                Please note that your message yo the venue may also be seen by the courier partner delivering your order 😀

                            </Text>
                        </Fragment>
                }

            </View>

            <View style={{ marginTop: 20 }}>
                <View style={Styles.marginTopFirst}>

                    <Input
                        Title='Your Email'
                        onChangeText={(e) => setEmail(e)}
                        value={email}
                        IconName={ValtionMe(email, 'isEmail') ?
                            <View style={[Styles.childrenIcons, FontsDefault.FontColor]}>
                                <Icon name='checkmark-outline' style={Styles.iconcheck} />
                            </View>
                            : null
                        }
                        keyboardType='email-address' 

                        StyleContainer={
                            ValtionMe(email, 'isEmail') &&
                            Styles.ChangeBackground
                        }
                        onSubmitEditing={() => CheckInputKey(email, 'isEmail')}

                    />
                    {!ValtionMe(email, 'isEmail') && <InputError Error={inputKey} />}

                </View>

                <View style={Styles.marginTopFirst}>
                    <ButtonScreen
                        Titel='Forgot password'
                        disabled={
                            !ValtionMe(email, 'isEmail')
                        }
                        onPress={SendData}
                        loading={loading}
                    />
                </View>

            </View>
        </View>
    </Modal>
}



