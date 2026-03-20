# Omnia.ae Replica — Build Instructions
## Stack: WordPress + Elementor Pro + JetEngine


---

## PHASE 1 — WordPress Setup

### 1.1 Install WordPress
- Use a fresh WordPress install (local via LocalWP, or a staging server)
- Set permalink structure: **Settings → Permalinks → Post name** (`/%postname%/`)
- Set timezone to Gulf Standard Time (UTC+4)

### 1.2 Required Plugins

| Plugin | Purpose |
|---|---|
| Elementor Pro | Page builder + Theme Builder |
| JetEngine | Custom Post Types, dynamic listings, meta fields |
| JetSmartFilters | Portfolio filtering (All / Brand / Digital / Experience) |
| JetStyleManager | Extended styling controls |
| WP Rocket or LiteSpeed Cache | Performance |
| Yoast SEO | SEO meta |
| WPForms Lite | Contact form |

### 1.3 Theme
- Install **Hello Elementor** (free, by Elementor team)
- All design is done in Elementor — do not use a theme with its own styles

---

## PHASE 2 — Global Design System

### 2.1 Global Colors
Go to **Elementor → Site Settings → Global Colors** and add:

| Name | Hex |
|---|---|
| Primary Dark | `#0A0A0A` |
| Off White | `#F5F5F0` |
| White | `#FFFFFF` |
| Muted Text | `#888888` |
| Border Dark | `#222222` |

### 2.2 Global Fonts
Go to **Elementor → Site Settings → Global Fonts**:

