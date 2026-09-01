# 📐 Lavish Diagram Coordinate Cheat Sheet (920px × 900px Canvas)

Use this exact mathematical coordinate grid to instantly place elements without collision or trial-and-error.

---

## 1. Horizontal Columns ($X$-Axis)

* **Canvas Total Width:** `920px`
* **Outer Padding:** `30px` left and right ($X = 30 \dots 850$)
* **3 Symmetrical Lanes:**
  * **Lane 1 (Left):** Center $X = 155\text{px}$ | Box Width: $210\text{px}$ ($X = 50 \dots 260$)
  * **Lane 2 (Center):** Center $X = 455\text{px}$ | Box Width: $210\text{px}$ ($X = 350 \dots 560$)
  * **Lane 3 (Right):** Center $X = 725\text{px}$ | Box Width: $210\text{px}$ ($X = 620 \dots 830$)
* **Dedicated Outer Highway (Right Margin):** $X = 865\text{px}$

---

## 2. Vertical Stages & Transition Baselines ($Y$-Axis)

| Stage / Element | $Y$ Start | $Y$ End | Height | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Stage 1 Boundary** | `20px` | `170px` | `150px` | Center Inbound Queue ($X=335$, $W=240$) |
| **Stage 1 Title** | `10px` | `30px` | `20px` | Header tab at $X=260$ |
| **Stage 1 Node 1** | `42px` | `90px` | `48px` | Center $X=455$ |
| **Stage 1 Node 2** | `112px` | `160px` | `48px` | Center $X=455$ |
| **Transition 1 $\to$ 2 Baseline** | `195px` | `215px` | `20px` | Center $X=455$ |
| **Stage 2 Boundary** | `225px` | `425px` | `200px` | Operational Hub & 3-lane split |
| **Stage 2 Title** | `215px` | `235px` | `20px` | Header tab at $X=45$ |
| **Stage 2 Hub Node** | `255px` | `305px` | `50px` | Center $X=455$ |
| **Stage 2 3-Lane Nodes** | `350px` | `400px` | `50px` | Lanes 1, 2, 3 ($Y=350$) |
| **Transition 2 $\to$ 3 Baseline** | **`445px`** | **`465px`** | `20px` | **Locked Y=445 baseline** (Lanes 1, 2, 3) |
| **Stage 3 Boundary** | `495px` | `645px` | `150px` | Resolution Actions |
| **Stage 3 Title** | `485px` | `505px` | `20px` | Header tab at $X=45$ (Deconflicted 40px below Y=445) |
| **Stage 3 3-Lane Nodes** | `545px` | `595px` | `50px` | Lanes 1, 2, 3 ($Y=545$) |
| **Transition 3 $\to$ 4 Baseline** | **`665px`** | **`685px`** | `20px` | **Locked Y=665 baseline** (Lanes 1, 2, 3 & Outer Highway) |
| **Stage 4 Boundary** | `715px` | `865px` | `150px` | Documentation & Retention |
| **Stage 4 Title** | `705px` | `725px` | `20px` | Header tab at $X=45$ (Deconflicted 40px below Y=665) |
| **Stage 4 Nodes** | `760px` | `812px` | `52px` | Timeline Hub & Escalation Node |

---

## 3. Strict 5-Layer DOM Order Contract

In SVG, visual stacking is 100% DOM-order dependent. Always place elements in this exact sequence:

1. **Layer 1:** `<rect>` boundary boxes (`stroke="#334155"`).
2. **Layer 2:** `<path>` connector lines & arrows (rendered **behind** all components).
3. **Layer 3:** Component `<g>` nodes (`<rect rx="2">` + `<text>`).
4. **Layer 4:** Stage Title Badges (`<rect rx="2">` + cyan `<text>`).
5. **Layer 5:** Transition Badges with 4px margin shields (`<rect rx="2">` + light slate `<text>`).
