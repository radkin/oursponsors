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
import {getSectors} from '../store/actions/sectorAction';
import {connect} from 'react-redux';

function RenderRepSectorsTable({value}) {
  const dispatch = useAppDispatch();
  const sectorsListData = useAppSelector(state => state.sectorsList);
  const {sectors} = sectorsListData;

  const [internalState, setInternalState] = useState(value);

  const previousValueRef = useRef();
  const previousValue = previousValueRef.current;
  if (value !== previousValue && value !== internalState) {
    setInternalState(value);
  }

  useEffect(() => {
    previousValueRef.current = value;
    dispatch(getSectors(internalState.crp_id));
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
          {value.sector_name}
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
              Sector
            </DataTable.Title>
            <DataTable.Title
              textStyle={styles.tableHeader}
              sortDirection={'descending'}>
              Total
            </DataTable.Title>
          </DataTable.Header>

          <FlatList
            data={sectors}
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
    height: responsiveScreenHeight(20),
    width: responsiveScreenWidth(100),
    marginHorizontal: 7,
    marginVertical: responsiveScreenHeight(0.5),
    position: 'absolute',
  },
  table: {
    height: responsiveScreenHeight(20),
  },
  basicsText: {
    fontSize: responsiveScreenFontSize(1.75),
    fontWeight: '700',
    marginVertical: responsiveScreenHeight(0.5),
  },
  cellText: {
    fontSize: responsiveScreenFontSize(2),
  },
  tableHeader: {
    fontSize: responsiveScreenFontSize(2.5),
    fontWeight: 'bold',
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
)(RenderRepSectorsTable);
