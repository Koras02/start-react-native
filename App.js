import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput } from 'react-native';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.addTitle}>Hello Todsolist</Text>
            <View style={styles.card}>
                <TextInput style={styles.input} placeholder="Add an item!" />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3143e8',
    },

    addTitle: {
        color: '#fff',
        fontSize: 36,
        marginTop: 30,
        marginBottom: 30,
        fontWeight: '300',
        textAlign: 'center',
        backgroundColor: '#3143',
    },
    card: {
        backgroundColor: '#fff',
        flex: 1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    input: {
        padding: 20,
        borderBottomColor: '#bbb',
        borderBottomWidth: 1,
        fontSize: 24,
        marginLeft: 20,
    },
});
