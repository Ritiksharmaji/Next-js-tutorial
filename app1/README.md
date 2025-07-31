## ------ Next JS tutorial in Hindi #22 CSS Modules with Next.js 13.4 ------
1) ![alt text](image.png)
2) 
In **Next.js**, you can use two main types of CSS:

---

### 🔹 1. **Normal CSS (Global CSS)**

### 🔹 2. **CSS Modules (Scoped CSS)**

Let’s understand both in depth:

---

## ✅ 1. **Normal CSS (Global CSS)**

### 📌 What is it?

Global CSS is applied **to the entire application**. Styles are not scoped to specific components—just like traditional CSS.

### 📁 Where do you put it?

Usually in `styles/globals.css`, but you can have multiple global files.

### 📥 How to use it?

**a. Create a file:**

```bash
/styles/globals.css
```

**b. Add styles:**

```css
/* styles/globals.css */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

h1 {
  color: red;
}
```

**c. Import it in `_app.js`:**

```js
// pages/_app.js
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

### ⚠️ Key Points:

* All components share the same styles.
* Risk of **style conflicts** (e.g., multiple `h1` styles).
* Great for utility, reset styles, fonts, etc.

---

## ✅ 2. **CSS Modules (Scoped CSS)**

### 📌 What is it?

CSS Modules allow you to write styles that are **scoped to a single component**. This prevents class name conflicts.

### 🧠 How it works?

Next.js automatically scopes the class names using **unique hashes**.

### 📥 How to use it?

**a. Create a file with `.module.css`:**

```bash
/components/Button.module.css
```

**b. Add styles:**

```css
/* Button.module.css */
.button {
  background-color: blue;
  color: white;
  padding: 10px;
  border-radius: 5px;
}
```

**c. Use it in the component:**

```js
// components/Button.jsx
import styles from './Button.module.css';

function Button() {
  return <button className={styles.button}>Click Me</button>;
}

export default Button;
```

### ✅ Result:

The class name in the browser becomes something like:

```html
<button class="Button_button__cS5GH">Click Me</button>
```

So styles are **component-specific** and **safe** from conflict.

---

## 🔍 Side-by-side Comparison

| Feature          | Global CSS              | CSS Modules                |
| ---------------- | ----------------------- | -------------------------- |
| File extension   | `.css`                  | `.module.css`              |
| Scope            | Global (entire app)     | Local (specific component) |
| Risk of conflict | High                    | None                       |
| Where to import  | `_app.js`               | Component directly         |
| Usage style      | Class name directly     | `styles.className`         |
| Use case         | Reset, fonts, utilities | Component styling          |

---

## ✅ Example Project Structure

```
/pages
  _app.js
  index.js

/styles
  globals.css

/components
  Button.jsx
  Button.module.css
```

---

## ✅ When to Use What?

| Use Case                                | Recommended Style   |
| --------------------------------------- | ------------------- |
| Styling layout, body, fonts             | Global CSS          |
| Styling individual components           | CSS Modules         |
| Using utility-first CSS (like Tailwind) | Global (via import) |
| Styling third-party UI libraries        | Global              |

---

## 🛑 Common Mistakes to Avoid

1. **Importing `.module.css` in `_app.js`** – won’t work.
2. **Using the wrong class name format** – e.g., writing `className="styles.button"` instead of `className={styles.button}`.
3. **Using global CSS in dynamic imported components** – must be imported only once in `_app.js`.

---

If you’d like, I can give you a working Next.js example project showing both CSS types.


### ----- Next JS tutorial in Hindi #23 Conditional style and CSS IN next.js 13.4----------
1) ![alt text](image-1.png)
2) 

## ---------  Next JS tutorial in Hindi #25 Font Optimization in next.js 13.4 ----
1) ![alt text](image-2.png)
2) basically when we use normal way to use the font in project then each time based on page request will 
arise on server from where we are calling the font which make extra network call !! 
3) by using the next js font it won't beacuse it store that one in 'cache' and it won't show in the network tab of browser beacue it woking on the server side not client side. 
4) GO TO google font and select a particular font type
5) ![alt text](image-3.png)
6) ![alt text](image-4.png)
7) paste that copyed code into top level of our project that is layout.js file:
8) ![alt text](image-5.png)
9) ![alt text](image-7.png)
10) ![alt text](image-6.png)
11) ![alt text](image-8.png)
12) ![alt text](image-9.png)
13) see on the above image no network call and not style applied
14) ![alt text](image-10.png)
15) ![alt text](image-11.png)


## --------- Next JS tutorial in Hindi #26 generateMetadata for Dynamic meta data in next.js 13.4 --------
1) ![alt text](image-12.png)
2) basically there is two types of meta data
  - static meta data: which is already define for all the page as same and bydefault it is defined in layout page.
  - Dynamic meta data: based on page define
3) 
In **Next.js**, metadata is crucial for **SEO (Search Engine Optimization)** and **social sharing**, as it helps define how a page appears in search engines and on social platforms.

---

## ✅ What is Metadata in Next.js?

Metadata refers to HTML `<head>` elements like:

* `<title>`
* `<meta name="description">`
* `<meta property="og:title">` (Open Graph for Facebook)
* `<meta name="twitter:card">` (Twitter cards)
* And more...

---

## 📌 Static Metadata in Next.js

You can define metadata **statically** in a route file like `page.js` or `layout.js` using the `metadata` export.

### Example:

```js
// app/about/page.js
export const metadata = {
  title: "About Us - MyApp",
  description: "Learn more about our company and team.",
};
  
