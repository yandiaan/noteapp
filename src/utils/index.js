const showFormattedDate = (date, locale) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString(
    locale === "en" ? "en-EN" : "id-ID",
    options
  );
};

export { showFormattedDate };
