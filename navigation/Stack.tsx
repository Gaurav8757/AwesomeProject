import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

function Stack() {
  return <View style={styles.header}>
    <Text>Stack</Text>
    <Image src='food.jpg' alt='img'/>
    </View>;
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'center',
    color: 'red',
    fontSize: 20,
  },
});

export default Stack;
