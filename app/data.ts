export type Design = {
  id: string;
  h3_len: number;
  cd19: number;
  cd20: number | null;
  cd22: number | null;
  cd79a: number | null;
  plddt: number | null;
  sel: number | null;
  tm: number | null;          // A. scFv with linker (current default)
  tm_no_link: number | null;  // B. linker stripped (VL + VH directly)
  tm_fab: number | null;      // C. Fab format (VL + CL_kappa + linker + VH + CH1)
  source: string;
};

export const FMC63_BASELINE: Design = {
  id: "FMC63 (baseline)",
  h3_len: 12,
  cd19: 0.236,
  cd20: null,
  cd22: null,
  cd79a: null,
  plddt: null,
  sel: null,
  tm: 62.3,
  tm_no_link: 61.1,
  tm_fab: 67.8,
  source: "parent_scaffold",
};

export const ALL_19: Design[] = [
  { id: "L10_d00_smoke", h3_len: 10, cd19: 0.868, cd20: 0.295, cd22: 0.215, cd79a: 0.361, plddt: 86.4, sel: 0.507, tm: 64.4, tm_no_link: 63.9, tm_fab: 70.0, source: "smoke_test" },
  { id: "L10_d00", h3_len: 10, cd19: 0.324, cd20: 0.234, cd22: 0.139, cd79a: 0.271, plddt: 83.5, sel: 0.053, tm: 61.1, tm_no_link: 61.8, tm_fab: 68.6, source: "main" },
  { id: "L10_d01", h3_len: 10, cd19: 0.453, cd20: 0.249, cd22: 0.323, cd79a: 0.434, plddt: 86.1, sel: 0.019, tm: 64.5, tm_no_link: 64.3, tm_fab: 72.0, source: "main" },
  { id: "L10_d02", h3_len: 10, cd19: 0.722, cd20: 0.223, cd22: 0.553, cd79a: 0.162, plddt: 87.3, sel: 0.170, tm: 63.8, tm_no_link: 64.0, tm_fab: 70.5, source: "main" },
  { id: "L10_d03", h3_len: 10, cd19: 0.761, cd20: 0.283, cd22: 0.152, cd79a: 0.425, plddt: 85.4, sel: 0.336, tm: 64.8, tm_no_link: 63.9, tm_fab: 69.0, source: "main" },
  { id: "L12_d00", h3_len: 12, cd19: 0.491, cd20: 0.310, cd22: 0.163, cd79a: 0.559, plddt: 86.7, sel: -0.068, tm: 61.4, tm_no_link: 61.7, tm_fab: 68.5, source: "main" },
  { id: "L12_d01", h3_len: 12, cd19: 0.568, cd20: 0.333, cd22: 0.138, cd79a: 0.333, plddt: 83.6, sel: 0.236, tm: 62.2, tm_no_link: 62.2, tm_fab: 69.1, source: "main" },
  { id: "L12_d02", h3_len: 12, cd19: 0.855, cd20: 0.233, cd22: 0.656, cd79a: 0.460, plddt: 87.5, sel: 0.199, tm: 59.9, tm_no_link: 59.4, tm_fab: 64.5, source: "main" },
  { id: "L12_d03", h3_len: 12, cd19: 0.906, cd20: 0.418, cd22: 0.155, cd79a: 0.285, plddt: 86.4, sel: 0.488, tm: 62.0, tm_no_link: 63.0, tm_fab: 66.4, source: "main" },
  { id: "L14_d00", h3_len: 14, cd19: 0.800, cd20: 0.292, cd22: 0.164, cd79a: 0.260, plddt: 85.1, sel: 0.508, tm: 61.9, tm_no_link: 62.5, tm_fab: 66.6, source: "main" },
  { id: "L14_d01", h3_len: 14, cd19: 0.775, cd20: 0.295, cd22: 0.158, cd79a: 0.224, plddt: 84.6, sel: 0.480, tm: 58.5, tm_no_link: 59.5, tm_fab: 65.9, source: "main" },
  { id: "L14_d02", h3_len: 14, cd19: 0.252, cd20: 0.303, cd22: 0.184, cd79a: 0.337, plddt: 83.8, sel: -0.085, tm: 65.6, tm_no_link: 64.6, tm_fab: 67.4, source: "main" },
  { id: "L14_d03", h3_len: 14, cd19: 0.589, cd20: 0.335, cd22: 0.420, cd79a: 0.227, plddt: 84.8, sel: 0.168, tm: 62.2, tm_no_link: 62.6, tm_fab: 67.4, source: "main" },
  { id: "L14_d04", h3_len: 14, cd19: 0.681, cd20: 0.293, cd22: 0.203, cd79a: 0.154, plddt: 86.8, sel: 0.388, tm: 61.3, tm_no_link: 60.6, tm_fab: 70.4, source: "main" },
  { id: "L16_d00", h3_len: 16, cd19: 0.209, cd20: 0.213, cd22: 0.153, cd79a: 0.481, plddt: 87.0, sel: -0.272, tm: 64.4, tm_no_link: 64.2, tm_fab: 67.7, source: "main" },
  { id: "L16_d01", h3_len: 16, cd19: 0.426, cd20: 0.258, cd22: 0.197, cd79a: 0.175, plddt: 84.4, sel: 0.167, tm: 59.1, tm_no_link: 58.6, tm_fab: 68.2, source: "main" },
  { id: "L16_d02", h3_len: 16, cd19: 0.612, cd20: 0.221, cd22: 0.138, cd79a: 0.456, plddt: 86.0, sel: 0.156, tm: 61.6, tm_no_link: 61.7, tm_fab: 66.9, source: "main" },
  { id: "L16_d03", h3_len: 16, cd19: 0.898, cd20: 0.466, cd22: 0.417, cd79a: 0.773, plddt: 88.4, sel: 0.125, tm: 64.6, tm_no_link: 63.3, tm_fab: 69.7, source: "main" },
  { id: "L16_d04", h3_len: 16, cd19: 0.849, cd20: 0.267, cd22: 0.354, cd79a: 0.326, plddt: 86.0, sel: 0.495, tm: 61.8, tm_no_link: 61.6, tm_fab: 68.3, source: "main" },
];

export const TOP_5 = ["L12_d03", "L16_d03", "L10_d00_smoke", "L16_d04", "L14_d00"];
