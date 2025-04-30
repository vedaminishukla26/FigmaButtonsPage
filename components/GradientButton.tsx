import images from "@/constants/images"
import styles from "@/styles/GradientButton"
import {LinearGradient} from 'expo-linear-gradient'
import { Image, ImageSourcePropType, Text } from "react-native"

const GradientButton = (props : { image?: ImageSourcePropType, text?:string, btnStyles:{}, btnTextStyles?:{} }) => {
    const { image, text, btnStyles, btnTextStyles } = props
    console.log('vv',btnTextStyles)
    return (
        <LinearGradient end={{x:0, y:1}} start={{x:0, y:0}}  style={btnStyles} colors={['#2246EE', '#2B7FFF']} >
            {image && (<Image source={image} style={{ height: 15, width: 15 }}  />)}
            <Text style={btnTextStyles}> {text} </Text>
        </LinearGradient>
    )
}

export default GradientButton