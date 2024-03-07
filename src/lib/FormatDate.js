export const formatDate = (date) => {
  const newDate = new Date(date);

  const formatter = Intl.DateTimeFormat("id-ID", {
    timeZone: "UTC",
    dateStyle: "full",
    timeStyle: "short",
  });

  return formatter.format(newDate);
};
