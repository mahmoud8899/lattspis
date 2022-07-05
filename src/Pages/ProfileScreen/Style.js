import { ScaledSheet, scale } from 'react-native-size-matters'
import COLOR from '../../Assistant/Color'

const Styles = ScaledSheet.create({

   showaddress : { height: 400, marginTop: 50 },

   MapsTop :{ padding: 0, marginTop: 10 },

   ccc : {

      backgroundColor : 'red',
      width : '100%',
      flexDirection : 'row',
      alignItems : 'center',
      justifyContent : 'space-between'

   },
   bx :{
                    
      position : 'absolute',
      width : '100%',
      bottom : 0
   
},
active: {

   backgroundColor : COLOR.firstRed

},
textActive :{
   color : COLOR.white
},
     first :{ flex: 1, backgroundColor : COLOR.backgroundColor },
   body:
   {
      backgroundColor: COLOR.white,
      padding: 20,
      borderRadius: 10
   },
   // result maps 

   scrollresult: {
      backgroundColor: COLOR.white,
      marginTop: '10@s',
      borderRadius: 10,
      height: '300@s'
   },
   loading: {
      marginTop: '130@s'
   },
   mapsicon: {
      width: '40@s',
      height: '40@s',
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLOR.find,
   },
   box: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomColor: COLOR.find,
      borderBottomWidth: 1,
      padding: '10@s'
   },

   // input 

   containerInput: {
      height: '60@s',
      borderRadius: '10@s',
      borderWidth: 1,
      position: 'relative',
      // justifyContent : 'center',
      backgroundColor: COLOR.white,
      borderColor: COLOR.firstRed,
      flexDirection: 'row',
      alignItems: 'center',

   },
   left: {

      width: '10%',
      height: '25@s',
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: '5@s'

   },
   bac: {
      backgroundColor: COLOR.firstRed
   },
   inputtext: {

      marginLeft: '9@s',
      // backgroundColor : 'red',
      width: '70%',
      // backgroundColor : 'red',
      fontSize: '20@s'

   },
   cont: {

      backgroundColor: COLOR.white,
      height: '60@s',
      // justifyContent : 'center',
      // alignItems : 'center',
      flexDirection: 'row',
      overflow: 'hidden'


   },
   // choose city
   choosecity: {
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row'
   },
   MarginTopX: { marginTop: 100 },
   MarginAuto: { marginLeft: 'auto' },
   click: {

      height: 100,
      borderBottomColor: '#eee',
      borderBottomWidth: 2,

   },
   fon: { fontSize: 40, lineHeight: 100 },

   cityselect: {
      height: '60@s',
      marginBottom: '0@s',
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center'
   },
   olika: {

      borderColor: COLOR.firstRed,
      borderWidth: '2@s',
      borderRadius: '10@s',
      height: '80@s',
      borderWidth: 2,
      padding: '10@s',
      // marginBottom: '100@s'

   },
   // test 
   input: {

      padding: '10@s',
      width: '100%',
      height: '70@s',
      borderWidth: 1,
      borderRadius: '4@s',

   },
   containerResult: {
      backgroundColor: '#eee',
      borderRadius: '5@s',
      marginTop: '5@s',
   },
   result: {


      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      overFlow: 'hidden',
      padding: '10@s',
      borderBottomWidth: 1,
      borderBottomColor: 'white'
   },
   resultText: {
      width: '70%',
      // backgroundColor : 'red'

   },
   resultClick: {

      width: '40@s',
      height: '40@s',
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      // marginRight : '10@s'

   },
   resultch: {
      marginTop: '4@s',
      marginBottom: '4@s',
      fontSize: '18@s',
      textTransform: 'capitalize',

   },

   mapicon: {
      position: 'absolute',
      right: 30,
      top: 50
   },

   ButtonMaps: {
      position: 'absolute',
      bottom: 30,
      width: '100%',
      padding: 30

   },
   containerIcon: {
      width: 40,
      height: 40,
      borderRadius: 50,
      backgroundColor: COLOR.firstRed,
      alignItems: 'center',
      justifyContent: 'center'
   },
   // cover : {
   //    backgroundColor : '#eee',
   //    flexDirection : 'row',
   //    alignItems : 'center',
   //    justifyContent : 'space-between'
   // },
   // test: {


   //    // borderBottomColor : '#eee',
   //    // borderBottomWidth : 1
   // },
   marginx: {
      marginBottom: '7@s',
   },
   marginTopStor: {
      marginTop: '100@s',
   },
   seeall: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',

   },
   background: {
      backgroundColor: COLOR.firstRed,
      padding: '10@s',
      borderRadius: '4@s',
      justifyContent: 'center',
   },
   fontseeall: {
      backgroundColor: COLOR.notClick,
      padding: '5@s',
      borderRadius: '8@s',
      fontWeight: 'bold',
   },
   backgroundColor: {
      color: COLOR.white,
   },
   edit: {
      flexDirection: 'row-reverse',
   },

   containerbox: {
      borderWidth: '1@s',
      borderColor: COLOR.firstRed,
      padding: '10@s',
      borderRadius: '10@s',
   },

   ButtomDetali: {
      height: '45@s',
      width: '100%',
      backgroundColor: COLOR.firstRed,
      color: COLOR.white,
      borderRadius: '4@s',
      justifyContent: 'center',
      alignItems: 'center',
   },

   borderbottom: {
      borderBottomColor: COLOR.firstRed,
      borderBottomWidth: '2@s',
      width: '100%',
      padding: '5@s',
   },

   flex: {
      flex: 1,
   },
   container: {
      flex: 1,
      backgroundColor: COLOR.white,
   },

   ButtomClick: {
      marginTop: '80@s',
   },

   MarginTop: {
      marginTop: '20@s',
      marginBottom: '20@s',
   },
   ButtomLine: {
      borderWidth: 1,
      borderColor: COLOR.firstRed,
      borderRadius: '1@s',
   },
   FontSize: {
      fontSize: '40@s',
      color: COLOR.light,
      textTransform: 'capitalize',
   },

   JustCenter: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '10@s',
      marginTop: '20@s'
   },

   Radius: {
      width: '50@s',
      height: '50@s',
      borderRadius: scale(50),
      backgroundColor: COLOR.firstRed,
      fontSize: '20@s',
      textAlign: 'center',
      lineHeight: '50@s',
   },
   RadiusText: {
      textAlign: 'center',
      textTransform: 'capitalize',
      lineHeight: '50@s',
   },
   MaraginLeft: {},
   fontSizeLite: {
      fontSize: '20@s',
      textTransform: 'capitalize',
      color: COLOR.light,
   },
   fontLite: {
      textTransform: 'capitalize',
      color: COLOR.light,
      width: '230@s',
   },

   ContainerFavouri: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      marginTop: '5@s',
   },
   ContainerFavouritext: {
      width: '80%',
   },
   ContainerFavouriticon: {
      width: '20%',
      alignItems: 'center',
   },

   iconStory: {
      fontSize: '50@s',
      color: COLOR.firstRed,
   },

   titleFont: {
      color: COLOR.firstRed,
      textTransform: 'capitalize',
      fontSize: '30@s',
      marginBottom: '10@s',
   },

   // PaddingBorder: {
   //    height: 'auto',
   // },

   parantBox: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      padding: 0,
      margin: 0,
   },
   parantBoxfirst: {
      width: '30%',
      padding: '0@s',
   },
   parantBoxLast: {
      width: '67%',
      padding: '0@s',
   },

   border: {
      height: '20@s',
   },
   borderwidth: {
      borderBottomColor: 'red',
      borderBottomWidth: '1@s',
      marginTop: '8@s',
      marginBottom: '8@s',
   },

   // start add payment
   cardContainer: {
      backgroundColor: COLOR.finds,
      padding: '10@s',
      borderRadius: '10@s',
   },
   credit: {
      flexDirection: 'row-reverse',
      marginBottom: '10@s',
   },

   creditexpi: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   creditexpichildren: {
      marginTop: '10@s',
      width: '49%',
   },

   // start show address
   address: {
      flexDirection: 'row',
      alignItems: 'center',
      height: '70@s',
      marginBottom: '5@s',
      borderTopColor: COLOR.firstRed,
      borderTopWidth: '1@s',
      borderBottomColor: COLOR.firstRed,
      borderBottomWidth: '1@s',
   },
   iconaddress: {
      color: COLOR.firstRed,
      fontSize: '30@s',
   },
   addressText: {
      marginLeft: '10@s',
   },
   FontDefult: {
      fontSize: '20@s',
      textTransform: 'capitalize',
      color: COLOR.light,
   },
   FontDefultlast: {
      fontSize: '18@s',
      color: COLOR.lightless,
   },
   removeScreen: {
      marginLeft: 'auto',
      width: '30@s',
      height: '30@s',
      backgroundColor: COLOR.notClick,
      borderRadius: '50@s',
      alignItems: 'center',
      justifyContent: 'center',
   },
   iconremove: {
      color: COLOR.light,
   },

   picker: {
      backgroundColor: COLOR.firstRed,
      borderRadius: '5@s',
      color: COLOR.white,
   },

   containerInputText: {
      marginBottom: '5@s',
   },
   map: {
      backgroundColor: COLOR.firstRed,
      flexDirection: 'row',
      borderRadius: '4@s',
      height: '60@s',
      alignItems: 'center',
   },
   mapfont: {
      fontSize: '20@s',
      marginLeft: '10@s',
      color: COLOR.white,
      fontWeight: 'bold',
   },
   mapfontlite: {
      fontSize: '16@s',
      marginLeft: '2@s',
   },
   work: {
      MarginTop: '10@S',
      marginBottom: '100@s',
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
   boxwork: {
      width: '30%',
      height: '100@s',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '4@s',
      borderColor: COLOR.firstRed,
      borderWidth: 1,
   },
   iconswork: {
      fontSize: '30@s',
      color: COLOR.firstRed,
   },
   exstra: {
      fontSize: '18@s',
      color: COLOR.light,
   },
   city: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   citychildren: {
      fontSize: '20@s',
      marginRight: '5@s',
      color: COLOR.firstRed,
   },
   color: {
      color: COLOR.white,
      fontFamily: 'Mitr-Regular',
   },
   marginTop: {
      marginTop: '20@s',
   },
   center: {
      textAlign: 'center',
   },
   marginFont: {
      marginTop: '5@s',
   },
   colorMyAddress: {
      color: COLOR.white,
   },
   productImage: {
      width: '50@s',
      height: '50@s',
      borderRadius: '5@s',
   },
})

export default Styles
