import {Avatar, Card, Provider, Text} from 'react-native-paper';
import { FlatList, StyleSheet } from "react-native";
import * as React from 'react';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
import {useAppDispatch, useAppSelector} from '../hooks';
import {useEffect} from 'react';
import {getSectors} from '../store/actions/sectorAction';
import {connect} from 'react-redux';

function RenderDetailsRepCard({value}) {
  const dispatch = useAppDispatch();
  const sectorsListData = useAppSelector(state => state.sectorsList);
  const {sectors} = sectorsListData;
  const cid = 'N00033390';

  useEffect(() => {
    dispatch(getSectors(cid));
  }, [dispatch]);

  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

  return (
    <Provider>
      <Card style={styles.cardSmallStyle}>
        <Card.Title
          style={styles.textContainer}
          title={`${value.first_name} ${value.last_name}`}
          titleStyle={{
            fontSize: responsiveScreenFontSize(2.2),
            fontWeight: 'bold',
            paddingTop: responsiveScreenHeight(2.5),
            position: 'relative',
            bottom: '17%',
          }}
          left={LeftContent}
        />
        <Card.Content style={styles.textContainer}>
          <Text
            variant="titleMedium"
            style={
              styles.contentText
            }>{`${value.state} ${value.party} ${value.title}`}</Text>
          <FlatList data={sectors}
                    renderItem={({item}) => <Text>{item.sector_name}</Text>}
                    keyExtractor={item => item.id}
          />
        </Card.Content>
        <Card.Cover
          style={styles.cardProfPic}
          source={{uri: value.image_url}}
        />
      </Card>
    </Provider>
  );
}

const styles = StyleSheet.create({
  screenRow: {
    flex: 1,
    alignItems: 'stretch',
  },
  cardSmallStyle: {
    height: responsiveScreenHeight(22.5),
    width: responsiveScreenWidth(60),
    marginHorizontal: 7,
    marginVertical: responsiveScreenHeight(1),
    position: 'absolute',
  },
  cardContainer: {
    margin: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#3d80fc',
  },
  textContainer: {
    marginTop: 15,
    height: responsiveScreenHeight(5),
    left: 2,
    flexDirection: 'row',
  },
  contentText: {
    paddingTop: responsiveScreenFontSize(3),
    fontSize: responsiveScreenFontSize(2),
  },
  cardProfPic: {
    position: 'absolute',
    left: '100%',
    height: responsiveScreenHeight(20),
    width: responsiveScreenWidth(40),
  },
});

const mapStateToProps = state => ({
  sectors: state.sectors,
});

const mapDispatchToProps = {
  getSectors,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RenderDetailsRepCard);