export default function AboutPage() {
  return <h1>About Page</h1>;
}
```

### Result:

This will inject the `<title>` and `<meta>` tags into the `<head>` of the HTML.

---

## ⚡ Dynamic Metadata in Next.js

Use dynamic metadata when values depend on route parameters, API data, or other runtime logic.

### Example using `generateMetadata()`:

```js
// app/blog/[slug]/page.js
export async function generateMetadata({ params }) {
  const post = await fetch(`https://example.com/api/posts/${params.slug}`).then(res => res.json());

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPost({ params }) {
  return <h1>Post: {params.slug}</h1>;
}
```

🔍 `generateMetadata` is an async function and gets `params`, `searchParams`, etc., which allows you to dynamically fetch data and return metadata.

---

## 🔄 Comparison

| Feature       | Static Metadata            | Dynamic Metadata                           |
| ------------- | -------------------------- | ------------------------------------------ |
| Defined using | `export const metadata`    | `export async function generateMetadata()` |
| Use case      | Static titles/descriptions | Dynamic routes, fetched content            |
| SEO-friendly  | ✅                          | ✅ (even more powerful)                     |

---

## 📘 Good Practice

* Use **static metadata** where possible for performance.
* Use **dynamic metadata** for pages like blog posts, products, etc., where content is fetched dynamically.

---

Would you like an example with Open Graph and Twitter meta tags too?

- yes:
Here’s a complete example showing how to add **Open Graph** and **Twitter meta tags** in both **static** and **dynamic metadata** in Next.js:

---

## ✅ Static Metadata Example (in `page.js`)

```js
// app/about/page.js
export const metadata = {
  title: "About Us | MyCompany",
  description: "Discover more about our mission, values, and team.",
  openGraph: {
    title: "About Us | MyCompany",
    description: "Discover more about our mission, values, and team.",
    url: "https://yourdomain.com/about",
    siteName: "MyCompany",
    images: [
      {
        url: "https://yourdomain.com/images/about-og.png",
        width: 1200,
        height: 630,
        alt: "About Us Open Graph Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | MyCompany",
    description: "Discover more about our mission, values, and team.",
    images: ["https://yourdomain.com/images/about-og.png"],
  },
};

export default function AboutPage() {
  return <h1>About Us</h1>;
}
```

---

## ⚡ Dynamic Metadata Example (in `[slug]/page.js`)

```js
// app/blog/[slug]/page.js
export async function generateMetadata({ params }) {
  const post = await fetch(`https://yourapi.com/posts/${params.slug}`).then(res => res.json());

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://yourdomain.com/blog/${params.slug}`,
      siteName: "MyBlog",
      images: [
        {
          url: post.ogImage || "https://yourdomain.com/default-og.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
      publishedTime: post.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.ogImage || "https://yourdomain.com/default-og.png"],
    },
  };
}

export default function BlogPost({ params }) {
  return <h1>Blog Post: {params.slug}</h1>;
}
```

---

## ✅ Bonus: Supported Metadata Fields in Next.js

Here are some useful metadata keys:

* `title`, `description`
* `openGraph`:

  * `url`, `type`, `images`, `siteName`, `publishedTime`
* `twitter`:

  * `card`, `title`, `description`, `images`
* `robots`: `"index, follow"`
* `icons`: `{ icon: '/favicon.ico' }`

---

Would you like me to show how this metadata appears in the actual HTML (`<head>`) output as well?

- yes: 

Great! Let's look at how **static** and **dynamic metadata** in Next.js translate into the actual HTML `<head>` section (i.e., what gets sent to the browser for SEO and sharing previews).

---

## ✅ 1. Static Metadata HTML Output Example

When you define metadata in `page.js` like this:

```js
export const metadata = {
  title: "About Us | MyCompany",
  description: "Learn about our mission and values.",
  openGraph: {
    title: "About Us | MyCompany",
    description: "Learn about our mission and values.",
    url: "https://yourdomain.com/about",
    siteName: "MyCompany",
    images: [
      {
        url: "https://yourdomain.com/images/about-og.png",
        width: 1200,
        height: 630,
        alt: "About Us Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | MyCompany",
    description: "Learn about our mission and values.",
    images: ["https://yourdomain.com/images/about-og.png"],
  },
};
```

👉 **It produces this in the HTML `<head>`**:

```html
<title>About Us | MyCompany</title>
<meta name="description" content="Learn about our mission and values.">

<!-- Open Graph tags -->
<meta property="og:title" content="About Us | MyCompany">
<meta property="og:description" content="Learn about our mission and values.">
<meta property="og:url" content="https://yourdomain.com/about">
<meta property="og:site_name" content="MyCompany">
<meta property="og:image" content="https://yourdomain.com/images/about-og.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="About Us Image">
<meta property="og:type" content="website">

<!-- Twitter tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="About Us | MyCompany">
<meta name="twitter:description" content="Learn about our mission and values.">
<meta name="twitter:image" content="https://yourdomain.com/images/about-og.png">
```

---

## ⚡ 2. Dynamic Metadata HTML Output Example

If you're using dynamic metadata from an API like this:

```js
export async function generateMetadata({ params }) {
  const post = await fetch(...).then(res => res.json());

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://yourdomain.com/blog/${params.slug}`,
      images: [{ url: post.image }],
      type: "article",
      publishedTime: post.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}
```

👉 The HTML output will **change dynamically per blog post**, for example:

```html
<title>How to Learn JavaScript Fast</title>
<meta name="description" content="Get tips on mastering JS quickly.">

<!-- Open Graph -->
<meta property="og:title" content="How to Learn JavaScript Fast">
<meta property="og:description" content="Get tips on mastering JS quickly.">
<meta property="og:url" content="https://yourdomain.com/blog/js-fast">
<meta property="og:image" content="https://yourdomain.com/images/js-post.png">
<meta property="og:type" content="article">
<meta property="article:published_time" content="2025-07-29T18:00:00Z">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="How to Learn JavaScript Fast">
<meta name="twitter:description" content="Get tips on mastering JS quickly.">
<meta name="twitter:image" content="https://yourdomain.com/images/js-post.png">
```

---

## 🧠 Why This Matters

These `<meta>` tags help:

* Improve **SEO**
* Control how your page looks when **shared on social media**
* Give **Google & bots** the correct info
* Create dynamic preview cards with correct **images, titles, etc.**

---

Let me know if you'd like a template or ready-to-use SEO component for easier reuse across your pages.

- yes:

Here's a **ready-to-use SEO metadata template** you can add to any page in your **Next.js 13+/App Router** project using `metadata` (static or dynamic).

---

## ✅ Static SEO Template (Re-usable)

If you have common metadata across pages, you can extract it to a file like `lib/seo.js` or `constants/seo.js`.

### `lib/seo.js`

```js
export const defaultMetadata = {
  title: "MyApp - Your Productivity Partner",
  description: "An all-in-one tool to manage your projects, tasks, and time efficiently.",
  keywords: ["productivity", "task manager", "project tracking", "MyApp"],
  authors: [{ name: "Ritik Sharma", url: "https://yourdomain.com" }],
  creator: "MyApp Team",
  openGraph: {
    title: "MyApp - Your Productivity Partner",
    description: "An all-in-one tool to manage your projects, tasks, and time efficiently.",
    url: "https://yourdomain.com",
    siteName: "MyApp",
    images: [
      {
        url: "https://yourdomain.com/images/og-banner.png",
        width: 1200,
        height: 630,
        alt: "MyApp Open Graph Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MyApp - Your Productivity Partner",
    description: "Manage your tasks and projects all in one place.",
    images: ["https://yourdomain.com/images/og-banner.png"],
    creator: "@myapp",
  },
  metadataBase: new URL("https://yourdomain.com"),
};
```

---

## 📄 Example Usage in a Static Page

```js
// app/about/page.js
import { defaultMetadata } from "@/lib/seo";

export const metadata = {
  ...defaultMetadata,
  title: "About Us | MyApp",
  description: "Learn more about the team behind MyApp.",
  openGraph: {
    ...defaultMetadata.openGraph,
    title: "About Us | MyApp",
    description: "Learn more about the team behind MyApp.",
    url: "https://yourdomain.com/about",
  },
  twitter: {
    ...defaultMetadata.twitter,
    title: "About Us | MyApp",
    description: "Learn more about the team behind MyApp.",
  },
};

export default function AboutPage() {
  return <div>About Page</div>;
}
```

---

## ⚡ Dynamic SEO Example for Blog

```js
// app/blog/[slug]/page.js

export async function generateMetadata({ params }) {
  const res = await fetch(`https://api.example.com/posts/${params.slug}`);
  const post = await res.json();

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://yourdomain.com/blog/${params.slug}`,
      images: [{ url: post.image }],
      type: "article",
      publishedTime: post.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}
```

---

## 🛠 Optional SEO Helpers

You can also add a `robots.txt`, `sitemap.xml`, and structured data via `next-sitemap`.

Would you like help setting up those too?



## ------- Next JS tutorial in Hindi #27 Script component in next.js 13.4 --------

1) ![alt text](image-13.png)
2) if we use the html script tag in nex js then that will load the respective library in our project as fully means that library will appy on entire project  but while using script component of next js we can make a library to appy on specific page not on all the project page.
