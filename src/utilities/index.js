export const getImageFromName = (imgName) => {
  return require(`../assets/icons/${imgName}.png`);
};

export const cleanData = (weatherData) => {
  return weatherData.map((weatherD) => {
    const { valid_date, weather, temp } = weatherD;
    const { code, icon } = weather;
    return {
      valid_date,
      temp,
      code,
      icon,
    };
  });
};

const getLocalDate = (date) => {
  const currentDate = new Date(date);

  const getLocalDateByConfig = (config) =>
    currentDate.toLocaleString("default", config);

  return getLocalDateByConfig;
};

export const getValuesFromDate = (date) => {
  const localDate = getLocalDate(date);

  const month = localDate({ month: "short" });
  const dayName = localDate({ weekday: "long" });
  const day = localDate({ day: "numeric" });

  return { month, dayName, day };
};

