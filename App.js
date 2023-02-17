import React, {useState} from 'react';
import { Text, View, StyleSheet, Button, Alert, Switch } from 'react-native';
import Constants from 'expo-constants';

const showAlert = () =>
  Alert.alert(
    'You clicked the button',
    'Do something to close the popup',
    [
      {
        text: 'Cancel',
        onPress: () => Alert.alert('Cancel Pressed'),
        style: 'cancel',
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          'This alert was dismissed by tapping outside of the alert dialog.',
        ),
    },
  );

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: isEnabled ? '#808080' : '#f4f3f4',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        {isEnabled?"Dark":"Light"}
      </Text>
      <Switch
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Button title="Show alert" onPress={showAlert} />
    </View>
  );
}
