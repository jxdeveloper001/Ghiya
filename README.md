# Gheeya — খাঁটি এ২ গরুর ঘি

Premium Bengali single-product landing page for Gheeya ghee.

- Next.js 16.4.6 + TypeScript + Tailwind CSS v4, no backend, no auth.
- All Bengali copy lives in `src/data/site.ts`.
- Fonts: Noto Serif Bengali (headings) + Hind Siliguri (body).
- Product photos in `public/` are the user-supplied originals
  (green-poster photo cropped to the jar only; warm photo used as-is).

## Configurable — not yet supplied (do not invent)

- `price` in `src/data/site.ts` is `null`: no price is shown; the order
  section says the price is confirmed on the confirmation call.
- Contact details (phone/email/address): blank; footer shows
  "যোগাযোগের তথ্য শীঘ্রই আসছে".
- Delivery/payment policy: not claimed; confirmed on the call.
- No reviews/testimonials — none were supplied.

## Run

```bash
npm install
npm run dev
npm run build
```
