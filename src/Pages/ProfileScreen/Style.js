import { ScaledSheet, scale } from 'react-native-size-matters'
import COLOR from '../../Assistant/Color'


const Styles = ScaledSheet.create({

    marginx:{
        marginBottom : '7@s'

    },
    marginTopStor: {
        marginTop: '30@s'
    },
    seeall: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    background: {
        backgroundColor: COLOR.firstRed,
        padding: '10@s',
        borderRadius: '4@s',
        justifyContent: 'center'
    },
    fontseeall: {

        backgroundColor: COLOR.firstRed,
        padding: '5@s',
        borderRadius: '8@s',
        fontWeight: 'bold',

    },
    backgroundColor: {

        color: COLOR.white

    },
    edit: {

        flexDirection: 'row-reverse'

    },

    containerbox: {
        borderWidth: '1@s',
        borderColor: COLOR.firstRed,
        padding: '10@s',
        borderRadius: '10@s'
    },

    ButtomDetali: {

        height: '45@s',
        width: '100%',
        backgroundColor: COLOR.firstRed,
        color: COLOR.white,
        borderRadius: '4@s',
        justifyContent: 'center',
        alignItems: 'center',


    },

    borderbottom: {

        borderBottomColor: COLOR.firstRed,
        borderBottomWidth: '2@s',
        width: '100%',
        padding: '5@s',

    },

    flex: {

        flex: 1

    },
    container: {

        flex: 1,
        backgroundColor: COLOR.firstColor
    },

    ButtomClick: {
        marginTop: '90@s',
    },

    MarginTop: {
        marginTop: '20@s',
        marginBottom: '20@s',


    },
    ButtomLine: {
        borderWidth: 1,
        borderColor: COLOR.firstRed,
        borderRadius: '1@s'


    },
    FontSize: {
        fontSize: '40@s',
        color: COLOR.light,
        textTransform: 'capitalize'

    },


    JustCenter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '10@s'
    },
    Radius: {
        width: '50@s',
        height: '50@s',
        borderRadius: scale(50),
        backgroundColor: COLOR.firstRed,
        fontSize: '20@s',
        textAlign: 'center',
        lineHeight: '50@s'
    },
    RadiusText: {
        textAlign: 'center',
        textTransform: 'capitalize',
        lineHeight: '50@s',
    },
    MaraginLeft: {

    },
    fontSizeLite: {
        fontSize: '20@s',
        textTransform: 'capitalize',
        color: COLOR.light,

    },
    fontLite: {
        textTransform: 'capitalize',
        color: COLOR.light,
        width: '230@s',
    },

    ContainerFavouri: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginTop: '5@s'
    },
    ContainerFavouritext: {
        width: '80%',

    },
    ContainerFavouriticon: {
        width: '20%',
        alignItems: 'center'
    },

    iconStory: {
        fontSize: '50@s',
        color: COLOR.firstRed

    },

    titleFont: {
        color: COLOR.firstRed,
        textTransform: 'capitalize',
        fontSize: '30@s',
        marginBottom: '10@s',

    },

    PaddingBorder: {
        height: '40@s',
    },

    parantBox: {

        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 0,
        margin: 0
    },
    parantBoxfirst: {
        width: '30%',
        padding: '0@s'

    },
    parantBoxLast: {
        width: '67%',
        padding: '0@s'
    },

    border: {

        height: '20@s'
    },
    borderwidth: {
        borderBottomColor: 'red',
        borderBottomWidth: '1@s',
        marginTop: '8@s',
        marginBottom: '8@s'
    },



    // start add payment
    cardContainer: {
        backgroundColor: COLOR.finds,
        padding: '10@s',
        borderRadius: '10@s'

    },
    credit: {
        flexDirection: 'row-reverse',
        marginBottom: '10@s'
    },

    creditexpi: {

        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',


    },
    creditexpichildren: {
        marginTop: '10@s',
        width: '49%'

    },



    // start show address
    address: {
        flexDirection: 'row',
        alignItems: 'center',
        height: '70@s',
        marginBottom: '5@s',
        borderTopColor: COLOR.firstRed,
        borderTopWidth: '1@s',
        borderBottomColor: COLOR.firstRed,
        borderBottomWidth: '1@s'
    },
    iconaddress: {
        color: COLOR.firstRed,
        fontSize: '30@s'
    },
    addressText: {
        marginLeft: '10@s'
    },
    FontDefult: {
        fontSize: '20@s',
        textTransform: 'capitalize',
        color: COLOR.light
    },
    FontDefultlast: {
        fontSize: '18@s',
        textTransform: 'capitalize',
        color: COLOR.lightless
    },
    removeScreen: {
        marginLeft: 'auto',
        width: '30@s',
        height: '30@s',
        backgroundColor: COLOR.notClick,
        borderRadius: '50@s',
        alignItems: 'center',
        justifyContent: 'center',

    },
    iconremove: {
        color: COLOR.light
    },



    picker: {
        backgroundColor: COLOR.firstRed,
        borderRadius: '5@s',
        color: COLOR.white
    },

    containerInputText: {
        marginBottom: '5@s'
    },
    map: {
        backgroundColor: COLOR.firstRed,
        flexDirection: 'row',
        borderRadius: '4@s',
        height: '60@s',
        alignItems: 'center'
    },
    mapfont: {
        fontSize: '20@s',
        marginLeft: '10@s',
        color: COLOR.white,
        fontWeight: 'bold'
    },
    mapfontlite: {
        fontSize: '16@s',
        marginLeft: '2@s'
    },
    work: {
        MarginTop: '10@S',
        marginBottom: '100@s',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    boxwork: {
        width: '30%',
        height: '100@s',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '4@s',
        borderColor: COLOR.firstRed,
        borderWidth: 1
    },
    iconswork: {
        fontSize: '30@s',
        color: COLOR.firstRed,
    },


    fontOne: {
        fontSize: '15@s',
        textTransform: 'capitalize',
        color: COLOR.light

    },
    fontOnew: {
        fontWeight: 'bold',

    },
    exstra: {
        fontSize: '20@s'
    },

    city: {
        flexDirection: 'row',
        alignItems: 'center'

    },
    citychildren: {
        fontSize: '20@s',
        marginRight: '5@s'

    },
    color: {

        color: COLOR.white
    },
    marginTop: {
        marginTop: '20@s'
    },
    center: {
        textAlign: 'center'
    },
    marginFont: {
        marginTop: '5@s'
    },

    productImage: {
        width: '50@s',
        height: '50@s',
        borderRadius: '5@s'
    }






})


export default Styles