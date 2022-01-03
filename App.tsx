import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import 'react-native-get-random-values';
import '@ethersproject/shims';
import {ethers} from 'ethers';
import {apiKey} from './apiKey';

const provider = new ethers.providers.JsonRpcProvider(apiKey);
const signer = provider.getSigner();
const App = () => {
  const [balance, setBalance] = React.useState<string>('');

  useEffect(() => {
    const fetchBalance = async () => {
      const wallent = await provider.getBalance(
        '0xDA9dfA130Df4dE4673b89022EE50ff26f6EA73Cf',
      );
      setBalance(wallent.toString());
    };

    fetchBalance();
  }, []);
  return (
    <View>
      <Text>{balance}</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
