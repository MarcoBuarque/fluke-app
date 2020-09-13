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
        ? `0${dateObj.getMonth()}`
        : dateObj.getMonth().toString(),
    year: dateObj.getFullYear().toString(),
  };
};

export const numberToPercentage = (num) => Number((num * 100).toFixed(2));
