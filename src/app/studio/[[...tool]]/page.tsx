"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export const dynamic = "force-dynamic";

export default function StudioPage() {
  console.log("Studio config projectId:", config.projectId);
  return <NextStudio config={config} />;
}