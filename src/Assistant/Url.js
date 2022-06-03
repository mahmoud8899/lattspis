import { Platform } from "react-native"

let Url = ''

{
    Platform.OS === 'android' ?
        Url = 'http://100.65.67.236:8000/api/'
        : Url = 'http://localhost:8000/api/'
}


export default Url