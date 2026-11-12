# Editing the website

Live site: https://souvik-mandal-harvard.github.io/harvard-unconf-2027/

Every word on the site lives in seven plain-text files in [`src/content/`](src/content/). You change the text in a file, save it to GitHub, and the site updates itself about a minute later. No coding is involved.

This guide has four parts:

1. [Where each piece of text lives](#1-where-each-piece-of-text-lives)
2. [How to make an edit](#2-how-to-make-an-edit)
3. [Rules that keep a file valid](#3-rules-that-keep-a-file-valid)
4. [Common tasks](#4-common-tasks)

You need to be invited to this repository before you can open or edit the files.

---

## 1. Where each piece of text lives

The tables follow the page from top to bottom. "Field" is the word at the start of the line you edit, before the colon.

### Top ribbon

| On the page | File | Field |
| --- | --- | --- |
| Site name, next to the three-dot logo | [`event.yaml`](src/content/event.yaml) | `title` |
| "Organizing Committee" link | [`committee.yaml`](src/content/committee.yaml) | `heading` |
| Button on the right (wide screens only) | [`event.yaml`](src/content/event.yaml) | `interestForm` |
| Idea, Cycle, Format, Schedule, Outcomes links | Not in a content file. See [What is not in these files](#what-is-not-in-these-files). | |

### Opening section

| On the page | File | Field |
| --- | --- | --- |
| Large title, "It's a *Complex* World" | [`event.yaml`](src/content/event.yaml) | `title` |
| Line under the title, "A Harvard Unconference on…" | [`event.yaml`](src/content/event.yaml) | `subtitle` |
| Short paragraph, "Two days, opened by…" | [`event.yaml`](src/content/event.yaml) | `intro` |
| Main button, "Get updates" or "Interest form opening soon" | [`event.yaml`](src/content/event.yaml) | `interestForm` |
| When, Where, Who | [`event.yaml`](src/content/event.yaml) | `facts` |
| "Confirmed partnering institutes" and the list | [`event.yaml`](src/content/event.yaml) | `partners` |
| Labels in the circles: Neuro, Math, AI | [`idea.yaml`](src/content/idea.yaml) | `pillars` → `short` |
| Caption under the diagram before an arrow is picked | [`cycle.yaml`](src/content/cycle.yaml) | `lede` |
| Caption shown when an arrow is picked | [`cycle.yaml`](src/content/cycle.yaml) | `arrows` → `headline` |

### The idea

| On the page | File | Field |
| --- | --- | --- |
| Small label, "The idea" | [`idea.yaml`](src/content/idea.yaml) | `eyebrow` |
| Large italic question | [`idea.yaml`](src/content/idea.yaml) | `question` |
| Section heading read aloud by screen readers (not shown) | [`idea.yaml`](src/content/idea.yaml) | `heading` |
| Paragraph beside the question | [`idea.yaml`](src/content/idea.yaml) | `text` |
| Three cards: Neuroscience, Applied Mathematics, Artificial Intelligence | [`idea.yaml`](src/content/idea.yaml) | `pillars` → `name`, `tagline`, `topics` |
| "What we are here to do" | [`idea.yaml`](src/content/idea.yaml) | `goalsHeading` |
| Connect, Define, Build | [`idea.yaml`](src/content/idea.yaml) | `goals` |

### A cycle of influence

| On the page | File | Field |
| --- | --- | --- |
| Label, heading and line under it | [`cycle.yaml`](src/content/cycle.yaml) | `eyebrow`, `heading`, `lede` |
| The six entries, such as "AI tools feed neuroscience" | [`cycle.yaml`](src/content/cycle.yaml) | `arrows` → `headline`, `text` |
| Card titles and tags, such as "AI ⇄ Neuro" and "AI → Neuro" | Built automatically from each arrow's `from` and `to`, and the short names in [`idea.yaml`](src/content/idea.yaml) | |

### Format ("You set the agenda")

| On the page | File | Field |
| --- | --- | --- |
| Label, heading and paragraph under it | [`format.yaml`](src/content/format.yaml) | `eyebrow`, `heading`, `lede` |
| Open space, The law of two feet, Conveners and note-takers | [`format.yaml`](src/content/format.yaml) | `principles` |
| Activities A to E: name, tag, summary and list | [`format.yaml`](src/content/format.yaml) | `clusters` → `letter`, `name`, `mode`, `detail`, `summary`, `pointsTitle`, `points` |
| "How a sprint group is organized", under activity B | [`format.yaml`](src/content/format.yaml) | `clusters` → `organization` → `title`, `intro`, `roles`, `closing` |
| Words inside the island diagram | [`format.yaml`](src/content/format.yaml) | `clusters` → `organization` → `diagram` |

### Schedule

| On the page | File | Field |
| --- | --- | --- |
| Label, heading and line under it | [`schedule.yaml`](src/content/schedule.yaml) | `eyebrow`, `heading`, `lede` |
| The three cards: the evening before, Day 1, Day 2 | [`schedule.yaml`](src/content/schedule.yaml) | `blocks` → `when`, `title`, `items` |

### Who it is for

| On the page | File | Field |
| --- | --- | --- |
| Label, heading and paragraph | [`outcomes.yaml`](src/content/outcomes.yaml) | `audience` → `eyebrow`, `heading`, `text` |
| "Registration will ask for" and its list | [`outcomes.yaml`](src/content/outcomes.yaml) | `audience` → `registrationHeading`, `registration` |
| Three colored bars: Neuro, Math, AI | [`idea.yaml`](src/content/idea.yaml) | `pillars` → `short` |

### Outcomes ("What we leave with")

| On the page | File | Field |
| --- | --- | --- |
| Label, heading and line under it | [`outcomes.yaml`](src/content/outcomes.yaml) | `deliverables` → `eyebrow`, `heading`, `lede` |
| The numbered outcomes | [`outcomes.yaml`](src/content/outcomes.yaml) | `deliverables` → `items` |

### Organizing Committee

| On the page | File | Field |
| --- | --- | --- |
| Label and heading | [`committee.yaml`](src/content/committee.yaml) | `eyebrow`, `heading` |
| Each person: name, school, link, photo | [`committee.yaml`](src/content/committee.yaml) | `members` → `name`, `affiliation`, `url`, `photo` |
| The photo files themselves | [`src/assets/people/`](src/assets/people/) | |
| Last dashed card, "You?" | [`committee.yaml`](src/content/committee.yaml) | `note` |

### Closing box and footer

| On the page | File | Field |
| --- | --- | --- |
| Heading and paragraph in the closing box | [`event.yaml`](src/content/event.yaml) | `callToAction` |
| Button in the closing box | [`event.yaml`](src/content/event.yaml) | `interestForm` |
| Small print at the very bottom | [`event.yaml`](src/content/event.yaml) | `status` |
| Browser tab title and the description search engines show | [`event.yaml`](src/content/event.yaml) | `title`, `subtitle`, `intro` |

### What is not in these files

These need a change to the page's code. Ask the site maintainer.

- The Idea, Cycle, Format, Schedule and Outcomes links in the top ribbon, and the "See how it works" link ([`src/pages/index.astro`](src/pages/index.astro))
- Colors, fonts, spacing and layout ([`src/styles/global.css`](src/styles/global.css))
- The order of the sections, or adding a new section
- The shape of the two diagrams

---

## 2. How to make an edit

### In the browser, on GitHub

1. Open the file from the tables above.
2. Click the pencil icon at the top right of the file.
3. Change the text.
4. Click **Commit changes**, write a few words saying what you changed, and confirm.

### On your computer, with GitHub Desktop

1. Click **Fetch origin**, then **Pull origin** if it appears, so you start from the latest version.
2. Open the file in a text editor, change the text, and save.
3. In GitHub Desktop, check the highlighted change, write a short summary, and click **Commit to main**.
4. Click **Push origin**.

### After you save

The site rebuilds and publishes itself in about a minute. To watch it, open the repository's **Actions** tab.

- A green tick means your change is live.
- A red cross means the file's structure was broken and nothing was published. The live site is unchanged. Open the failed run to see which file and field is wrong, fix it, and save again.

---

## 3. Rules that keep a file valid

The files are in a format called YAML. It is strict about layout.

- **Change only the text after the colon.** The word before the colon is the field name the site looks for.
- **Keep the indentation exactly as it is.** The spaces at the start of a line say what belongs to what. Use spaces, never tabs.
- **Use double quotes around text that contains a colon or a `#`,** or that starts with a symbol such as `*`, `[`, `&` or `@`. For example: `- "Idea board: post session proposals and dot-vote"`.
- **Long paragraphs start with `>`** and continue on the indented lines below it. Where you break the lines does not matter; they are joined into one paragraph.
- **A line starting with `-` is one item in a list.** To add an item, copy a neighboring line, keeping its indentation, and change the text.
- **Lines starting with `#` are notes for editors.** They never appear on the site.
- **Do not change `neuro`, `math` or `ai`** where they appear as `id`, `from` or `to`. The colors and the diagram depend on them.
- **In the title, words between asterisks are shown in italics:** `"It’s a *Complex* World"`.

---

## 4. Common tasks

### Set the dates or the venue

In [`event.yaml`](src/content/event.yaml), under `facts`, change `value` and `note`:

```yaml
  - label: When
    value: "April 2027"
    note: Exact dates to be announced
```

### Switch on the interest form button

In [`event.yaml`](src/content/event.yaml), paste the form's link between the quotes:

```yaml
interestForm:
  url: "https://forms.example.com/your-form"
```

While `url` is empty, the site shows the `pendingLabel` text and no button.

### Add a partnering institute

In [`event.yaml`](src/content/event.yaml), under `partners` → `items`, add two lines. The `url` line is optional.

```yaml
    - name: Name of the institute
      url: https://example.harvard.edu/
```

### Add a committee member

1. Add their photo to [`src/assets/people/`](src/assets/people/). On GitHub: open that folder, then **Add file → Upload files**. A head-and-shoulders portrait works best. Any size is fine; the site crops it to a circle from the top and shrinks it.
2. In [`committee.yaml`](src/content/committee.yaml), under `members`, add four lines. `url` and `photo` are optional.

```yaml
  - name: First Last
    affiliation: SEAS
    url: https://example.harvard.edu/person
    photo: ../assets/people/first-last.jpg
```

The file name after `../assets/people/` must match the uploaded file exactly, including capital letters and the ending.

### Add or change a schedule item

In [`schedule.yaml`](src/content/schedule.yaml), each line under `items` is one entry. Add, remove or reorder lines freely.

```yaml
  - when: Day 1
    title: Map & share
    items:
      - Opening circle
      - Your new item here
```

### Add a point to an activity

In [`format.yaml`](src/content/format.yaml), find the activity by its `letter` and add to its `points`. A point can have a `label`, or be text only.

```yaml
      - label: Speed-matching
        text: Five-minute cross-pillar pairings.
```
