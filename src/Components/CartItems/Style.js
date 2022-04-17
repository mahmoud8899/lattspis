import { ScaledSheet, scale } from 'react-native-size-matters'
import COLOR from '../../Assistant/Color'
import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

const imageWidth = width / 3

const imageHeight = imageWidth * 2

const Styles = ScaledSheet.create({
   width: {
      width: '97%',
   },
   imageHeight: {
      height: 200,
   },

   cardsContainer: {
      marginTop: '20@s',
      width: '180@s',
      overflow: 'hidden',
      marginBottom: '10@s',
      marginLeft: '5@s',
      marginRight: '5@s',
   },
   cardShadow: {
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
   },
   imageCard: {
      width: '100%',
      height: 150,
   },
   contentContainer: {
      padding: '10@s',
      backgroundColor: 'white',
   },
   dashedView: {
      borderBottomWidth: 0.8,
      borderStyle: 'dashed',
      paddingTop: 5,
   },
   iconRunContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '8@s',
   },
   iconRun: {
      fontSize: '20@s',
      color: COLOR.firstRed,
      marginRight: '3@s',
   },
   SEKContainer: {
      width: '100@s',
      flexDirection: 'row',
      alignItems: 'center',
   },
   TextColor: {
      color: COLOR.firstRed,
   },
   textTitle: {
      fontSize: '16@s',
      fontWeight: 'bold',
      color: 'black',
   },
   textDescription: {
      fontSize: '14@s',
      color: 'black',
   },
   storesDelivering: {
      flexDirection: 'row',
      marginTop: '20@s',
      alignItems: 'center',
      justifyContent: 'space-between',
   },
   titleHeader: {
      fontSize: '20@s',
      fontWeight: 'bold',
      color: 'black',
      marginLeft: '5@s',
   },
   seeAllButton: {
      color: COLOR.firstRed,
      fontWeight: 'bold',
      backgroundColor: '#d5a8a82b',
      padding: '8@s',
      borderRadius: '8@s',
      marginRight: '5@s',
   },
})

export default Styles
