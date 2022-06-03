import FastImage from "react-native-fast-image";
import React from "react";



export default function LazyLoading(props) {




    return <FastImage
        style={props.style}
        source={{
            uri: props.image,
            headers: { Authorization: 'someAuthToken' },
            priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
    />
}