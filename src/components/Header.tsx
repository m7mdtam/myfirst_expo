import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";
export default function Header(){
    return(
        <View style = {styles.container}>
            <Image 
            style={styles.img}
            source={require('../assets/images/1.jpeg')}
            
             />

             <Text style={styles.title}>
                MT News
             </Text>

             <Image 
            style={styles.img}
            source={require('../assets/images/2.jpeg')}
            
             />
        </View>
    );
}

