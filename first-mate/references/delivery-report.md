# Delivery Report Template

## Outcome

State what works now in one short paragraph. Distinguish implemented, verified, deployed to Preview, and deployed to Production.

## Changed scope

- Files or subsystems changed.
- Product behavior added or corrected.
- Explicitly untouched areas.

## Verification

| Check             | Result            | Evidence                        |
| ----------------- | ----------------- | ------------------------------- |
| Focused tests     | Pass/fail         | Command and count               |
| Full gate         | Pass/fail         | Command and count               |
| Build             | Pass/fail         | Command                         |
| Browser/visual    | Pass/fail         | Viewports and artifact paths    |
| Database boundary | Pass/fail/not run | Local or hosted boundary        |
| Identity          | Pass/fail         | Fixed point and commits checked |

List every skipped test and explain why it is noncritical. Never hide a failing required gate.

## Git and deployment

- Branch.
- Commit SHA.
- Push status.
- Preview URL and target.
- Production status.
- Main-branch status.

## External state and cleanup

- Database records created, changed, or deleted.
- Temporary fixtures remaining.
- Cleanup script and trigger condition.
- Secrets or credentials touched; normally state “none.”

## Remaining risks

List concrete missing proof, pre-existing failures, deferred decisions, and rollback/forward-fix steps.

## Manual verification

Give a short numbered journey the user can perform. Include what success looks like and how to avoid or clean test footprints.
