export const formatDate = (time) => {
  let date = new Intl.DateTimeFormat("en-US", {
    month: "2-digit",
    year: "numeric",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(time * 1000);
  return date;
};
