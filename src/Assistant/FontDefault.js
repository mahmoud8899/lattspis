import {ScaledSheet} from 'react-native-size-matters'
import COLORS  from './Color'

const FontsDefault  = ScaledSheet.create({

 
    TitleFont : {
      
        textTransform : 'capitalize',
        fontSize  : '30@s',
        marginBottom : '10@s',
        fontWeight : 'bold'
    },


    FontCart : {
        fontSize: '15@s',
        textTransform: 'capitalize',
        color: COLORS.light
    },
    fontDestion : {
        fontSize: '14@s',
        textTransform: 'capitalize',
        color: COLORS.lightless
    },

    FontColor : {
        color : COLORS.firstRed,
    },

}) 



export default FontsDefault