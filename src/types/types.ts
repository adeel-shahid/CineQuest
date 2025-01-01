interface RootTabParamList {

}
interface CarouselParams {
    data: Data[]
}

interface Data {
    id: string,
    title: string
}

interface MovieCardParams {
    movie: any,
    onPress: any
}
export type {
    RootTabParamList,
    CarouselParams,
    Data,
    MovieCardParams
};