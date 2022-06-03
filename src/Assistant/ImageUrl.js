

export const ImageUrl = `http://localhost:8000`

export const TheImageCheck = (name) => {

    

    const ImageCheck = name?.slice(0, 5)
    if (ImageCheck === 'https') {

        return `${name}`
    } else {
        return `${ImageUrl}${name}`
    }

}