- Primary: **Inter** — weights 400, 500, 600, 700, 800
- Load via Google Fonts (closest free match to Omnia's custom typeface)

### 2.3 Typography Scale
Set in **Elementor → Site Settings → Typography**:

- H1: 80–96px / weight 700 / line-height 1.0 / letter-spacing -0.03em
- H2: 56–72px / weight 700 / line-height 1.05
- H3: 36–48px / weight 600 / line-height 1.1
- Body: 17px / weight 400 / line-height 1.7
- Label: 11px / weight 600 / uppercase / letter-spacing 0.14em

### 2.4 Global CSS
Go to **Elementor → Custom CSS** (or add to child theme `style.css`):

```css
body {
  background: #0A0A0A;
  color: #F5F5F0;
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
}
html { scroll-behavior: smooth; }

/* Remove default section padding */
.elementor-section,
.e-con { padding: 0 !important; }

/* Selection color */
::selection { background: #fff; color: #0A0A0A; }

/* Horizontal rule */
hr { border-color: #222; }
```


---

## PHASE 3 — Custom Post Types (JetEngine)

### 3.1 Create CPT: Projects (Portfolio)
Go to **JetEngine → Post Types → Add New**:

- Name: `Projects`
- Slug: `projects`
- Supports: Title, Editor, Thumbnail, Excerpt

**Meta Fields** (JetEngine → Meta Boxes → Add New, assign to Projects):

| Field Label | Field Name | Type |
|---|---|---|
| Client Name | `client_name` | Text |
| Project Category | `project_category` | Checkbox (Brand & Creative / Experience & Innovation / Digital Solutions / Government) |
| Project Year | `project_year` | Text |
| Hero Image | `hero_image` | Media |
| Short Description | `short_description` | Textarea |
| Services Delivered | `services_delivered` | Repeater → Text |

### 3.2 Create CPT: Insights (Blog/News)
Go to **JetEngine → Post Types → Add New**:

- Name: `Insights`
- Slug: `insights`
- Supports: Title, Editor, Thumbnail, Excerpt, Author

**Meta Fields**:

| Field Label | Field Name | Type |
|---|---|---|
| Post Type Label | `post_type_label` | Select (News / Blog / Report) |
| Read Time | `read_time` | Text |

### 3.3 Create Taxonomy: Project Category
Go to **JetEngine → Taxonomies → Add New**:

- Name: `Project Category`
- Slug: `project-category`
- Assign to: Projects CPT
- Terms to create: `brand-creative`, `experience-innovation`, `digital-solutions`, `government`

### 3.4 Create Taxonomy: Insight Type
- Name: `Insight Type`
- Slug: `insight-type`
- Assign to: Insights CPT
- Terms: `News`, `Blog`, `Report`


---

## PHASE 4 — Header (Theme Builder)

Go to **Elementor → Theme Builder → Header → Add New**.

### Layout
- Full width, sticky, transparent over hero, dark background on scroll
- Height: 80px
- Z-index: 1000

### Structure (3-column Elementor section)

**Left column:** Logo
- Add an Image widget with the Omnia/your logo (white version)
- Link to homepage

**Center column:** Navigation Menu
- Add Nav Menu widget
- Style: horizontal, font Inter 13px weight 500, uppercase, letter-spacing 0.1em, color #888 default / #fff hover
- No background, no borders

**Right column:** CTA + Menu icon
- Add a Button widget: "Get In Touch" — outlined, white border, white text, 12px font, uppercase
- On mobile: hide center nav, show hamburger icon (use Elementor's Nav Menu widget in mobile mode)

### Header Scroll Behavior
Add this to **Elementor → Custom CSS** on the header template:

```css
.elementor-sticky--active .site-header-inner {
  background: rgba(10,10,10,0.95) !important;
  backdrop-filter: blur(12px);
  border-bottom: 1px solid #222;
  transition: all 0.3s ease;
}
```

### Mobile Menu
- Use Elementor Pro's Nav Menu widget
- Set breakpoint to tablet
- Mobile menu style: full-screen overlay, dark background #0A0A0A, links centered, large font (48px), white

---

## PHASE 5 — Homepage

Create a new page: **Pages → Add New → "Home"**. Set as front page in **Settings → Reading**.
Edit with Elementor.

### Section 1: Hero

This is the most complex section. Omnia uses WebGL — we replace it with a CSS animated version.

**Structure:**
- Full viewport height (100vh)
- Dark background `#0A0A0A`
- Animated background: CSS particle/grid effect (see custom code below)

**Content (centered or bottom-left aligned):**
- Small label: "We transform brands through creative innovation"
- H1 text cycling animation: "Innovate." → "Design." → "Transform."
- No CTA button in hero (matches Omnia)

**Add an HTML widget with this animated hero code:**

```html
<div class="omnia-hero">
  <canvas id="hero-canvas"></canvas>
  <div class="hero-content">
    <p class="hero-label">We transform brands through creative innovation,<br>intelligent technology and experience-led design.</p>
    <h1 class="hero-headline">
      <span class="word active">Innovate.</span>
      <span class="word">Design.</span>
      <span class="word">Transform.</span>
    </h1>
  </div>
</div>

<style>
.omnia-hero {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #0A0A0A;
  display: flex;
  align-items: flex-end;
  padding: 0 6vw 8vh;
  overflow: hidden;
}
#hero-canvas {
  position: absolute;
  inset: 0;
  opacity: 0.35;
}
.hero-content { position: relative; z-index: 2; }
.hero-label {
  font-size: clamp(14px, 1.2vw, 18px);
  color: #888;
  line-height: 1.6;
  max-width: 480px;
  margin-bottom: 2rem;
  font-family: 'Inter', sans-serif;
}
.hero-headline {
  font-size: clamp(64px, 9vw, 130px);
  font-weight: 700;
  color: #F5F5F0;
  line-height: 1.0;
  letter-spacing: -0.03em;
  font-family: 'Inter', sans-serif;
  height: 1.1em;
  overflow: hidden;
  position: relative;
}
.hero-headline .word {
  display: block;
  position: absolute;
  opacity: 0;
  transform: translateY(60px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.hero-headline .word.active {
  opacity: 1;
  transform: translateY(0);
}
</style>

<script>
/* Word cycling animation */
const words = document.querySelectorAll('.hero-headline .word');
let current = 0;
setInterval(() => {
  words[current].classList.remove('active');
  current = (current + 1) % words.length;
  words[current].classList.add('active');
}, 2200);

/* Canvas dot grid */
const canvas = document.getElementById('hero-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const dots = [];
for (let i = 0; i < 120; i++) {
  dots.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5 + 0.5,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3
  });
}
function drawDots() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  dots.forEach(d => {
    d.x += d.vx; d.y += d.vy;
    if (d.x < 0 || d.x > canvas.width) d.vx *= -1;
    if (d.y < 0 || d.y > canvas.height) d.vy *= -1;
    ctx.beginPath();
    ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255,255,255,0.6)';
    ctx.fill();
  });
  /* Draw connecting lines */
  for (let i = 0; i < dots.length; i++) {
    for (let j = i + 1; j < dots.length; j++) {
      const dx = dots[i].x - dots[j].x;
      const dy = dots[i].y - dots[j].y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if (dist < 120) {
        ctx.beginPath();
        ctx.moveTo(dots[i].x, dots[i].y);
        ctx.lineTo(dots[j].x, dots[j].y);
        ctx.strokeStyle = `rgba(255,255,255,${0.12 * (1 - dist/120)})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(drawDots);
}
drawDots();
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
</script>
```


### Section 2: Featured Projects Ticker (Horizontal Scroll)

Omnia shows a horizontal scrolling strip of project names between sections.

**Add an HTML widget:**

```html
<div class="ticker-wrap">
  <div class="ticker-track">
    <span>COP28</span><span class="dot">·</span>
    <span>Arabsat</span><span class="dot">·</span>
    <span>Dhai Dubai</span><span class="dot">·</span>
    <span>Al Etihad Payments</span><span class="dot">·</span>
    <span>Kezad Group</span><span class="dot">·</span>
    <span>Mubadala Energy</span><span class="dot">·</span>
    <span>Adnoc Distribution</span><span class="dot">·</span>
    <!-- duplicate for seamless loop -->
    <span>COP28</span><span class="dot">·</span>
    <span>Arabsat</span><span class="dot">·</span>
    <span>Dhai Dubai</span><span class="dot">·</span>
    <span>Al Etihad Payments</span><span class="dot">·</span>
  </div>
</div>
<style>
.ticker-wrap {
  overflow: hidden;
  background: #111;
  border-top: 1px solid #222;
  border-bottom: 1px solid #222;
  padding: 18px 0;
  white-space: nowrap;
}
.ticker-track {
  display: inline-flex;
  gap: 2.5rem;
  animation: ticker 28s linear infinite;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #888;
  font-family: 'Inter', sans-serif;
}
.ticker-track .dot { color: #444; }
@keyframes ticker {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
</style>
```

### Section 3: Who We Are

**Elementor Section — 2 columns, padding 120px top/bottom:**

Left column (60% width):
- Label widget: "Who We Are?" — 11px, uppercase, #888, letter-spacing 0.14em
- Heading H2: "In a world where change is rapid, Omnia is at the forefront of brand and digital transformation."
- Font: Inter 700, color #F5F5F0, size 42px
- Paragraph: body copy from the site (see fetched content above)
- Button: "Learn More" — text link style, white, arrow icon

Right column (40% width):
- Stats using Icon Box or Text widgets:
  - "20+" / "Years of experience"
  - "8" / "Global markets"
  - "15" / "Languages spoken"
- Style: large number in white 64px 700, label in #888 14px

### Section 4: Services Grid

**Elementor Section — dark background #0A0A0A, padding 120px:**

Add a 2x2 grid (or use Elementor's Loop Grid with JetEngine):

Each service card:
- Number label: "01", "02", "03", "04" — small, #888
- Service name: H3, white, 32px
- Short description: #888, 16px
- Arrow link: "→ Explore"
- Bottom border: 1px solid #222
- Hover: background shifts to #111, arrow animates right

Services:
1. Brand & Creative Design → `/brand-design`
2. Experience & Innovation → `/experience-and-innovation`
3. Digital Solutions → `/technology-and-digital-innovation`
4. Specialist Consulting → `/specialist-consulting`

### Section 5: Featured Projects (JetEngine Listing Grid)

**Create a JetEngine Listing Template first:**

Go to **JetEngine → Listings → Add New**:
- Listing source: Posts
- Post type: Projects
- Name: "Project Card"

Inside the listing template (edit with Elementor):
- Full-width image (thumbnail) — aspect ratio 16:9 or 4:3
- Overlay on hover: dark gradient + project title
- Dynamic tag for title
- Dynamic tag for `project_category` meta
- Link to single project post

**Back on homepage**, add a **JetEngine Listing Grid** widget:
- Listing: Project Card
- Columns: 2 (desktop), 1 (mobile)
- Posts per page: 6
- Order: Menu order (so you control the sequence)

**Add JetSmartFilters** above the grid:
- Filter type: Checkboxes
- Data source: Taxonomy → Project Category
- Terms: All / Brand & Creative / Experience & Innovation / Digital Solutions / Government
- Style: pill buttons, dark background, white text active state

### Section 6: Partners / Clients Logo Strip

**Elementor Section — background #111, padding 80px:**

- Label: "Our Premium Digital Experience Partners"
- Add an Image Carousel widget or a flex row of Image widgets
- Logos in white/monochrome (use CSS filter: brightness(0) invert(1) to make any logo white)
- On hover: opacity 1, default opacity 0.5

### Section 7: CTA Footer Banner

**Elementor Section — background #F5F5F0 (light), padding 120px, text centered:**

- H2: "We're ready to take your business to the future."
- Button: "Get In Touch" — dark background, white text, large
- Link to `/contact-us`


---

## PHASE 6 — Inner Pages

### 6.1 Service Pages (Brand & Creative, Experience & Innovation, etc.)

Create 4 pages with the same Elementor template structure:

**Section 1: Page Hero**
- Full screen, dark, H1 service name
- Subheading: service description
- Stats row (e.g. "21+ Years", "20+ Awards")

**Section 2: Overview**
- 2-column: left = long-form text, right = image or abstract visual

**Section 3: Awards (for Brand & Creative)**
- Numbered list: 01, 02, 03 with award name and year
- Style: large number in #222, award name in white

**Section 4: Featured Projects**
- Same JetEngine Listing Grid as homepage, filtered by relevant category

### 6.2 Our Work Page

**Structure:**
- Page hero: H1 "Our Work", dark background
- JetSmartFilters filter bar (same as homepage)
- JetEngine Listing Grid: all projects, 2-column grid
- Pagination or Load More button

### 6.3 Insights Page

**Structure:**
- Page hero: H1 "Think — Learn — Share", subtitle
- Filter bar: All / News / Blog / Reports (JetSmartFilters → Insight Type taxonomy)
- JetEngine Listing Grid for Insights CPT:
  - Card: date (dynamic), type label, title, excerpt, "Read more" link
  - 3-column grid desktop, 1-column mobile

### 6.4 Contact Page

**Structure:**
- H1: "Get in Touch"
- Subheading: "Choose how you would like to talk with us"
- Enquiry type selector (styled radio buttons or tab switcher):
  - Brand & Creative / Experience & Innovation / Technology / Specialist Consulting / General Enquiry
- WPForms form below: Name, Company, Email, Phone, Message, Submit
- Style form fields: dark background, white text, bottom-border-only style (no box borders)

**WPForms custom CSS:**
```css
.wpforms-field input,
.wpforms-field textarea {
  background: transparent !important;
  border: none !important;
  border-bottom: 1px solid #333 !important;
  border-radius: 0 !important;
  color: #F5F5F0 !important;
  padding: 12px 0 !important;
  font-family: 'Inter', sans-serif !important;
}
.wpforms-field input:focus,
.wpforms-field textarea:focus {
  border-bottom-color: #fff !important;
  outline: none !important;
}
.wpforms-submit {
  background: #F5F5F0 !important;
  color: #0A0A0A !important;
  border: none !important;
  padding: 16px 48px !important;
  font-weight: 600 !important;
  letter-spacing: 0.08em !important;
  text-transform: uppercase !important;
}
```

---

## PHASE 7 — Footer (Theme Builder)

Go to **Elementor → Theme Builder → Footer → Add New**.

**Structure — 2 sections:**

**Top section (dark #0A0A0A, padding 80px):**
- 4-column grid:
  - Col 1: Logo + tagline + social icons (Instagram, LinkedIn, WhatsApp, Facebook)
  - Col 2: Services links
  - Col 3: Company links (Our Work, People & Culture, Insights)
  - Col 4: Newsletter signup (email input + subscribe button)

**Bottom section (border-top 1px solid #222, padding 24px):**
- Left: "2026, Omnia FZ LLC. All Rights Reserved" (update with your entity)
- Right: Privacy Policy · Terms of Use · Cookie Settings

**Footer CSS:**
```css
.site-footer a {
  color: #888;
  font-size: 14px;
  transition: color 0.2s;
}
.site-footer a:hover { color: #F5F5F0; }
.footer-social-icon {
  width: 36px; height: 36px;
  border: 1px solid #333;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s;
}
.footer-social-icon:hover { border-color: #fff; }
```

---

## PHASE 8 — Single Post Templates (Theme Builder)

### 8.1 Single Project Template

Go to **Elementor → Theme Builder → Single → Add New**:
- Condition: Post Type = Projects

**Structure:**
- Hero: full-width featured image, project title overlaid (bottom-left), dark gradient overlay
- Meta row: Client name (dynamic) · Category (dynamic) · Year (dynamic)
- Body: Elementor editor content (project description, images)
- Related projects: JetEngine Listing Grid, same category, limit 3

### 8.2 Single Insight Template

Go to **Elementor → Theme Builder → Single → Add New**:
- Condition: Post Type = Insights

**Structure:**
- Hero: post title H1, date (dynamic), type label (dynamic), author
- Featured image below hero
- Body: WordPress editor content
- Related insights: JetEngine Listing Grid, same Insight Type, limit 3

---

## PHASE 9 — Performance & SEO

### 9.1 Performance
- Enable WP Rocket: page caching, CSS/JS minification, lazy load images
- Serve images as WebP (WP Rocket or ShortPixel)
- Preload Inter font in `<head>`:
```html
<link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" as="style">
```

### 9.2 SEO (Yoast)
- Set homepage SEO title: "Omnia — Your Digital and Branding Partner | Dubai | UAE"
- Meta description: "We transform brands through creative innovation, intelligent technology and experience-led design."
- Enable XML sitemap: **Yoast → General → Features → XML Sitemaps → On**
- Add hreflang if multilingual version is needed later

### 9.3 Redirects
If migrating from an existing site, add redirects in **Yoast → Redirects** or via `.htaccess`.

---

## PHASE 10 — Content Entry

### Projects to create (from the live site):
1. COP28 — categories: Digital Solutions, Government, Experience & Innovation
2. Arabsat — categories: Digital Solutions, Brand & Creative, Experience & Innovation
3. Al Etihad Payments — categories: Brand & Creative, Digital Solutions, Government, Experience & Innovation
4. Kezad Group — categories: Digital Solutions, Experience & Innovation
5. Mubadala Energy — categories: Brand & Creative, Digital Solutions, Experience & Innovation
6. Adnoc Distribution — categories: Digital Solutions, Experience & Innovation
7. Dhai Dubai — categories: Brand & Creative
8. NBO - National Bank of Oman — categories: (assign as appropriate)
9. WGS – World Governments Summit 2025

### Insights to create:
- Davos 2026: Why Tourism's Next Chapter Is Being Written Now (News, Feb 2026)
- Hyper-personalization: How banking is taking the Customer Experience to a new level (Report, Jan 2026)
- The OMNIUM Q3 2025 (News, Dec 2025)
- From pit lane to mainframe: AI Is redefining F1 (News, Nov 2025)
- Design Systems: Empowering Developers and Designers (Blog, Sep 2025)
- The OMNIUM Q2 2025 (News, Jul 2025)

---

## PHASE 11 — Pages to Create

| Page Title | Slug | Template |
|---|---|---|
| Home | `/` | Custom (Elementor, no header/footer canvas) |
| Brand & Creative Design | `/brand-design` | Service Page template |
| Experience & Innovation | `/experience-and-innovation` | Service Page template |
| Digital Solutions | `/technology-and-digital-innovation` | Service Page template |
| Specialist Consulting | `/specialist-consulting` | Service Page template |
| Our Work | `/our-work` | Portfolio template |
| Insights | `/insights` | Insights archive template |
| People & Culture | `/people-and-culture` | Standard page |
| Contact Us | `/contact-us` | Contact template |
| Privacy Policy | `/privacy-policy` | Legal template |
| Terms of Use | `/terms-of-use` | Legal template |
| Cookie Policy | `/cookie-policy` | Legal template |

---

## PHASE 12 — Final QA Checklist

- [ ] All pages render correctly on mobile (375px), tablet (768px), desktop (1440px), widescreen (1920px)
- [ ] Header is sticky and transparent over hero, dark on scroll
- [ ] Hero word animation cycles correctly
- [ ] Ticker scrolls seamlessly
- [ ] Portfolio filter works (JetSmartFilters + JetEngine)
- [ ] Single project pages load with correct dynamic data
- [ ] Contact form submits and sends email notification
- [ ] All internal links resolve correctly
- [ ] Images are WebP and lazy loaded
- [ ] Google PageSpeed score > 80 on mobile
- [ ] Yoast SEO green for all key pages
- [ ] Cookie consent banner appears on first visit
- [ ] No console errors in browser DevTools

---

## Notes on What Cannot Be Exactly Replicated

| Omnia Feature | Limitation | Alternative Used |
|---|---|---|
| WebGL 3D hero | Requires custom Three.js — not possible natively in Elementor | Canvas dot-network animation (see Phase 5) |
| Custom licensed typeface | Not publicly available | Inter (closest free match) |
| Custom cursor | Possible via HTML widget JS | Included in global CSS section |
| Proprietary animations | Built with GSAP — requires custom dev | CSS transitions + Elementor Motion Effects |

For pixel-perfect WebGL hero, a developer would need to write a custom Three.js scene and embed it as a full-page canvas — this is outside Elementor's scope but can be injected via a child theme or HTML widget.
