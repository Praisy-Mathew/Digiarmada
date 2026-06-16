const fs = require('fs');

const transcriptPath = 'C:\\Users\\hp\\.gemini\\antigravity\\brain\\7cb5a3cc-d008-48c9-bef3-6d7e679889ad\\.system_generated\\logs\\transcript_full.jsonl';
const lines = fs.readFileSync(transcriptPath, 'utf8').split('\n');

let latestOriginalHtml = null;

// The file was likely written using write_to_file or replace_file_content earlier.
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('about-us.html') && lines[i].includes('write_to_file')) {
    try {
      const data = JSON.parse(lines[i]);
      if (data.type === 'PLANNER_RESPONSE') {
        const content = data.content;
        // Check if there are tool calls inside
        if (data.tool_calls) {
          for (const tc of data.tool_calls) {
            if (tc.function && tc.function.name === 'default_api:write_to_file') {
              const args = JSON.parse(tc.function.arguments);
              if (args.TargetFile && args.TargetFile.includes('about-us.html') && args.CodeContent) {
                latestOriginalHtml = args.CodeContent;
              }
            }
          }
        }
      }
    } catch (e) {}
  }
}

if (latestOriginalHtml) {
  console.log("Found previous about-us.html! Restoring...");
  fs.writeFileSync('about-us.html', latestOriginalHtml);
} else {
  console.log("Could not find previous write_to_file for about-us.html.");
}
