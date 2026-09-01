# 🧭 Diagram Architecture Decision & Planning Guide

Before writing SVG coordinates or generating a diagram, every autonomous agent **MUST answer these 5 strategic architectural questions**. 

Your answers determine whether the diagram should be **Vertical (TB)**, **Horizontal (LR)**, the number of parallel columns, the highway routing paths, and the exact coordinate grid to use.

---

## 📋 The 5 Essential Pre-Flight Architectural Questions

### 1. 📐 Orientation: Is this workflow better as Vertical (Top-to-Bottom) or Horizontal (Left-to-Right)?

* **Choose Vertical (`TB` - Top-to-Bottom) [RECOMMENDED for 90% of cases] if:**
  * The system has sequential lifecycle stages (e.g., Intake $\to$ Processing $\to$ Resolution $\to$ Retention).
  * The workflow splits into 2–4 parallel branches or operational tracks.
  * You need clean horizontal alignment across status/condition transition badges.
  * *Template to use:* [`master-architecture-template.svg`](file:///c:/Users/Chuybi/Documents/job-applications/.agents/skills/data-flow-diagrams/resources/master-architecture-template.svg) (920px × 900px canvas).

* **Choose Horizontal (`LR` - Left-to-Right) only if:**
  * The process is an unbranched linear pipeline (Source $\to$ Transform $\to$ Ingest $\to$ Data Warehouse).
  * You have 5+ strictly consecutive steps with zero parallel decision trees.
  * The client explicit brief states "horizontal timeline".

---

### 2. 🔀 Branching & Lane Density: How many parallel paths exist simultaneously?

* **Single Lane (1 Column):** Linear sequence. Center column at $X = 455\text{px}$.
* **Dual Lane (2 Columns):** Split into A/B decisions. Lane 1 at $X = 280\text{px}$, Lane 2 at $X = 640\text{px}$.
* **Tri-Lane (3 Columns) [STANDARD]:** Symmetrical 3-column architecture:
  * **Left Lane:** $X = 155\text{px}$ (Box: $50 \dots 260\text{px}$)
  * **Center Lane:** $X = 455\text{px}$ (Box: $350 \dots 560\text{px}$)
  * **Right Lane:** $X = 725\text{px}$ (Box: $620 \dots 830\text{px}$)
* **Quad Lane (4+ Columns):** If $\ge 4$ lanes are required, group sub-actions into stacked 2-tier sub-stages rather than exceeding 3 columns horizontally to prevent horizontal cramping on standard 920px canvases.

---

### 3. 🚨 Exception & Risk Routing: Are there edge cases, errors, or human escalations?

* **If YES (Human Escalations / Severe Exceptions):**
  * Route them via the **Dedicated Outer Right Highway ($X = 865\text{px}$)**.
  * Use **Amber / Yellow (`#fbbf24`)** dashed path (`stroke-dasharray="4 4"`).
  * Connect horizontally from the detection stage at $90^\circ$ right angle, drop straight down along $X = 865\text{px}$, and enter the escalation node from the right edge.
  * Ensure the exception badge (`High Severity`) is **locked on the same $Y$-baseline** as the standard transition badges.
* **If NO (Standard Happy-Path only):**
  * Use solid Electric Sky Blue (`#0284c7`) lines directly connecting sequential stages.

---

### 4. 🏷️ Stage Transitions & Badges: What condition unlocks the next stage?

* For every stage boundary crossing, define the explicit event or condition:
  * *Example:* `Customer Match`, `Carrier ETA`, `Address Validated`, `Policy Verified`, `Ticket Resolved`.
* **Rule:** Every badge MUST be encased in an opaque 4px Margin Shield (`#090d16` fill, `1px solid #334155` border) so lines do not slice through glyphs.
* **Rule:** All transition badges between Stage $N$ and Stage $N+1$ MUST share the **exact same horizontal $Y$-coordinate**.

---

### 5. 🔠 Typography & Text Density: Does any node exceed 2 lines of text?

* **Title Line:** 12px font size, weight 600, White (`#ffffff`), centered.
* **Subtext Line:** 11px font size, Slate/Cyan (`#94a3b8` / `#38bdf8`), centered.
* **Maximum Line Count:** **Strictly 2 lines per box**. Never put sentences or multi-line paragraphs inside a component node. Keep labels concise (2–4 words per line).

---

## 🛠️ Step-by-Step Agent Planning & Execution Checklist

```
[ Step 1: Answer the 5 Architectural Questions ]
                      │
                      ▼
[ Step 2: Select Orientation (TB vs LR) & Lane Count (1, 2, or 3) ]
                      │
                      ▼
[ Step 3: Map Nodes & Transitions to coordinate-cheat-sheet.md ]
                      │
                      ▼
[ Step 4: Populate master-architecture-template.svg inside standalone-card-template.html ]
                      │
                      ▼
[ Step 5: Render via .\render-diagram.ps1 and pass the Vision Audit ]
```
