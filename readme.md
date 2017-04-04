
# Layout component example

Originally based on <https://github.com/zeit/next.js/tree/d5369c01a80e1fe072dd7b4fb137b7812fbf09ec/examples/layout-component>.

## Differences from original

* Added nprogress page loading indicator
* Added active class to current item in the navigation
* Used markdown for frontpage content
* Depend on glob as a temporary fix for [#1618](https://github.com/zeit/next.js/issues/1618)
* Custom error page

## How to use

Clone the repo <https://github.com/millette/nd1>:

```bash
git clone https://github.com/millette/nd1.git
cd nd1
```

Install it and run:

```bash
npm install
npm run dev
```

Or with yarn:

```bash
yarn
yarn dev
```

Deploy it to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download))

```bash
now
```

## The idea behind the example

This example shows a very common use case when building websites
where you need to repeat some sort of layout for all your pages.
Our pages are: `home`, `about` and `contact` and they all share
the same `<head>` settings, the `<nav>` and the `<footer>`.
Further more, the title (and potentially other head elements)
can be sent as a prop to the layout component so that
it's customizable in all pages.
