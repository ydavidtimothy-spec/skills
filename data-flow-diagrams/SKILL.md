---
name: data-flow-diagrams
description: Rules, best practices, and patterns for generating clean, professional, non-overflowing Core Data Flow and Architecture diagrams in Mermaid and SVG. Use when creating system workflows, API pipelines, ETL architectures, data integrations, or when the user asks for data flow diagrams, flowchart formatting rules, or layout optimization.
metadata:
  version: "2.7.0"
  author: "David Timothy Yoro"
---

# Core Data Flow & Architecture Diagramming Skill — The Lavish Rules Standard

This skill defines the exact engineering standards, geometric spacing ratios, semantic color palettes, and layout techniques to design clean, high-impact data flow diagrams (SVG, HTML, Mermaid, PNG) where text never clips, overflows, or collides with lines.

---

## 0. The Complete Agent Resource Suite

To make diagram encoding effortless, predictable, and 100% collision-free, four core resources are bundled in `resources/`:

1. 🧭 **Pre-Flight Planning & Decision Guide:** [`resources/planning-questionnaire.md`](file:///c:/Users/Chuybi/Documents/job-applications/.agents/skills/data-flow-diagrams/resources/planning-questionnaire.md)
   * The 5 essential pre-flight architectural questions (Vertical vs. Horizontal, Lane Count, Outer Highways, Stage Transitions, Line Caps).
2. 📄 **Master Editable SVG Template:** [`resources/master-architecture-template.svg`](file:///c:/Users/Chuybi/Documents/job-applications/.agents/skills/data-flow-diagrams/resources/master-architecture-template.svg)
   * Pre-layered, pure inline SVG with markers, dashed Red escalation highways, and 4px margin shields.
3. 📄 **Standalone Card HTML Wrapper:** [`resources/standalone-card-template.html`](file:///c:/Users/Chuybi/Documents/job-applications/.agents/skills/data-flow-diagrams/resources/standalone-card-template.html)
   * High-contrast dark card container with title, subtitle, and automatic scaling ready for `.\render-diagram.ps1`.
4. 📄 **Mathematical Coordinate Cheat Sheet:** [`resources/coordinate-cheat-sheet.md`](file:///c:/Users/Chuybi/Documents/job-applications/.agents/skills/data-flow-diagrams/resources/coordinate-cheat-sheet.md)
   * Exact pixel grids, 3-lane $X$ column centers ($155, 455, 725$), stage $Y$ bounds, and locked horizontal transition baselines ($Y=445, 665$).

---

## 1. How Autonomous Agents Should Plan & Generate Diagrams

```
[ Step 1: Answer the 5 Strategic Questions in planning-questionnaire.md ]
                                │
                                ▼
[ Step 2: Determine Orientation (TB vs LR) & Lane Count (1, 2, or 3) ]
                                │
                                ▼
[ Step 3: Reference coordinate-cheat-sheet.md for exact grid geometry ]
                                │
                                ▼
[ Step 4: Populate master-architecture-template.svg into standalone-card-template.html ]
                                │
                                ▼
[ Step 5: Render via .\render-diagram.ps1 and pass the Vision Audit ]
```

### Strict 5-Layer DOM Stacking Order:
* **Layer 1:** Region boundary boxes (`fill="#0f172a"` opacity `0.35`, `stroke="#334155"`).
* **Layer 2:** Connector `<path>` arrows (rendered **behind** all nodes and labels).
* **Layer 3:** Component `<g>` nodes with snappy 2px corner radius and max 2 lines of text.
* **Layer 4:** Stage Title Badges (deconflicted $\ge 40\text{px}$ from previous stage transitions).
* **Layer 5:** Protected Margin Shield Transition Badges (all locked to identical $Y$ baselines).

---

## 2. Semantic Color & Threat / Risk System

| Role | Color Name | Hex Code | Visual Styling |
| :--- | :--- | :--- | :--- |
| **Primary Happy Path** | Electric Sky Blue | `#0284c7` / `#38bdf8` | Solid 1.75px paths, cyan title badges |
| **High Severity / Escalation** | Crimson / Rose Red | `#fb7185` | Dashed 1.75px outer highway, red badge & red node border |
| **Stage Boundaries** | Deep Slate Canvas | `#0f172a` (opacity 0.35) | `#334155` border with 45px inter-stage separation |
| **Component Nodes** | Dark Charcoal | `#1e293b` fill, `#475569` stroke | Snappy 2px corner radius, bold white headings |
| **Shield Badges** | Opaque Canvas Match | `#090d16` with 4px margin | Impenetrable barrier blocking underlying lines |

---

## 3. The Goldilocks Spacing Standard (`45px × 45px`)

The **Lavish Rules** solve the **"Goldilocks Spacing Problem"** (not too cramped, not drifting too far away) through three calibrated spacing levers:

```
   [ Node A ]
       │
       │  ◄── rankSpacing: 45px (The Fixed Highway Buffer)
   [ 🛡️ Label ] ◄── 4px Opaque Margin Shield (No touching the line)
       │
       ▼
   [ Node B ]  ◄── nodeSpacing: 45px (Horizontal Neighbor Gap) ──►  [ Node C ]
```

---

## 4. Multi-Branch & Outer Highway Routing Standard

1. **Happy Path Downward:** Main operations flow straight down in 3 symmetrical vertical lanes ($X=155, 455, 725$).
2. **Dedicated Outer Right Highway ($X = 865$):** High-risk, escalation, and exception paths branch horizontally at $90^\circ$ right angles, travel down the dedicated outer margin in dashed Crimson/Red (`#fb7185`), and enter the target node from the right edge with zero cross-lane interference.
3. **Horizontal Baseline Alignment:** All transition badges across all active vertical lanes and the outer highway (e.g. `Ticket Resolved`, `Changes Saved`, `Concession Logged`, `High Severity`) MUST share the **exact same Y-axis baseline** (e.g. `Y = 665px`).
4. **Internal Node Text Line Limits:** Maximum 2 lines per node (`12px–13px font-size`, `line-height: 1.4`).

---

## 5. Vision Text Blocker Audit & Verification Test

Before exporting any diagram PNG or finalizing a proposal asset, run this deterministic vision test against the rendered image:

```
+=============================================================================+
|             VISION TEXT BLOCKER & COLLISION VERIFICATION TEST               |
+=============================================================================+
| [✓] Test 1: Node Text Margin Check                                         |
|     - Does any text touch, clip, or spill outside its enclosing box?        |
|     - Expected Result: FALSE (Clean internal padding on all boxes)          |
|                                                                             |
| [✓] Test 2: Arrow Intersection Check                                        |
|     - Does any arrow cut through a text label, title, or edge badge?        |
|     - Expected Result: FALSE (Zero line-through-text collisions)            |
|                                                                             |
| [✓] Test 3: Protected Badge Shield Check                                    |
|     - Do all stage transitions and title badges have solid 4px shields?     |
|     - Expected Result: TRUE (Protected badge boxes on all labels)           |
|                                                                             |
| [✓] Test 4: Horizontal Baseline Alignment Check                             |
|     - Are all parallel transition badges aligned on the exact same Y-axis?  |
|     - Expected Result: TRUE (All 4 badges on Y = 665 baseline)              |
+=============================================================================+
| FINAL VISION AUDIT STATUS: [ PASS: TRUE ]                                   |
+=============================================================================+
```
