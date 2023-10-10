import {DataTable, Provider, Surface} from 'react-native-paper';
import {FlatList, StyleSheet} from 'react-native';
import * as React from 'react';
import {getSectors} from '../store/actions/sectorAction';
import {connect} from 'react-redux';
import {scale} from 'react-native-size-matters';
import { Sector } from "../models/Sector";
import {formatter} from "../currencyFormatter";
import { FC } from "react";

// interface Rep {
//   sectorRep: Congress | Senator;
// }

interface TheSectors {
  repSectors: Sector[];
}

const RepSectorsTable: FC<TheSectors> = ({repSectors}) => {
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
            data={repSectors}
            renderItem={({item}) => <RenderDataTable sector={item} />}
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
