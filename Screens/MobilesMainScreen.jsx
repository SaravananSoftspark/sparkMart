import React from 'react';
import { View, Text, Button } from 'react-native';

const MobilesMainScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to the Mobiles Main Screen!</Text>
      <Button
        title="Go Back to Home"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default MobilesMainScreen;