# Void - A Clean & Minimalist Hugo Theme

Void is a clean, minimalist Hugo theme designed for blogs and personal websites. It focuses on typography, readability, and elegant simplicity.

## Features

- 🎨 Clean and minimalist design
- 📱 Fully responsive layout
- 🌙 Dark/light theme support (coming soon)
- 📝 Excellent typography with system fonts
- 🔍 Search functionality (coming soon)
- 📊 Syntax highlighting with customizable colors
- 📄 Table of contents for long posts
- 🏷️ Tags and categories support
- 📑 Archive pages
- 🔗 Post navigation (prev/next)
- 📋 Pagination support
- 📱 Mobile-first responsive design

## Demo

[Live Demo](https://github.com/MrNanko/void) (Coming soon)

## Installation

### Method 1: Git Submodule (Recommended)

```bash
cd your-hugo-site
git submodule add https://github.com/MrNanko/void themes/void
```

### Method 2: Clone

```bash
cd your-hugo-site/themes
git clone https://github.com/MrNanko/void
```

### Method 3: Download

Download the [latest release](https://github.com/MrNanko/void/releases) and extract it to your `themes/void` directory.

## Configuration

Add the following to your `hugo.yaml` (or `config.yaml`):

```yaml
theme: ["void"]

params:
  author: "Your Name"
  description: "A clean and elegant personal blog"
  homeTitle: "Welcome to My Blog"
  homeDescription: "Sharing thoughts on technology and life"
  footerText: "All rights reserved."
  showRecentPosts: true
  showPostNav: true
  showRSSLink: true

# Menu configuration
menu:
  main:
    - identifier: archives
      name: Archives
      url: /archives/
      weight: 10
    - identifier: categories
      name: Categories
      url: /categories/
      weight: 20
    - identifier: tags
      name: Tags
      url: /tags/
      weight: 30

# Syntax highlighting
pygmentsUseClasses: true
markup:
  highlight:
    noClasses: false
    lineNos: true
    lineNumbersInTable: true
    codeFences: true
    guessSyntax: true
    style: github
    anchorLineNos: false
  tableOfContents:
    startLevel: 2
    endLevel: 4
    ordered: true

# Pagination
pagination:
  pagerSize: 10
```

## Content Structure

Create your content following Hugo's standard structure:

```
content/
├── posts/
│   ├── my-first-post.md
│   └── another-post.md
├── archives.md
└── _index.md
```

### Example Post

```yaml
---
title: "My First Post"
date: 2025-01-01T10:00:00Z
draft: false
tags: ["hugo", "blog"]
categories: ["tech"]
description: "This is my first post using the Void theme"
---

Your post content here...

<!--more-->

More content after the summary break...
```

### Archives Page

Create `content/archives.md`:

```yaml
---
title: "Archives"
layout: "archives"
---
```

## Customization

### Custom CSS

Create `assets/css/custom.css` in your site root to add custom styles:

```css
/* Your custom styles here */
.custom-class {
    color: #your-color;
}
```

### Color Scheme

The theme uses CSS custom properties for easy customization. You can override them in your custom CSS:

```css
:root {
    --primary-color: #your-primary-color;
    --accent-color: #your-accent-color;
    --text-color: #your-text-color;
    --bg-color: #your-bg-color;
}
```

## Development

1. Clone this repository
2. Make your changes
3. Test with a Hugo site
4. Submit a pull request

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## License

This theme is released under the [MIT License](LICENSE).

## Credits

- Built with [Hugo](https://gohugo.io/)
- Inspired by minimalist design principles
- Fonts: System fonts stack for optimal performance

## Changelog

### v1.0.0 (2025-01-XX)

- Initial release
- Clean, minimalist design
- Responsive layout
- Syntax highlighting
- Archive and tag pages
- Post navigation
- Pagination support

---

Made with ❤️ by [Your Name](https://yourwebsite.com)