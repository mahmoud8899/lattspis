

// select witch address
export const addresSelection = [

    {
        _id: 1,
        name: 'home',
        image: 'home-outline'
    },
    {
        _id: 2,
        name: 'work',
        image: 'desktop-outline'
    },
    {
        _id: 3,
        name: 'other',
        image: 'ellipsis-vertical-outline'
    }
]


// select icon 
export function SelectIcon(name) {

    switch (name) {

        case 'home': return 'home-outline'
        case 'work': return 'desktop-outline'
        case 'other': return 'ellipsis-vertical-outline'


        default: return 'ellipsis-vertical-outline'



    }
}
