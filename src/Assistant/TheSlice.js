


export function TheSlice(name , Size = 16) {

    return name < Size
        ? name
        : name?.slice(0, 10) + '...'
}