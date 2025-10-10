# Google Maps Places API Setup

This project uses the Google Maps Places API to provide autocomplete functionality for restaurant names in the demo form.

## Setup Instructions

### 1. Get a Google Maps API Key

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Places API for your project:
   - Go to "APIs & Services" > "Library"
   - Search for "Places API"
   - Click on "Places API" and then "Enable"
4. Create credentials:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy the generated API key

### 2. Configure the API Key

Create a `.env.local` file in the root of your project and add:

```bash
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```

Replace `your_google_maps_api_key_here` with your actual API key.

### 3. Restrict API Key (Recommended)

For security, restrict your API key:

1. In the Google Cloud Console, go to "Credentials"
2. Click on your API key
3. Under "Application restrictions", select "HTTP referrers (web sites)"
4. Add your domain(s):
   - `https://yourdomain.com/*`
   - `http://localhost:3000/*` (for development)
5. Under "API restrictions", select "Restrict key" and choose "Places API"

## Features

- **Autocomplete**: As users type, they'll see restaurant suggestions from Google Places
- **Restaurant Filtering**: Suggestions prioritize food/restaurant establishments
- **Graceful Fallback**: If the API key is not configured, the field falls back to a regular text input
- **Type Safety**: Full TypeScript support with Google Maps types

## Development

The autocomplete component is located at `src/components/PlacesAutocomplete.tsx` and is used in the demo page form.

The component will automatically detect if the API key is available and gracefully fall back to a regular input field if not configured.
