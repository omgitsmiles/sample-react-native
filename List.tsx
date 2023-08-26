import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

const List = () => {
    const [people, setPeople] = useState([
        { name: 'shaun' },
        { name: 'yoshi' },
        { name: 'mario' },
        { name: 'luigi' },
        { name: 'peach' },
        { name: 'toad' },
        { name: 'bowser' },
    ])


  return (
    <View style={styles.container}>
        <ScrollView>
        {people.map((item, idx) => {
            return (
                <View key={idx}>
                <Text style={styles.item}>{item.name}</Text>
            </View>
            )
        })}
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 40,
        paddingHorizontal: 10,
        
    },
    item: {
        marginTop: 24,
        padding: 30,
        backgroundColor: 'pink',
        fontSize: 24,

    }
})



export default List