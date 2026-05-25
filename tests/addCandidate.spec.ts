import { CandidatePage } from './../pages/candidatePage';
import {test, expect} from '@playwright/test';
import { generateCandidate } from '../test-data/datafactory';



test('Add Candidate',async ({ page }) => {

    await page.goto('web/index.php/recruitment/viewCandidates');
    const candidatepage = new CandidatePage(page);
    const newCandidate = generateCandidate();
    await candidatepage.addCandidate(newCandidate);


});