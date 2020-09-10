---
layout: default
title: Text
parent: Text Views
grand_parent: Basics
nav_order: 1
toc: true
---

# Text
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

Text is used to display one or more lines of text content with the same effect as UILabel (UIKit), but it is even better.

If you want to create Text, just create it with `Text("SwiftUI")`. With chained syntax, you can add multiple attributes to the text, such as fonts, colors, shadows, spacing between top left and right, and so on.

---

## Basic Usage

```swift
Text("SwiftUI is so cool")
```

## Example

```swift
Text("SwiftUI is awesome")
    .font(.title)
    .foregroundColor(.primary)
```

---

## Full app example 
<span><span class="label is-h2-label">SwiftUI 2.0 or newer</span><span>

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
            <img alt="A screenshot from the Xcode preview as it would appear on iPhone, with the text, Hello World!, centered in the middle of the display." srcset="/assets/images/basics/text-views/helloworld_preview.png 1x" src="/assets/images/basics/text-views/helloworld_preview.png" width="834" height="auto">
          </picture>
        </div>
      </div>
    </div>
  </div>
</div>

```swift
import SwiftUI

@main
struct SwiftUIApp: App {
    var body: some Scene {
        WindowGroup {
            Text("Hello World")
        }
    }
}
```

---

**Availability:**
- iOS 13.0+
- macOS 10.15+
- Mac Catalyst 13.0+
- tvOS 13.0+
- watchOS 6.0+

[<i class="fab fa-apple"></i> Apple Developer Reference](https://developer.apple.com/documentation/swiftui/text)