import React, { useEffect } from "react";
import { View, Text } from "react-native";
import FontsDefault from '../../Assistant/FontDefault'
import FilterIcon from "../../Components/FilterIcon/FilterIcon";
import HeaderLocation from "../../Components/HeaderLocation/HeaderLocation";
import LoadingError from "../../Components/LoadingError/LoadingError";
import Styles from '../HomeScreen/Styles'
import MapIcon from '../../Components/MapIcon/MapIcon'
import { FlatListComponent, RenderItem } from '../../Components/FlatlList/FlatList'
import { FatchButik } from '../../Redux/Action/HomeAction'
import { useDispatch, useSelector } from "react-redux";
export default function StoresScreen() {

    const dispatch = useDispatch()

    // location 
    const location = {
        latitude: Number(59.858131),
        longitude: Number(17.644621)
    }

    // get all restrange and stores....
    const PageHomeRestrange = useSelector((state) => state?.PageHomeRestrange)
    const { loading, error, stores, home } = PageHomeRestrange



    // get all butiker
    useEffect(() => {
        if (location?.latitude !== null && location?.longitude !== null) {
            stores?.length === Number(0) && dispatch(FatchButik({
                lat: location?.latitude,
                long: location?.longitude,
                productType: 'butiker'

            }))

            return
        }


    }, [dispatch, stores?.length])




    // rendem data...
    const ShowData = (option) => {


        return <RenderItem
            item={option}
            FullScrren

        />
    }



    const onEndReached = () =>{

        return dispatch(FatchButik({
            lat: location?.latitude,
            long: location?.longitude,
            productType: 'butiker'

        }))
    }

    return <View style={FontsDefault.containerChildren} >


        <View style={Styles.containerHeaderLocation}>

            <View style={Styles.location}>

                <HeaderLocation notImageMas />
            </View>


            <View style={Styles.filter}>
                <View style={{ marginLeft: 10 }}>
                    <FilterIcon />
                </View>

                <MapIcon />

            </View>

        </View>



        <View>
            <Text style={FontsDefault.TitleFont} >store</Text>
        </View>


        <LoadingError loading={false} error={error}>

            <FlatListComponent
                data={stores}
                HandleItem={ShowData}
                onEndReached={onEndReached}
            />
        </LoadingError>






    </View>
}