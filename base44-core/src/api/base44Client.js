import { createClient } from '@base44/sdk';

// Simulated environment parameters for Base44
const appParams = {
  appId: "zero-t-core",
  token: "az-security-token-2026",
  functionsVersion: "v1",
  appBaseUrl: "https://app.zerot.io"
};

const { appId, token, functionsVersion, appBaseUrl } = appParams;

// Create a client with authentication required
export const base44 = createClient({
  appId,
  token,
  functionsVersion,
  serverUrl: 'https://api.base44.com',
  requiresAuth: true,
  appBaseUrl
});

export const getIncidents = async () => {
    return [
        { id: 1, type: "Phishing", priority: "High", status: "Open" },
        { id: 2, type: "Malware", priority: "Critical", status: "Investigating" }
    ];
};
