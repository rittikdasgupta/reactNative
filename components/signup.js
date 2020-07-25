import React from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';

function Signup({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Sign Up</Text>
            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.push('signin')}>
                <Text style={styles.button}>Sign In</Text>
            </TouchableOpacity>
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
    },
    button:{
        fontSize:20,
        fontWeight:"300",
        paddingVertical:10,
        paddingHorizontal:20,
        backgroundColor:'#5cb85c',
        color:"white",
        borderRadius:50
    }
})

export default Signup