---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

# Landing page (index.html)

## Scope & mode
The entire site: one long single-page landing surface. Visitor mode: **Persuade** — design is the product; the visitor decides and acts.

## Audience & job
A person choosing a photographer for a specific occasion (wedding, portrait session, or event), usually browsing on a phone at night and comparing three to five options. They judge on feeling — the photography — first, then on logistics (available, covers the region, process, rough price range). Job: build enough confidence in this specific eye to reach out.

## Primary action
Open WhatsApp (click-to-chat, message pre-filled per section). Secondary: the inquiry form (nome, e-mail, WhatsApp, tipo, data, mensagem), which falls back to WhatsApp when no form-service key is configured. The WhatsApp/contact action is the only thing on the page allowed to carry the acid accent — it must never lose that exclusivity.

## Proof & content
The photography itself, shown large and full-bleed across three features (Casamentos, Ensaios, Eventos). Supporting: client quotes, a short photographer essay, a four-step process, an FAQ. No pricing. All names, contacts, testimonials, and the `[X]`/`[N]` markers are placeholders; imagery is labelled free-license Unsplash stock — every one is on the replacement list in the PENDENTES comment.

## Chosen direction & memorable moment
"The Photo Essay" — the portfolio as a printed photography journal (seed key c70797d0). Memorable moment: the first viewport — a full-bleed wedding photograph with a solid plate-blue caption block lower-left holding the masthead, the word "Casamentos" in expanded grotesque, one italic line, folio 01, and the acid WhatsApp button; a numbered index down the left margin.

## Section sequence (a deliberate conversion choice)
Casamentos → Ensaios → Eventos → **Depoimentos** → O Estúdio → Como Funciona → Perguntas → Contato. Testimonials sit immediately after the portfolio — while the work is fresh — rather than after the About/Process blocks. This ordering is specific to this Persuade surface; it is not a house rule.

## Unresolved decisions (hand to the client)
- Copy language assumed Brazilian Portuguese — confirm.
- Form submission mechanism: a Web3Forms access key must be pasted into the `<form data-access-key>` attribute, or the form stays on its WhatsApp fallback.
- Real name, logo, palette source, phone, e-mail, Instagram URL, testimonials, delivery-time claims, and the photographer bio numbers all need real values before launch.
