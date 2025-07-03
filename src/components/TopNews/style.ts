import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container:{
        marginTop:16,
        paddingHorizontal:8,

    },
    sectionTitle:{
        fontSize:20,
        color:'red',
        fontWeight:'bold'

    },
    listCont:{
        marginTop:10,
        marginHorizontal:10,

    },
    cardCont:{
        flexDirection:'row',
        alignItems:'center',
        gap:10,
        borderWidth:1,
        borderColor:'red',
        paddingEnd:10,
        borderRadius:20,
        overflow:'hidden',
        marginBottom:10,
    },
    cardArticleName:{
        textAlign:'left',
        flex:1,
    },
    cardArticleImage:{
        width:100,
        height:90,
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,

    },
})