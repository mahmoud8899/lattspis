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
   styleImage: {
      width: '100%',
      height: '300@s',
      position: 'relative',
   },
   containerLeftButton: {
      position: 'absolute',
      marginLeft: '15@s',
      marginTop: '15@s',
   },
   ContentChildren: {
      paddingBottom: '100@s',
   },
   containerDescription: {
      marginBottom: '20@s',
   },
   contentDescription: {
      marginTop: '10@s',
      width: '80%',
      lineHeight: '20@s',
   },
   container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
   },
   containerIconText: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   styleIcon: { padding: '8@s', fontSize: '26@s' },
   contentRating: {
      flexDirection: 'row',
      marginLeft: '8@s',
      alignItems: 'center',
      justifyContent: 'space-between',
   },
   containerBtn: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
   },
   stylesText: {
      backgroundColor: COLORS.firstRed,
      color: COLORS.white,
      borderRadius: '10@s',
      padding: '8@s',
   },
   emptyView: {
      borderWidth: '0.3@s',
      borderColor: '#ccc',
      marginTop: '10@s',
      height: '0.1@s',
   },
   SeeText: {
      fontSize: '18@s',
   },
   contentParagraph: {
      marginBottom: '30@s',
      marginTop: '20@s',
      padding: '10@s',
      borderRadius: '10@s',
      backgroundColor: '#f1f1f1',
   },
})

export default Styles
