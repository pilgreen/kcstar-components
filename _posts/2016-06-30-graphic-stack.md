---
layout: page
title: graphic-stack
permalink: /graphic-stack/
tags: graphics
excerpt: The `graphic-stack` element provides structure for a single image in the body of a story.
---

<label class="sans-cond">Headline</label>
<input type="text" name="headline">

<label class="sans-cond">Image URL</label>
<input type="text" name="image">

<label class="sans-cond">Caption</label>
<input type="text" name="caption">

<label class="sans-cond">Positioning</label>
<div class="horizontal layout">
  <label><input type="radio" name="position" value="full" checked>full</label>
  <label><input type="radio" name="position" value="left">left</label>
  <label><input type="radio" name="position" value="right">right</label>
</div>

<button class="generate">generate code</button>

<textarea id="code"></textarea>
