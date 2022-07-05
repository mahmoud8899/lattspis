
import React, { useState, useEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import Icon from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from 'react-redux'
import COLORS from '../../Assistant/Color'
import { AddLikeCartAction, removeLikeAction } from '../../Redux/Action/CardAction'

export default function YourFvourite(props) {
    const { data } = props


    const dispatch = useDispatch()



    /// like restarge...
    const like = useSelector((state) => state?.like)
    const { likeCart } = like


    const [likeProduct, setLikeProduct] = useState('')



    useEffect(() => {

        if (data && likeCart) {
            setLikeProduct(likeCart?.find((result) => result?._id === data?._id))
        }

    }, [likeCart, data, likeProduct])










    function AddFavourit() {


        if (likeProduct) {

            return dispatch(removeLikeAction(data?._id))
        }

        if (data !== null) {

            return dispatch(AddLikeCartAction(data))
        }



    }


    return <TouchableOpacity onPress={AddFavourit} >
        <Icon name={likeProduct ? 'heart-sharp' : 'heart-outline'} style={Styles.Icon} />
    </TouchableOpacity>
}

// heart-sharp

const Styles = ScaledSheet.create({
    Icon: {
        fontSize: 40,
        color: COLORS.firstRed,

    },
})