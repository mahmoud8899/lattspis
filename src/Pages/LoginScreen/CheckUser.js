import React, { Fragment, useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import FontsDefault from '../../Assistant/FontDefault'
import Input from '../../Components/InputScreen/Input'
import { ValtionMe } from '../../Assistant/validation'
import Icon from 'react-native-vector-icons/Ionicons'
import Styles from './Style'
// this is show error 
import { ErrorComponent, InputError } from '../../Components/ErrorComponent/ErrorComponent'
import ForgotPassword from './ForgotPassword'
import { TextEmpty } from '../../Assistant/ErrorText'
// check user email  if user have account 

export default function CheckUser(props) {
    // params input email and set email ....
    const {
        data,
        setData,
        oppenPassword,
        error,
        setShowForgotPasswordOppen,
        showForgotPasswordOppen,
        HandelForm

    } = props


    // correction information
    const [inputKey, setInputKey] = useState('')
    function CheckInputKey(id, validation) {
        setInputKey('')
        if (ValtionMe(id, validation)) {

            // console.log('checkOppen')

            return HandelForm()
        } else {
            return setInputKey(TextEmpty)
        }

    }


    // options 
    // ForgotPassword this forgot password... 
    // ErrorComponent this is show error 
    // inputs from email and password....
    // CheckInputKey this is real time validation...




    return showForgotPasswordOppen ?
        <ForgotPassword
            showModal={showForgotPasswordOppen}
            setShowModal={setShowForgotPasswordOppen}
        />
        :
        <Fragment>


            {
                error ?
                    <View style={Styles.error} >
                        <ErrorComponent
                            Error={error}
                        />
                    </View>
                    :
                    <View style={FontsDefault.containerImage}>
                        <Image
                            style={[FontsDefault.containerImageChildren, Styles.image]}
                            source={require('../../../data/myimage/email.png')}
                        />
                    </View>

            }


            <View style={Styles.marginTopFirst}>
                <Text style={[FontsDefault.fontDescription, Styles.colordes]}>
                    We'll send you an email with a magic link that'll
                    log you in right away.
                </Text>
            </View>

            <View style={Styles.marginTopFirst}>

                <Input
                    Title='Your Email'
                    onChangeText={(e) => setData({ ...data, email: e })}
                    value={data.ChangeBackgroundemail}
                    IconName={ValtionMe(data.email, 'isEmail') ?
                        <View style={[Styles.childrenIcons, FontsDefault.FontColor]}>
                            <Icon name='checkmark-outline' style={Styles.iconcheck} />
                        </View>
                        : null
                    }
                    keyboardType='email-address'

                    StyleContainer={
                        ValtionMe(data.email, 'isEmail') &&
                        Styles.ChangeBackground
                    }
                    onSubmitEditing={() => CheckInputKey(data.email, 'isEmail')}
                />

                {!ValtionMe(data.email, 'isEmail') && <InputError Error={inputKey} />}


            </View>

            <View style={Styles.marginTopFirst}>
                {oppenPassword &&
                    <>
                        <Input
                            Title='Your Password'
                            onChangeText={(e) => setData({...data,password : e})}
                            value={data.password}
                            secureTextEntry={true}
                            IconName={ValtionMe(data.password, 'isPassword') ?
                                <View style={[Styles.childrenIcons, FontsDefault.FontColor]}>
                                    <Icon name='checkmark-outline' style={Styles.iconcheck} />
                                </View>
                                : null
                            }
                            StyleContainer={
                                ValtionMe(data.password, 'isPassword') &&
                                Styles.ChangeBackground
                            }
                            onSubmitEditing={() => CheckInputKey(data.password, 'isPassword')}
                        />
                        {!ValtionMe(data.password, 'isPassword') && <InputError Error={inputKey} />}


                        <TouchableOpacity style={Styles.onlytop} onPress={() => setShowForgotPasswordOppen(true)} >
                            <Text style={[FontsDefault.fontDescription, FontsDefault.FontColor]}>I forgot the password</Text>
                        </TouchableOpacity>
                    </>
                }
            </View>

        </Fragment>












}