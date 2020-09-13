export const HR_IN_MINUTES = 60;

export const convertMinToHr = (time) => {
  if (time < HR_IN_MINUTES) {
    return time;
  }

  return {
    hr: parseInt(time / HR_IN_MINUTES),
    min: time % HR_IN_MINUTES,
  };
};

export const convertMbToGb = (data) => {};

export const formatDate = (dateObj) => {
  return {
    day:
      dateObj.getDate() < 10
        ? `0${dateObj.getDate()}`
        : dateObj.getDate().toString(),
    month:
      dateObj.getMonth() + 1 < 10
        ? `0${dateObj.getMonth() + 1}`
        : dateObj.getMonth().toString(),
    year: dateObj.getFullYear().toString(),
  };
};

export const convertDataType = (data) => {
  let dataType = data.dataType;
  let value = data.value;
  const convert = data.value / 1000;

  switch (data.dataType) {
    case 'Bit':
      if (convert > 1) {
        dataType = 'KB';
        value = convert.toFixed(2);
      }
      break;
    case 'KB':
      if (convert > 1) {
        dataType = 'MB';
        value = convert.toFixed(2);
      }
      break;
    case 'MB':
      if (convert > 1) {
        dataType = 'GB';
        value = convert.toFixed(2);
      }
      break;
    default:
      break;
  }

  return {
    dataType,
    value,
  };
};

export const formatDataMobile = (data) => {
  let dataType = 'Bit';
  let value = data;
  let prevDataType;

  while (dataType !== prevDataType) {
    const obj = convertDataType({dataType, value});
    prevDataType = dataType;
    dataType = obj.dataType;
    value = obj.value;
  }

  return {
    dataType,
    value,
  };
};

export const numberToPercentage = (num) => Number((num * 100).toFixed(2));
