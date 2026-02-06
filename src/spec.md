# Specification

## Summary
**Goal:** Build a cute, mobile-friendly Valentine’s Day mini-site with an animated YES/NO interaction, playful animations, and a final page that’s only accessible after clicking “YES 💕” in the current session.

**Planned changes:**
- Create a responsive single-page Valentine-themed UI with floating hearts + subtle sparkles background and smooth transitions.
- Implement a landing view with animated prompt text: “Gunja, will you be my Valentine? 💖” and two buttons: “YES 💕” and “NO 🙈”.
- Add “NO 🙈” behavior: rotate through animated messages on each click (including the specified four messages) and apply playful dodging/motion while staying tappable on mobile.
- Add “YES 💕” behavior: trigger a celebratory heart-burst/confetti effect and transition to the final view.
- Gate final-page access to the current session: block direct navigation/refresh from showing final content unless “YES 💕” was clicked.
- Create the final view with animated headline text: “I knew you’d say YES ❤️”, a gently animated couple illustration asset, and a fade-in message: “You’ve made me the happiest 💕”.
- Add optional background music with a clear play/pause (and/or mute) control; default off and no autoplay with sound.
- Apply a consistent, readable pastel Valentine visual system across both views (typography, buttons, popups).

**User-visible outcome:** Users see an animated Valentine prompt with YES/NO buttons; NO playfully resists and shows rotating cute messages, YES celebrates and unlocks a gated final page with an animated couple illustration and romantic messages, plus optional user-controlled background music.
