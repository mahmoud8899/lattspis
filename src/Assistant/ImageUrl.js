

let Url = ''

{
    Platform.OS === 'android' ?
        Url = 'http://192.168.0.214:8000/'
        : Url = 'http://localhost:8000/'
}

export const TheImageCheck = (name) => {

    

    const ImageCheck = name?.slice(0, 5)
    if (ImageCheck === 'https') {

        return `${name}`
    } else {
        return `${Url}${name}`
    }

}