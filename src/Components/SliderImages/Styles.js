import { ScaledSheet, scale } from 'react-native-size-matters'
import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

const imageWidth = width / 3

const imageHeight = imageWidth * 2

const Styles = ScaledSheet.create({
   imagesSlider: {
      marginTop: '15@s',
      borderRadius: '10@s',
      height: '200@s',
   },
})

export default Styles
