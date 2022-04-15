import { ScaledSheet, scale } from 'react-native-size-matters'
import COLOR from '../../Assistant/Color'


const Styles = ScaledSheet.create({
    container: {
       
        flex: 1,
        backgroundColor : COLOR.firstColor
    },
    containerChildren: {
        backgroundColor: COLOR.white,
        flex: 1,
        padding: '10@s'

    },
    ButtomClick: {
        position: 'relative',
        flex: 1
    },
    Icons: {
        fontSize: '30@s',
        color: COLOR.firstRed,

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

    ContainerFavouri : {
      
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        width : '100%',
        marginTop : '5@s'
    },
    ContainerFavouritext: {
        width : '60%',
  
    },
    ContainerFavouriticon :{
        width : '40%',
        alignItems : 'center'
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
        padding : 0,
        margin : 0
    },
    parantBoxfirst: {
        width: '30%',
        padding: '0@s'

    },
    parantBoxLast: {
        width: '67%',
        padding: '0@s'
    },

    border:{
        height : '20@s'
    },
    fontOther: {
        fontSize: '16@s',
        color : COLOR.light
    },


    // start add payment
    cardContainer : {
        backgroundColor : COLOR.finds,
        padding : '10@s',
        borderRadius : '10@s'

    } ,
    credit: {
        flexDirection : 'row-reverse',
        marginBottom : '10@s'
    },

    creditexpi: {

        flexDirection : 'row',
        width : '100%',
        justifyContent : 'space-between',
        alignItems : 'center',


    },
    creditexpichildren:{
        marginTop : '10@s',
        width : '49%'

    },



    // start show address
    address : {
        flexDirection : 'row',
        alignItems : 'center',
        height : '70@s',
        marginBottom : '5@s',
        borderTopColor : COLOR.firstRed,
        borderTopWidth : '1@s',
        borderBottomColor : COLOR.firstRed,
        borderBottomWidth : '1@s'
    },
    iconaddress: {
        color : COLOR.firstRed,
        fontSize : '30@s'
    },
    addressText: {
        marginLeft : '10@s'
    },
    FontDefult: {
        fontSize : '20@s',
        textTransform: 'capitalize',
        color : COLOR.light
    },
    FontDefultlast: {
        fontSize : '18@s',
        textTransform: 'capitalize',
        color : COLOR.lightless
    },
    removeScreen: {
       marginLeft : 'auto',
       width : '30@s',
       height : '30@s',
       backgroundColor : COLOR.notClick,
       borderRadius : '50@s',
       alignItems : 'center',
       justifyContent : 'center',

    },
    iconremove: {
        color: COLOR.light
    }





})


export default Styles