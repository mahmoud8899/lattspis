import React, { Fragment } from 'react';
import { Image, View ,Text} from 'react-native';
import FontsDefault from '../../Assistant/FontDefault';
import InputScreen from '../../Components/InputScreen/InputScreen';
import Styles from './Style';


// check user email  if user have account 

export default function CheckUser() {

    return <Fragment>


        <View style={FontsDefault.containerImage}>
            <Image
                style={[FontsDefault.containerImageChildren, Styles.image]}
                source={require('../../../data/myimage/email.png')}
            />
        </View>

        <View style={Styles.marginTopFirst}>
            <Text style={[FontsDefault.fontDescription, Styles.colordes]}>
                We'll send you an email with a magic link that'll
                log you in right away.
            </Text>
        </View>

        <View style={Styles.marginTopFirst}>
            <InputScreen Title='Email' />
        </View>
    </Fragment>
}