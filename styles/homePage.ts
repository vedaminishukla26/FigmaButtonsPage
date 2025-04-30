import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    screen: {
        paddingVertical: 41,
        paddingHorizontal:57,
        flex: 1,
        backgroundColor: '#001537'
    },
    heading:{
        color: '#ffffff',
        fontWeight: 600,
        fontSize: 12,
        letterSpacing: 0,
    },
    row:{
        marginTop: 28,
        flexDirection: 'row',
        alignItems: 'center'
    },
    row2:{
        marginTop: 36,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    row3:{
        marginTop:36,
        marginLeft:1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    cta: {
        backgroundColor: 'green',
        borderRadius: 8,
        padding: 8,
        marginTop: 16,

    },
    ctaContainer: {
        height: '100%',
        width: '20%',
        alignItems: 'flex-start'
    },
    ctaText: {
        padding: 8,
        color: 'white',
        fontWeight: 800
    }
    
})

export default styles