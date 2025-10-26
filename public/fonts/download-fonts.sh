#!/bin/bash
# Script to download Inter font files for self-hosting
# Run this once to set up the fonts

echo "📥 Downloading Inter font files..."

# Create fonts directory if it doesn't exist
mkdir -p "$(dirname "$0")"

# Download Inter Variable Font (latest version)
curl -L "https://github.com/rsms/inter/releases/download/v4.0/Inter-4.0.zip" -o /tmp/Inter.zip

# Extract the fonts we need
unzip -j /tmp/Inter.zip "Inter Desktop/Inter-Variable.woff2" -d "$(dirname "$0")"
unzip -j /tmp/Inter.zip "Inter Web/Inter-Regular.woff2" -d "$(dirname "$0")"
unzip -j /tmp/Inter.zip "Inter Web/Inter-SemiBold.woff2" -d "$(dirname "$0")"
unzip -j /tmp/Inter.zip "Inter Web/Inter-Bold.woff2" -d "$(dirname "$0")"

# Cleanup
rm /tmp/Inter.zip

echo "✅ Inter fonts downloaded successfully!"
echo ""
echo "Files created:"
echo "  - Inter-Variable.woff2"
echo "  - Inter-Regular.woff2"
echo "  - Inter-SemiBold.woff2"
echo "  - Inter-Bold.woff2"
echo ""
echo "Next steps:"
echo "  1. Fonts are ready to use"
echo "  2. Font CSS is configured in inter.css"
echo "  3. Layout will preload these fonts automatically"

