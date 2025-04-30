import { Pressable, StatusBar, Text, TouchableOpacity, View } from "react-native";
import styles from "@/styles/homePage";
import GradientButton from "@/components/GradientButton";
import images from "@/constants/images";
import Gstyles from "@/styles/GradientButton";
import Dstyles from "@/styles/DeleteButton";
import DeleteButton from "@/components/DeleteButton";
import ActionButton from "@/components/ActionButton";
import Astyles from "@/styles/ActionButtons";
import { useNavigation } from "@react-navigation/native";


export default function ButtonPage () {
    const navigation = useNavigation()
    const onCtaPress = () => {
        navigation.pop()
    }

    return (
        <>
        <StatusBar backgroundColor={'#001537'} />
        <View style={styles.screen} >
            <Text style = {styles.heading} > Normal State </Text> 
             <View style={styles.ctaContainer}  >
                <View style = {styles.row} >
                   <GradientButton btnStyles={Gstyles.button} btnTextStyles={Gstyles.btnText} text='BUTTON'/>
                   <GradientButton btnStyles={Gstyles.button2} btnTextStyles={Gstyles.btnText} image={images.icon1} text='Download ZIP file of component'/>
                   <GradientButton btnStyles={Gstyles.button3} btnTextStyles={Gstyles.btn3Text} image = {images.icon2} text="BUTTON" />
               </View>
               <View style = {styles.row2} >
                   <DeleteButton image={images.icon3} text='Delete' />
                   <ActionButton  btnStyle={Astyles.button1} image={images.icon4} text='Open in Figma' />
                   <ActionButton  btnStyle={Astyles.button2} image={images.icon5} text='Move Component' />
               </View>
               <View style = {styles.row3} >
                   <ActionButton btnStyle={Astyles.button3} image={images.icon5} text='Move Component' />
                   <ActionButton  btnStyle={Astyles.button1} image={images.icon6} text='Instant Preview'/>
               </View>
               <View style={{ alignItems: 'center', width: '100%' }}  >
               <TouchableOpacity style={styles.cta} onPress={onCtaPress} >
                <Text style={styles.ctaText} >Back to Home Page</Text>
               </TouchableOpacity>
               </View>
             </View>  
        </View>
        </>
    )
}