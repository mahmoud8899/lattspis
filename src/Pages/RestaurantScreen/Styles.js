import { ScaledSheet } from 'react-native-size-matters'
import COLORS from '../../Assistant/Color'

const Styles = ScaledSheet.create({


   thelike : {
      flexDirection : 'row',
      alignItems : 'center',
      justifyContent : 'space-between'
  },
   Image : {

      width : '300@s',
      height : '300@s',
      

   },
   oneflex: {

      flex : 1,
      backgroundColor : COLORS.white,
      justifyContent : 'center',
       alignItems : 'center'

   },
   padding :{ padding: 10, backgroundColor: 'white' },

   Border :{
      borderBottomColor: '#eee',
      borderBottomWidth: 1,
    
   },
   imageLeft : {
      marginLeft : 'auto'

   },
   marginLeft:  { marginTop: 20 },
   marginX: {
      marginLeft: 50
   },
   order: {
      padding: '10@s',
      backgroundColor: 'white',
      position: 'relative',
      flex: 1
   },

   yourOrder: {

      backgroundColor: COLORS.firstRed,
      borderRadius: '10@s'

   },
   buttom: {
      position: 'relative',
      padding: '10@s',
      alignItems: 'center',

   },

   viewOrder: {
      backgroundColor: COLORS.firstColor,
      position: 'absolute',
      bottom: '10@s',
      width: '100%',
      borderRadius: '10@s',


   },
   number: {

      width: '30@s',
      height: '30@s',
      borderRadius: 50,
      backgroundColor: COLORS.white,
      justifyContent: 'center',
      alignItems: 'center'

   },
   buttomcolor: {
      color: COLORS.white,
      fontSize: '20@s'
   },

   buttomchildren: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      // lineHeight : '60@s',
      padding: '15@s'
   },

   containerScroll: {
      height: '100%',
      position: 'relative',
      // flex : 1
   },
   contentLocation: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingBottom: '10@s',
   },
   containerRightIcons: {
      flexDirection: 'row',
      width: '25%',
      justifyContent: 'space-between',
   },
   containerScrollView: {
      backgroundColor: COLORS.white,

   },
   styleImage: {
      width: '100%',
      height: '300@s',
      // position: 'relative',
   },
   containerLeftButton: {
      position: 'absolute',
      width: '100%',
      paddingLeft: '15@s',
      paddingRight: '15@s',
      paddingTop: '15@s',
      zIndex: 5,
      // backgroundColor : 'red',
      // flex : 1
   },

   test: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
   },

   styleBackgroundForScroll: {
      backgroundColor: COLORS.white,
      zIndex: 22,
      borderBottomColor: COLORS.finds,
      borderBottomWidth: 3

   },

   containerSearchIcon: {
      width: '20%',
      alignItems: 'center',
   },

   contentRestaurantName: {
      alignItems: 'center',
      paddingBottom: 15,
   },

   ContentChildren: {
      paddingBottom: '100@s',
   },
   containerDescription: {
      marginBottom: '20@s',
      marginTop: '15@s',
   },
   contentDescription: {
      marginTop: '10@s',
      width: '80%',
      lineHeight: '20@s',
   },
   container: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      height: '50@s',
   },
   containerIconText: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   styleIcon: {
      fontSize: '20@s',
      color: COLORS.lightless,
   },
   contentRating: {
      marginLeft: 'auto',
   },
   containerBtn: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
   },
   someMarginText: {
      marginLeft: 6,
   },
   emptyView: {
      borderWidth: '0.3@s',
      borderColor: '#ccc',
      marginTop: '10@s',
      height: '0.1@s',
   },
   contentParagraph: {
      marginBottom: '10@s',
      marginTop: '20@s',
      padding: '10@s',
      borderRadius: '10@s',
      backgroundColor: '#f1f1f1',
   },

   titleFood: {
      marginTop: '15@s',
   },
   containerStarters: {
      marginBottom: '10@s',
      justifyContent: 'space-between',
      flexDirection: 'row',
      marginTop: '10@s',
      padding: '5@s',
   },
   ContainerText: {
      width: '65%',
   },
   titleStyle: {
      fontSize: '18@s',
   },
   containerImage: {
      backgroundColor: '#f1f1f1',
      width: '100@s',
      height: '100@s',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '15@s',
   },
   imageStyle: {
      width: '70@s',
      height: '70@s',
      borderRadius: '10@s',
   },
   somePadding: {
      paddingBottom: '8@s',
   },
   someMargin: {
      marginBottom: 30,
   },
   lineHeight: {
      borderWidth: 0.3,
      borderStyle: 'solid',
      borderColor: COLORS.firstRed,
      height: 0.1,
   },
   containerCategoryFood: {
      flexDirection: 'row',
      // justifyContent: 'space-between',
      height: '70@s',
      alignItems: 'center',
      color: 'black',
   },
   styleTitleFood: {
      backgroundColor: COLORS.notClick,
      padding: '10@s',
      borderRadius: '20@s',
      marginLeft: '4@s'
   },
   fontSizeTitleFood: {
      fontSize: '16@s',
      fontWeight: 'bold',
   },
   containerTextHeader: {
      marginLeft: '70@s',
      alignItems: 'center',
   },
   headerText: {
      fontSize: 20,
   },
   containerTop: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   containerMap: {
      width: '100%',
      height: '300@s',
   },
   styleMap: {
      width: '100%',
      height: '100%',
   },
   containerIconOnline: {
      flexDirection: 'row',
   },
   iconOnline: { color: 'green', fontSize: 17, marginRight: 8 },
   contentContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
   containerContainer: {
      marginTop: '20@s',
   },
   contentDescription: {
      marginTop: '20@s',
   },
   openingHours: {
      marginTop: '10@s',
      marginBottom: '10@s',
   },
   containerDeliveryInfo: {
      marginBottom: '15@s',
      marginTop: '10@s',
   },
   contentDeliveryInfo: {
      marginBottom: '10@s',
   },
   ContainerOderItem: {
      marginTop: 30,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomColor : '#eee',
      borderBottomWidth : 1,
      padding : '2@s'
   },
   containerFirstOrder: {
      width: '100%',
      flexDirection: 'row',
      // justifyContent: 'space-between',
      alignItems: 'center'
   },
   contentOrderNumber: {
      borderRadius: '10@s',
      borderWidth: 1,
      borderColor: COLORS.notClick,
      width: '40@s',
      height: '40@s',
      justifyContent: 'center',
      alignItems: 'center'

   },
   styleImageOrder: {
      width: '90@s',
      height: '60@s',
      borderRadius: '10@s',
   },
   containerRecommendation: {
      borderBottomColor: '#ccc',
      borderBottomWidth: '1@s',
      paddingBottom: '20@s',
      marginTop: '30@s',
   },
   contentTextRecommendation: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: '20@s',
   },
   textRecommendation: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   iconRecommendation: {
      color: COLORS.firstRed,
      fontSize: '30@s',
      marginRight: '20@s',
   },
   containerWriteMessage: {
      marginTop: '30@s',
      // flex :1,
      // alignItems : 'center',
      // justifyContent : 'center'
   },
   contentAddMessage: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   iconMessage: {
      fontSize: '30@s',
      marginRight: '20@s',
      color: COLORS.firstRed,
   },
   textForAddMessage: {
      marginLeft: '60@s',
   },
   containerBottomButton: {
      marginTop: '30@s',
      backgroundColor: COLORS.white,

   },
})

export default Styles
