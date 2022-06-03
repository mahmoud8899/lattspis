import { View, Text, TouchableOpacity } from 'react-native'
import Styles from '../RestaurantScreen/Styles'
import FontsDefault from '../../Assistant/FontDefault'
import Icon from 'react-native-vector-icons/Ionicons'
import RatingScreen from '../../Components/RatingScreen/RatingScreen'
import React from 'react'



export default function NavBarProduct(props) {
    const { item, handleNavigate,setUserList, data } = props





    return <View>
        <View style={Styles.containerDescription}>
            <Text style={FontsDefault.TitleFont}>
                {data?.username} 
            </Text>
            <Text
                style={[
                    FontsDefault.fontDescription,
                    Styles.contentDescription,
                ]}
            >
                {data?.description}
            </Text>
        </View>

        <View style={Styles.container}>
            <View>
                <Icon
                    name="happy-outline"
                    style={[FontsDefault.iconSize, Styles.styleIcon]}
                />
            </View>
            <View style={Styles.someMarginText}>
                <Text style={FontsDefault.fontDescription}>
                    Mycket bra,
                </Text>
            </View>
            <View style={Styles.contentRating}>
                <RatingScreen value="2.5" />
            </View>
        </View>

        <View style={Styles.container}>
            <View>
                <Icon
                    name="time-outline"
                    style={[FontsDefault.iconSize, Styles.styleIcon]}
                />
            </View>
            <View style={Styles.someMarginText}>
                <Text style={FontsDefault.fontDescription}>
                    {data?.opentime?.oppen} - {data?.opentime?.close}
                </Text>
            </View>
            <View style={Styles.contentRating}>
                <TouchableOpacity onPress={handleNavigate}>
                    <View style={Styles.containerBtn}>
                        <Text
                            style={[
                                FontsDefault.stylesTextInButton,
                                FontsDefault.fontButton,
                            ]}
                        >
                            More Information
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>

        <TouchableOpacity style={Styles.container} onPress={()=>setUserList(true)} >
            <View>
                <Icon
                    name="bicycle-outline"
                    style={[FontsDefault.iconSize, Styles.styleIcon]}
                />
            </View>
            <View style={Styles.someMarginText}>
                <Text style={FontsDefault.fontDescription}>
                    Leverans om {data?.finishfood?.to} - {data?.finishfood?.end} min
                </Text>
            </View>
            <View style={Styles.contentRating}>
                <View style={Styles.containerBtn}>
                    <Text style={[FontsDefault.stylesTextInButton]}>
                        Andra
                    </Text>
                </View>
            </View>
        </TouchableOpacity>

        <View style={Styles.emptyView}></View>

        <View style={Styles.container}>
            <View>
                <Icon
                    name="alert-circle-outline"
                    style={[FontsDefault.iconSize, Styles.styleIcon]}
                />
            </View>
            <View style={Styles.someMarginText}>
                <Text
                    style={[
                        FontsDefault.iconSize,
                        FontsDefault.fontColorBlack,
                    ]}
                >
                    See All Information
                </Text>
            </View>
            <View style={Styles.contentRating}>
                <Icon
                    name="chevron-forward-outline"
                    style={[FontsDefault.iconSize, Styles.styleIcon]}
                />
            </View>
        </View>
        <View style={Styles.emptyView}></View>

      
    </View>
}



// <View style={Styles.contentParagraph}>
// <Text style={FontsDefault.fontDescription}>
//     `transformRequest` allows changes to the request data
//     before it is sent to the server This is only applicable for
//     request methods 'PUT', 'POST', 'PATCH' and 'DELETE' // The
//     last function in the array must return a string or an
//     instance of Buffer, ArrayBuffer,
// </Text>
// </View>