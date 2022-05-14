import { ScaledSheet } from 'react-native-size-matters'
import COLORS from '../../Assistant/Color'

const Styles = ScaledSheet.create({
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
      flex: 1,
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
   },

   test: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
   },

   styleBackgroundForScroll: {
      backgroundColor: 'white',
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
      fontSize: '26@s',
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
   contentSearch: {},
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
      justifyContent: 'space-between',
      height: '70@s',
      alignItems: 'center',
      color: 'black',
   },
   styleTitleFood: {
      backgroundColor: COLORS.notClick,
      padding: '10@s',
      borderRadius: '20@s',
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
      height: '200@s',
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
   },
   containerFirstOrder: {
      width: '60%',
      flexDirection: 'row',
   },
   contentOrderNumber: {
      paddingTop: '10@s',
      paddingBottom: '10@s',
      paddingLeft: '20@s',
      paddingRight: '20@s',
      width: '50@s',
      borderWidth: '1@s',
      borderRadius: '10@s',
      borderColor: '#ccc',
      color: COLORS.firstRed,
      marginRight: '20@s',
   },
   styleImageOrder: {
      width: '90@s',
      height: '60@s',
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
      padding: 10,
      backgroundColor: COLORS.white,
   },
})

export default Styles
