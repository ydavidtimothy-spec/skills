# Skills

Agent skills by David Timothy. Drop them into your coding agent and use them immediately.

## Quickstart

```bash
npx @ydavidtimothy/skills add
```

This starts an interactive wizard that lets you:
1. Pick which skills to install
2. Choose which agent harness directories to install them into (`.opencode/`, `.claude/`, `.agents/`, etc.)
3. Confirm and install

## Available Skills

| Skill | Description |
|---|---|
| `teach` | Teach any topic with persistent learning records, tracks, assessment, and revision |
| `to-issues` | Break plans, specs, or PRDs into independently-grabbable issues |
| `write-a-skill` | Create new agent skills with proper structure and progressive disclosure |
| `first-mate` | Captain-facing coordination, bounded crews, delivery authority, AXI initialization, and evidence-based handoff |
| `chrome-devtools-axi` | Real Chrome navigation, interaction, console/network inspection, screenshots, and performance checks |
| `wayfinder` | Map large work into decisions, tickets, dependencies, and an explicit delivery handoff |
| `to-spec` | Synthesize a conversation into a tracker-ready specification |
| `to-tickets` | Turn a spec into vertical tracer-bullet tickets with blocking edges |
| `implement` | Implement one approved spec or ticket, run checks, and hand off to review |
| `code-review` | Review a fixed-point diff on separate Standards and Spec axes |
| `gh-axi` | Operate GitHub through the compact gh-axi interface |
| `setup-matt-pocock-skills` | Configure tracker, triage labels, and domain-doc conventions |
| `tdd` | Behavior-first red-green-refactor workflow |
| `grilling` | Resolve design decisions through one-question-at-a-time discussion |
| `domain-modeling` | Maintain project vocabulary, context, and architectural decisions |

## Reproducible delivery workflow

For a large change, use the skills in this order:

```text
$wayfinder → $to-spec → $to-tickets → $implement → $code-review
```

`$wayfinder` remains planning-first. `$implement` and `$code-review` are the explicit execution and verification boundary. See `skills-manifest.json` for the portable bundle and its dependency notes. The copied `first-mate` is the Alpha Jiu Jitsu profile; adapt its project-specific references before using it as a generic skill.

## Manual Install

You can also copy skills manually:

```bash
# Clone the repo
git clone https://github.com/ydavidtimothy-spec/skills.git

# Copy a skill into your project
cp -r teach /path/to/your/project/.opencode/skills/
```

## Publishing

```bash
cd packages/cli
npm publish --access public
```

## License

MIT
