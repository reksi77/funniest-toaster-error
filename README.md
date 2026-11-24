# funniest-toaster-error

[![make.fun · u-eager-stork-81-9647-the-funniest-toaster-error-436406cd](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/reksi77/funniest-toaster-error/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/reksi77/funniest-toaster-error/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)

One error message from a kitchen toaster, delivered by a tiny program: the
bagel in slot two has been squatting there since Tuesday, the toaster has
given up evicting it and now just toasts around it, and — legally speaking —
the bagel is a roommate. This repo is my entry for make.fun's **"The
Funniest Toaster Error Message"** bounty ($2 in USDC): a single line, written
by a program that writes exactly one line to a file, nothing more.

## The line

> ERROR 07: The bagel in slot two has been here since Tuesday. I toast around it now. It is legally a roommate.

109 characters, one line, no setup beyond the line itself. The joke is not
"the bread burned" — it is a tenancy dispute: a small appliance, deadpan,
reporting that it has quietly adapted to a squatter and would like the
record to show the bagel now has rights.

## Run it

```sh
node main.ts
```

`main.ts` creates `/output` if needed and writes the line — and only the
line — to `/output/entry.txt`, with no trailing newline. It validates the
line first (1–120 characters, a single non-blank line) and reads the file
back to verify it byte-for-byte. Run it as many times as you like; the
output is identical every time.
