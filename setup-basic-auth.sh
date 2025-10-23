#!/bin/bash

# Setup script for basic authentication environment variables

echo "🔐 Setting up Basic Authentication..."
echo ""

# Check if .env.local already exists
if [ -f .env.local ]; then
    echo "⚠️  .env.local already exists!"
    read -p "Do you want to append auth variables? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "Aborted."
        exit 1
    fi
    echo "" >> .env.local
fi

# Get username
read -p "Enter username (default: admin): " AUTH_USER
AUTH_USER=${AUTH_USER:-admin}

# Get password
read -sp "Enter password: " AUTH_PASSWORD
echo ""

if [ -z "$AUTH_PASSWORD" ]; then
    echo "❌ Password cannot be empty!"
    exit 1
fi

# Create/append to .env.local
cat >> .env.local << EOF
# Basic Authentication Configuration (Added $(date))

INTERNAL_AUTH_USER=$AUTH_USER
INTERNAL_AUTH_PASSWORD=$AUTH_PASSWORD
EOF

echo ""
echo "✅ Basic authentication configured!"
echo ""
echo "📝 Credentials:"
echo "   Username: $AUTH_USER"
echo "   Password: ********"
echo ""
echo "🚀 Start the server with: npm run dev"
echo "🔗 Visit: http://localhost:3000/internal"
echo ""
echo "📖 Full documentation: docs/BASIC_AUTH_SETUP.md"
echo ""

