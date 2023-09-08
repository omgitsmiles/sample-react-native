import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native'

const List = () => {

    type people = {
        name: string,
        id: number
    }

    const [people, setPeople] = useState([
        { name: 'shaun', id: 1 },
        { name: 'yoshi', id: 2 },
        { name: 'mario', id: 3 },
        { name: 'luigi', id: 4 },
        { name: 'peach', id: 5 },
        { name: 'toad', id: 6 },
        { name: 'bowser', id: 7 },
    ])

    const pressHandler = (id: number) => {
        console.log(id)
        // setPeople((prevPeople) => {
        //     return prevPeople.filter(person => person.id != id)
        // })
    }


  return (
    <View style={styles.container}>

        <FlatList 
            numColumns={2}
            data={people}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => pressHandler(item.id)}>
                    <Text style={styles.item}>{item.name}</Text>
                </TouchableOpacity>
            )}
        />

        {/* <ScrollView>
        {people.map((item, idx) => {
            return (
                <View key={idx}>
                <Text style={styles.item}>{item.name}</Text>
            </View>
            )
        })}
        </ScrollView> */}
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