import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

export default class CategorisScreen extends Component {
    render() {
        return (
            <View style={styles.screen}>
                <Text> CategoryScreen </Text>
                <Button title="Go to Meal" onPress={() => { this.props.navigation.navigate('MealDetail') }} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})