import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    padding: 20, // Added padding for better spacing
    justifyContent: "center", // Center align horizontally
    alignItems: "center", // Center align vertically
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    textAlign: "center", // Center align text inside the section
  },
  image: {
    marginVertical: 50,
    marginHorizontal: 50,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: "bold",
    color: "#333", // Darker color for better readability
  },
  text: {
    fontSize: 14,
    marginBottom: 5,
    color: "#666", // Slightly darker color for better readability
  },
});

const SalaryPdf = ({ salary }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Salary Details</Text>
        <Text style={styles.text}>Name: {salary.name}</Text>
        <Text style={styles.text}>Basic Salary: {salary.basicSalary}</Text>
        <Text style={styles.text}>Attendance: {salary.attendance}</Text>
        <Text style={styles.text}>Allowance: {salary.allowance}</Text>
        <Text style={styles.text}>EPF: {salary.epf}</Text>
        <Text style={styles.text}>ETF: {salary.etf}</Text>
        <Text style={styles.text}>Net Salary: {salary.netSalary}</Text>
      </View>
      {/* You can add images or other elements as needed */}
    </Page>
  </Document>
);

export default SalaryPdf;
