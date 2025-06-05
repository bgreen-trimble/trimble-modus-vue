<script setup lang="ts">
import { Accordion, AccordionItem, Card } from '@/components'
</script>

<template>
    <div class="mt-6">
        <!-- Default Accordion -->
        <section class="showcase-section mb-8">
            <h2 class="tm-h2 mb-4">Default Accordion</h2>
            <p class="tm-body mb-4">
                The default accordion displays directly in the main content container and is used for
                general content organization.
            </p>

            <div class="example-container p-6">
                <Accordion>
                    <AccordionItem id="item1" title="Accordion Item #1" defaultExpanded>
                        <p class="tm-body">
                            This is the first item's accordion body. It is shown by default because of
                            the defaultExpanded prop. Accordions are used to organize related content and reduce
                            visual clutter by displaying only the most important information initially.
                        </p>
                    </AccordionItem>
                    <AccordionItem id="item2" title="Accordion Item #2">
                        <p class="tm-body">
                            This is the second item's accordion body. Click on the header to expand and
                            collapse this content. Accordions help to simplify complex interfaces by hiding
                            content until the user needs it.
                        </p>
                    </AccordionItem>
                        <AccordionItem id="item3" title="Accordion Item #3">
                            <p class="tm-body">
                                This is the third item's accordion body. Accordion content can contain any
                                HTML elements, including text, images, and interactive components.
                            </p>
                        </AccordionItem>
                </Accordion>
            </div>

            <div class="code-block p-4 rounded-lg mt-4">
                <code class="block whitespace-pre-wrap">
          <Accordion>
          <AccordionItem id="item1" title="Accordion Item #1" defaultExpanded>
            <p class="tm-body">
              This is the first item's accordion body. It is shown by default because
              of the defaultExpanded prop.
            </p>
          </AccordionItem>
          <AccordionItem id="item2" title="Accordion Item #2">
            <p class="tm-body">
              This is the second item's accordion body. Click on the header to expand and collapse
              this content.
            </p>
          </AccordionItem>
          <AccordionItem id="item3" title="Accordion Item #3">
            <p class="tm-body">
              This is the third item's accordion body. Accordion content can contain any HTML elements.
            </p>
          </AccordionItem>
        </Accordion>
        </code>
            </div>
        </section>

        <!-- Compact Accordion -->
        <section class="showcase-section mb-8">
            <h2 class="tm-h2 mb-4">Compact Accordion</h2>
            <p class="tm-body mb-4">
                Compact accordions are designed for use in smaller containers like cards or side panels.
            </p>

            <div class="example-container p-6">
                <Card class="max-w-lg mx-auto">
                    <template #title>Card with Compact Accordion</template>
                    <Accordion size="compact">
                        <AccordionItem id="compact1" title="Configuration Options">
                            <p class="tm-body">
                                Configure application settings using these options. Compact accordions help organize
                                content in smaller spaces.
                            </p>
                        </AccordionItem>
                        <AccordionItem id="compact2" title="User Preferences">
                            <p class="tm-body">
                                Set your user preferences for the application. These settings are stored in your user
                                profile.
                            </p>
                        </AccordionItem>
                        <AccordionItem id="compact3" title="Advanced Settings" disabled>
                            <p class="tm-body">
                                This section is disabled and cannot be expanded. Disabled accordion items can be used
                                to show unavailable options.
                            </p>
                        </AccordionItem>
                    </Accordion>
                </Card>
            </div>

            <div class="code-block p-4 rounded-lg mt-4">
                <code class="block whitespace-pre-wrap">
        <Card>
            <template #title>Card with Compact Accordion</template>
            <Accordion size="compact">
                <AccordionItem id="compact1" title="Configuration Options">
                    <p class="tm-body">Configure application settings using these options.</p>
                </AccordionItem>
                <AccordionItem id="compact2" title="User Preferences">
                    <p class="tm-body">Set your user preferences for the application.</p>
                </AccordionItem>
                <AccordionItem id="compact3" title="Advanced Settings" disabled>
                    <p class="tm-body">This section is disabled and cannot be expanded.</p>
                </AccordionItem>
            </Accordion>
        </Card>
    </code>
            </div>
        </section>

        <!-- Multiple Expansion -->
        <section class="showcase-section mb-8">
            <h2 class="tm-h2 mb-4">Multiple Expansion</h2>
            <p class="tm-body mb-4">
                By default, accordions only allow one item to be expanded at a time.
                Use the allowMultiple prop to enable expanding multiple items simultaneously.
            </p>

            <div class="example-container p-6">
                <Accordion allowMultiple>
                    <AccordionItem id="multi1" title="First Expandable Section" defaultExpanded>
                        <p class="tm-body">
                            This accordion allows multiple items to be expanded at once.
                            Try clicking on different headers to see how it works.
                        </p>
                    </AccordionItem>
                    <AccordionItem id="multi2" title="Second Expandable Section" defaultExpanded>
                        <p class="tm-body">
                            Both this section and the one above can be expanded at the same time
                            because the allowMultiple prop is set to true.
                        </p>
                    </AccordionItem>
                    <AccordionItem id="multi3" title="Third Expandable Section">
                        <p class="tm-body">
                            This section isn't expanded by default, but can be expanded without
                            collapsing the other sections.
                        </p>
                    </AccordionItem>
                </Accordion>
            </div>

            <div class="code-block p-4 rounded-lg mt-4">
                <code class="block whitespace-pre-wrap">
            <Accordion allowMultiple>
                <AccordionItem id="multi1" title="First Expandable Section" defaultExpanded>
                    <p class="tm-body">This accordion allows multiple items to be expanded at once.</p>
                </AccordionItem>
                <AccordionItem id="multi2" title="Second Expandable Section" defaultExpanded>
                    <p class="tm-body">Both sections can be expanded at the same time.</p>
                </AccordionItem>
                <AccordionItem id="multi3" title="Third Expandable Section">
                    <p class="tm-body">This section can be expanded without collapsing others.</p>
                </AccordionItem>
            </Accordion>
        </code>
            </div>
        </section>

        <!-- Borderless Accordion -->
        <section class="showcase-section mb-8">
            <h2 class="tm-h2 mb-4">Borderless Accordion</h2>
            <p class="tm-body mb-4">
                Use the borderless variant when the accordion is inside a container that
                already has a border, like a card or a bordered section.
            </p>

            <div class="example-container p-6 border border-tm-gray-2">
                <h3 class="tm-h3 mb-4">Section Title</h3>
                <Accordion borderless>
                    <AccordionItem id="borderless1" title="Content Section 1">
                        <p class="tm-body">
                            The borderless accordion works well inside containers that already
                            have borders, reducing visual clutter.
                        </p>
                    </AccordionItem>
                    <AccordionItem id="borderless2" title="Content Section 2">
                        <p class="tm-body">
                            Individual accordion items still have separators between them,
                            even in the borderless variant.
                        </p>
                    </AccordionItem>
                </Accordion>
            </div>

            <div class="code-block p-4 rounded-lg mt-4">
                <code class="block whitespace-pre-wrap">
            <div class="p-6 border border-tm-gray-2">
                <h3 class="tm-h3 mb-4">Section Title</h3>
                <Accordion borderless>
                    <AccordionItem id="borderless1" title="Content Section 1">
                        <p class="tm-body">The borderless accordion works well inside containers.</p>
                    </AccordionItem>
                    <AccordionItem id="borderless2" title="Content Section 2">
                        <p class="tm-body">Individual items still have separators.</p>
                    </AccordionItem>
                </Accordion>
            </div>
        </code>
            </div>
        </section>

        <!-- With Icons -->
        <section class="showcase-section mb-8">
            <h2 class="tm-h2 mb-4">Accordion with Icons</h2>
            <p class="tm-body mb-4">
                You can add icons to accordion items to provide visual cues about the content.
            </p>

            <div class="example-container p-6">
                <Accordion>
                    <AccordionItem id="icon1" title="User Settings" icon="person">
                        <p class="tm-body">
                            Configure user profile settings and preferences. Icons help users
                            quickly identify the purpose of each accordion section.
                        </p>
                    </AccordionItem>
                    <AccordionItem id="icon2" title="Notification Settings" icon="notifications">
                        <p class="tm-body">
                            Manage notification preferences and alert settings. The notification
                            icon makes this section easily recognizable.
                        </p>
                    </AccordionItem>
                    <AccordionItem id="icon3" title="Security Settings" icon="shield">
                        <p class="tm-body">
                            Configure security options including password and two-factor authentication.
                            The shield icon indicates security-related content.
                        </p>
                    </AccordionItem>
                </Accordion>
            </div>

            <div class="code-block p-4 rounded-lg mt-4">
                <code class="block whitespace-pre-wrap">
            <Accordion>
                <AccordionItem id="icon1" title="User Settings" icon="person">
                    <p class="tm-body">Configure user profile settings and preferences.</p>
                </AccordionItem>
                <AccordionItem id="icon2" title="Notification Settings" icon="notifications">
                    <p class="tm-body">Manage notification preferences and alert settings.</p>
                </AccordionItem>
                <AccordionItem id="icon3" title="Security Settings" icon="shield">
                    <p class="tm-body">Configure security options and two-factor auth.</p>
                </AccordionItem>
            </Accordion>
        </code>
            </div>
        </section>

        <!-- Custom Title Content -->
        <section class="showcase-section mb-8">
            <h2 class="tm-h2 mb-4">Custom Title Content</h2>
            <p class="tm-body mb-4">
                Use the title slot to customize the accordion header with more complex content.
            </p>

            <div class="example-container p-6">
                <Accordion>
                    <AccordionItem id="custom1" title="Custom Title">
                        <template #title>
                            <div class="flex items-center gap-2">
                                <i class="modus-icons text-tm-primary">star</i>
                                <span class="font-bold">Featured Content</span>
                                <span class="bg-tm-primary text-white text-xs px-2 py-1 rounded-full">New</span>
                            </div>
                        </template>
                        <p class="tm-body">
                            This accordion item uses a custom title with an icon, styled text, and a badge.
                            You can create complex header designs using the title slot.
                        </p>
                    </AccordionItem>
                    <AccordionItem id="custom2" title="Regular Title">
                        <p class="tm-body">
                            This is a regular accordion item for comparison. The custom title slot gives
                            you complete control over the header content.
                        </p>
                    </AccordionItem>
                </Accordion>
            </div>

            <div class="code-block p-4 rounded-lg mt-4">
                <code class="block whitespace-pre-wrap">
            <Accordion>
                <AccordionItem id="custom1" title="Custom Title">
                    <template #title>
              <div class="flex items-center gap-2">
                <i class="modus-icons text-tm-primary">star</i>
                <span class="font-bold">Featured Content</span>
                <span class="bg-tm-primary text-white text-xs px-2 py-1 rounded-full">New</span>
              </div>
            </template>
                    <p class="tm-body">This accordion item uses a custom title.</p>
                </AccordionItem>
                <AccordionItem id="custom2" title="Regular Title">
                    <p class="tm-body">This is a regular accordion item for comparison.</p>
                </AccordionItem>
            </Accordion>
        </code>
            </div>
        </section>

        <!-- Active Border Indicator -->
        <section class="showcase-section mb-8">
            <h2 class="tm-h2 mb-4">Accordion with Active Border Indicator</h2>
            <p class="tm-body mb-4">
                Use the showActiveBorder prop to display a vertical blue indicator on the left side when
                an item is expanded. This provides a stronger visual cue about which items are currently active.
            </p>

            <div class="example-container p-6">
                <Accordion>
                    <AccordionItem id="border1" title="Item with Active Border" showActiveBorder defaultExpanded>
                        <p class="tm-body">
                            This accordion item has a vertical blue border on the left side when expanded.
                            This provides a clear visual indication of the active item.
                        </p>
                    </AccordionItem>
                    <AccordionItem id="border2" title="Another Item with Active Border" showActiveBorder>
                        <p class="tm-body">
                            All items with showActiveBorder prop will display the vertical indicator when expanded.
                            Try clicking on different headers to see how it works.
                        </p>
                    </AccordionItem>
                    <AccordionItem id="border3" title="An Item with NO active border">
                        <p class="tm-body">
                            This won't have an active border.
                        </p>
                    </AccordionItem>
                </Accordion>
            </div>

            <div class="code-block p-4 rounded-lg mt-4">
                <code class="block whitespace-pre-wrap">
            <Accordion>
                <AccordionItem id="border1" title="Item with Active Border" showActiveBorder defaultExpanded>
                    <p class="tm-body">This item has a vertical blue border when expanded.</p>
                </AccordionItem>
                <AccordionItem id="border2" title="Another Item with Active Border" showActiveBorder>
                    <p class="tm-body">All items with showActiveBorder will show the indicator.</p>
                </AccordionItem>
                <AccordionItem id="border3" title="Regular Item - No Active Border">
                    <p class="tm-body">This won't have an active border.</p>
                </AccordionItem>
            </Accordion>
        </code>
            </div>
        </section>

        <!-- Active Border on Accordion -->
        <section class="showcase-section">
            <h2 class="tm-h2 mb-4">Accordion-level Active Border</h2>
            <p class="tm-body mb-4">
                Instead of setting showActiveBorder on each item, you can set it once on the Accordion
                component to apply it to all items. Individual items can still override this setting.
            </p>

            <div class="example-container p-6">
                <Accordion showActiveBorder>
                    <AccordionItem id="accordBorder1" title="First Item" defaultExpanded>
                        <p class="tm-body">
                            All items in this accordion will show the active border when expanded,
                            because showActiveBorder is set on the parent Accordion.
                        </p>
                    </AccordionItem>
                    <AccordionItem id="accordBorder2" title="Second Item">
                        <p class="tm-body">
                            No need to set showActiveBorder on each item individually.
                        </p>
                        <AccordionItem id="accordBorder3" title="Override Example - No Active Border"
                            :showActiveBorder="false">
                            <p class="tm-body">
                                Individual items can override the parent setting by explicitly setting
                                showActiveBorder to false.
                            </p>
                        </AccordionItem>
                    </AccordionItem>
                </Accordion>
            </div>

            <div class="code-block p-4 rounded-lg mt-4">
                <code class="block whitespace-pre-wrap">
            <Accordion showActiveBorder>
                <AccordionItem id="accordBorder1" title="First Item" defaultExpanded>
                    <p class="tm-body">All items will show the active border.</p>
                </AccordionItem>
                <AccordionItem id="accordBorder2" title="Second Item">
                    <p class="tm-body">No need to set showActiveBorder individually.</p>
                </AccordionItem>
                <AccordionItem id="accordBorder3" title="Override Example - No Active Border" :showActiveBorder="false">
                    <p class="tm-body">Individual items can override the parent setting.</p>
                </AccordionItem>
            </Accordion>
        </code>
            </div>
        </section>
    </div>
</template>

<style scoped>
.showcase-section {
    margin-bottom: 2rem;
    padding: 1rem;
    border: 1px solid var(--color-tm-gray-2);
    border-radius: 0.5rem;
}

.example-container {
    background-color: var(--color-tm-gray-0);
    border: 1px solid var(--color-tm-gray-2);
    border-radius: 0.5rem;
}

.code-block {
    background-color: var(--color-tm-gray-0);
    border: 1px solid var(--color-tm-gray-2);
}
</style>
