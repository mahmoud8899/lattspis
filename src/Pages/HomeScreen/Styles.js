import { ScaledSheet, scale } from 'react-native-size-matters'
import COLOR from '../../Assistant/Color'

const Styles = ScaledSheet.create({


   containerLocation: {
      paddingBottom: '10@s',
      // flex : 1
   },
   contentLocation: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
      // paddingBottom: '10@s',
      backgroundColor  : 'red'
   },
   containerHeaderLocation: {
      // backgroundColor : '#eee',
      flexDirection : 'row',
      alignItems : 'center',
      justifyContent : 'space-between',
      height : '60@s',
      marginBottom : '20@s',
   },
   filter :{width : '50%',flexDirection : 'row-reverse', alignItems : 'center'},
   location :{width : '50%', flexDirection : 'row', alignItems : 'center'},
   containerRightIcons: {
      flexDirection: 'row',
      width: '25%',
      justifyContent: 'space-between',
   },
   textLocation: {
      marginLeft: 10,
      fontSize: 15,
      color: COLOR.firstRed,
   },
   iconDown: {
      marginLeft: 10,
      fontSize: 18,
      color: COLOR.firstRed,
   },
   containerIconsRight: {
      flexDirection: 'row',
      alignItems: 'center',
      width: 90,
      justifyContent: 'space-between',
   },
})

export default Styles
