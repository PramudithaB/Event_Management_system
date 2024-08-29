// OrderPdfComponent.js
import React from 'react';
import {
  Document,
  Page,
  Text,
  StyleSheet,
  View,
} from '@react-pdf/renderer';
import PropTypes from 'prop-types';

// Define styles using StyleSheet.create
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  table: {
    display: 'table',
    width: 'auto',
    marginVertical: 10,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCellHeader: {
    backgroundColor: '#009688',
    color: '#ffffff',
    padding: 5,
  },
  tableCell: {
    padding: 5,
  },
});

const OrderPdfComponent = ({ order }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={{ marginBottom: 10 }}>Order Details:</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={[styles.tableCellHeader, { flex: 1 }]}>
              <Text>Item Name</Text>
            </View>
            <View style={[styles.tableCellHeader, { flex: 1 }]}>
              <Text>Price</Text>
            </View>
            <View style={[styles.tableCellHeader, { flex: 2 }]}>
              <Text>Description</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={[styles.tableCell, { flex: 1 }]}>
              <Text>{order.itemname}</Text>
            </View>
            <View style={[styles.tableCell, { flex: 1 }]}>
              <Text>{order.price}</Text>
            </View>
            <View style={[styles.tableCell, { flex: 2 }]}>
              <Text>{order.description}</Text>
            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

OrderPdfComponent.propTypes = {
  order: PropTypes.shape({
    itemname: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderPdfComponent;
