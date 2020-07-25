import React from 'react';
import {StyleSheet,View,Text} from 'react-native';

function Signin({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Sign In</Text>
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

export default Signin
        
