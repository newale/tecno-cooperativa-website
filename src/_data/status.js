module.exports = {
  updatedAt: "2026-09-17",
  overall: {
    state: "ok", // ok | degraded | down
    label: "Todos los sistemas operativos",
  },
  storage: {
    usedGb: 42,
    totalGb: 200,
  },
  services: [
    {
      name: "Pods (Solid)",
      state: "ok",
      description: "Almacenamiento de datos personales bajo el estándar Solid.",
      stats: [
        { label: "Pods activos", value: "12" },
        { label: "Espacio usado", value: "18 GB" },
        { label: "Disponibilidad (30 días)", value: "100%" },
      ],
    },
    {
      name: "Consumo eléctrico",
      state: "ok",
      description: "Energía consumida por la infraestructura de la cooperativa.",
      stats: [
        { label: "Consumo actual", value: "1.8 kWh" },
        { label: "Consumo hoy", value: "24 kWh" },
        { label: "Promedio diario (30 días)", value: "26 kWh" },
      ],
    },
    {
      name: "Consumo de internet",
      state: "disabled",
      description: "Tráfico de red de la infraestructura. Aún no disponible.",
      stats: [],
    },
  ],
};
