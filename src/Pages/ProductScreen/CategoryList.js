import FontsDefault from "../../Assistant/FontDefault";
import Styles from "../RestaurantScreen/Styles";
import { View, Text, } from 'react-native'
import React from "react";

export default function CategoryList(props) {
    const { data } = props




    return <View style={Styles.containerCategoryFood}>
        {data?.map((category, Index) => (
            <View key={Index} style={ Styles.styleTitleFood}>
                <Text
                    style={[
                        FontsDefault.fontColorNotClick,
                        FontsDefault.fontDescriptionLight,
                        FontsDefault.fontColorBlack,
                       
                    ]}
                >
                    {category?.name}
                </Text>
            </View>

        ))}

       
    </View>
}


// {/* <Text style={[FontsDefault.fontDescriptionLight]}>Sushi</Text>
// <Text style={[FontsDefault.fontDescriptionLight]}>
//     Poke Bowls
// </Text>
// <Text style={[FontsDefault.fontDescriptionLight]}>
//     Sashimi
// </Text> */}