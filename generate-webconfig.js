const fs = require('fs');
const path = require('path');

const baseUrl = process.env.VITE_BASE_URL || '/';

const webConfigContent = `<?xml version="1.0" encoding="UTF-8"?>
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="React Routes" stopProcessing="true">
          <match url=".*" />
          <conditions logicalGrouping="MatchAll">
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
          </conditions>
          <action type="Rewrite" url="${baseUrl}index.html" />
        </rule>
      </rules>
    </rewrite>
  </system.webServer>
</configuration>`;

const outputPath = path.join(__dirname, 'dist', 'web.config');

try {
  fs.writeFileSync(outputPath, webConfigContent);
  console.log(`Generated web.config with base URL: ${baseUrl}`);
} catch (err) {
  console.error('Error writing web.config:', err);
  process.exit(1);
}
