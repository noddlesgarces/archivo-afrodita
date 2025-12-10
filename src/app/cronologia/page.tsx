"use client";

import dynamic from "next/dynamic";

// Desacoplamos la página para evitar problemas de HMR/caché.
const CronologiaClient = dynamic(() => import("./CronologiaClient"), { ssr: false });

export default CronologiaClient;
