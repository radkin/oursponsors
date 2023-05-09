import {
  Avatar,
  Card,
  DataTable,
  Provider,
  Surface,
  Text,
} from 'react-native-paper';
import {FlatList, StyleSheet} from 'react-native';
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

function RenderRepDetailsTable({value}) {
  const dispatch = useAppDispatch();
  const sectorsListData = useAppSelector(state => state.sectorsList);
  const {sectors} = sectorsListData;
  const cid = 'N00033390';

  console.log(value.crp_id);

  useEffect(() => {
    dispatch(getSectors(value.crp_id));
  }, [dispatch]);

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
              Contributor
            </DataTable.Title>
            <DataTable.Title textStyle={styles.tableHeader}>
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
    height: responsiveScreenHeight(25),
    width: responsiveScreenWidth(100),
    marginHorizontal: 7,
    marginVertical: responsiveScreenHeight(0.5),
    position: 'absolute',
  },
  table: {
    height: responsiveScreenHeight(25),
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
)(RenderRepDetailsTable);
