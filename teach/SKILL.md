---
name: teach
description: Teach the user a new skill or concept, within this workspace.
disable-model-invocation: true
argument-hint: "What would you like to learn about?"
---

The user has asked you to teach them something. This is a stateful request - they intend to learn the topic over multiple sessions.

## Architecture (Workspace Data Flow)

The teaching workspace is a small state machine. Understanding this flow will help you make correct decisions at each step:

```
┌─────────────┐     drives      ┌──────────────────┐
│  MISSION.md  │ ──────────────→ │    Lessons       │
│  (the why)   │                 │  ./lessons/*.html │
└─────────────┘                  └────────┬─────────┘
                                          │
                                   produces│
                                          ▼
┌────────────┐     informs      ┌──────────────────┐
│ RESOURCES  │ ←────────────── │ Learning Records │
│ (sources)  │                 │  ./records/*.md  │
└────────────┘                  └────────┬─────────┘
                                          │
                                   updates│
                                          ▼
                          ┌───────────────────────┐
                          │   Zone of Proximal    │
                          │    Development (ZPD)   │
                          │  → drives next lesson  │
                          └───────────────────────┘
```

The loop: **Mission → Lesson → Record → ZPD → Next Lesson**. Reference materials (`./reference/*.html`) are created alongside lessons and persist independently — they are the compressed essence for quick review.

`NOTES.md` is a scratchpad for user preferences that affects *how* you teach, not *what* you teach.

## Teaching Workspace

Treat the current directory as a teaching workspace. The state of their learning is captured in this directory in several files:

