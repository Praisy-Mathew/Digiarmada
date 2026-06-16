const fs = require('fs');

const transcriptPath = 'C:\\Users\\hp\\.gemini\\antigravity\\brain\\7cb5a3cc-d008-48c9-bef3-6d7e679889ad\\.system_generated\\logs\\transcript_full.jsonl';

const lines = fs.readFileSync(transcriptPath, 'utf8').split('\n');

let latestHTML = null;

// Search for the moment before I replaced the entire file.
// Or search for the view_file of about-us.html
for (let i = lines.length - 1; i >= 0; i--) {
  if (lines[i].includes('view_file') && lines[i].includes('about-us.html')) {
    // Parse the JSON
    try {
      const data = JSON.parse(lines[i]);
      if (data.type === 'PLANNER_RESPONSE' || data.type === 'TOOL_RESPONSE' || data.type === 'SYSTEM') {
        // Just extract text containing HTML
        const match = lines[i].match(/<html[\s\S]*?<\/html>/i);
        if (match) {
          latestHTML = match[0];
          break;
        }
      }
    } catch (e) {}
  }
}

if (!latestHTML) {
    // Maybe search for the exact HTML string from before I replaced it
    // The previous state was the "Why Clients Trust" addition
    console.log("Could not find full HTML. Let's look for a large chunk.");
} else {
    console.log("Found HTML! Length:", latestHTML.length);
    fs.writeFileSync('about-us-recovered.html', latestHTML);
}
