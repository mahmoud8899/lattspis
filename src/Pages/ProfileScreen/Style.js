import {ScaledSheet, scale} from 'react-native-size-matters'
import COLOR from '../../Assistant/Color'


const Styles = ScaledSheet.create({
    container: {
        backgroundColor : COLOR.notClick,
        flex : 1,
    },
    containerChildren :{
        backgroundColor : COLOR.white,
        flex : 1,
        padding : '10@s'

    },
    ButtomClick: {
        position: 'relative',
        flex: 1
    },
    Icons : {
        fontSize : '30@s',
        color : COLOR.firstRed,

    },
    MarginTop : {
        marginTop : '20@s',
        marginBottom : '20@s',
        
      
    },
    ButtomLine :{
      borderWidth :1,
       borderColor : COLOR.firstRed,
       borderRadius : '1@s'
        

    },
    FontSize :{
        fontSize : '40@s',
        color : COLOR.light,
        textTransform : 'capitalize'
        
    },


    JustCenter : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        marginBottom : '10@s'
    },
    Radius : {
        width : '50@s',
        height : '50@s',
        borderRadius : scale(50),
        backgroundColor : COLOR.firstRed,
        fontSize : '20@s',
        textAlign : 'center',
        lineHeight : '50@s'
    },
    MaraginLeft: {
    
    },
    fontSizeLite: {
        fontSize : '20@s',
        textTransform : 'capitalize',
        color : COLOR.light,
        
    },
    fontLite: {
        textTransform : 'capitalize',
        color : COLOR.light,
        width : '230@s',
    },
    favourit : {
     
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems  : 'center'
    
    },
    iconStory : {
        fontSize : '50@s',
        color : COLOR.firstRed
      
    },

    titleFont : {
        color : COLOR.firstRed,
        textTransform : 'capitalize',
        fontSize  : '30@s',
        marginBottom : '10@s',
       
    },

    PaddingBorder: {
        height : '40@s',
    },


  


})


export default Styles