# It’s a Complex World: website

The landing page for the unconference. It is a static site built with [Astro](https://astro.build).

## Editing the text

**Contributors: start with [EDITING.md](EDITING.md).** It maps every piece of text on the page to the file and field that holds it, and walks through common edits.

All wording on the page lives in seven files in `src/content/`. You do not need to touch any code.

| File | What it controls |
| --- | --- |
| `event.yaml` | Title, subtitle, dates, venue, partnering institutes, the main button, footer note |
| `idea.yaml` | The shared question, the three pillars, the goals |
| `cycle.yaml` | The six arrows of the cycle of influence |
| `format.yaml` | How the unconference works and the activity clusters |
| `schedule.yaml` | The evening hangout and the two days |
| `outcomes.yaml` | Who it is for, and what comes out of it |
| `committee.yaml` | The organizing committee, and its link in the top ribbon |

Each file starts with a short comment explaining its fields. Change the text after a colon and keep the indentation as it is.

To switch on the main button, paste the interest form link into `interestForm.url` in `event.yaml`. While that field is empty, the page shows "Interest form opening soon" instead of a button.

If an edit breaks a file's structure, the build stops and names the file and field, so a broken edit does not reach the published site.

## Publishing

The site is published with GitHub Pages. Every change that lands on the `main` branch is built and published automatically, usually within two minutes. Progress shows in the repository's **Actions** tab, where a red cross means the change was not published and the live site is unchanged.

To edit a file on GitHub: open it, click the pencil icon, make the change, and choose **Commit changes**.

## Running it locally

```bash
npm install
```

```bash
npm run dev
```

The site is then at http://localhost:4321. `npm run build` writes the finished site to `dist/`.

## Where things are

- `src/pages/index.astro`: the page layout
- `src/components/`: the cycle diagram, theme switch, and main button
- `src/styles/global.css`: colors (light and dark), fonts, and layout
- `src/content.config.ts`: the expected shape of each content file

## Light and dark mode

The page follows the visitor's device setting. The switch in the header lets a visitor choose light or dark instead, and the choice is remembered in their browser. Every color is defined once in `src/styles/global.css` as a light and dark pair.
