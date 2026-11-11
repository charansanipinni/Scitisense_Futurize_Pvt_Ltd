# Framer design integration

The Arewno reference at https://defiant-hexagon-114482.framer.app/ informs the pale blue palette, large typography, floating product cards, rounded navigation, feature cards, process steps, FAQ, and closing CTA. Scitisense branding, content, routes, and service IDs are retained.

All seven component sources supplied by the site owner are adapted in `components/framer/`. `runtime.js` replaces Framer editor-only APIs; animation imports use the existing `motion/react` dependency. This site does not require a Framer runtime or external module imports. Original reference downloads are retained in `.reference/`.

- AnimatedTextRotator: homepage headline, blur transitions, respects reduced motion.
- ScrollRevealText: homepage research statement, word-based scroll reveal.
- CMSSliderPro: draggable reasons carousel; one card on mobile, two on desktop, keyboard navigation and pagination.
- ParticleText: pointer-responsive FUTURIZE wordmark in the closing CTA, sized to its container, mounted near the viewport.
- Counter-FX: odometer counters using existing project statistics.
- Halftonehands: closing CTA artwork, with its source image stored at `public/framer/halftone-hands.webp`.
- LiquidPillNavbar: desktop navigation with existing destination paths and liquid hover indicator; separate accessible mobile navigation.

Existing contact form behavior is retained. It changes to a local confirmation state and has no backend delivery integration. WhatsApp, email, telephone, enterprise routes, and service anchors remain available. Service anchors additionally open the targeted service details.

Validation: TypeScript, production build, and HTTP checks for all fourteen public routes. Browser visual inspection was unavailable in the session.


## Professional refinements and paper reveal

`components/AnimatedBackground.tsx` supplies the shared ambient field and a stronger contained version in the homepage hero. Slow contour motion, travelling signals, and soft light move behind content. The field has no hit targets, is hidden from assistive technology, pauses offscreen and in hidden tabs, and becomes static under reduced motion.

`components/ResearchPaper.tsx` adds the supplied CrumpledPaperReveal source to the homepage introduction, alongside the research statement. The print is an original, local SVG research brief (`public/framer/research-brief.svg`) designed for Scitisense. The effect unfolds automatically in view and has a keyboard-accessible Replay control. Its WebGL implementation is loaded only near the viewport; a static preview reserves the same space while loading and is used for reduced motion. The supplied component also falls back to the paper face when WebGL cannot initialize.

`app/refinements.css` adds consistent small-text sizing, quieter shadows, and a responsive two-column editorial introduction. Text encoding artifacts were corrected in navigation, the footer, and homepage copy. No dependencies or routes were added.


## Hallway research showcase and shared palette

The owner-supplied Hallway component by KOJA Studios is adapted in `components/framer/Hallway.js`. Only its Framer editor imports and warm room palette are replaced; its scroll camera, card links, keyboard navigation, WebGL fallback, and resource cleanup are retained. No dependency was added.

`components/HallwayExperience.tsx` replaces the decorative console below the main homepage headline. Three original local SVG research posters link to Computer Vision, IoT, and Agentic AI services. The desktop walkthrough uses a 360svh sticky track and a visible skip link. Narrow screens, coarse pointers, reduced motion, and JavaScript-disabled browsing use a compact static gallery, without a long empty scroll track or WebGL initialization. The rest of the site keeps its existing routes and content.

`app/theme.css` defines the common light surfaces, navy gallery surface, primary blue, text colours, input boundaries, and focus colours. CSS-independent animation colours are mirrored in `lib/theme.ts`. Service labels and CTA colours now use the same primary blue; category cards share one blue surface family. Scroll-reveal text remains readable even before its final revealed colour.

Validation includes a numerical contrast check for the primary text/surface pairs, button text, input boundaries, TypeScript, local SVG parsing, and route/link checks. This checks the named colour pairs, not every possible rendered pixel or animation state. Browser visual inspection remains unavailable.


## Opening Hallway, overlay menu, and liquid glass buttons

The desktop homepage now composes the existing headline with the beginning of the Hallway walk in one viewport. Headline motion follows scroll progress and clears before later gallery cards enter; the original Hallway intro remains measured but hidden to prevent duplicate text. Narrow screens and reduced motion retain a normal-flow introduction and compact gallery. JavaScript-disabled layout also stays in normal flow.

The owner-supplied `MotionOverlayMenu` and `LiquidGlassButtons` sources are adapted in `components/framer/`. Both use `interactive-runtime.js`: editor detection is kept separate from reduced motion so navigation remains functional when animation is reduced. Motion imports use the existing `motion/react` dependency. The buttons use the site's Geist font, with the component's external font-face removed.

The menu retains the full legal company name and existing paths, includes enterprise solutions and contact links, and uses the source component's circular reveal, Escape handling, focus trap, and focus return. A small open-state callback pauses/resumes Lenis; the source component handles body scroll locking. The desktop liquid pill navigation remains available beside the universal Menu control.

Glass buttons are used for the two homepage hero actions and the closing conversation CTA. Their stable hit area, native links, text contrast, reduced-motion behavior, and visible focus rings are retained. `app/interactions.css` supplies the responsive composition, header fit, button backing colours, and mobile stacking rules.


## Navigation simplification and shared page shell

The overlay menu is no longer rendered. A single navy header is used on every route, with the existing liquid pill links on desktop and visible wrapping text links on smaller screens. No menu button or modal scroll lock remains in the active application.

`CompanyBrand` renders Scitisense Futurize and Pvt. Ltd. on separate lines in both the header and footer. The legal company spelling and homepage tab title are retained. The homepage's Ideas worth unfolding section and its paper reveal have been removed from the active page/module graph.

All interior page banners use `site-page-hero`, matching the homepage's navy surface and pale-blue/white text. Page bodies retain the common light-blue surface family. Pill navigation and internal glass-button destinations now use Next.js client navigation, preserving native modified-click/new-tab behavior. Lenis is reset when the route changes so old wheel inertia cannot carry into the next page. The Next.js 16 smooth-scroll attribute ensures route navigation does not animate through the previous page's scroll distance.


## Responsive hardening, favicon, and development warning

The Hallway image prop is corrected from `fetchpriority` to React's `fetchPriority`; this was the browser warning shown in the development issue badge. The development indicator remains enabled so real warnings stay visible.

The supplied company logo is packaged as a multi-resolution ICO (16 through 256 px), a 192 px icon, and a 180 px Apple icon, using the Next.js metadata file conventions. Artwork and aspect ratio are preserved.

Geist and Geist Mono are now local WOFF2 files with their licence in `app/fonts`. The unused Google font imports are removed and legacy font variables alias the primary local font. This removes build/runtime font-download failures and keeps typography stable without third-party font requests.

`app/responsive.css` adds explicit headline line structure, a reserved rotating-word box, wrapping service identities/chips, smaller-screen headline sizes, 44 px navigation/action targets, 16 px form fields, and mobile footer/contact layout rules. The hidden WhatsApp tooltip no longer creates a wide invisible mobile hit area. The immersive Hallway composition now requires a fine pointer, at least 1100 px width and 700 px height, and no reduced-motion preference; other screens use the compact normal-flow gallery. JavaScript and CSS use the same query.

Validation: production build without network access, TypeScript, route/link checks, metadata/icon/font asset checks, and review of the logged warning. Pixel-level mobile browser inspection remains unavailable in this session.
