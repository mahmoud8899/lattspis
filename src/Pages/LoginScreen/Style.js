import { ScaledSheet } from 'react-native-size-matters'
import COLORS from '../../Assistant/Color'


const Styles = ScaledSheet.create({
    colordes:{
color :COLORS.light,
fontSize : '16@s'
    },
    marginTopFirst:{
        marginTop : '10@s',
        marginBottom : '10@s'

    },
    marginTopTop:{

        marginTop : '70@s'

    },
    color : {

        color : COLORS.white,

    },
    email : {
        flexDirection : 'row',
        height: '60@s',
        alignItems: 'center',
        marginBottom: '5@s',
        borderRadius : '5@s',
        backgroundColor : COLORS.firstRed

    },
    fontLogin:{

        fontSize : '27@s',
        fontWeight : 'bold',
        color: COLORS.light

    },
    marginTop: {
        marginTop: '5@s',
        
    },
    button: {
        margin: 0,
        flexDirection: 'column'

    },
    ContainerButtom: {
       
        flexDirection : 'row',
        height: '60@s',
        alignItems: 'center',
        marginBottom: '5@s',
        borderRadius : '5@s',
    },
    FaceColor: {
        backgroundColor: '#0b86ee',
        color : COLORS.white,
        fontSize : '17@s',
        fontWeight : 'bold'
    },
    Icons:{
        color : COLORS.white,
        fontSize : '28@s',
        marginLeft : '10@s',
        borderRadius : 50
    },
    google: {
        borderRadius : '4@s',
        borderWidth : '1@s',
        borderColor : COLORS.firstRed,
       
    },
    GoogleBackground:{
        fontSize : '17@s',
        fontWeight : 'bold',
        color : COLORS.light
    },
    GoogleIcon:{
        color : COLORS.light,
        fontSize : '28@s',
        marginLeft : '10@s'
    }

})


export default Styles