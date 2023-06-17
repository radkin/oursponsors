import {DataTable, Provider, Surface} from 'react-native-paper';
import {FlatList, StyleSheet} from 'react-native';
import * as React from 'react';
import { FC, useEffect, useRef, useState } from "react";
import {getSectors} from '../store/actions/sectorAction';
import {connect} from 'react-redux';
import {scale} from 'react-native-size-matters';
import {useTypedDispatch, useTypedSelector} from '../store/store';
import {Senator} from '../models/Senator';
import {Congress} from '../models/Congress';
import { Sector } from "../models/Sector";

interface Rep {
  sectorRep: Congress | Senator;
}

interface TheSectors {
  sectors: Sector[];
}

const RepSectorsTable: FC<Rep> = ({sectorRep}) => {
  const dispatch = useTypedDispatch();
  const sectorsListData: TheSectors = useTypedSelector(state => state.sectorsList);
  const {sectors} = sectorsListData;

  const [internalState, setInternalState] = useState(sectorRep);

  const previousValueRef = useRef();
  const previousValue = previousValueRef.current;
  if (sectorRep !== previousValue && sectorRep !== internalState) {
    setInternalState(sectorRep);
  }

  useEffect(() => {
    previousValueRef.current = sectorRep;
    dispatch(getSectors(internalState.crp_id));
  }, [dispatch, internalState.crp_id, sectorRep]);

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });

  const RenderDataTable = ({sector}) => {

    return (
      <DataTable.Row>
        <DataTable.Cell textStyle={styles.cellText}>
          {sector.sector_name}
        </DataTable.Cell>
        <DataTable.Cell textStyle={styles.cellText}>
          {formatter.format(sector.total)}
        </DataTable.Cell>
      </DataTable.Row>
    );
  };

  return (
    <Provider>
      <Surface style={styles.surface}>
        <DataTable style={styles.table}>
          <DataTable.Header>
            <DataTable.Title textStyle={styles.tableTitle}>
              Sector
            </DataTable.Title>
            <DataTable.Title
              textStyle={styles.tableTitle}
              sortDirection={'descending'}>
              Total
            </DataTable.Title>
          </DataTable.Header>

          <FlatList
            data={sectors}
            renderItem={({item}) => <RenderDataTable sector={item} />}
            keyExtractor={item => item.id}
          />
        </DataTable>
      </Surface>
    </Provider>
  );
}

const styles = StyleSheet.create({
  surface: {
    height: scale(165),
    width: scale(335),
    marginHorizontal: 10,
    marginVertical: scale(3),
    position: 'absolute',
  },
  table: {
    height: scale(165),
    width: scale(500),
  },
  basicsText: {
    fontSize: scale(15),
    fontWeight: '700',
    marginVertical: scale(2),
  },
  cellText: {
    fontSize: scale(16),
  },
  tableTitle: {
    fontSize: scale(18),
    fontWeight: 'bold',
  },
});

const mapStateToProps = state => ({
  sectors: state.sectors,
});

const mapDispatchToProps = {
  getSectors,
};

export default connect(mapStateToProps, mapDispatchToProps)(RepSectorsTable);
