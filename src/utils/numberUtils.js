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