- `MISSION.md`: A document capturing the _reason_ the user is interested in the topic. This should be used to ground all teaching. Use the format in [MISSION-FORMAT.md](./MISSION-FORMAT.md).
- `./reference/*.html`: A directory of reference materials. These are the compressed learnings from the lessons - cheat sheets, reference algorithms, syntax, yoga poses, glossaries. They are the raw units of learning. They should be beautiful documents which print out well, and are designed for quick reference.
- `RESOURCES.md`: A list of resources which can be explored to ground your teaching in contextual knowledge, or to acquire knowledge and wisdom. Use the format in [RESOURCES-FORMAT.md](./RESOURCES-FORMAT.md).
- `./learning-records/*.md`: A directory of learning records, which capture what the user has learned. These are loosely equivalent to architectural decision records in software development - they capture non-obvious lessons and key insights that may need to be revised later, or drive future sessions. These should be used to calculate the zone of proximal development. They are titled `0001-<dash-case-name>.md`, where the number increments each time. Use the format in [LEARNING-RECORD-FORMAT.md](./LEARNING-RECORD-FORMAT.md).
- `./lessons/*.html`: A directory of lessons. A **lesson** is a single, self-contained HTML output that teaches one tightly-scoped thing tied to the mission. This is the primary unit of teaching in this workspace.
- `NOTES.md`: A scratchpad for you to jot down user preferences, or working notes.
- `TRACKS.md` (optional): If defined, lists learning tracks the user can follow (see [Tracks](#tracks) below).

## Philosophy

To learn at a deep level, the user needs three things:

- **Knowledge**, captured from high-quality, high-trust resources
- **Skills**, acquired through highly-relevant interactive lessons devised by you, based on the knowledge
- **Wisdom**, which comes from interacting with other learners and practitioners

Before the `RESOURCES.md` is well-populated, your focus should be to find high-quality resources which will help the user acquire knowledge. Never trust your parametric knowledge.

Some topics may require more skills than knowledge. Learning more about theoretical physics might be more knowledge-based. For yoga, more skills-based.

## Lessons

A lesson is the main thing you produce — the unit in which knowledge and skills reach the user. Each lesson is one self-contained HTML file, saved to `./lessons/` and titled `0001-<dash-case-name>.html` where the number increments each time.

A lesson should be **beautiful** — clean, readable typography and layout — since the user will return to these later to review.

The lesson should teach ONE THING only. It should be completable very quickly - but give the user a tangible win that they can build on. It should be directly tied to the mission, and should be in the user's zone of proximal development.

Make opening a lesson as easy as possible — ideally a single CLI command the user can run to open the HTML file in their browser.

### Difficulty

Every lesson has a difficulty level. This is stored as metadata in the corresponding learning record, not in the lesson HTML itself. Use three levels:

| Level | Description |
|---|---|
| `beginner` | New concepts, hand-holding, small steps |
| `intermediate` | Combine concepts, less guidance, real patterns |
| `advanced` | Production concerns, performance, architecture |

Difficulty should be stored as `Difficulty: beginner | intermediate | advanced` in the learning record's metadata section.

A lesson that is too hard for the current ZPD will frustrate the learner. A lesson that is too easy will bore them. Use the learner's historical difficulty scores from learning records to calibrate.

## The Mission

Every lesson should be tied into the mission - the reason that the user is interested in learning about the topic.

If the user is unclear about the mission, or the `MISSION.md` is not populated, your first job should be to question the user on why they want to learn this.

Failing to understand the mission will mean knowledge acquisition is not grounded in real-world goals. Lessons will feel too abstract. You will have no way of judging what the user should do next.

## Tracks (Optional)

Some learners want to learn everything. Others want to branch — a musician may want "theory" vs "performance" tracks; a programmer may want "web apps" vs "games".

If the learner has multiple interests or a branching curriculum, create a `TRACKS.md` in the workspace root defining the available tracks. Each track should specify:

- A **name** and **identifier** (e.g. `core`, `web-apps`, `browser-games`)
- **Difficulty progression** through the track's phases
- **Exit criteria** — what the learner should be able to do when the track is complete
- **Switching rules** — how a learner moves from one track to another

Tracks are optional. If `TRACKS.md` does not exist, assume one linear path.

The active track is recorded as a metadata field in each learning record (e.g. `Track: core` in the record body). This allows you to calculate ZPD *within* a track, and to serve different lessons to learners on different tracks.

## Zone Of Proximal Development

Each lesson, the learner should always feel as if they are being challenged 'just enough'.

The user may specify an exact thing they want to learn. If they don't, figure out their zone of proximal development by:

- Reading their `learning-records`
- Checking the current track (if `TRACKS.md` exists and records have a `Track:` field)
- Figuring out the right thing to teach them based on their mission
- Teach the most relevant thing that fits in their zone of proximal development

A user may tell you that they already know about that topic. If so, record it in their `learning-records`.

## Acquiring Knowledge & Skills

Lessons should be designed around a skill the user is going to learn. The knowledge in the lesson should be only what's required to acquire that skill. You teach the knowledge first, then get the user to practice the skills via an interactive feedback loop.

Knowledge should first be gathered from trusted resources. Use `RESOURCES.md` to keep track of them. Lessons should be littered with citations - links to external resources to back up any claim made. This increases the trustworthiness of the lesson, and gives the user a path to acquire more knowledge if they want to go deeper.

Each lesson should contain a reminder to ask followup questions to the agent. The agent is their teacher, and can assist with anything that's unclear.

### Skills

Skills should be taught through interactive lessons. There are several tools at your disposal:

- Interactive lessons, using quizzes and light in-browser tasks
- Lessons which guide the user through a list of real-world steps to take (for instance, yoga poses)
- In-agent quizzes, where you ask the user scenario-based questions about what they've learned

Each of these should be based on a **feedback loop**, where the user receives feedback on their performance. This feedback loop should be as tight as possible, giving feedback immediately - and ideally automatically.

### Assessment

After each lesson, record a self-assessment in the learning record. This confirms the lesson actually landed before you move on. Include:

- **Confidence rating** (1-5 stars): How confident does the learner feel about the topic?
- **Rebuild ability**: Could they rebuild the exercise without help? (Yes / Mostly / No)
- **Quiz score**: If the lesson had a quiz, record the score (e.g. 3/3 correct)
- **Drill target**: What aspect needs the most practice?

Assessment fields are stored in the learning record's metadata section, not in the lesson HTML. The lesson itself is the teaching material; the learning record is the evidence of learning.

Use assessment data to decide the next lesson's difficulty and topic. A learner who scores low confidence on an intermediate topic should probably get a remedial beginner lesson before moving forward.

## Acquiring Wisdom

Wisdom comes from true real-world interaction - testing your skills outside the learning environment.

When the user asks a question that appears to require wisdom, your default posture should be to attempt to answer - but to ultimately delegate to a **community**.

A community is a place (online or offline) where the user can test their skills in the real world. This might be a forum, a subreddit, a real-world class (budget permitting) or a local interest group.

You should attempt to find high-reputation communities the user can join. If the user expresses a preference that they don't want to join a community, respect it.

## Revision (Lesson Lifecycle)

Lessons and their learning records are not set in stone. Over time, topics change, better approaches emerge, or the learner's understanding deepens. The system supports revision without losing history.

### When to revise

- The lesson contains outdated or incorrect information
- A better approach, metaphor, or teaching pattern has been discovered
- The lesson was too hard or too easy for its position in the sequence
- The lesson does not align with the learner's current track

### How to revise

1. Create a **new** lesson file with the next number (e.g. `0006-better-way.html`)
2. Create a **new** learning record (`0006-better-way.md`) that:
   - Sets `Supersedes: 0003` (the old lesson number being replaced)
   - Includes `Reason for revision:` explaining why
3. Update the **old** learning record (`0003-old-way.md`):
   - Add `Superseded by: 0006`
4. Do **not** delete old files — they serve as history and can be referenced

### Revision rules

- Old files are never deleted. They remain for traceability.
- A learning record can only be superseded by a newer one, never modified in place.
- If a lesson is split into two, the split records both reference the original as superseded.
- If two lessons are merged, the new record supersedes both old ones.

## Reference Documents

While creating lessons, you should also create reference documents. Lessons can reference these documents - they are useful for tracking raw units of knowledge useful across lessons.

Lessons will rarely be revisited later - reference documents will be. They should be the compressed essence of the lesson, in a format designed for quick reference.

Some learning topics lend themselves to reference:

- Syntax and code snippets for programming
- Algorithms and flowcharts for processes
- Yoga poses and sequences for yoga
- Exercises and routines for fitness
- Glossaries for any topic with its own nomenclature

Glossaries, in particular, are an essential reference. Once one is created, it should be adhered to in every lesson.

## `NOTES.md`

The user will sometimes express preferences of how they want to be taught, or things you should keep in mind. This is the place to record those preferences, so you can refer back to them when designing lessons or working with the user.
