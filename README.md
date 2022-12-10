# Kawarimi

[![CI](https://github.com/ubermanu/kawarimi/actions/workflows/ci.yml/badge.svg)](https://github.com/ubermanu/kawarimi/actions/workflows/ci.yml)

Small function that removes an element but keeps the focus at the correct position.

When the element is removed, the focus is moved to the decoy.\
Once the decoy loses focus, the decoy is removed.

## Install

```bash
npm install kawarimi
```

## Usage

```js
import kawarimiNoJutsu from 'kawarimi'

const target = document.querySelector('#alert-message')
kawarimiNoJutsu(target)
```

You can also indicate that the element has been removed:

```js
const target = document.querySelector('#alert-message')
const decoy = kawarimiNoJutsu(target)

decoy.setAttribute('aria-live', 'polite')
decoy.textContent = 'Kawarimi no jutsu!'
```
