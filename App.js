import React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Bateria from './api/bateria';
import Calendario from './api/calendario';
import Acelerador from './api/acelerador';
import Barometro from './api/barometro';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={navigation.openDrawer}
        title="Open navigation drawer"
      />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Bateria" component={Bateria} />
        <Drawer.Screen name="Calendario" component={Calendario} />
        <Drawer.Screen name="Acelerômetro" component={Acelerador} />
        <Drawer.Screen name="Barômetro" component={Barometro} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}