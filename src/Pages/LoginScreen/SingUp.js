import React, { Fragment, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import FontsDefault from "../../Assistant/FontDefault";
import Styles from "./Style";
import Input from '../../Components/InputScreen/Input'
import { InputError } from "../../Components/ErrorComponent/ErrorComponent";
import { ValtionMe } from "../../Assistant/validation";
import { TextEmpty } from '../../Assistant/ErrorText'
import Icon from 'react-native-vector-icons/Ionicons'

// sing up account 

export default function SingUp(props) {
  const { data, setData } = props


  // console.log('fffff', data)

  // correction information
  const [inputKey, setInputKey] = useState('')
  function CheckInputKey(id, validation) {
    setInputKey('')
    if (ValtionMe(id, validation)) {

      if (
        !ValtionMe(data.firstname, 'inputname') || !ValtionMe(data.lastname, 'inputname')
        || !ValtionMe(data.telephone, 'isPhone') || !ValtionMe(data.password, 'isPassword')
      ) {

        return setInputKey(TextEmpty)
      }



      return console.log('yes...')
    } else {
      return setInputKey(TextEmpty)
    }

  }




  // show password
  const [showPasswordInput, setShowPasswordInput] = useState(true)
  function ShowPassword() {


    setShowPasswordInput(!showPasswordInput)

  }



  return <Fragment>
    <View style={[Styles.skapa, Styles.marginTopFirst]}>
      <Text style={[FontsDefault.TitleFont, FontsDefault.FontColor]}>Skapa Konto Eller Logga In</Text>
    </View>

    <View style={[Styles.skapa, Styles.marginTopFirst]}>
      <Text style={FontsDefault.fontDescription}>Logga in här nedan eller skapa ett nytt
        konto pù lätt Spis
      </Text>
    </View>


    <View style={[Styles.containerInput, Styles.marginTopFirst]}>
      <View style={Styles.row}>

        <View style={Styles.input}>
          <Input
            Title='Förnamn'
            onChangeText={(e) => setData({ ...data, firstname: e })}
            value={data.firstname}
            IconName={ValtionMe(data.firstname, 'inputname') ?
              <View style={[Styles.childrenIcons, FontsDefault.FontColor]}>
                <Icon name='checkmark-outline' style={Styles.iconcheck} />
              </View>
              : null
            }
            // autoComplete={true}

            StyleContainer={
              ValtionMe(data.firstname, 'inputname') &&
              Styles.ChangeBackground
            }
            onSubmitEditing={() => CheckInputKey(data.firstname, 'inputname')}

          />
          {!ValtionMe(data.firstname, 'inputname') && <InputError Error={inputKey} />}

        </View>


        <View style={Styles.input}>
          <Input
            Title='Efternamn'
            onChangeText={(e) => setData({ ...data, lastname: e })}
            value={data.lastname}
            IconName={ValtionMe(data.lastname, 'inputname') ?
              <View style={[Styles.childrenIcons, FontsDefault.FontColor]}>
                <Icon name='checkmark-outline' style={Styles.iconcheck} />
              </View>
              : null
            }
            // autoComplete={true}

            StyleContainer={
              ValtionMe(data.lastname, 'inputname') &&
              Styles.ChangeBackground
            }
            onSubmitEditing={() => CheckInputKey(data.lastname, 'inputname')}

          />
          {!ValtionMe(data.lastname, 'inputname') && <InputError Error={inputKey} />}

        </View>

      </View>
    </View>

    <View style={Styles.marginTopFirst}>
      <Input
        Title='Telefonnummer'
        onChangeText={(e) => setData({ ...data, telephone: e })}
        value={data.telephone}
        IconName={ValtionMe(data.telephone, 'isPhone') ?
          <View style={[Styles.childrenIcons, FontsDefault.FontColor]}>
            <Icon name='checkmark-outline' style={Styles.iconcheck} />
          </View>
          : null
        }
        keyboardType='phone-pad'

        StyleContainer={
          ValtionMe(data.telephone, 'isPhone') &&
          Styles.ChangeBackground
        }
        onSubmitEditing={() => CheckInputKey(data.telephone, 'isPhone')}

      />
      {!ValtionMe(data.telephone, 'isPhone') && <InputError Error={inputKey} />}

    </View>



    <View style={Styles.marginTopFirst}>

      <Input
        Title='Ditt lösenord'
        onChangeText={(e) => setData({ ...data, password: e })}
        value={data.password}
        IconName={
          ValtionMe(data.password, 'isPassword') &&
          <View style={[Styles.childrenIcons, FontsDefault.FontColor]}>
            <Icon name='checkmark-outline' style={Styles.iconcheck} />
          </View>



        }


        StyleContainer={
          ValtionMe(data.password, 'isPassword') &&
          Styles.ChangeBackground
        }
        onSubmitEditing={() => CheckInputKey(data.password, 'isPassword')}
        secureTextEntry={showPasswordInput}
      />
      {data?.password?.length >= 1 &&
        <TouchableOpacity style={[Styles.childrenIcons, FontsDefault.FontColor]}
          onPress={ShowPassword} >
          <Icon name='eye-outline' style={[Styles.iconcheck,Styles.left]} />
        </TouchableOpacity>
      }
      {!ValtionMe(data.password, 'isPassword') && <InputError Error={inputKey} />}

    </View>
  </Fragment>
}


// 


//           : null
