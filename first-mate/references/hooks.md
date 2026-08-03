# First Mate Hook Reference

The project-local `.codex/hooks.json` is deliberately advisory. It supplies context; it is not a permission system or an autonomous supervisor.

## Events

- `SessionStart`: reminds the main session that the First Mate package exists after startup, resume, clear, or compaction.
- `SubagentStart`: gives a crew session the same bounded-authority reminder.
- `UserPromptSubmit`: adds the reminder only when the prompt clearly asks for First Mate-style coordination.

The hook does not use `Stop`, `PermissionRequest`, `PreToolUse`, or `PostToolUse`. Those events can block or influence work and should be added only for a concrete, tested policy.

## Trust and activation

Project-local hooks are only active when the project layer is trusted by Codex. Review the exact hook definition with `/hooks` and trust it explicitly. Restart or start a new session if Codex does not load a newly added project hook.

The hook is not installed into the global `C:\Users\Chuybi\.codex\hooks.json`. That global file affects every repository and remains the captain’s personal configuration boundary.

## Behavior contract

`.codex/hooks/first-mate-context.mjs`:

- reads the hook JSON from stdin;
- locates the repository by walking upward for the First Mate skill;
- emits `{}` outside this repository;
- emits `{}` for unrelated user prompts;
- checks optional CLI availability without installing packages or making network calls, and recognizes the local Chrome AXI skill’s documented npx path;
- returns only `hookSpecificOutput.additionalContext`;
- never edits files, changes git state, calls GitHub/Vercel/Supabase, starts a server, blocks a tool, or continues a turn.

If the hook itself fails, the First Mate skill remains usable manually. Treat hook output as a reminder, not as proof that an adapter is authenticated or that a mission is authorized.
