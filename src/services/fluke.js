import axios from 'axios';
import {FLUKE_API} from '@env';
import get from 'lodash/get';

export const fetchMobileDataPlan = async () => {
  try {
    const {data} = await axios.get(`${FLUKE_API}/usage/packageInformation/`);

    const subscription = get(data, 'subscription', 0); // Contratados
    const topUp = get(data, 'topup', 0); // Extra Contratados
    const bonus = get(data, 'bonus', 0); // Bonus
    const available = get(data, 'available', 0); // DIsponivel
    const totalData = subscription + topUp + bonus;
    const usedData = totalData - available;

    return {
      title: 'Dados Móveis',
      subscription, // Contratados
      topUp, // Extra Contratados
      bonus, // Bonus
      available, // DIsponivel
      totalData,
      usedData,
      dataType: 'MB', // todo: use GB
    };
  } catch (error) {
    throw error;
  }
};
