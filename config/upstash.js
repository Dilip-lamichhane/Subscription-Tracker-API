import { Client as UpstashClient } from "@upstash/workflow"; // Renamed here
import { QSTASH_TOKEN, QSTASH_URL } from "./env.js";

export const workflowClient = new UpstashClient({ // Using new name here
  baseUrl: QSTASH_URL,
  token: QSTASH_TOKEN
});