const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function runTests() {
  const resultsDir = path.join(__dirname, '..', 'results');
  if (!fs.existsSync(resultsDir)) {
    fs.mkdirSync(resultsDir);
  }
  const resultsFile = path.join(resultsDir, 'test-results.csv');
  fs.writeFileSync(resultsFile, 'TC ID,Test case name,Input length type,Input,Expected output,Actual output,Status,What is covered by the test\n');
  
  const testCases = [
    {
      tcId: 'Pos_Fun_0001',
      name: 'Casual group question',
      input: 'oyaalaa udhee kaeema kaevadha?',
      expected: 'ඔයාලා උදේ කෑම කැවද?',
      type: 'S',
      what: ' request / response; Interrogative (question); S (≤30 characters); Accuracy validation'
    },
    {
      tcId: 'Pos_Fun_0002',
      name: 'Casual greeting message',
      input: 'oyaata suba aluth avurudhdhak ',
      expected: 'ඔයාට සුබ අලුත් අවුරුද්දක් ',
      type: 'S',
      what: 'Greeting / request / response; Interrogative (question); S (≤30 characters); Accuracy validation'
    },
    {
      tcId: 'Pos_Fun_0003',
      name: 'Convert simple statement',
      input: 'mama gedhara yanavaa.',
      expected: 'මම ගෙදර යනවා.',
      type: 'S',
      what: 'Daily language usage; Simple statement; S (≤30 characters); Accuracy validation'
    },
    {
      tcId: 'Pos_Fun_0004',
      name: 'Convert question with who',
      input: 'oyaa kavdha?',
      expected: 'ඔයා කව්ද?',
      type: 'S',
      what: 'Interrogative (question); Question word; S (≤30 characters); Accuracy validation'
    },
    {
      tcId: 'Pos_Fun_0005',
      name: 'Simple daily activity sentence',
      input: 'mama paadam karanavaa.',
      expected: 'මම පාඩම් කරනවා.',
      type: 'S',
      what: 'Daily language usage; Simple sentence; S (≤30 characters); Accuracy validation'
    },
      {
      tcId: 'Pos_Fun_0006',
      name: 'Imperative command',
      input: 'ikmanata enna',
      expected: 'ඉක්මනට එන්න',
      type: 'S',
      what: 'Daily language usage; Imperative command; S (≤30 characters); Accuracy validation'
    },
    {
      tcId: 'Pos_Fun_0007',
      name: 'Imperative Statement about action',
      input: 'mama pothak kiyavanavaa',
      expected: 'මම පොතක් කියවනවා',
      type: 'S',
      what: 'Daily language usage; Imperative command; S (≤30 characters); Accuracy validation'
    },
     {
      tcId: 'Pos_Fun_0008',
      name: 'Past tense usage',
      input: 'mama pothak livuvaa ',
      expected: 'මම පොතක් ලිවුවා',
      type: 'S',
      what: 'Daily language usage; Past tense usage; S (≤30 characters); Accuracy validation'
    },
      {
      tcId: 'Pos_Fun_0009',
      name: 'Imperative Statement about action',
      input: ' karuNaakaralaa mata kaeema ekak dhenna puLuvandha?',
      expected: ' කරුණාකරලා මට කෑම එකක් දෙන්න පුළුවන්ද?',
      type: 'M',
      what: 'Daily language usage; Imperative command; M (31-100 characters); Accuracy validation'
    },

    {
      tcId: 'Pos_Fun_0010',
      name: 'Mixed reason-based sentence with negation',
      input: 'mama school yanna suudhaanam velaa hitiyaa, namuth asaniipa vuna nisaa yanna baeri unaa',
      expected: 'මම school යන්න සූදානම් වෙලා හිටියා, නමුත් අසනීප වුන නිසා යන්න බැරි උනා',
      type: 'M',
      what: 'Daily language usage; Imperative command; M (31-100 characters); Accuracy validation'
    },
    {
      tcId: 'Pos_Fun_0011',
      name: 'command with object and time reference',
      input: 'hetata kalin mee files tika email karalaa evanna',
      expected: 'හෙටට කලින් මේ files ටික email කරලා එවන්න',
      type: 'M',
      what: 'Daily language usage; Imperative command; M (31-100 characters); Accuracy validation'
    },
    {
      tcId: 'Pos_UI_0001',
      name: 'UI handles continuous typing smoothly',
      input: 'mama adha gedhara yanavaa api passe  kathaa karamu',
      expected: 'මම අද ගෙදර යනවා අපි පස්සෙ  කතා කරමු',
      type: 'M',
      what: 'Daily language usage; Imperative command; M (31-100 characters); Accuracy validation'
    },
    {
      tcId: 'Pos_Fun_0012',
      name: 'UI handles continuous typing smoothly',
      input: 'Api heta yamu',
      expected: 'අපි හෙට යමු',
      type: 'S',
      what: 'Daily language usage; Imperative command; S (≤30 characters); Accuracy validation'
    },
     {
      tcId: 'Pos_Fun_0013',
      name: 'Mixed Singlish with English tool name',
      input: 'mata adha wedding ekak thiyenavaa ',
      expected: 'මට අද wedding එකක් තියෙනවා ',
      type: 'S',
      what: 'Daily language usage; Imperative command; S (≤30 characters); Accuracy validation'
    },
     {
      tcId: 'Pos_Fun_0014',
      name: 'Convert interrogative request',
      input: 'oyaa heta enne kohomadha?',
      expected: 'ඔයා හෙට එන්නෙ කොහොමද?',
      type: 'S',
      what: 'Daily language usage; Imperative command; S (≤30 characters); Accuracy validation'
    },
     {
      tcId: 'Neg_Fun_0001',
      name: 'Convert interrogative request',
      input: 'mamagedharayanavaa',
      expected: 'මම ගෙදර යනවා',
      type: 'S',
      what: 'Typographical error handling; Simple sentence; S (≤30 characters); Robustness validation'
     },
    {
      tcId: 'Neg_Fun_0002',
      name: 'UI lag With long',
      input: 'Mamam',
      expected: 'මම',
      type: 'S',
      what: 'Word combination / phrase pattern; S (≤30 characters); Accuracy validation'
    },
      {
      tcId: 'Neg_Fun_0003',
      name: 'Incorrect conversion of conditional complex sentence',
      input: 'oyaa enne naeththan api yanneth n',
      expected: 'ඔයා එන්නෙ නැත්තන් අපි යන්නෙත් නැහැ',
      type: 'M',
      what: 'Daily language usage; Complex sentence; M (31-100 characters); Accuracy validation'
    },
    {
      tcId: 'Neg_Fun_0004',
      name: 'Incorrect conversion of conditional complex sentence',
      input: 'karuNaakaralaa mata udhav karanna ba',
      expected: 'කරුණාකරලා මට උදව් කරන්න බෑ',
      type: 'M',
      what: 'Daily language usage; Complex sentence; M (31-100 characters); Accuracy validation'
    },
    {
      tcId: 'Pos_UI_002',
      name: 'Clear input field',
      input: 'mata banis oonee',
      expected: 'මට බනිස් ඕනේ',
      type: 'S',
      what: 'Simple sentence; S (≤30 characters); Accuracy validation'
    },
    {
      tcId: 'Pos_UI_003',
      name: 'UI preserves numeric and punctuation formats',
      input: 'obagee gonuva saarThakava udugatha kara aetha',
      expected: 'ඔබගේ ගොනුව සාර්ථකව උඩුගත කර ඇත',
      type: 'M',
      what: 'Success message; UI feedback; M (31-100 characters); Accuracy validation'
    },
    {
      tcId: 'Pos_UI_004',
      name: 'UI confirms login status',
      input: 'logviima saarThakava avasan kara aetha',
      expected: 'ලොග්වීම සාර්ථකව අවසන් කර ඇත',
      type: 'M',
      what: 'Success message; M (31-100 characters); Accuracy validation'
    },
    {
      tcId: 'Pos_UI_005',
      name: 'UI daily work message',
      input: 'vaeda aaramBha karanna',
      expected: 'වැඩ ආරම්භ කරන්න',
      type: 'S',
      what: 'Simple sentence; S (≤30 characters); Accuracy validation'
    },
    {
      tcId: 'Pos_Fun_018',
      name: 'Frequent expression conversion',
      input: 'mata baya hithenavaa',
      expected: 'මට බය හිතෙනවා',
      type: 'S',
      what: 'Simple sentence; S (≤30 characters); Accuracy validation'
    },
      {
      tcId: 'Pos_Fun_019',
      name: 'Text selection works',
      input: 'mama dhaen vaeda karanavaa',
      expected: 'මම දැන් වැඩ කරනවා',
      type: 'S',
      what: 'Simple sentence; S (≤30 characters); Accuracy validation'
    },
    
     {
      tcId: 'Pos_Fun_020',
      name: 'Convert imperative sentence',
      input: 'oyaa vahaama yanna',
      expected: 'ඔයා වහාම යන්න',
      type: 'S',
      what: 'Simple sentence; S (≤30 characters); Accuracy validation'
    },
     {
      tcId: 'Pos_Fun_021',
      name: 'Simple sentence',
      input: 'api eeka karalaa thiyenavaa',
      expected: 'අපි ඒක කරලා තියෙනවා',
      type: 'S',
      what: 'Simple sentence; S (≤30 characters); Accuracy validation'
    },
     {
      tcId: 'Pos_Fun_021',
      name: 'Simple sentence',
      input: 'api eeka karalaa thiyenavaa',
      expected: 'අපි ඒක කරලා තියෙනවා',
      type: 'S',
      what: 'Simple sentence; S (≤30 characters); Accuracy validation'
    },
    
       {
      tcId: 'Pos_Fun_022',
      name: 'Polite suggestion sentence conversio',
      input: 'oyaa kalin inna eka hoDHAyi',
      expected: 'ඔයා කලින් ඉන්න එක හොඳයි',
      type: 'M',
      what: ' Polite advice; M (31-100 characters); Accuracy validation'
    },
       {
      tcId: 'Pos_Fun_023',
      name: 'Polite suggestion sentence conversion',
      input: 'hari hari ennam',
      expected: 'හරි හරි එන්නම්',
      type: 'S',
      what: ' Polite advice; S (≤30 characters); Accuracy validation'
    },
    {
      tcId: 'Neg_Fun_0005',
      name: 'Eating action',
      input: 'mama!!! paan kanavaa??',
      expected: 'මම පාන් කනවා',
      type: 'S',
      what: ' Polite advice; S (≤30 characters); Accuracy validation'
    },
      {
      tcId: 'Neg_UI_0005',
      name: 'Short casual warning for incomplete task',
      input: 'mama karanna naethuva i',
      expected: 'මම කරන්න නැතුව ඉන්නවා',
      type: 'S',
      what: 'Short negative UI; S (≤30 characters); Accuracy validation'
    },
     {
      tcId: 'Neg_UI_0006',
      name: 'Short casual error for missed break',
      input: 'api saree ganna nathuwa gi',
      expected: 'අපි සාරී ගන්න නැතුව ගියා',
      type: 'S',
      what: 'Short negative UI; S (≤30 characters); Accuracy validation'
    },

      {
      tcId: 'Neg_UI_0007',
      name: 'Emoji handling test',
      input: 'mama 😎 ',
      expected: 'මම 😎 උනා',
      type: 'S',
      what: 'Short negative UI; S (≤30 characters); Accuracy validation'
    },
      {
      tcId: 'Neg_UI_0008',
      name: 'Extremely long input handling test',
      input: 'mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama ',
      expected: 'null',
      type: 'L',
      what: 'Long input handling test'
    },
    {
      tcId: 'Neg_UI_0009',
      name: 'Short negative sentence conversion test',
      input: 'mama eya karanna be ',
      expected: 'මම ඒය කරන්න බෑ',
      type: 'S',
      what: 'Short negative UI; S (≤30 characters); Accuracy validation'
    },
    {
  tcId: 'Neg_Fun_0010',
  name: 'Conditional negative sentence',
  input: 'oya api samaga yanneth naththam mama yanawa be',
  expected: 'ඔයා අපි සමඟ යන්නෙත් නැත්තම් මම යන්න බෑ',
  type: 'M',
  what: 'Conditional negative sentence; M (31-100 characters); Accuracy validation'
  },

  ];
  
  const browser = await chromium.launch({ 
    headless: false,
    slowMo: 100
  });
  
  let passCount = 0;
  let failCount = 0;
  
  try {
    for (const tc of testCases) {
      console.log(`\n=== ${tc.tcId}: ${tc.name} ===`);
      console.log(`Input: "${tc.input}"`);
      console.log(`Expected: "${tc.expected}"`);
      
      const page = await browser.newPage();
      
      try {
        // Go to website
        await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
        await page.waitForTimeout(3000);

        // Find input field
        const inputElement = page.locator('textarea, input[type="text"]').first();
        await inputElement.isVisible();

        // Type text
        await inputElement.click();
        await inputElement.fill('');
        await page.keyboard.type(tc.input, { delay: 100 });

        // Wait for transliteration
        await page.waitForTimeout(2000);

        // Look for output
        let actual = 'OUTPUT_NOT_FOUND';
        const methods = [
          () => page.locator('textarea').nth(1).inputValue(),
          () => page.locator('textarea').last().inputValue(),
          () => page.locator('div').filter({ hasText: tc.expected[0] }).first().innerText(),
          () => page.locator('*').filter({ hasText: tc.expected[0] }).first().innerText()
        ];

        for (const method of methods) {
          try {
            const result = await method();
            if (result && result !== tc.input && result.includes(tc.expected[0])) {
              actual = result;
              break;
            }
          } catch (e) {
            // Try next method
          }
        }

        console.log(`Actual: "${actual}"`);

        // Compare and determine status
        let status = 'Fail';
        if (actual.includes(tc.expected.replace(/[?.]/g, ''))) {
          status = 'Pass';
          passCount++;
        } else {
          failCount++;
        }

        console.log(`Status: ${status}`);
        fs.appendFileSync(resultsFile, `"${tc.tcId}","${tc.name}","${tc.type}","${tc.input}","${tc.expected}","${actual}","${status}","${tc.what}"\n`, 'utf8');

      } catch (error) {
        console.error(`Error in test ${tc.tcId}:`, error.message);
        const actual = `ERROR: ${error.message}`;
        const status = 'Fail';
        failCount++;
        fs.appendFileSync(resultsFile, `"${tc.tcId}","${tc.name}","${tc.type}","${tc.input}","${tc.expected}","${actual}","${status}","${tc.what}"\n`, 'utf8');
      } finally {
        await page.close();
      }
    }
  } finally {
    await browser.close();
  }
}

runTests().catch(console.error);