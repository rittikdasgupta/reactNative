import React from "react";
import {StyleSheet,View,Text} from "react-native";

function Profile({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Hello from Profile Screen</Text>
        </View>
    );
}
const styles=StyleSheet.create({
    container:{
        display:"flex",
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        fontSize:20,
        paddingVertical:15
    }
})

export default Profile