import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.headerText}>Lista De Tarefas</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    header:{
        backgroundColor: 'blue',
        padding: 30,
        alignItems: 'center',
        width: 390
    },
    headerText:{
        paddingTop: 20,
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
    }
})
export default Header;