import { ScaledSheet } from 'react-native-size-matters'
import COLORS from '../../Assistant/Color'


const Styles = ScaledSheet.create({
    containerInput:{
        flexDirection : 'row',
         width : '100%',
        justifyContent : 'space-between'
    },
    input:{
        width : '48%',
    },

    skapa: {

        justifyContent : 'center',
        alignItems : 'center'

    },
      colordes: {
        color: COLORS.light,
        fontSize: '16@s'
    },
    marginTopFirst: {
        marginTop: '10@s',
        marginBottom: '10@s'

    },
    marginTopTop: {
        marginTop: '70@s'
    },
    color: {
        color: COLORS.light,
        fontSize: '18@s',
        fontWeight: 'bold',
        marginLeft : '20@s'
    },
    fontLogin: {
        fontSize: '27@s',
        fontWeight: 'bold',
        color: COLORS.light
    },
    marginTop: {
        marginBottom: '10@s',
    },
    FaceColor: {
        backgroundColor: '#0b86ee',
        color: COLORS.white,
        flexDirection: 'row',
        height: '65@s',
        borderRadius: '5@s',
        alignItems: 'center'
    },
    colorwith:{

        backgroundColor : COLORS.white,
        borderRadius : '5@s',
        borderColor : COLORS.firstRed,
        borderWidth : '1@s',
        color :COLORS.light

    },
    image: {
        height: '200@s',
        resizeMode: 'contain',
        // backgroundColor : 'red'
        // enum('cover', 'contain', 'stretch', 'repeat', 'center')
    },
    Icon:{
        marginLeft: '10@s',
        fontSize: '30@s',
        color: COLORS.light
    }

})


export default Styles