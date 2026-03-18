# AITERA — Static Corporate Website

Premium AI transformation company website. Static HTML/CSS/JS — no build step required.

## Deploy to GitHub Pages

1. Create a new GitHub repository
2. Upload all files from this folder to the repository root
3. Go to **Settings → Pages**
4. Under "Source", select **Deploy from a branch**
5. Choose **main** branch, **/ (root)** folder
6. Click **Save**
7. Your site will be live at `https://yourusername.github.io/your-repo-name/`

## Before Going Live

Replace all `yourdomain.com` placeholders with your actual domain in:
- `index.html` — canonical URL, OG tags, hreflang, JSON-LD, contact email
- `privacy-policy.html` — canonical URL, contact email
- `cookie-policy.html` — canonical URL
- `terms.html` — canonical URL

Complete all `[PLACEHOLDER]` sections in the legal pages with content reviewed by qualified legal counsel.

Integrate a CAPTCHA service (reCAPTCHA v3 or hCaptcha) in the contact form.

Add a `sitemap.xml` and `robots.txt` to the repository root.

## Project Structure

```
aitera-site/
├── index.html          # Main site (all sections)
├── styles.css          # All styles (CSS variables, responsive)
├── script.js           # Language switching, mobile menu, cookie banner
├── privacy-policy.html
├── cookie-policy.html
├── terms.html
└── README.md
```

## Adding a Language

1. Add a new entry to the `translations` object in `script.js`
2. Add the flag/code to `flagData` in `script.js`
3. Add the language code to `SUPPORTED_LANGS`
4. Add an `hreflang` link in each HTML `<head>`
