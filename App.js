import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, SafeAreaView, StatusBar} from 'react-native';
import colors from './src/utils/colors';
import Form from './src/components/Form';
import Footer from './src/components/Footer';
import ResultCalculation from './src/components/ResultCalculation';

export default function App() {
  const [capital, setCapital] = useState(null);
  const [interes, setInteres] = useState(null);
  const [meses, setMeses] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (meses && interes && capital) calculate();
    else reset();
  }, [capital, interes, meses]);

  const calculate = () => {
    reset();
    if (!capital) {
      setErrorMessage('Añade la cantidad que quiere solicitar.');
    } else if (!interes) {
      setErrorMessage('Añade el interes del prestamo.');
    } else if (!meses) {
      setErrorMessage('Seleciona los meses de plazo.');
    } else {
      const i = interes / 100;
      const fee = capital / ((1 - Math.pow(i + 1, -meses)) / i);

      setTotal({
        monthlyFee: fee.toFixed(2).replace('.', ','),
        totalPagar: (fee * meses).toFixed(2).replace('.', ','),
      });
    }
  };

  const reset = () => {
    setErrorMessage('');
    setTotal(null);
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.backgroud} />
        <Text style={styles.titleApp}>Cotizador de Prestamos</Text>
        <Form
          setCapital={setCapital}
          setInteres={setInteres}
          setMeses={setMeses}
        />
      </SafeAreaView>
      <View>
        <ResultCalculation
          capital={capital}
          interes={interes}
          meses={meses}
          total={total}
          errorMessage={errorMessage}
        />
      </View>
      <Footer calculate={calculate} />
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    height: 290,
    alignItems: 'center',
  },
  backgroud: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    zIndex: -1,
  },
  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
});
