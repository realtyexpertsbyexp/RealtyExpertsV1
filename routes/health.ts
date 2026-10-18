import { Router, Request, Response } from 'express';
import { getLeadStats } from '../utils/lead-storage.js';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  const stats = getLeadStats();
  res.status(200).json({
    status: 'ok',
    service: 'Realty Experts Web Application API',
    brand: 'Realty Experts',
    tagline: 'Strategically Marketed, Scientifically Sold!',
    website: 'https://www.realtyexperts.online',
    timestamp: new Date().toISOString(),
    uptimeSeconds: Math.floor(process.uptime()),
    environment: process.env.NODE_ENV || 'development',
    leadMetrics: {
      totalRecorded: stats.totalCount,
      lastRecorded: stats.lastSubmission || null
    }
  });
});

export default router;
