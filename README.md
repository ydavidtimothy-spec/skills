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

## Manual Install

You can also copy skills manually:

```bash
# Clone the repo
git clone https://github.com/ydavidtimothy-spec/skills.git

# Copy a skill into your project
cp -r skills/teach /path/to/your/project/.opencode/skills/
```

## Publishing

```bash
cd packages/cli
npm publish --access public
```

## License

MIT
