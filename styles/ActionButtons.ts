import { StyleSheet } from "react-native";

const buttonCommon = {
    paddingHorizontal:20,
    paddingVertical: 8,
    borderRadius: 3.75,
    flexDirection: 'row',
    alignItems: 'center',
}

const Astyles = StyleSheet.create({
    button1:{
        marginLeft:51,
        backgroundColor:'#D0E3FF',
        ...buttonCommon
    },
    button2:{
        marginLeft:27,
        backgroundColor:'#D0E3FF',
        ...buttonCommon
    },
    button3:{
        backgroundColor:'#E6F0FF',
        ...buttonCommon
    },
    btnText:{
        fontWeight:700,
        color:'#000000',
        textAlign: 'center',
        marginLeft: 1,
        verticalAlign: 'middle'
    }

})

export default Astyles