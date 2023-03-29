import React, {useEffect} from 'react';
import {Drawer} from 'react-native-paper';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {useDispatch, useSelector} from 'react-redux';
import {getPreferences} from '../store/actions/preferencesAction';
function CustomDrawerContent(props) {
  const dispatch = useDispatch();
  const preferencesListData = useSelector(state => state.preferencesList);
  const {preferences} = preferencesListData;

  // General Preferences
  useEffect(() => {
    dispatch(getPreferences());
  }, [dispatch]);

  const dummyAction = () => {
    console.log('dummy boolean toggle')
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <Drawer.Section title="General Preferences">
        <Drawer.Item
          label="only California"
          active={preferences.my_state_only === true}
          onPress={() => dummyAction()}
        />
        <Drawer.Item
          label="only Democrats"
          active={preferences.my_party_only === true}
          onPress={() => dummyAction()}
        />
      </Drawer.Section>
      <Drawer.Section title="Hide Details Preferences">
        <Drawer.Item
          label="twitter"
          active={preferences.twitter_hide === true}
          onPress={() => dummyAction()}
        />
        <Drawer.Item
          label="facebook"
          active={preferences.facebook_hide === true}
          onPress={() => dummyAction()}
        />
        <Drawer.Item
          label="youTube"
          active={preferences.youtube_hide === true}
          onPress={() => dummyAction()}
        />
        <Drawer.Item
          label="google entity"
          active={preferences.google_entity_hide === true}
          onPress={() => dummyAction()}
        />
        <Drawer.Item
          label="cspan"
          active={preferences.cspan_hide === true}
          onPress={() => dummyAction()}
        />
        <Drawer.Item
          label="vote smart"
          active={preferences.vote_smart_hide === true}
          onPress={() => dummyAction()}
        />
        <Drawer.Item
          label="gov track"
          active={preferences.gov_track_hide === true}
          onPress={() => dummyAction()}
        />
        <Drawer.Item
          label="open secrets"
          active={preferences.open_secrets_hide === true}
          onPress={() => dummyAction()}
        />
      </Drawer.Section>

      <DrawerItem label="Help" onPress={() => alert('Link to help')} />
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;
