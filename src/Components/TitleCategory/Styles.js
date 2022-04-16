import { ScaledSheet, scale } from 'react-native-size-matters'
import COLOR from '../../Assistant/Color'
import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

const imageWidth = width / 3

const imageHeight = imageWidth * 2

const Styles = ScaledSheet.create({
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
