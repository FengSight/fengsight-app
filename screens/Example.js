import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Example from '../components/Example';

const ExampleScreen = ({navigation}) => {
    return (
      <View style={styles}>
        <Text>This is detail screen</Text>
        <Example />
        <Button 
            title = "Go to Details"
            onPress = {() => navigation.navigate('Home')}
        />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default ExampleScreen;