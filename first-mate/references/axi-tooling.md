# Harness and AXI Tooling Reference

This reference is harness-neutral. Tool names and flags can change; check current help before relying on a command. The active harness may be Pi/Oh My Pi, Oh My CLI, OpenCode, AG, Codex, Qwen CLI, Cursor, Grok/Grok Build, Claude, Hermes, or another agent surface.

## Discovery

PowerShell:

```powershell
Get-Command gh-axi,lavish-axi,chrome-devtools-axi,codex,vercel,supabase -ErrorAction SilentlyContinue |
  Select-Object Name,Source
```

POSIX shells:

```bash
command -v gh-axi lavish-axi chrome-devtools-axi codex vercel supabase || true
```

There is no universal `axi init`, harness start command, or hook format. Missing tools are reported and installed only with the captain’s approval. If the current harness exposes a native subagent/delegation command, use it; if it does not, stop before doing crew-owned project work.

## gh-axi

Use for all GitHub operations:

```bash
gh-axi --help
gh-axi
gh-axi issue list --state open
gh-axi pr checks <number>
gh-axi run list
```

If the global command is unavailable:

```bash
npx -y gh-axi --help
npx -y gh-axi
```

GitHub mutations still require explicit captain authority. `gh-axi` availability or authentication is not authorization to mutate.

## lavish-axi

Use for visual artifacts, structured review surfaces, plans, comparisons, reports, and browser feedback:

```bash
lavish-axi --help
lavish-axi design
lavish-axi path/to/artifact.html
lavish-axi poll path/to/artifact.html
lavish-axi end path/to/artifact.html
```

Use `lavish-axi poll` only when the mission expects human/browser feedback; leave the poll alive and re-run it after an execution timeout because queued feedback is retained.

## Chrome/browser AXI

When the local Chrome AXI skill is present at `.agents/skills/chrome-devtools-axi/SKILL.md`, read it before browser work and invoke the CLI on demand:

```bash
npx -y chrome-devtools-axi --help
npx -y chrome-devtools-axi open <url>
npx -y chrome-devtools-axi snapshot
npx -y chrome-devtools-axi stop
```

No global installation is required. Use the configured Chrome control/browser connector for existing logged-in Chrome state only when it is the better boundary, or Playwright for reproducible journeys. Always report the actual browser boundary used and whether the local npx package resolved successfully. Do not run `chrome-devtools-axi setup hooks` unless the captain separately authorizes global hook installation.

## Other boundaries

- `vercel`: deployment inspection; report READY/Error and Preview/Production distinctly.
- `supabase`: database inspection/mutation; hosted writes need explicit authority and migration/test coverage.
- Active harness: native subagent/delegation mechanism; record its name, isolation model, and limitations.
- Independent reviewer harness: use only when requested or required by the mission contract; pin model/config when supported and record unavailable configuration honestly.
- `gh`: fallback only when gh-axi lacks the required operation, following repository instructions.

## Initialization rule

Initialize only the adapters needed by the mission. Load the adapter’s skill or reference before acting, use read-only discovery first, and never infer that “initialized” means “authorized.”
