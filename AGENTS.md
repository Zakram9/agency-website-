## GOAL

Build high-converting, SEO-friendly local service websites using the provided templates as design references, not exact copies.

Websites must feel premium, modern, trustworthy, conversion-focused, unique per client, and ready for GoHighLevel (GHL) copy-paste deployment.

---

## PRIORITY ORDER (WHEN RULES CONFLICT)

Apply rules in this order:

1. Accuracy of user-provided facts (business info, services, contact data).
2. Template structure and visual language.
3. Conversion and UX quality.
4. SEO quality.
5. Visual variation.

If a lower-priority rule conflicts with a higher-priority rule, follow the higher-priority rule.

---

## REQUIRED INPUTS (MUST COLLECT BEFORE BUILDING)

The agent must collect all required fields before generating code:

- Business name.
- Primary city/service area.
- Short business description (2-3 sentences provided by user).
- Public phone number.
- Public email address.
- Business address.
- Complete services list (all services that must appear).
- Preferred color direction or brand colors.
- Chosen template number (1-5).
- Primary CTA objective (call now, book now, request quote, etc.).
- Image assets to use (logo, hero, supporting images), or explicit permission to use placeholders.

Optional but recommended:

- Google Maps link.
- Existing reviews/testimonials that are real and approved for use.
- Licenses/certifications only if verified by user.
- Social profile links.

If required inputs are missing, unclear, or contradictory, stop and return a "Missing Inputs" list. Do not generate the website until resolved.

---

## TEMPLATE MAP (FIXED)

Use this exact mapping:

1. Template 1 -> `.vscode/website-agent-builder/cleaning template`
2. Template 2 -> `.vscode/website-agent-builder/electrician template`
3. Template 3 -> `.vscode/website-agent-builder/HVAC TEMPLATE`
4. Template 4 -> `.vscode/website-agent-builder/Lawn care template`
5. Template 5 -> `.vscode/website-agent-builder/Plumbing Template`

Template selection rule:

- User must provide one template number from 1 to 5.
- If template number is missing or outside 1-5, stop and return a "Missing Inputs" request for valid template number.

---

## TEMPLATE USAGE RULES

Must:

- Follow the selected template's design language: spacing rhythm, typography hierarchy, section proportions, card style, depth treatment, and CTA patterns.
- Preserve the template's interaction style and responsiveness behavior.
- Keep the output visually close in quality and structure, while adapting content for the client.

Should:

- Introduce controlled variation in section emphasis, grid density, and copy length to avoid clone-like output.
- Use CSS variables for colors and easy future edits.

Never:

- Copy any template pixel-for-pixel.
- Reproduce original brand names, logos, proprietary text, or trademarked claims from references.
- Add experimental layouts that break template consistency.

---

## SECTION AND CONTENT RULES

Target flow:

Hero -> Services -> Trust builders -> CTA -> Contact -> Footer.

Conditional sections:

- Reviews section only when real, user-provided reviews exist.
- Certifications/licenses section only when user provides verified details.
- Gallery section only when real images are available or placeholders are explicitly approved.

If data for a section is not provided, omit that section gracefully instead of inventing content.

---

## COPYWRITING RULES

Must:

- Write original copy for each website.
- Keep copy clear, specific, trust-oriented, and conversion-focused.
- Use one clear H1 that includes core service intent plus city/service area where natural.
- Use strong CTAs aligned with the user's primary CTA objective.
- Match the tone requested by the user (professional, friendly, premium, etc.).

Never:

- Invent testimonials, ratings, years in business, counts, certifications, awards, or guarantees.
- Use filler buzzwords, vague hype, or AI-sounding phrasing.
- Leave placeholder text.

---

## SEO RULES

Must:

- Use semantic HTML.
- Use exactly one H1.
- Keep heading hierarchy logical and scannable.
- Include a descriptive `<title>` and meta description tied to service + location + CTA intent.
- Include natural local relevance in copy (service area language without stuffing).
- Add descriptive, truthful `alt` text for images.

Never:

- Keyword stuff.
- Duplicate exact copy across websites.
- Add fake schema, fake reviews, or manipulative SEO tactics.

SEO is human-first.

---

## MULTI-PAGE OUTPUT FORMAT (GHL COMPATIBLE)

Must:

- Create exactly five standalone HTML files:
- `index.html` (Home)
- `services.html` (Services)
- `about.html` (About Us)
- `testimonials.html` (Testimonials)
- `contact.html` (Contact Us)
- Keep all CSS in one `<style>` block per file in `<head>`.
- Keep JavaScript in one `<script>` block per file before `</body>` only if needed.
- Keep identical header, navigation, and footer structure across all five files.
- Ensure all internal links between the five pages work correctly.
- Use one unique `<title>` and one unique meta description per page.
- Use exactly one H1 per page.
- Keep code clean, readable, and safe for direct GHL paste.

Must not:

- Use shared external CSS or JS files.
- Use server-side includes, routing assumptions, or framework-only structures.
- Output partial pages or unfinished placeholders.
- Add unnecessary external libraries.
- Use external dependencies other than optional Google Fonts.

Response format:

- First show a short "Input Check" status.
- If inputs are incomplete, return only the missing-input checklist.
- If inputs are complete and file editing is available, create/write all five files directly.
- If file editing is not available, return five HTML code blocks, one per filename, plus a short done-checklist report.

---

## DONE CHECKLIST (MANDATORY BEFORE FINAL OUTPUT)

- [ ] No placeholder text remains.
- [ ] Business name, phone, email, and address match user input exactly.
- [ ] All user-provided services are present.
- [ ] Chosen template style is respected.
- [ ] All five required pages are created.
- [ ] Mobile, tablet, and desktop layouts are responsive on all pages.
- [ ] At least one primary CTA is visible above the fold.
- [ ] Exactly one H1 is used on each page.
- [ ] No invented claims, stats, reviews, or credentials.
- [ ] Testimonials content is real user-provided content, or a no-testimonials fallback is used with no fake quotes.
- [ ] Navigation and footer are consistent across pages.
- [ ] No broken internal links between pages.
- [ ] Each page is standalone, readable, structured, and GHL-safe.

---

## FINAL SAFETY RULE

If a change risks harming factual accuracy, layout integrity, trust, SEO, or conversion quality, do not apply the change.
