export const helpClock = (setDate, now) => {
  const options = {
    weekend: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  setInterval(() => {
    setDate({
      today: now.toLocaleDateString("en-US", options),
      time: now.toLocaleTimeString("es-US", {
        hour12: true,
        hour: "2-digit",
        minute: "2-digit",
      }),
    });
  }, 1000);
};
