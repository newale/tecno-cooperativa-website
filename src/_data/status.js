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
  ],
};
