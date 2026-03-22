# Root Landing Page

A Next.js landing page inspired by the [Root Wireframe Kit](http://rootwireframekit.com/) design aesthetic — clean, minimal, and professional.

## Features

- **Modern Stack**: Next.js 16, React 19, TypeScript, Tailwind CSS v4
- **Typography**: Outfit (body) + Syne (headings) for a distinctive look
- **Sections**: Hero, Features, Benefits, Why Root, Pricing, FAQ, CTA
- **Responsive**: Mobile-first design with responsive layouts
- **Smooth UX**: Sticky nav with backdrop blur, hover states, anchor links

## Getting Started

```bash
# Install dependencies (if not already done)
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css    # Global styles & Tailwind
│   ├── layout.tsx     # Root layout with fonts
│   └── page.tsx       # Landing page content
```

## Customization

- **Colors**: Edit CSS variables in `globals.css`
- **Content**: Update copy directly in `page.tsx`
- **Links**: Replace placeholder links (e.g., Gumroad) with your actual URLs
