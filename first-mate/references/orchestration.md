# Orchestration Protocol

## Choose the smallest useful crew

Use no crew only for prompt-only/planning work or when the captain explicitly authorizes `captain takeover`. For Ship and Verify work, use two or more agents whenever investigation, implementation, tests, design review, or security review can proceed on disjoint surfaces. More agents add coordination cost, so each one must correspond to a genuinely independent work package.

## Preferred wave structure

### Wave 0 — Reconnaissance

The First Mate reads authority, mission contract, repository state, and user artifacts. Delegate source-code, test, deployment, and browser discovery immediately; never delegate interpretation of skill instructions or the captain’s contract.

### Wave 1 — Contracts and failing tests

Have a contract/scout agent define proposed interfaces and a ship agent write tests at stable seams. A named integration agent owns interfaces shared by multiple agents; the First Mate routes decisions and does not edit them.

### Wave 2 — Disjoint implementation

Assign separate file ownership. Require each crew member to report changed files, tests, assumptions, risks, and anything it could not verify.

### Wave 3 — Integration

An integration agent inspects every diff, resolves conflicts, removes duplication, checks architecture, and runs focused tests. A separate verification agent runs the independent gates and adversarial review. The First Mate reconciles their reports and does not edit project files.

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
| Integration agent | Shared interfaces and integration | Shared paths | Unrelated files | Focused tests and diff |
| Verification agent | Gates and adversarial review | Test/evidence surface | Runtime implementation | Full gates and report |
| First Mate | Routing, authority, handoffs | None | All project files | Reconciled outcome |

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
- If an agent fails, times out, or returns no usable handoff, replace/retry it or report the blocker; the First Mate must not resume that implementation itself.
- If two agents touched the same file, pause one and integrate centrally.
- If a test is flaky, reproduce it; do not skip a critical path to make the suite green.
- If a hosted mutation lacks migration parity, treat it as a blocker for production readiness.
- If requirements conflict, preserve the most recent explicit user instruction and surface the conflict.
