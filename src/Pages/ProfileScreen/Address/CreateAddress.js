import { CloseOldAddress } from '../../../Components/CloseConponent/ColseConponent'
import React, { Fragment, useState, useContext, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { LeftBottom } from '../../../Components/LeftBottom/LeftBottom'
import ButtonScreen from '../../../Components/ButtonScreen/ButtonScreen'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { ChoseLanguageDatilas } from '../../../Components/UseContext/ChoseLanguage'
import { InputError } from '../../../Components/ErrorComponent/ErrorComponent'
import { AddAddressAction, FindAnOldAddress ,AddressSave } from '../../../Redux/Action/AuthAction'
import LoadingError from '../../../Components/LoadingError/LoadingError'
import HeaderScreen from '../../../Components/Header/Header'
import FindAnOldAddressClass from './FindAnOldAddressClass'
import { ValtionMe } from '../../../Assistant/validation'
import CreateAddressWrite from './CreateAddressWrite'
import FontsDefault from '../../../Assistant/FontDefault'
import ProfileLang from '../../../Language/Profile'
import Icon from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from 'react-redux'
import SearchForAddress from './SearchForAddress'
import ChooseCity from './ChooseCity'
import Styles from '../Style'



export default function CreateAddress(props) {
   const { Language } = useContext(ChoseLanguageDatilas)

   const { navigation, route } = props

   // params coming from Edit Address....
   const ParamsEdit = route?.params?.params




   const dispatch = useDispatch()
   // select city 
   const [closeShow, setCloseShow] = useState(false)
   // next page to form
   const [nextPage, setNextPage] = useState(false)

   // set error if choose input are empty
   const [errorInput, setErrorInput] = useState('')

   // set the custmer  address 
   const [postData, setPostData] = useState(
      {
         address: '',
         city: '',
         location: '',
         door: '',
         zipcode: '',
         work: '',
         selectMaps: false,
         place_id : ''
      })


   // find an old address 
   const TheCheckOldAddress = useSelector((state) => state?.theCheckAddress)
   const { loading, error, oldAddress } = TheCheckOldAddress


   // options
   // if customer has an old address
   // params edit address..
   useEffect(() => {

      if (typeof ParamsEdit?.address === 'undefined') {

         // console.log('yes,,,...')
         !oldAddress && dispatch(FindAnOldAddress())
         // return console.log('yes...')
      } else {

         setPostData(ParamsEdit)
      }

   }, [dispatch, ParamsEdit?.address])


   // console.log('postData',postData)


   // options
   // [1]  : useEffect check from server if the customer has an old address 
   // [2] : button goback
   // [3] : header
   // [4] : select city
   // [5] : SearchForAddress this is write address with pass set address
   // [6] : FindAnOldAddressClass this is find an old address 
   // [6] botton next input

   // this is handle bottom
   const HandleAddaddress = () => {
      setErrorInput('')
      // check choose city
      if (!postData?.city) return setErrorInput('Choose city')
      // check address 
      if (!postData?.address) return setErrorInput('write your Address')

      // validation address...
      if (nextPage) {


         // add address 
         dispatch(AddAddressAction(postData))
         // save addres
         dispatch(AddressSave(postData))
         navigation.goBack()
         CloseOldAddress(dispatch)
         return


      }

      // oppen next input
      return setNextPage(!nextPage)



   }

   // close add new address
   function HandleClose() {
      if (nextPage) return setNextPage(!nextPage)
      navigation.goBack()
      CloseOldAddress(dispatch)
   }





   console.log('postData',postData)
   return (
      <View style={[FontsDefault.Conter, FontsDefault.fontBackgroundColoe]}>



         <LoadingError loading={loading} error={error} >
            <KeyboardAwareScrollView extraHeight={400} enableOnAndroid>
               <View style={[FontsDefault.ContainerALLPadding, FontsDefault.fontBackgroundColoe]}>
                  <LeftBottom onPress={HandleClose} />
                  <HeaderScreen Title={ProfileLang.addNewAddressBtn[Language]} />
               </View>

               {!nextPage ?
                  <Fragment>


                     <View style={[FontsDefault.Cover, FontsDefault.fontBackgroundColoe]}>
                        <View style={FontsDefault.ContainerALLPadding}>
                           <View style={{ marginBottom: 10 }}>

                              <TouchableOpacity onPress={() => setCloseShow(!closeShow)} style={[Styles.olika, Styles.cityselect]}>
                                 <View>
                                    <Text style={[FontsDefault.fontCategory, Styles.fontLite]}>City</Text>
                                    <Text style={[FontsDefault.fontCategory, Styles.fontLite]}>
                                       {postData?.city ? postData?.city : 'select'}
                                    </Text>
                                 </View>
                                 <View>
                                    <Icon name='chevron-down-outline' style={[FontsDefault.fontIcon, FontsDefault.FontColor]} />
                                 </View>

                              </TouchableOpacity>

                              {errorInput === 'Choose city' ?
                                 <View>
                                    <InputError Error={errorInput} />
                                 </View>
                                 : null

                              }


                           </View>

                           <SearchForAddress
                              postData={postData}
                              setPostData={setPostData}
                           />

                           {errorInput === 'write your Address' ?
                              <View>
                                 <InputError Error={errorInput} />
                              </View>
                              : null

                           }

                        </View>
                     </View>



                  </Fragment>
                  :
                  <CreateAddressWrite
                     setNextPage={setNextPage}
                     postData={postData}
                     setPostData={setPostData}

                  />
               }










            </KeyboardAwareScrollView>
            <View style={[FontsDefault.Cover, FontsDefault.fontBackgroundColoe, Styles.bx]}>
               <View style={FontsDefault.ContainerALLPadding}>
                  <ButtonScreen
                     Titel={ProfileLang.nextBtn[Language]}
                     onPress={HandleAddaddress}
                     disabled={
                        nextPage ?
                           !ValtionMe(postData?.address, 'inputname') ||
                           !ValtionMe(postData?.city, 'inputname') ||
                           !ValtionMe(postData.door, 'inputname') ||
                           !ValtionMe(postData?.zipcode, 'inputname') ||
                           !postData?.selectMaps === true ||
                           !ValtionMe(postData?.work, 'inputname')

                           :
                           !ValtionMe(postData?.address, 'inputname') ||
                           !ValtionMe(postData?.city, 'inputname')
                     }
                  />
               </View>
            </View>



            <ChooseCity
               setCloseShow={setCloseShow}
               closeShow={closeShow}
               setPostData={setPostData}
               postData={postData}
            />

            {oldAddress !== null ?
               <FindAnOldAddressClass
                  setPostData={setPostData}
                  postData={postData}
               />
               : null
            }
         </LoadingError>





      </View>
   )
}



