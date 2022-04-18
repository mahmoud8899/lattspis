import React from "react"
import { View} from "react-native"
import IonIcons from "react-native-vector-icons/Ionicons"
import COLORS from "../../Assistant/Color"


const RatingScreen = ({ value, text, color , size = 23 }) => {



    return (
        <View style={{flexDirection : 'row', alignItems : 'center'}}>
            <View>
                <IonIcons
                    style={{ color }}
                    name={
                        value >= 1
                            ? 'heart-sharp'
                            : value >= 0.5
                                ? 'heart-half-sharp'
                                : 'heart-outline'

                    } size={size}
                />
            </View>
            <View>
                <IonIcons
                    style={{ color }}
                    name={
                        value >= 2
                            ? 'heart-sharp'
                            : value >= 1.5
                                ? 'heart-half-sharp'
                                : 'heart-outline'

                    }  size={size}
                />
            </View>
            <View>
                <IonIcons
                    style={{ color }}
                    name={
                        value >= 3
                            ? 'heart-sharp'
                            : value >= 2.5
                                ? 'heart-half-sharp'
                                : 'heart-outline'

                    }  size={size}
                />
            </View>

            <View>
                <IonIcons
                    style={{ color }}
                    name={
                        value >= 4
                            ? 'heart-sharp'
                            : value >= 3.5
                                ? 'heart-half-sharp'
                                : 'heart-outline'

                    }  size={size}
                />
            </View>

            <View>
                <IonIcons
                    style={{ color }}
                    name={
                        value >= 5
                            ? 'heart-sharp'
                            : value >= 4.5
                                ? 'heart-half-sharp'
                                : 'heart-outline'

                    }  size={size}
                />
            </View>
            



        </View>

    )
}

RatingScreen.defaultProps = {

    color: COLORS.firstRed
}


export default RatingScreen