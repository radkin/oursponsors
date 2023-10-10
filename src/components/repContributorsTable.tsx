import {DataTable, Provider, Surface} from 'react-native-paper';
import {FlatList, StyleSheet} from 'react-native';
import * as React from 'react';
import { FC, useEffect, useRef, useState } from "react";
import {getContributors} from '../store/actions/contributorAction';
import {connect} from 'react-redux';
import {scale} from 'react-native-size-matters';
import { useTypedDispatch, useTypedSelector } from "../store/store";
import { Congress } from "../models/Congress";
import { Senator } from "../models/Senator";
import { Contributor } from "../models/Contributor";
import {formatter} from "../currencyFormatter";

// interface Rep {
//   contribRep: Congress | Senator;
// }

interface TheContributors {
  repContributors: Contributor[];
}

const RepContributorsTable: FC<TheContributors> = ({repContributors}) => {

  const RenderDataTable = ({contrib}) => {


    return (
      <DataTable.Row>
        <DataTable.Cell textStyle={styles.cellText}>
          {contrib.org_name}
        </DataTable.Cell>
        <DataTable.Cell textStyle={styles.cellText}>
          {formatter.format(contrib.total)}
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
              Organization
            </DataTable.Title>
            <DataTable.Title
              textStyle={styles.tableTitle}
              sortDirection={'descending'}>
              Total
            </DataTable.Title>
          </DataTable.Header>

          <FlatList
            data={repContributors}
            renderItem={({item}) => <RenderDataTable contrib={item} />}
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
    width: scale(540),
  },
  basicsText: {
    fontSize: scale(15),
    fontWeight: '700',
    marginVertical: scale(2),
  },
  cellText: {
    fontSize: scale(12),
  },
  tableTitle: {
    fontSize: scale(18),
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
)(RepContributorsTable);
