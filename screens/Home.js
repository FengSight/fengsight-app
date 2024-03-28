import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const HomeScreen = ({navigation}) => {
    return (
      <View style={styles}>
        <Text>Home Screen</Text>
        <Button 
            title = "Go to Example page"
            onPress = {() => navigation.navigate('Example')}
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

export default HomeScreen;