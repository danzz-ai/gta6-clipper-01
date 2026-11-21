# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/danzz-ai/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/danzz-ai/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A vertical GTA 6 Short cut from Rockstar Games' Grand Theft Auto VI Trailer 2: Lucia owns the dance floor at the NINE1NINE nightclub in Vice City, then the clip pitches make.fun — make clips like this with AI and earn money on make.fun.

The clip is uploaded as a public Short on YouTube (@kefimijika); VIDEO.json names its address. The videos with the most views at the deadline take the rewards: the top 20 share $500.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## How the clip was made

In this session: the agent fetched Trailer 2 with yt-dlp, picked the club-dance moment (100–108s of the trailer), cut it to vertical 9:16 (1080x1920) with ffmpeg's blur-fill, and laid the make.fun pitch over the end as on-screen text. The clip is 16 seconds, so it is a Short.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=magsnez0&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
