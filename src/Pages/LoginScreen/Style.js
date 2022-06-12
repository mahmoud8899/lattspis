import { ScaledSheet } from 'react-native-size-matters'
import COLORS from '../../Assistant/Color'


const Styles = ScaledSheet.create({

    left : {

        marginRight : '5@s',
        // backgroundColor : 'red'

    },
    row : {
        // backgroundColor : 'red',
        flexDirection : 'row',
        justifyContent : 'space-between',
        //  alignItems : 'center',
        width : '100%'
    },
    // handel forgot password
    first :{
        backgroundColor : COLORS.white,
        flex : 1,
       },
    marginx: {
        marginLeft: 'auto',
    },
    LastContainer: {
        flex: 5,
        backgroundColor: COLORS.white,
        padding: '10@s',
        borderTopRightRadius: '20@s',
        borderTopLeftRadius: '20@s',
        borderWidth: 2,
        borderColor: COLORS.find
    },
    onlytop: {
        marginTop: '10@s',
    },
    error: {

        height: '100@s',
        marginTop: '60@s'
    },
    ChangeBackground: {

        height: '70@s',
        justifyContent: 'center',
        borderRadius: '10@s',
        borderWidth: 2,
        padding: '10@s',
        borderColor: COLORS.firstRed,
    },

    // this is input style
    childrenIcons: {
        // marginTop : '20@s',
        flexDirection: 'row',
        position: 'absolute',
        // marginLeft: '0@s',
        color: COLORS.light,
        right: '0@s',

    },

    iconcheck: {
        //  marginTop : '20@s',
       
        fontSize: '30@s',
        color: COLORS.firstRed
    },



    containerIcon: {
        width: '42@s',
        height: '42@s',
        backgroundColor: COLORS.firstRed,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },


    containerInput: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    input: {
        width: '48%',
    },

    skapa: {

        justifyContent: 'center',
        alignItems: 'center'

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
        marginLeft: '20@s'
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
    colorwith: {

        backgroundColor: COLORS.white,
        borderRadius: '5@s',
        borderColor: COLORS.firstRed,
        borderWidth: '1@s',
        color: COLORS.light

    },
    image: {
        height: '200@s',
        resizeMode: 'contain',
        // backgroundColor : 'red'
        // enum('cover', 'contain', 'stretch', 'repeat', 'center')
    },
    Icon: {
        marginLeft: '10@s',
        fontSize: '30@s',
        color: COLORS.light
    }

})


export default Styles