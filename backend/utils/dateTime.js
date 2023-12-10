const getDateTimePeru = () => {
  const fechaActualUTC = new Date();
  const zonaHorariaPeru = "America/Lima";
  const diferenciaZonaHoraria = fechaActualUTC.getTimezoneOffset();

  const fechaHoraPeru = new Date(
    fechaActualUTC.getTime() - diferenciaZonaHoraria * 60 * 1000
  );

  const opcionesFormato = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: zonaHorariaPeru,
  };

  const fechaHoraFormateada = fechaHoraPeru.toLocaleString(
    "es-PE",
    opcionesFormato
  );

  return fechaHoraFormateada;
};

export { getDateTimePeru };
