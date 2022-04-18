import { ScaledSheet, scale } from 'react-native-size-matters'
import COLOR from '../../Assistant/Color'


const Styles = ScaledSheet.create({
   containerChildren: {
      backgroundColor: COLOR.white,
      flex: 1,
      padding: '10@s',
   },
   ContainerHeader: {
      flexDirection: 'row',
      paddingBottom: '10@s',
      alignItems : 'center',
     
   },
   containerLocation: {
      flexDirection: 'row',
      alignItems : 'center',
      justifyContent : 'space-between'
   },
   icon:{
   lineHeight : '60@s',
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
   iconsRight: {
      width: 40,
      height: 40,
      borderRadius: 50,
      backgroundColor: COLOR.firstRed,
      color: '#eee',
      fontSize: 25,
      lineHeight: 40,
      textAlign: 'center',
   },
})

export default Styles
