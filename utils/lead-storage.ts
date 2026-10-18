import fs from 'fs';
import path from 'path';
import { ValidatedLeadPayload } from '../middleware/validation.js';

export interface StoredLead extends ValidatedLeadPayload {
  id: string;
  createdAt: string;
  ipHash?: string;
  status: 'new' | 'contacted' | 'qualified';
}

const DATA_DIR = path.resolve(process.cwd(), 'data');
const LEADS_FILE = path.join(DATA_DIR, 'leads.json');

/**
 * Ensure data directory and leads.json file exist
 */
function ensureStorage() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(LEADS_FILE)) {
      fs.writeFileSync(LEADS_FILE, JSON.stringify([], null, 2), 'utf-8');
    }
  } catch (err) {
    console.error('Error ensuring lead storage directory/file:', err);
  }
}

/**
 * Persist lead safely to local file
 */
export async function saveLead(leadData: ValidatedLeadPayload): Promise<StoredLead> {
  ensureStorage();

  const id = `LEAD-${Date.now()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
  const storedLead: StoredLead = {
    ...leadData,
    id,
    createdAt: new Date().toISOString(),
    status: 'new'
  };

  try {
    let leads: StoredLead[] = [];
    if (fs.existsSync(LEADS_FILE)) {
      const fileContent = fs.readFileSync(LEADS_FILE, 'utf-8');
      try {
        leads = JSON.parse(fileContent);
        if (!Array.isArray(leads)) leads = [];
      } catch {
        leads = [];
      }
    }

    leads.push(storedLead);

    // Atomic write to avoid partial corruption
    const tempFile = `${LEADS_FILE}.tmp.${Date.now()}`;
    fs.writeFileSync(tempFile, JSON.stringify(leads, null, 2), 'utf-8');
    fs.renameSync(tempFile, LEADS_FILE);

    return storedLead;
  } catch (err) {
    console.error('Error writing lead to storage file:', err);
    // Still return the lead so the user workflow is not broken
    return storedLead;
  }
}

/**
 * Get count of leads safely for health/monitoring without exposing PII
 */
export function getLeadStats(): { totalCount: number; lastSubmission?: string } {
  try {
    ensureStorage();
    if (!fs.existsSync(LEADS_FILE)) return { totalCount: 0 };
    const content = fs.readFileSync(LEADS_FILE, 'utf-8');
    const leads = JSON.parse(content);
    if (!Array.isArray(leads)) return { totalCount: 0 };
    return {
      totalCount: leads.length,
      lastSubmission: leads.length > 0 ? leads[leads.length - 1].createdAt : undefined
    };
  } catch {
    return { totalCount: 0 };
  }
}
