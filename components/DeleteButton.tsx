import images from "@/constants/images"
import Dstyles from "@/styles/DeleteButton"
import { Image, ImageSourcePropType, Text, View } from "react-native"

const DeleteButton = (props : { image?: ImageSourcePropType, text?:string }) => {
    const { image, text } = props
    return (
        <View style={Dstyles.button} >
            <Image source={images.icon3} style={{ height: 15, width: 15, marginRight: 6 }}  />
            <Text style= {Dstyles.btnText}>{text}</Text>
        </View>
    )
        
}

export default DeleteButton