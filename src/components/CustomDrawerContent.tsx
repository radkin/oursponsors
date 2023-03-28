import React, {useState} from 'react';
import {Drawer} from 'react-native-paper';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
function CustomDrawerContent(props) {
  // General Preferences
  const [myStateOnly, setCheck] = useState(true);
  const [myPartyOnly, setMyPartyOnly] = useState(false);
  // Hide Detail Preferences
  const [twitter, setHideTwitter] = useState(false);
  const [facebook, setHideFacebook] = useState(false);
  const [youtube, setHideYoutube] = useState(false);
  const [googleEntity, setHideGoogleEntity] = useState(false);
  const [cspan, setHideCspan] = useState(false);
  const [voteSmart, setHideVoteSmart] = useState(false);
  const [govTrack, setHideGovTrack] = useState(false);
  const [openSecrets, setHideOpenSecrets] = useState(false);

  const showMyStateOnly = () => {setCheck(prevState => !prevState);};
  const showMyPartyOnly = () => {setMyPartyOnly(prevState => !prevState);};
  const hideTwitter = () => {setHideTwitter(prevState => !prevState);};
  const hideFacebook = () => {setHideTwitter(prevState => !prevState);};
  const hideYouTube = () => {setHideYoutube(prevState => !prevState);};
  const hideGoogleEntity = () => {setHideGoogleEntity(prevState => !prevState);};
  const hideCspan = () => {setHideCspan(prevState => !prevState);};
  const hideVoteSmart = () => {setHideVoteSmart(prevState => !prevState);};
  const hideGovTrack = () => {setHideGovTrack(prevState => !prevState);};
  const hideOpenSecrets = () => {setHideOpenSecrets(prevState => !prevState);};

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <Drawer.Section title="General Preferences">
        <Drawer.Item
          label="only California"
          active={myStateOnly === true}
          onPress={() => showMyStateOnly()}
        />
        <Drawer.Item
          label="only Democratics"
          active={myPartyOnly === true}
          onPress={() => showMyPartyOnly()}
        />
      </Drawer.Section>
      <Drawer.Section title="Hide Details Preferences">
        <Drawer.Item
          label="twitter"
          active={twitter === true}
          onPress={() => hideTwitter()}
        />
        <Drawer.Item
          label="facebook"
          active={facebook === true}
          onPress={() => hideFacebook()}
        />
        <Drawer.Item
          label="youTube"
          active={youtube === true}
          onPress={() => hideYouTube()}
        />
        <Drawer.Item
          label="google entity"
          active={googleEntity === true}
          onPress={() => hideGoogleEntity()}
        />
        <Drawer.Item
          label="cspan"
          active={cspan === true}
          onPress={() => hideCspan()}
        />
        <Drawer.Item
          label="vote smart"
          active={voteSmart === true}
          onPress={() => hideVoteSmart()}
        />
        <Drawer.Item
          label="gov track"
          active={govTrack === true}
          onPress={() => hideGovTrack()}
        />
        <Drawer.Item
          label="open secrets"
          active={openSecrets === true}
          onPress={() => hideOpenSecrets()}
        />
      </Drawer.Section>

      <DrawerItem label="Help" onPress={() => alert('Link to help')} />
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;
