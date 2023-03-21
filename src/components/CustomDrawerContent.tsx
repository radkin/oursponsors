import React from 'react';
import {Drawer} from 'react-native-paper';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
function CustomDrawerContent(props) {
  const [active, setActive] = React.useState('');

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <Drawer.Section title="Some title">
        <Drawer.Item
          label="Filter for state of CA"
          active={active === 'first'}
          onPress={() => setActive('first')}
        />
        <Drawer.Item
          label="Show All"
          active={active === 'second'}
          onPress={() => setActive('second')}
        />
      </Drawer.Section>
      <DrawerItem label="Help" onPress={() => alert('Link to help')} />
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;
