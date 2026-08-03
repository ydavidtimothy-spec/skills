# First Mate Harness Adapter Reference

Harness lifecycle adapters are deliberately advisory. They supply context; they are not a permission system or an autonomous supervisor. The same contract applies whether the adapter is a Codex `.codex/hooks.json`, Pi extension, OpenCode plugin, AG hook, Qwen hook, Cursor rule, or another harness-specific mechanism.

## Events

- Session/start/resume: reminds the main session that the First Mate package exists.
- Subagent start: gives a crew session the same bounded-authority reminder.
- Prompt submission or turn start: adds the reminder when the prompt clearly asks for First Mate-style coordination.

Blocking, permission, pre-tool, post-tool, or stop events can influence work and should be added only for a concrete, tested policy in the active harness. Do not assume another harness supports the same event names.

## Trust and activation

Project-local adapters are only active when the project layer is trusted by the active harness. Review the exact adapter definition through that harness’s own trust/reload mechanism before relying on it.

Do not silently install a global adapter. Global hook/plugin files affect every repository and remain the captain’s personal configuration boundary.

## Behavior contract

The project’s current example adapter, `.codex/hooks/first-mate-context.mjs`:

- reads the hook JSON from stdin;
- locates the repository by walking upward for the First Mate skill;
- emits `{}` outside this repository;
- emits `{}` for unrelated user prompts;
- checks optional CLI availability without installing packages or making network calls, and recognizes the local Chrome AXI skill’s documented npx path;
- returns only `hookSpecificOutput.additionalContext`;
- never edits files, changes git state, calls GitHub/Vercel/Supabase, starts a server, blocks a tool, or continues a turn.

The injected context reinforces strict crew-first mode: it nudges the main agent to dispatch subsystem work and replace failed crew rather than silently taking over. It is still only a reminder; the skill and mission prompt remain the authority for the workflow. Other harnesses should implement the same semantic reminder through their native adapter format.

If the hook itself fails, the First Mate skill remains usable manually. Treat hook output as a reminder, not as proof that an adapter is authenticated or that a mission is authorized.
