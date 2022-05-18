


export function TheSlice(name) {

    return name < 12
        ? name
        : name?.slice(0, 10) + '...'
}