---
layout: default
title: Contribution 
---

# Contribution Guidelines

This file may be changed from time to time, keep that in mind.

**Contributions are generaly welcome.**  

On the bottom of every page you can find a <mark>"Edit this page on GitHub"</mark> link, which will take you directly to the source code.  
Typos or grammar related problems can be fixed directly in the master branch. (English is not my native language, I would really appreciate it)  
Everything else should use the standard [GitHub flow](https://guides.github.com/introduction/flow/).

If you want to make a breaking change or have a "big idea" you should open an issue first, so we could discuss it first.

Contributors will be mentioned in the README and the root page.

## Layout structure

If you want to add a whole new site, you should stay consistant to the layout I am using.

- Every page, component or view should contain a description about it's usage
- Every page, component or view should contain one or more example use cases
- A "full app example" is optional, but should be added whenever possible
- Availabilities/Compatibilities should be added whenever required

## The "full app example"

**A "full app example" is constructed with the following code snippets.**

### H2 Heading and Info Badge:
```md
## Full app example 
<span><span class="label is-h2-label">SwiftUI 2.0 or newer</span><span>
```

### Filename and Preview
This is basically just copy and paste. You should add a few more lines to the image alt attribute and definately add the image path (/assets/images/...) itself and don't forget the code. 

```md
<div class="code-preview-container">
  <div class="code-preview">
    <span class="filename">
      <span>
        <img alt="Swift file icon" aria-hidden="true" src="/assets/images/swift-file-icon.png" class="swift-file-icon file-icon">ContentView.swift
      </span>
    </span>
    <div class="runtime-preview collapsed">
      <button class="header">
        <span class="runtime-preview-label">Preview</span>
        <span aria-label="Hide" class="preview-hide">↗</span>
        <span aria-label="Show" class="preview-show">↙</span>
      </button>
      <div class="runtime-preview-asset">
        <div class="asset">
          <picture>
            <img alt="A screenshot from the Xcode preview as it would appear on iPhone. <<ADD MORE HERE>>" srcset="<<IMAGE PATH>> 1x" src="<<IMAGE PATH>>" width="834" height="auto">
          </picture>
        </div>
      </div>
    </div>
  </div>
</div>

Add the swift markdown code block here...
```