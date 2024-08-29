
import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    Image,
  } from "@react-pdf/renderer";
  import propTypes from "prop-types";
  
  // Create styles
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#E4E4E4",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
    image: {
      marginVertical: 50,
      marginHorizontal: 50,
    },
  });
  
  const TransportPdf = ({ book }) => (
    <Document>
      <Page size="A4">
        <Text>Bus code : {book.b_Code}</Text>

        <Text>Destination : {book.destination}</Text>
      
        <Text>Diputure Time : {book.d_time}</Text>
        <Text>Arrival Time : {book.a_time}</Text>
        <Text>Price : {book.price}</Text>

        
      </Page>
    </Document>
  );
  
  TransportPdf.propTypes = {
    book: propTypes.object,
  };
  
  export default TransportPdf