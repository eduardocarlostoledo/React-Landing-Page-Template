#!/bin/bash
# Quick Start Commands - Sistema 5-5 Landing Page

echo "═══════════════════════════════════════════════════════════════════════════"
echo "   Sistema 5-5 Landing Page - Quick Start Guide"
echo "═══════════════════════════════════════════════════════════════════════════"
echo ""

# Check if .env.local exists
if [ -f ".env.local" ]; then
    echo "✅ .env.local found"
else
    echo "❌ .env.local NOT found"
    echo "   Create it with your EmailJS credentials:"
    echo "   REACT_APP_SERVICE_ID=xxxxx"
    echo "   REACT_APP_TEMPLATE_ID_CLIENT=xxxxx"
    echo "   REACT_APP_PUBLIC_KEY=xxxxx"
fi

echo ""

# Check if sistema55.pdf exists
if [ -f "public/sistema55.pdf" ]; then
    echo "✅ public/sistema55.pdf found"
else
    echo "❌ public/sistema55.pdf NOT found"
    echo "   Copy your PDF to public/ folder"
fi

echo ""
echo "═══════════════════════════════════════════════════════════════════════════"
echo "   Running Development Server..."
echo "═══════════════════════════════════════════════════════════════════════════"
echo ""
echo "Landing URL: http://localhost:3000/sistema-5-5"
echo ""

# Start dev server
npm start
