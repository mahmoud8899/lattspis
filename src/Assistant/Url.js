import { Platform } from "react-native"

let Url = ''

{
    Platform.OS === 'android' ?
        Url = 'http://192.168.0.214:8000/api/'
        : Url = 'http://localhost:8000/api/'
}


export default Url