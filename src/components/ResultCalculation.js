import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function ResultCalculation(props) {
  const {errorMessage, capital, interes, meses, total} = props;
  console.log(props);
  return (
    <View style={styles.content}>
      {total && (
        <View style={styles.boxResult}>
          <Text style={styles.title}>Resumen</Text>
          <DataResult title="Cantidad Solicitada" value={`${capital} C$`} />
          <DataResult title="Interes %" value={`${interes} %`} />
          <DataResult title="Plazos" value={`${meses} Meses`} />
          <DataResult title="Pago mensual" value={`${total.monthlyFee} C$`} />
          <DataResult title="Total pagar" value={`${total.totalPagar} C$`} />
        </View>
      )}
      <View>
        <Text style={styles.error}>{errorMessage}</Text>
      </View>
    </View>
  );
}

function DataResult(props) {
  const {title, value} = props;

  return (
    <View style={styles.value}>
      <Text>{title}:</Text>
      <Text>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 40,
  },
  boxResult: {
    padding: 30,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  value: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  error: {
    textAlign: 'center',
    color: '#f00',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
