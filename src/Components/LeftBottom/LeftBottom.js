import React from 'react';
import { TouchableOpacity, Text,View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScaledSheet ,scale} from 'react-native-size-matters';
import COLORS from '../../Assistant/Color';

export function LeftBottom(props) {
  const { OnClickButtom, Tilte } = props;

  return <TouchableOpacity onPress={OnClickButtom} style={Tilte && Styles.container}  >

    <View style={Styles.Radius}>
    <Icon name="arrow-back-outline" style={Styles.RadiusText}  />
    </View>
   
    {Tilte && <Text style={[Styles.Text,Styles.fontOne, Styles.exstra]} >{Tilte}</Text>}
  </TouchableOpacity>

}

const Styles = ScaledSheet.create({

  container: {
    flexDirection: 'row',
    alignItems: 'center',



  },
  Radius: {
    width: '40@s',
    height: '40@s',
    borderRadius: scale(50),
    backgroundColor: COLORS.firstRed,
    fontSize: '20@s',
    textAlign: 'center',
    lineHeight: '50@s'
},
RadiusText:{
    color : COLORS.white,
    textAlign : 'center',
    textTransform: 'capitalize',
    lineHeight : '40@s',
    fontSize: '30@s'
},
  Text: {

    marginLeft: '20@s',
    fontWeight : 'bold'
  
  },

  exstra : {
    fontSize : '20@s'
},
fontOne: {
  fontSize: '15@s',
  textTransform: 'capitalize',
  color : COLORS.firstRed

},

});
