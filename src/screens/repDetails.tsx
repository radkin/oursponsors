import {View, StyleSheet} from 'react-native';
import React, {FC, useEffect} from 'react';
import {MD3Colors, Text} from 'react-native-paper';
import RenderRepSectorsTable from '../components/repSectorsTable';
import RenderRepContributorsTable from '../components/repContributorsTable';
import SenatorDetailLinks from '../components/senatorDetailLinks';
import CongressDetailLinks from '../components/congressDetailLinks';
import SmallRepCard from '../components/smallRepCard';
import {scale} from 'react-native-size-matters';
import {useTypedDispatch, useTypedSelector} from '../store/store';
import {NavigationProp} from '@react-navigation/native';
import {getSenatorDetails} from '../store/actions/senatorDetailsAction';
import {MiniSenator} from '../models/MiniSenator';
import {SenatorDetails} from '../models/SenatorDetails';
import {CongressDetails} from '../models/CongressDetails';
import {MiniCongress} from '../models/MiniCongress';
import {getCongressDetails} from '../store/actions/congressDetailsAction';

interface Props {
  navigation: NavigationProp<any>;
  route: Route;
}
interface Route {
  key: string;
  name: string;
  params: MiniRep | null;
}

interface MiniRep {
  value: MiniSenator | MiniCongress;
}

interface TheSenatorDetails {
  senatorDetails: SenatorDetails;
}

interface TheCongressDetails {
  congressDetails: CongressDetails;
}

const RepDetails: FC<Props> = props => {
  const miniRep = props.route.params?.value;

  const dispatch = useTypedDispatch();
  const senatorDetailsObjectData: TheSenatorDetails = useTypedSelector(
    state => state.senatorDetailsObject,
  );
  const {senatorDetails} = senatorDetailsObjectData;

  const congressDetailsObjectData: TheCongressDetails = useTypedSelector(
    state => state.congressDetailsObject,
  );
  const {congressDetails} = congressDetailsObjectData;

  useEffect(() => {
    if (miniRep?.rep_type === 'senator') {
      dispatch(getSenatorDetails(miniRep?.id));
    } else if (miniRep?.rep_type === 'congress') {
      dispatch(getCongressDetails(miniRep?.id));
    }
  }, [dispatch, miniRep?.id, miniRep?.rep_type]);
  if (
    senatorDetails?.senator !== undefined &&
    miniRep?.rep_type === 'senator'
  ) {
    return (
      <View style={{paddingBottom: scale(450)}}>
        <View style={styles.card}>
          <SmallRepCard miniRep={miniRep} />
        </View>

        <View style={styles.table}>
          <RenderRepSectorsTable repSectors={senatorDetails.sectors} />
        </View>

        <View style={styles.table}>
          <RenderRepContributorsTable
            repContributors={senatorDetails.contributors}
          />
        </View>

        <View>
          <SenatorDetailLinks preferenceDetails={senatorDetails} />
        </View>
      </View>
    );
  } else if (
    congressDetails?.congress !== undefined &&
    miniRep?.rep_type === 'congress'
  ) {
    return (
      <View style={{paddingBottom: scale(450)}}>
        <View style={styles.card}>
          <SmallRepCard miniRep={miniRep} />
        </View>

        <View style={styles.table}>
          <RenderRepSectorsTable repSectors={congressDetails.sectors} />
        </View>

        <View style={styles.table}>
          <RenderRepContributorsTable
            repContributors={congressDetails.contributors}
          />
        </View>

        <View>
          <CongressDetailLinks preferenceDetails={congressDetails} />
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.noRep}>
        <Text>Unable to display profile</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  surface: {
    flexDirection: 'column-reverse',
    flex: 1,
    padding: scale(4),
    margin: scale(2),
    textAlign: 'center',
    height: scale(50),
    width: scale(340),
    borderColor: 'grey',
    backgroundColor: MD3Colors.secondary95,
  },
  card: {
    borderRadius: scale(4),
    borderWidth: scale(2),
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: MD3Colors.secondary90,
    height: scale(80),
  },
  table: {
    borderRadius: scale(4),
    borderWidth: scale(2),
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: MD3Colors.secondary90,
    height: scale(180),
  },
  detailsContainer: {
    flex: 1,
    FlexDirection: 'row',
    paddingBottom: scale(100),
  },
  surfaceIcon: {
    marginTop: scale(12),
    height: scale(40),
    left: scale(10),
    flexDirection: 'row',
    alignSelf: 'flex-start',
    transform: [{scaleX: scale(1)}, {scaleY: scale(1)}],
  },
  surfaceText: {
    margin: scale(8),
    position: 'absolute',
    left: '20%',
    fontSize: scale(15),
    paddingTop: scale(15),
  },
  noRep: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RepDetails;
