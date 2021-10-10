const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const getDayAndMonth = (epoch) => {
  const date = new Date(epoch * 1000);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const text = `${day}/${month}/${year}`;
  const altText = `${day} ${months[month - 1]} ${year}`;
  return { day, month, year, text, altText };
};

export const convertEpochToDate = (e) => {
  const date = new Date(e * 1000);
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
};
