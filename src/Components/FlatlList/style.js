import { ScaledSheet } from 'react-native-size-matters'
import COLOR from '../../Assistant/Color'

const Styles = ScaledSheet.create({
    FullScrren: {
        width: '100%',
        borderRadius: '4@s',
        borderColor: COLOR.notClick,
        borderWidth: 1,
        borderRadius: '10@s',
        overflow: 'hidden',
        marginTop: '10@s',
        marginBottom: '10@s'
    },
    CartContainer: {

        width: '160@s',
        borderRadius: '4@s',
        borderColor: COLOR.notClick,
        borderWidth: 1,
        margin: '5@s',
        borderRadius: '10@s',
        overflow: 'hidden'

    },
    ImageContainer: {
        position: 'relative'
    },
    image: {

        width: '100%',
        height: 140,
        borderTopRightRadius: '10@s',
        borderTopLeftRadius: '10@s',
        // borderBottomColor: COLOR.find,
        // borderBottomWidth : 1,



    },
    extraWidth: {
        height : 200

    },
    MarginButton: {

        marginBottom: '2@s'

    },
    button: {
        flexDirection: 'row',
        // backgroundColor : '#eee',
        alignItems: 'center',


    },
    HomeScreen: {
        justifyContent: 'space-between'
    },
    SEKContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    containerRating: {
        marginLeft: 12,
    },

    border: {
        borderWidth: 0.8,
        borderStyle: 'dashed',
        borderColor: COLOR.firstRed,
        marginTop: '10@s',
        height: 0.1,
    },
    storesDelivering: {
        flexDirection: 'row',
        marginTop: '8@s',
        marginBottom: '8@s',
        marginLeft: '5@s',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    TIME: {

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    timeringth: {
        padding : '7@s',
        backgroundColor : COLOR.firstRed,
        borderRadius : '4@s',
        borderWidth : 1,
        borderColor: COLOR.white
    }

})


export default Styles