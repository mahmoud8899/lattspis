



export default function ExtraStyle({ExtraStyle}) {

    return <ExtraStyle
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
            marginTop: 5,
            paddingBottom: 5,
        }}
        numColumns={2}
    />
}