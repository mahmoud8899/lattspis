import React, { useEffect, useState } from "react"
import { View } from 'react-native'
import FontsDefault from "../../Assistant/FontDefault"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ButtonScreen from "../../Components/ButtonScreen/ButtonScreen"
import SingUp from "./SingUp"
import CheckUser from "./CheckUser"
import NavBarTop from "../../Components/LeftBottom/NavBarTop"
import Styles from "./Style"
import { ValtionMe } from "../../Assistant/validation"

import { useDispatch, useSelector } from 'react-redux'
import { singUp_action, TheEmailCheck, user_Login } from '../../Redux/Action/AuthAction'
// remove the check email and remove error  
import { CloseScreen, CloseUserCheck } from '../../Components/CloseConponent/ColseConponent'


export default function LoginForm(props) {


  const { navigation } = props


  const dispatch = useDispatch()



  // oppen next from 
  const [nextStep, setNextStep] = useState(false)

  // input from...
  const [data, setData] = useState({
    email: '',
    firstname: '',
    lastname: '',
    password: '',
    telephone: '',
  })
  const [oppenPassword, setOppenPassword] = useState(false)
  // option forgot password 
  const [showForgotPasswordOppen, setShowForgotPasswordOppen] = useState(false)



  // user check ut event error and loading
  const userLogin = useSelector((state) => state?.userLogin)
  const { theEmail, userInfo, error, loading, forgetPassword } = userLogin




  // handel from to password or sing up.
  useEffect(() => {
    if (theEmail === 'no') {

      setNextStep(true)
    } else {
      if (theEmail === 'ok')
        setOppenPassword(true)
    }



  }, [theEmail])


  // bulid data
  const user = {
    email: data?.email?.toLowerCase(),
    password: data?.password?.toLowerCase()

  }

  // handel data.
  function HandelForm() {

    // this is remove error 
    CloseScreen(dispatch)

    // send login in 
    if (oppenPassword) {

      return dispatch(user_Login(user))
    }


    // check email
    if (nextStep) {
      return dispatch(singUp_action(data))
      
    } else {
      return dispatch(TheEmailCheck({ email: data?.email?.toLowerCase() }))
      
    }




  }



  // handel from close login 
  function HandelCloseLogin() {

    // console.log('event....')

    if (nextStep) {
      setNextStep(!nextStep)
      setOppenPassword(false)
      CloseUserCheck(dispatch)
    }

    navigation.goBack()
    setOppenPassword(false)
    setNextStep(false)
    CloseUserCheck(dispatch)
    CloseScreen(dispatch)
  }





  // console.log('nextStep',nextStep)

  // options 
  // [1] - NavBarTop nav bar 
  // [2]-- CheckUser this is check email...
  // [3] SingUp this is sing up .....

  return <View style={FontsDefault.containerChildren}>

   
    <View style={FontsDefault.ContainerALLPadding} >

  

    <NavBarTop
      IconName='close-outline'
      onPress={HandelCloseLogin}
      ContainerStyle={[Styles.containerIcon, FontsDefault.MarginLeftx]}
      IconStyle={[FontsDefault.fontColorWith, FontsDefault.fontIcon]}
    />

    </View>


    <KeyboardAwareScrollView extraHeight={400} enableOnAndroid>
    <View style={FontsDefault.ContainerALLPadding} > 
      {nextStep ?
        <SingUp
          data={data}
          setData={setData}
        /> :
        <CheckUser
          data={data}
          setData={setData}
          oppenPassword={oppenPassword}
          error={error}
          showForgotPasswordOppen={showForgotPasswordOppen}
          setShowForgotPasswordOppen={setShowForgotPasswordOppen}
          HandelForm={HandelForm}
        />

      }


      <View style={Styles.marginTopTop}>
        <ButtonScreen
          Titel='next'
          onPress={HandelForm}
          disabled={oppenPassword ?
            !ValtionMe(data?.email, 'isEmail') || !ValtionMe(data?.password, 'isPassword')
            : nextStep ? !ValtionMe(data.firstname, 'inputname') || !ValtionMe(data.lastname, 'inputname')
              || !ValtionMe(data.telephone, 'isPhone') || !ValtionMe(data.password, 'isPassword')
              : !ValtionMe(data?.email, 'isEmail')

          }
          loading={loading}
        />
      </View>


      </View>
    </KeyboardAwareScrollView>


    </View>




}





// <KeyboardAwareScrollView extraHeight={120} enableOnAndroid>




// <View style={Styles.marginTopTop}>
//   <ButtonScreen
//     Titel='next'
//   />
// </View>





// </KeyboardAwareScrollView>

