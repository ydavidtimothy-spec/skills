# Orchestration Protocol

## Choose the smallest useful crew

Use no crew for a linear task that the captain can finish quickly. Use two or three agents when investigation, implementation, tests, design review, or security review can proceed on disjoint surfaces. More agents add coordination cost and should correspond to genuinely independent work.

## Preferred wave structure

### Wave 0 — Reconnaissance

The captain reads authority, code, tests, state, and user artifacts. Delegate narrowly scoped discovery only when it is independent; never delegate interpretation of skill instructions.

### Wave 1 — Contracts and failing tests

Define interfaces and write tests at stable seams. The captain owns interfaces shared by multiple agents.

### Wave 2 — Disjoint implementation

Assign separate file ownership. Require each crew member to report changed files, tests, assumptions, risks, and anything it could not verify.

### Wave 3 — Integration

The captain inspects every diff, resolves conflicts, removes duplication, checks architecture, and runs focused tests.

### Wave 4 — Adversarial verification

Use a fresh reviewer when possible. Give it the raw diff, spec, and evidence, not the captain's conclusions. Review Standards and Spec separately.

### Wave 5 — Delivery

Run full required gates, capture visual or live-boundary proof, commit intentionally, and perform only authorized publishing actions.

## Ownership table

Record ownership before spawning agents:

| Crew    | Objective                  | Owned files/subsystem | Must not edit | Required evidence |
| ------- | -------------------------- | --------------------- | ------------- | ----------------- |
| A       | Bounded outcome            | Exact paths           | Shared paths  | Focused tests     |
| B       | Bounded outcome            | Exact paths           | Shared paths  | Focused tests     |
| Captain | Interfaces and integration | Shared paths          | —             | Full gates        |

## Handoff format

Require each crew report to contain:

1. Outcome.
2. Files changed.
3. Tests run with exact results.
4. Assumptions.
5. Known risks or missing proof.
6. Whether it changed external state.
7. Suggested next integration action.

## Failure handling

- If an agent goes stale, inspect the filesystem and task status before restarting work.
- If two agents touched the same file, pause one and integrate centrally.
- If a test is flaky, reproduce it; do not skip a critical path to make the suite green.
- If a hosted mutation lacks migration parity, treat it as a blocker for production readiness.
- If requirements conflict, preserve the most recent explicit user instruction and surface the conflict.
