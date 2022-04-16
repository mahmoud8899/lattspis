import { ScaledSheet, scale } from 'react-native-size-matters'
import COLOR from '../../Assistant/Color'


const Styles = ScaledSheet.create({
    containerChildren: {
        backgroundColor: COLOR.white,
        flex: 1,
        padding: '10@s'
    },
    containerLoaction: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textCity: {
        marginLeft: '15@s',
        fontSize: '16@s',
        color: COLOR.firstRed
    },
    IconsLeft: {
        width: '40@s',
        height: '40@s',
        borderRadius: '50@s',
        backgroundColor: COLOR.firstRed,
        color: '#eee',
        fontSize: '30@s',
        lineHeight: '40@s',
        textAlign: 'center',
      },
      iconDown: {
          marginLeft: '8@s',
          fontSize: '20@s',
          color: COLOR.firstRed
      },
      containerSlider: {
        width: '100%'
      },
      imagesSlider: {
          marginTop: '15@s',
          borderRadius: "10@s",
          width: '95%',
          height: '250@s'
      },
      storesDelivering: {
        flexDirection: 'row',
        marginTop: '20@s',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
      titleHeader: {
        fontSize: '20@s',
        fontWeight: 'bold',
        color: 'black'
      },
      seeAllButton: {
          color: COLOR.firstRed,
          fontWeight: 'bold',
          backgroundColor: '#d5a8a82b',
          padding: '8@s',
          borderRadius: '8@s'
    },
    cardsContainer: {
        borderRadius: '50@s',
        marginTop: '20@s'
    },
    stretch: {
        width: '50%',
        height: 150,
      },
})


export default Styles