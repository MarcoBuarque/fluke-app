import axios from 'axios';
import {FLUKE_API} from '@env';
import get from 'lodash/get';

// Utils
import {formatDataMobile, convertMbToGb} from './../utils/numberUtils';

export const fetchMobileDataPlan = async () => {
  try {
    const {data} = await axios.get(`${FLUKE_API}/usage/packageInformation/`);

    const subscription = convertMbToGb(get(data, 'subscription', 0)); // Contratados
    const topUp = convertMbToGb(get(data, 'topup', 0)); // Extra Contratados
    const bonus = convertMbToGb(get(data, 'bonus', 0)); // Bonus
    const available = convertMbToGb(get(data, 'available', 0)); // DIsponivel
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
      dataType: 'GB',
    };
  } catch (error) {
    throw error;
  }
};

export const fetchHistoryData = async (startObj, endObj) => {
  try {
    const startDate = `${startObj.year}-${startObj.month}-${startObj.day}`;
    const endDate = `${endObj.year}-${endObj.month}-${endObj.day}`;

    const {data} = await axios.get(
      `${FLUKE_API}/usage/records/?startDate=${startDate}&endDate=${endDate}/`,
    );

    data.forEach((item) => {
      const {value, dataType} = formatDataMobile(item.data);
      item.data = value;
      item.dataType = dataType;
    });

    return data;
  } catch (error) {
    throw error;
  }
};
