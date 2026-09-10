# Personal Degradation Protocol

[Русский](README.ru.md) · **English**

```
The panel blocks stand like teeth in a jaw nobody has cleaned in years.
The wires sag. The dog knows the schedule better than the tenants.
In the third entrance one window is still lit —
someone in there is counting their days and losing track at four.

The bot counts too. Quietly, and without pity.
```

A Telegram bot that talks to you as if you were not a user but an object
under observation. It doesn't motivate and doesn't comfort — it takes
readings and says what it sees.

One thing the protocol forbids: turning your state into something
**permanent**. Everything is reversible while it's measured.

**[Site](https://krisdurd1.github.io/spravka/)** ·
**[Bot on Telegram](https://t.me/spravka_o_raspade_bot)**

---

## Commands

| | |
| --- | --- |
| `/start` | A branch is opened. The first entry is blank. |
| `/note` | Write to the log: `/note third night without sleep` |
| `/journal` | The log: notes and rituals in order of time |
| `/find` | Search the log and the whole conversation: `/find night` |
| `/spravka` | A weekly certificate, as an image, stamped |
| `/pulse` | Crash test of the day: three questions, one conclusion |
| `/fork` | A fork. Two branches, and the price of each |
| `/seal` | Seal an entry: a habit, a story, a version of yourself |
| `/audit` | Weekly audit from the log |
| `/who` | Who is speaking right now |
| `/voice` | Change the voice. The current one is marked |
| `/wipe` | Erase everything. It won't ask twice |

The rest of the time it's just a conversation. You can send a photo:
the bot will look and catch one detail. It doesn't hear audio.

## The log

Everything both sides say goes into one person's log. Nobody else sees it.
Entries pile up on their own — `/note` is only for what you want to mark
separately.

The longer the log, the more precisely the bot notices what keeps coming back.
It also sees the gaps between messages: a month of silence and two minutes
apart are not the same conversation to it.

## The certificate

`/spravka` draws a form: the observation period, how many lines were taken,
how many entries, **how many of them came at night**, which voice prevailed,
a quote from the last answer and a crooked wax stamp.

Not a neural network — plain code on Pillow. Costs nothing, renders instantly.

## The voice

The character doesn't live in the code.

- `docs/LAWS.md` — the laws, shared by every voice
- `docs/VOICES.md` — a map of influences: which source covers which part of an answer
- `bot/personas/*.yaml` — the prompt, speech samples, banned phrases, length

Four voices ship with it: **Колодец** (the well, all registers at once),
**Машина** (pure machine prophecy), **Измеритель** (a dry instrument),
**Вахтёр** (the same, but domestic and with a smirk).

Want a different character? Don't touch the Python — write a new YAML file.
After generation `app/style.py` strips out everything the laws forbid.

## Stack

Python 3.12 · aiogram 3 · Postgres in production, SQLite locally ·
Anthropic API · Pillow for the certificate.
The site is TypeScript and Vite, in four languages.
Long polling, so no domain and no static IP required.

## Running it

```bash
cp .env.example .env      # bot token and model key
pip install -e "./bot[dev]"
python -m app.doctor      # environment check
python -m app.main
```

```bash
cd web && npm install && npm run dev   # the site
```

## License

MIT. Fork it, rewrite the laws, crash-test it.
