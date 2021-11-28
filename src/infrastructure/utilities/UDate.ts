export const changeFormatDate = (date: string) => {
  const dateArray = date.split("/");
  return `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`;
};
