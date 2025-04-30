import images from "@/constants/images"
import Astyles from "@/styles/ActionButtons"
import { Image, ImageSourcePropType, Text, View } from "react-native"

const ActionButton = (props : { image?: ImageSourcePropType, text?:string, btnStyle?:{} }) => {
    const { image, text, btnStyle } = props
    return (
        <View style={btnStyle} >
            <Image source={image} style={{ height: 15, width: 15, marginRight: 6 }}  />
            <Text style= {Astyles.btnText}>{text}</Text>
        </View>
    )
        
}

export default ActionButton