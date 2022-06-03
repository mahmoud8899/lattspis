import { TouchableOpacity, View, Text, Image } from 'react-native'
import Styles from '../../Pages/RestaurantScreen/Styles'
import FontsDefault from '../../Assistant/FontDefault'
import React, { useEffect } from 'react'
import { OtherFlatList } from './FlatList'
import { useDispatch, useSelector } from 'react-redux'
import { TheImageCheck } from '../../Assistant/ImageUrl'
import { PorudtsActionPaganationPublic } from '../../Redux/Action/ProductsAction'
import LazyLoading from '../LazyLoading/LazyLoading'

function ProductCard({ item, setOppenProductCard }) {

    // console.log('item',item?.item?._id)
    return <TouchableOpacity
        onPress={() => setOppenProductCard({ value: true, object: item?.item })}
        key={item?.item?._id}
    >
        <View style={Styles.containerStarters}>
            <View
                style={
                    item?.item?.image ? Styles.ContainerText : null
                }
            >
                <Text
                    style={[
                        Styles.somePadding,
                        FontsDefault.iconSize,
                        FontsDefault.fontColorBlack,
                    ]}
                >
                    {item.item.name}
                </Text>
                <Text style={FontsDefault.fontDescriptionLight}>
                    {item.item.description}
                </Text>
                <Text style={FontsDefault.FontStylePrice}>
                    {item?.item?.prices} kr
                </Text>
            </View>
            {item?.item?.image && (
                <View style={Styles.containerImage}>

                    <LazyLoading image={TheImageCheck(item?.item?.image)} style={Styles.imageStyle} />

                </View>
            )}
        </View>
        <View style={Styles.lineHeight}></View>
    </TouchableOpacity>
}



export default function ItemProducts(props) {
    const { setOppenProductCard, matProducts, Restaurant_id, NumberPages } = props


    const dispatch = useDispatch()



    // console.log('NumberPages',NumberPages)


    // console.log('Restaurant_id', Restaurant_id)

    // more data 
    function onEndReached() {

        if(NumberPages > 1){

            return   dispatch(PorudtsActionPaganationPublic(Restaurant_id))
        }

        // if (NumberPages > 1) {
          
        //     return console.log('testing more data.. scroll ')

        // }

        // return console.log('run...')


    }




    return <OtherFlatList
        data={matProducts}
        renderItem={(item) => <ProductCard
            item={item}
            setOppenProductCard={setOppenProductCard}
        />}
        horizontal={false}
        keyExtractor={(item) => item?._id}
        onEndReachedThreshold={0.5}
        onEndReached={onEndReached}
    // horizontal={false}
    // nestedScrollEnabled={true}
    />





}


