<template>
  <div class="p-6">
    <h2 class="tm-h1 mb-8">Trimble Modus Typography</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Headings -->
      <div class="bg-light p-6 rounded-lg shadow-md">
        <h3 class="tm-h3 mb-4">Headings</h3>

        <div class="space-y-6">
          <div>
            <h1 class="text-3xl font-normal">Heading 1</h1>
            <p class="text-xs text-secondary mt-1">24px/1.5rem, Regular, Line Height: 36px</p>
          </div>

          <div>
            <h2 class="text-2xl font-normal">Heading 2</h2>
            <p class="text-xs text-secondary mt-1">20px/1.25rem, Regular, Line Height: 30px</p>
          </div>

          <div>
            <h3 class="text-xl font-semibold">Heading 3</h3>
            <p class="text-xs text-secondary mt-1">18px/1.125rem, Semibold, Line Height: 27px</p>
          </div>

          <div>
            <h4 class="text-lg font-semibold">Heading 4</h4>
            <p class="text-xs text-secondary mt-1">16px/1rem, Semibold, Line Height: 24px</p>
          </div>

          <div>
            <h5 class="text-base font-bold">Heading 5</h5>
            <p class="text-xs text-secondary mt-1">14px/0.875rem, Bold, Line Height: 24px</p>
          </div>

          <div>
            <h6 class="text-xs font-bold">Heading 6</h6>
            <p class="text-xs text-secondary mt-1">12px/0.75rem, Bold, Line Height: 18px</p>
          </div>
        </div>
      </div>

      <!-- Text Styles -->
      <div class="bg-light p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold mb-4">Text Styles</h3>

        <div class="space-y-6">
          <div>
            <p class="text-2xl font-normal">Lead Text</p>
            <p class="text-xs text-secondary mt-1">20px/1.25rem, Regular, Line Height: 40px</p>
          </div>

          <div>
            <p class="text-base font-normal">Body Text</p>
            <p class="text-xs text-secondary mt-1">14px/0.875rem, Regular, Line Height: 21px</p>
          </div>

          <div>
            <p class="text-base font-semibold">Body Text Semibold</p>
            <p class="text-xs text-secondary mt-1">14px/0.875rem, Semibold, Line Height: 21px</p>
          </div>

          <div>
            <p class="text-base font-bold">Body Text Bold</p>
            <p class="text-xs text-secondary mt-1">14px/0.875rem, Bold, Line Height: 21px</p>
          </div>

          <div>
            <p class="text-xs font-normal">Small Body Text</p>
            <p class="text-xs text-secondary mt-1">12px/0.75rem, Regular, Line Height: 18px</p>
          </div>

          <div>
            <p class="text-2xs font-normal ">Mini Text</p>
            <p class="text-xs text-secondary mt-1">10px/0.625rem, Regular, Line Height: 15px</p>
          </div>
        </div>
      </div>

      <!-- Display Styles -->
      <div class="bg-light p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold mb-4">Display Text</h3>

        <div class="space-y-6">
          <div>
            <p class="text-5xl font-bold">Display 1</p>
            <p class="text-xs text-secondary mt-1">72px/4.5rem, Bold, Line Height: 108px</p>
          </div>

          <div>
            <p class="text-4xl font-bold ">Display 2</p>
            <p class="text-xs text-secondary mt-1">40px/2.5rem, Bold, Line Height: 54px</p>
          </div>
        </div>
      </div>

      <!-- Line Heights -->
      <div class="bg-light p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold mb-4">Line Heights</h3>

        <div class="space-y-4">
          <div>
            <p class="text-base leading-none">Leading None (1)</p>
            <p class="text-xs text-secondary mt-1">--leading-none</p>
          </div>

          <div>
            <p class="text-base leading-tight">Leading Tight (1.25)</p>
            <p class="text-xs text-secondary mt-1">--leading-tight</p>
          </div>

          <div>
            <p class="text-base leading-snug">Leading Snug (1.375)</p>
            <p class="text-xs text-secondary mt-1">--leading-snug</p>
          </div>

          <div>
            <p class="text-base leading-normal">Leading Normal (1.5)</p>
            <p class="text-xs text-secondary mt-1">--leading-normal</p>
          </div>

          <div>
            <p class="text-base leading-relaxed">Leading Relaxed (1.625)</p>
            <p class="text-xs text-secondary mt-1">--leading-relaxed</p>
          </div>

          <div>
            <p class="text-base leading-loose">Leading Loose (2)</p>
            <p class="text-xs text-secondary mt-1">--leading-loose</p>
          </div>
        </div>
      </div>

      <!-- Combined Text-Line Height -->
      <div class="bg-light p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold mb-4">Size-Specific Line Heights</h3>

        <div class="space-y-4">
          <div>
            <p class="text-base" style="line-height: var(--text-base--line-height);">Base Text with Line Height (21px/14px)</p>
            <p class="text-xs text-secondary mt-1">--text-base--line-height</p>
          </div>

          <div>
            <p class="text-xs" style="line-height: var(--text-xs--line-height);">XS Text with Line Height (18px/12px)</p>
            <p class="text-xs text-secondary mt-1">--text-xs--line-height</p>
          </div>

          <div>
            <p class="text-2xl" style="line-height: var(--text-2xl--line-height);">2XL Text with Line Height (30px/20px)</p>
            <p class="text-xs text-secondary mt-1">--text-2xl--line-height</p>
          </div>

          <div>
            <p class="text-3xl" style="line-height: var(--text-3xl--line-height);">3XL Text with Line Height (36px/24px)</p>
            <p class="text-xs text-secondary mt-1">--text-3xl--line-height</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Font Weights -->
    <div class="bg-light p-6 rounded-lg shadow-md mt-8">
      <h3 class="text-xl font-semibold mb-4">Font Weights</h3>

      <div class="space-y-4">
        <div>
          <p class="text-base font-normal">Normal (400)</p>
          <p class="text-xs text-secondary mt-1">--font-weight-normal</p>
        </div>

        <div>
          <p class="text-base font-semibold">Semibold (600)</p>
          <p class="text-xs text-secondary mt-1">--font-weight-semibold</p>
        </div>

        <div>
          <p class="text-base font-bold">Bold (700)</p>
          <p class="text-xs text-secondary mt-1">--font-weight-bold</p>
        </div>
      </div>
    </div>

    <!-- Text Sample -->
    <div class="bg-light p-6 rounded-lg shadow-md mt-8">
      <h3 class="text-xl font-semibold mb-4">Text Sample</h3>

      <h2 class="text-2xl font-normal mb-4">Trimble Modus Design System</h2>

      <p class="text-base mb-4">
        Modus is Trimble's design system for digital products and experiences. It consists of guidelines, components,
        and patterns that enable Trimble's teams to design and build with speed, consistency, and quality.
      </p>

      <p class="text-base mb-4">
        The purpose of typography is to make content legible, readable, and visually appealing. Trimble Modus uses Open
        Sans, a humanist sans-serif typeface with excellent legibility characteristics and friendly appearance.
      </p>

      <p class="text-xs">
        For more information, visit the <a href="https://modus.trimble.com" class="text-primary hover:underline">Trimble
          Modus website</a>.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
// No additional script needed
</script>
