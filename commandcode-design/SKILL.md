---
name: commandcode-design
description: "Design and audit frontend interfaces through explicit visual modes: review, checkup, smell, layout, color, type, motion, interaction, responsive behavior, voice, surface, refinement, and finish. Use when the user asks to improve, critique, redesign, or make a web interface feel intentional."
---

# Design Partner

Use this as a decision-and-verification playbook for frontend design work. Make real changes to
real interface files when the selected mode is a change mode. Do not substitute a markdown mockup
for a working UI.

## Route the request

Choose the narrowest mode that matches the user’s verb. A freeform request may be routed without a
confirmation question when the target and outcome are clear.

### Report-only modes

`smell`, `checkup`, and `review` produce findings only. They must not edit product files or invoke a
fix mode in the same turn.

- `smell`: detect generic, template-like, or obviously generated visual choices.
- `checkup`: fast health scan covering hierarchy, accessibility, states, responsiveness, and obvious
  friction.
- `review`: deeper critique with scores, a user walkthrough, evidence, and prioritized findings.

Write the report to the repository’s established design-report location. If none exists, use
`.commandcode/design/<mode>-report.md` when Command Code is present, otherwise `docs/design/`.

### Change modes

- `redesign`: change the visual direction while preserving the product’s job and domain truth.
- `relayout`: change composition, hierarchy, and information flow—not just spacing.
- `recolor`: establish a role-based palette with contrast and state semantics.
- `typeset`: establish readable type scale, measure, hierarchy, and responsive behavior.
- `motion`: add a coherent motion system with reduced-motion behavior.
- `interaction`: improve affordances, feedback, focus, loading, empty, error, disabled, and overflow states.
- `responsive`: recompose for viewport, input method, content density, and safe areas.
- `voice`: sharpen brand register, copy, art direction, and visual character.
- `surface`: harden a real product surface with truthful data states, density, and access needs.
- `deslop`: replace generic visual reflexes with decisions grounded in the current product.
- `tokenize`: extract repeated visual decisions into consistent tokens or components.
- `refine`: push or settle the existing direction without replacing it wholesale.
- `finish`: perform a final friction, consistency, accessibility, and responsive pass.
- `setup`: create or update a project design brief without inventing product requirements.

Before any change mode, consume any existing report from the most recent audit and state which
findings are in scope. Reports inform the work; they do not replace the selected mode’s full bar.

## Context and invariants

Look for design context only when a file listing/search confirms it exists. Common locations include:

- `.commandcode/design/brief.md`
- `.commandcode/taste.md`
- `DESIGN.md`, `design.md`, or `docs/design/`
- repository brand/domain documentation

Extract these invariants before making a visual decision:

1. **Name** — the exact product, feature, venue, or brand.
2. **Category** — what the user is looking at.
3. **Audience and pressure** — who arrives and what they need now.
4. **Job** — monitor, operate, compare, configure, learn, decide, or explore.
5. **Domain artifact** — the real object: schedule, queue, profile, score, map, record, or similar.
6. **Evidence** — what makes the interface trustworthy.
7. **Refusals** — generic layouts, copied templates, invented data, or choices that contradict the
   existing domain/design contract.

Do not ask for colors, fonts, exact spacing, or component names when the goal is already clear.
Ask one focused question only for a true blocker such as a missing target, contradictory scope,
or destructive ambiguity.

## Design reasoning

Start from the user’s work pattern, not a fashionable composition:

- **Monitor** needs status, priority, timelines, and change visibility.
- **Operate** needs command surfaces, direct manipulation, and clear feedback.
- **Compare** needs stable scanning lanes, tables, rankings, or matrices.
- **Configure** needs grouped controls, summaries, previews, and a clear commit point.
- **Learn** needs readable measure, progression, and orientation.
- **Decide** needs proof, risk reduction, and one dominant action.
- **Explore** needs discovery, filters, maps, galleries, and reversible actions.

Cards, pills, gradients, centered heroes, and dashboard grids are tools—not defaults. Use them only
when the domain job makes them the clearest answer. Every visual choice needs a reason tied to this
product, audience, artifact, or evidence.

## Quality bar

Before changing the interface:

- inspect the existing implementation and understand what must remain stable;
- identify the highest-value hierarchy and the primary user action;
- preserve real data, permissions, routing, and interaction contracts;
- plan the smallest coherent change for the requested scope.

During the work:

- use tokens and established patterns before introducing new ones;
- test realistic long, empty, loading, error, disabled, success, and overflow content;
- keep keyboard focus, visible focus, labels, touch targets, contrast, and reduced motion intact;
- test narrow and wide layouts, not only the happy-path viewport;
- use a real browser or the repository’s visual test harness when visual behavior matters.

After the work:

- run the relevant tests and type/build checks;
- inspect the rendered result at representative mobile and desktop widths;
- perform a squint test for hierarchy and a short usability pass for friction;
- report what changed, what was verified, what was only inspected, and what remains unverified.

## Anti-generic design check

Reject a result when a stranger could move its hero, palette, card grid, copy, and proof object into
an unrelated product without noticing. Re-anchor the design in the current domain and make the
primary evidence visible. Do not add decoration to hide missing hierarchy, missing states, weak
copy, or uncertain product intent.

## First Mate integration

When this skill is invoked inside a First Mate mission, the First Mate delegates the design audit or
change to a design crew member. The main agent remains the liaison: it does not perform the design
subsystem work unless the captain explicitly says `captain takeover`.

## Completion report

Return:

- selected mode and target;
- invariants preserved;
- files changed or reports created;
- tests, browser checks, and viewport evidence;
- accessibility and responsive findings;
- unresolved risks and the next safe action;
- explicit “do not do next” boundaries when scope is narrow.
