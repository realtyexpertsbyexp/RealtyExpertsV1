import app from './server.js';
import http from 'http';

async function runTests() {
  console.log('--- STARTING FUNCTIONAL TESTS ---');
  
  // 1. Test /api/health
  const server = http.createServer(app);
  await new Promise<void>((resolve) => server.listen(3001, '127.0.0.1', resolve));

  const fetchApi = async (path: string, options?: RequestInit) => {
    return fetch(`http://127.0.0.1:3001${path}`, options);
  };

  try {
    // Test 1: Health endpoint
    console.log('Test 1: Health endpoint...');
    const healthRes = await fetchApi('/api/health');
    const healthJson = await healthRes.json();
    if (healthRes.status !== 200 || healthJson.status !== 'ok') {
      throw new Error(`Health check failed: ${JSON.stringify(healthJson)}`);
    }
    console.log('✓ Health check passed:', healthJson.service);

    // Test 2: Invalid lead submission (empty body)
    console.log('Test 2: Invalid lead validation...');
    const invalidRes = await fetchApi('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({})
    });
    const invalidJson = await invalidRes.json();
    if (invalidRes.status !== 400 || !invalidJson.errors || !invalidJson.errors.fullName) {
      throw new Error(`Invalid lead test failed: ${JSON.stringify(invalidJson)}`);
    }
    console.log('✓ Validation rejection passed (caught empty required fields).');

    // Test 3: Missing consent
    console.log('Test 3: Missing consent validation...');
    const noConsentRes = await fetchApi('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: 'Test Developer',
        email: 'test@realtygroup.in',
        phone: '+91 96822 94324',
        businessType: 'developer',
        consent: false
      })
    });
    const noConsentJson = await noConsentRes.json();
    if (noConsentRes.status !== 400 || !noConsentJson.errors?.consent) {
      throw new Error(`Missing consent test failed: ${JSON.stringify(noConsentJson)}`);
    }
    console.log('✓ Consent requirement passed.');

    // Test 4: Valid lead submission
    console.log('Test 4: Valid lead submission...');
    const validRes = await fetchApi('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: 'Vikram Singhania',
        email: 'vikram.s@singhaniaproperties.com',
        phone: '+91 96822 94324',
        businessType: 'developer',
        companyName: 'Singhania Heights',
        projectLocation: 'Sector 150, Noida',
        projectType: 'Luxury High-Rise',
        service: 'Project Marketing',
        message: 'Launching luxury 3 & 4 BHK tower in 45 days.',
        consent: true
      })
    });
    const validJson = await validRes.json();
    if (validRes.status !== 201 || !validJson.success || !validJson.leadId) {
      throw new Error(`Valid lead submission failed: ${JSON.stringify(validJson)}`);
    }
    console.log('✓ Valid lead submitted successfully! Lead ID:', validJson.leadId);

    // Test 5: Duplicate lead detection
    console.log('Test 5: Duplicate lead submission rejection...');
    const dupRes = await fetchApi('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: 'Vikram Singhania',
        email: 'vikram.s@singhaniaproperties.com',
        phone: '+91 96822 94324',
        businessType: 'developer',
        consent: true
      })
    });
    const dupJson = await dupRes.json();
    if (dupRes.status !== 400 || dupJson.code !== 'DUPLICATE_SUBMISSION') {
      throw new Error(`Duplicate detection failed: ${JSON.stringify(dupJson)}`);
    }
    console.log('✓ Duplicate detection passed (prevented double submission).');

    // Test 6: Unknown API endpoint returns JSON 404
    console.log('Test 6: Unknown API route 404...');
    const unknownRes = await fetchApi('/api/non-existent-route');
    if (unknownRes.status !== 404) {
      throw new Error(`Expected 404 for unknown route, got ${unknownRes.status}`);
    }
    console.log('✓ Unknown API route 404 test passed.');

    console.log('--- ALL FUNCTIONAL TESTS PASSED SUCCESSFULLY! ---');
  } finally {
    server.close();
  }
}

runTests().catch((err) => {
  console.error('Test execution failed:', err);
  process.exit(1);
});
