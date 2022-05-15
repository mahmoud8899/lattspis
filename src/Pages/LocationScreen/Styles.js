import { ScaledSheet } from 'react-native-size-matters'
import COLORS from '../../Assistant/Color'

const Styles = ScaledSheet.create({
   center: {
      justifyContent: 'center',
      alignItems: 'center',
   },
   ContainerButtom: {
      backgroundColor: COLORS.notClick,
      borderRadius: '4@s',
      borderColor: COLORS.finds,
      borderWidth: '1@s',
      height: '65@s',
      justifyContent: 'center',
      alignItems: 'center',
   },
   color: {
      color: COLORS.light,
      fontSize: '18@s',
      fontFamily: 'Mitr-Bold',
   },
})

export default Styles
