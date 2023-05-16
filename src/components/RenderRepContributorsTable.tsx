import {DataTable, Provider, Surface} from 'react-native-paper';
import {FlatList, StyleSheet} from 'react-native';
import * as React from 'react';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
import {useAppDispatch, useAppSelector} from '../hooks';
import {useEffect, useRef, useState} from 'react';
import {getContributors} from '../store/actions/contributorAction';
import {connect} from 'react-redux';

function RenderRepContributorsTable({value}) {
  const dispatch = useAppDispatch();
  const contributorsListData = useAppSelector(state => state.contributorsList);
  const {contributors} = contributorsListData;

  const [internalState, setInternalState] = useState(value);

  const previousValueRef = useRef();
  const previousValue = previousValueRef.current;
  if (value !== previousValue && value !== internalState) {
    setInternalState(value);
  }

  useEffect(() => {
    previousValueRef.current = value;
    dispatch(getContributors(internalState.crp_id));
  }, [dispatch, internalState.crp_id, value]);

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });

  const RenderDataTable = ({value}) => {
    return (
      <DataTable.Row>
        <DataTable.Cell textStyle={styles.cellText}>
          {value.org_name}
        </DataTable.Cell>
        <DataTable.Cell textStyle={styles.cellText}>
          {formatter.format(value.total)}
        </DataTable.Cell>
      </DataTable.Row>
    );
  };

  return (
    <Provider>
      <Surface style={styles.surface}>
        <DataTable style={styles.table}>
          <DataTable.Header>
            <DataTable.Title textStyle={styles.tableHeader}>
              Organization
            </DataTable.Title>
            <DataTable.Title
              textStyle={styles.tableHeader}
              sortDirection={'descending'}>
              Total
            </DataTable.Title>
          </DataTable.Header>

          <FlatList
            data={contributors}
            renderItem={({item}) => <RenderDataTable value={item} />}
            keyExtractor={item => item.id}
          />
        </DataTable>
      </Surface>
    </Provider>
  );
}

const styles = StyleSheet.create({
  surface: {
    height: responsiveScreenHeight(23),
    width: responsiveScreenWidth(100),
    marginHorizontal: 7,
    marginVertical: responsiveScreenHeight(0.5),
    position: 'absolute',
  },
  table: {
    height: responsiveScreenHeight(23),
    width: responsiveScreenWidth(160),
  },
  basicsText: {
    fontSize: responsiveScreenFontSize(1.75),
    fontWeight: '700',
    marginVertical: responsiveScreenHeight(0.5),
  },
  cellText: {
    fontSize: responsiveScreenFontSize(1.8),
  },
  tableHeader: {
    fontSize: responsiveScreenFontSize(2.5),
    fontWeight: 'bold',
  },
});

const mapStateToProps = state => ({
  contributors: state.contributors,
});

const mapDispatchToProps = {
  getContributors,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RenderRepContributorsTable);
