---
title: Contributing Guide
description: How to write, submit, and get articles approved on Wits MedWiki
---

# Contributing to Wits MedWiki

Thank you for contributing to Wits MedWiki. This guide explains how to write articles correctly, what format to use, and how the review process works.

---

## The Review Workflow

```
You write article (Markdown file)
        ↓
Submit via GitHub Pull Request
        ↓
Assigned reviewer (senior/consultant)
        ↓
Approved → merged → live on site
```

All articles must be reviewed and approved by a senior clinician or consultant before they appear on the site.

---

## Diataxis — Choose the Right Article Type

Every article **must** be one of four types. Choosing the wrong type is the most common mistake. Ask yourself: *what does the reader need right now?*

| Type | Reader's need | Filename prefix | Example |
|---|---|---|---|
| 🎓 **Tutorial** | To learn | `tutorial-` | Tutorial: Approach to the breathless patient |
| 🔧 **How-To** | To do a specific task | `howto-` | How to insert a chest drain |
| 📖 **Reference** | To look something up | `ref-` | Wits DKA Protocol |
| 💡 **Explanation** | To understand | `explanation-` | Understanding heart failure pathophysiology |

!!! tip "Diataxis quick test"
    - *"A medical student needs to learn this for the first time"* → **Tutorial**
    - *"An intern needs to perform this procedure right now"* → **How-To**
    - *"A doctor needs the Wits dose/protocol quickly"* → **Reference**
    - *"A student wants to understand why something happens"* → **Explanation**

---

## File Naming Convention

```
docs/{department}/{type}-{short-descriptive-name}.md
```

Examples:
```
docs/internal-medicine/tutorial-breathless-patient.md
docs/internal-medicine/ref-dka-protocol.md
docs/surgery/howto-surgical-scrub.md
docs/paediatrics/explanation-febrile-child.md
```

**Rules:**
- Lowercase only
- Hyphens instead of spaces
- Always start with the type prefix (`tutorial-`, `howto-`, `ref-`, `explanation-`)

---

## Article Frontmatter (Required)

Every article must start with this YAML block:

```yaml
---
title: "Full Article Title"
description: "One sentence summary shown in search results"
author: Dr A. Mokoena
editor: Dr S. Pillay
date: 2025-11-14
version: 2
status: approved
tags:
  - Respiratory
  - Cardiovascular
  - Evidence-Based
---
```

| Field | Required | Notes |
|---|---|---|
| `title` | ✅ | Full title as it appears on the page |
| `description` | ✅ | One sentence, shown in search |
| `author` | ✅ | Original content creator |
| `editor` | ✅ | Reviewer/approver for this version |
| `date` | ✅ | Date of this version (YYYY-MM-DD) |
| `version` | ✅ | Increment for each approved change |
| `status` | ✅ | `draft`, `review`, or `approved` |
| `tags` | Recommended | See tag list in `mkdocs.yml` |

---

## Templates

Copy the appropriate template below for your article type.

### 🎓 Tutorial Template

```markdown
---
title: "Tutorial: [Topic Name]"
description: ""
author: 
editor: 
date: YYYY-MM-DD
version: 1
status: draft
tags: []
---

## Learning Objectives

- Objective 1
- Objective 2
- Objective 3

## Prerequisites

What the reader should already know before starting this tutorial.

## Background

Brief contextual introduction.

## Step 1 — [First Step]

Detailed explanation.

## Step 2 — [Second Step]

Detailed explanation.

## Step 3 — [Third Step]

Detailed explanation.

## Summary

Key takeaways.

## Test Yourself

- Question 1?
- Question 2?

## References

1. Author et al. *Title*. Journal/Book, Year. [Link](https://url)
```

---

### 🔧 How-To Guide Template

```markdown
---
title: "How to [Task Name]"
description: ""
author: 
editor: 
date: YYYY-MM-DD
version: 1
status: draft
tags: []
---

## Overview

What this guide helps you accomplish.

## Indications

When to perform this.

## Contraindications

When NOT to perform this.

## Equipment

- Item 1
- Item 2

## Steps

1. First step
2. Second step
3. Third step

## Aftercare

What to do after.

## Complications

| Complication | Management |
|---|---|
| Complication 1 | Action 1 |

## Tips & Pitfalls

- Tip 1
- Common mistake to avoid

## References

1. Reference 1
```

---

### 📖 Reference Template

```markdown
---
title: "Wits Protocol: [Name]"
description: ""
author: 
editor: 
date: YYYY-MM-DD
version: 1
status: draft
tags:
  - Wits-Protocol
---

!!! wits-protocol "Wits-Specific Protocol"
    This protocol reflects current practice at Wits-affiliated hospitals.
    Confirm with your department before use.

## Overview / Definition

## Classification

| Type | Description |
|---|---|

## Key Values / Thresholds

| Parameter | Value | Notes |
|---|---|---|

## Wits Protocol

Step-by-step institutional guidance.

## Monitoring

## Red Flags

- ⚠️ Red flag 1

## References

1. Reference 1
```

---

### 💡 Explanation Template

```markdown
---
title: "Understanding [Concept]"
description: ""
author: 
editor: 
date: YYYY-MM-DD
version: 1
status: draft
tags: []
---

## What Is It?

Plain-language explanation.

## Why Does It Matter Clinically?

## Pathophysiology / Mechanism

## Analogy or Mental Model

## Common Misconceptions

- **Misconception** — Correction

## Connections to Other Concepts

## Key Points

- Point 1
- Point 2

## References

1. Reference 1
```

---

## Submitting Your Article

1. **Fork** the repository on GitHub
2. Create a new branch: `git checkout -b add/internal-med-dka-tutorial`
3. Add your `.md` file in the correct folder
4. Add your article to the `nav:` section in `mkdocs.yml`
5. Open a **Pull Request** with a short description
6. A reviewer will be assigned automatically
7. Address any feedback, then it gets merged

---

## Style Guide

- Write in plain, clear English — your reader may be stressed and time-pressured
- Use **bold** for key terms on first use
- Use tables for comparisons and drug doses
- Use admonitions for warnings: `!!! warning "Title"`
- Keep sentences short
- Avoid jargon unless defined
- Use South African drug names and Wits-specific doses where they differ from international guidelines

!!! warning "Clinical accuracy"
    You are responsible for the accuracy of what you submit. Inaccurate clinical information can cause patient harm. If unsure, mark as `status: draft` and flag for expert review.
