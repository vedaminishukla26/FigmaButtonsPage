import { StyleSheet } from 'react-native'
const commonStyles = {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4
}
const styles = StyleSheet.create({
    button:{
        paddingHorizontal: 35,
        paddingVertical: 8,
        marginRight: 41,
        ...commonStyles
    },
    btnText:{
        color:'#ffffff' 
    },
    button2:{
        paddingHorizontal: 12,
        paddingVertical: 7,
        marginRight : 41,
        ...commonStyles,
    },
    button3:{
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderWidth :0.47,
        borderColor: '#ffffff',
        shadowColor:'#0065FF' ,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.7,
        shadowRadius: 10,
        ...commonStyles
    },
    btn3Text:{
        fontWeight:700,
        color:'#ffffff',
        
    }
})


export default styles