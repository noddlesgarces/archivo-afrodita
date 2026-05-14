"use client";

import dynamic from "next/dynamic";

const CronologiaClient = dynamic(() => import("./CronologiaClient"), { ssr: false });

export default CronologiaClient;