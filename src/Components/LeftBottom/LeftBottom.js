import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScaledSheet } from 'react-native-size-matters';
import COLORS from '../../Assistant/Color';

export function LeftBottom(props) {
  const { OnClickButtom, Tilte } = props;

  return <TouchableOpacity onPress={OnClickButtom} style={Tilte && Styles.container}  >
    <Icon name="arrow-back-outline" style={Styles.IconsLeft} />
    {Tilte && <Text style={Styles.Text} >{Tilte}</Text>}
  </TouchableOpacity>

}

const Styles = ScaledSheet.create({

  container: {
    flexDirection: 'row',
    alignItems: 'center',
  


  },
  IconsLeft: {
    width: '40@s',
    height: '40@s',
    borderRadius: '50@s',
    backgroundColor: COLORS.firstRed,
    color: '#eee',
    fontSize: '30@s',
    lineHeight: '40@s',
    textAlign: 'center',
  },
  Text: {
    fontSize: '20@s',
    marginLeft: '30%',
    fontWeight: 'bold',
    color : COLORS.light
  }
});
