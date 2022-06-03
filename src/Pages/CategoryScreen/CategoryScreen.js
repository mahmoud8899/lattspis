import { OtherFlatList, RenderItem } from "../../Components/FlatlList/FlatList";
import React from "react";




export default function CategoryScreen(props) {
    const { TheParams , Home } = props




    // render data
    const ShowData = (option) => {
        console.log('TheParams',)
        return <RenderItem
            item={option}
            category={TheParams}

        />

    }



    return <OtherFlatList
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
            marginTop: 5,
            paddingBottom: 5,
        }}
        numColumns={2}
        data={Home}
        renderItem={(item) => ShowData(item)}
        keyExtractor={item => item._id}

    />
}