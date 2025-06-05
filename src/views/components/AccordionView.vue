<script setup lang="ts">
import { ref } from 'vue'
import { Accordion, AccordionItem, Button, Card, Tabs, Tab } from '@/components'

// Example states for accordion
const activeTab = ref('features')
const expandSomeItems = () => {
    // This function would toggle specific accordion items
    // Can be implemented in real application
}
</script>

<template>
    <div class="tm-container">
        <!-- Header Section -->
        <div class="showcase-header mb-6">
            <h1 class="tm-h1 mb-2">Accordion</h1>
            <p class="tm-body mb-6">
                Accordions organize and allow navigation between groups of content. They deliver large amounts of
                content
                in a small space through progressive disclosure.
            </p>
        </div>

        <!-- Navigation Tabs -->
        <div class="mb-8">
            <Tabs :active="activeTab" @update:active="activeTab = $event">
                <Tab id="features" label="Features">
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
                                            the defaultExpanded prop.
                                            Accordions are used to organize related content and reduce visual clutter by
                                            displaying only the
                                            most important information initially.
                                        </p>
                                    </AccordionItem>
                                    <AccordionItem id="item2" title="Accordion Item #2">
                                        <p class="tm-body">
                                            This is the second item's accordion body. Click on the header to expand and
                                            collapse this content.
                                            Accordions help to simplify complex interfaces by hiding content until the
                                            user needs it.
                                        </p>
                                    </AccordionItem>
                                    <AccordionItem id="item3" title="Accordion Item #3">
                                        <p class="tm-body">
                                            This is the third item's accordion body. Accordion content can contain any
                                            HTML elements,
                                            including text, images, and interactive components.
                                        </p>
                                    </AccordionItem>
                                </Accordion>
                            </div>

                            <div class="code-block p-4 rounded-lg mt-4">
                                <code class="block whitespace-pre-wrap">
&lt;Accordion&gt;
  &lt;AccordionItem id="item1" title="Accordion Item #1" defaultExpanded&gt;
    &lt;p class="tm-body"&gt;
      This is the first item's accordion body. It is shown by default because 
      of the defaultExpanded prop.
    &lt;/p&gt;
  &lt;/AccordionItem&gt;
  &lt;AccordionItem id="item2" title="Accordion Item #2"&gt;
    &lt;p class="tm-body"&gt;
      This is the second item's accordion body. Click on the header to expand and collapse 
      this content.
    &lt;/p&gt;
  &lt;/AccordionItem&gt;
  &lt;AccordionItem id="item3" title="Accordion Item #3"&gt;
    &lt;p class="tm-body"&gt;
      This is the third item's accordion body. Accordion content can contain any HTML elements.
    &lt;/p&gt;
  &lt;/AccordionItem&gt;
&lt;/Accordion&gt;
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
                                                Configure application settings using these options. Compact accordions
                                                help organize content in smaller spaces.
                                            </p>
                                        </AccordionItem>
                                        <AccordionItem id="compact2" title="User Preferences">
                                            <p class="tm-body">
                                                Set your user preferences for the application. These settings
                                                are stored in your user profile.
                                            </p>
                                        </AccordionItem>
                                        <AccordionItem id="compact3" title="Advanced Settings" disabled>
                                            <p class="tm-body">
                                                This section is disabled and cannot be expanded. Disabled accordion
                                                items
                                                can be used to show unavailable options.
                                            </p>
                                        </AccordionItem>
                                    </Accordion>
                                </Card>
                            </div>

                            <div class="code-block p-4 rounded-lg mt-4">
                                <code class="block whitespace-pre-wrap">
        &lt;Card&gt;
        &lt;template #title&gt;Card with Compact Accordion&lt;/template&gt;
        &lt;Accordion size="compact"&gt;
        &lt;AccordionItem id="compact1" title="Configuration Options"&gt;
        &lt;p class="tm-body"&gt;
        Configure application settings using these options. Compact accordions
        help organize content in smaller spaces.
        &lt;/p&gt;
        &lt;/AccordionItem&gt;
        &lt;AccordionItem id="compact2" title="User Preferences"&gt;
        &lt;p class="tm-body"&gt;
        Set your user preferences for the application.
        &lt;/p&gt;
        &lt;/AccordionItem&gt;
        &lt;AccordionItem id="compact3" title="Advanced Settings" disabled&gt;
        &lt;p class="tm-body"&gt;
        This section is disabled and cannot be expanded.
        &lt;/p&gt;
        &lt;/AccordionItem&gt;
        &lt;/Accordion&gt;
        &lt;/Card&gt;
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
            &lt;Accordion allowMultiple&gt;
            &lt;AccordionItem id="multi1" title="First Expandable Section" defaultExpanded&gt;
            &lt;p class="tm-body"&gt;
            This accordion allows multiple items to be expanded at once.
            &lt;/p&gt;
            &lt;/AccordionItem&gt;
            &lt;AccordionItem id="multi2" title="Second Expandable Section" defaultExpanded&gt;
            &lt;p class="tm-body"&gt;
            Both this section and the one above can be expanded at the same time.
            &lt;/p&gt;
            &lt;/AccordionItem&gt;
            &lt;AccordionItem id="multi3" title="Third Expandable Section"&gt;
            &lt;p class="tm-body"&gt;
            This section isn't expanded by default, but can be expanded without
            collapsing the other sections.
            &lt;/p&gt;
            &lt;/AccordionItem&gt;
            &lt;/Accordion&gt;
        </code>
                            </div>
                        </section>

                        <!-- Borderless Accordion -->
                        <section class="showcase-section mb-8">
                            <h2 class="tm-h2 mb-4">Borderless Accordion</h2>
                            <p class="tm-body mb-4">
                                Use the borderless variant when the accordion is inside a container
                                that already has a border, like a card or a bordered section.
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
            &lt;div class="p-6 border border-tm-gray-2"&gt;
            &lt;h3 class="tm-h3 mb-4"&gt;Section Title&lt;/h3&gt;
            &lt;Accordion borderless&gt;
            &lt;AccordionItem id="borderless1" title="Content Section 1"&gt;
            &lt;p class="tm-body"&gt;
            The borderless accordion works well inside containers that already
            have borders, reducing visual clutter.
            &lt;/p&gt;
            &lt;/AccordionItem&gt;
            &lt;AccordionItem id="borderless2" title="Content Section 2"&gt;
            &lt;p class="tm-body"&gt;
            Individual accordion items still have separators between them,
            even in the borderless variant.
            &lt;/p&gt;
            &lt;/AccordionItem&gt;
            &lt;/Accordion&gt;
            &lt;/div&gt;
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
            &lt;Accordion&gt;
            &lt;AccordionItem id="icon1" title="User Settings" icon="person"&gt;
            &lt;p class="tm-body"&gt;
            Configure user profile settings and preferences.
            &lt;/p&gt;
            &lt;/AccordionItem&gt;
            &lt;AccordionItem id="icon2" title="Notification Settings" icon="notifications"&gt;
            &lt;p class="tm-body"&gt;
            Manage notification preferences and alert settings.
            &lt;/p&gt;
            &lt;/AccordionItem&gt;
            &lt;AccordionItem id="icon3" title="Security Settings" icon="shield"&gt;
            &lt;p class="tm-body"&gt;
            Configure security options including password and two-factor authentication.
            &lt;/p&gt;
            &lt;/AccordionItem&gt;
            &lt;/Accordion&gt;
        </code>
                            </div>
                        </section>

                        <!-- Custom Title Content -->
                        <section class="showcase-section">
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
                                                <span
                                                    class="bg-tm-primary text-white text-xs px-2 py-1 rounded-full">New</span>
                                            </div>
                                        </template>
                                        <p class="tm-body">
                                            This accordion item uses a custom title with an icon, styled text, and a
                                            badge.
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
            &lt;Accordion&gt;
            &lt;AccordionItem id="custom1" title="Custom Title"&gt;
            &lt;template #title&gt;
            &lt;div class="flex items-center gap-2"&gt;
            &lt;i class="modus-icons text-tm-primary"&gt;star&lt;/i&gt;
            &lt;span class="font-bold"&gt;Featured Content&lt;/span&gt;
            &lt;span class="bg-tm-primary text-white text-xs px-2 py-1 rounded-full"&gt;New&lt;/span&gt;
            &lt;/div&gt;
            &lt;/template&gt;
            &lt;p class="tm-body"&gt;
            This accordion item uses a custom title with an icon, styled text, and a badge.
            &lt;/p&gt;
            &lt;/AccordionItem&gt;
            &lt;AccordionItem id="custom2" title="Regular Title"&gt;
            &lt;p class="tm-body"&gt;
            This is a regular accordion item for comparison.
            &lt;/p&gt;
            &lt;/AccordionItem&gt;
            &lt;/Accordion&gt;
        </code>
                            </div>
                        </section>

                        <!-- Active Border Indicator -->
                        <section class="showcase-section mb-8">
                            <h2 class="tm-h2 mb-4">Accordion with Active Border Indicator</h2>
                            <p class="tm-body mb-4">
                                Use the showActiveBorder prop to display a vertical blue indicator on the left side when
                                an item is expanded.
                                This provides a stronger visual cue about which items are currently active.
                            </p>

                            <div class="example-container p-6">
                                <Accordion>
                                    <AccordionItem id="border1" title="Item with Active Border" showActiveBorder
                                        defaultExpanded>
                                        <p class="tm-body">
                                            This accordion item has a vertical blue border on the left side when
                                            expanded.
                                            This provides a clear visual indication of the active item.
                                        </p>
                                    </AccordionItem>
                                    <AccordionItem id="border2" title="Another Item with Active Border"
                                        showActiveBorder>
                                        <p class="tm-body">
                                            All items with showActiveBorder prop will display the vertical indicator
                                            when
                                            expanded.
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
            &lt;Accordion&gt;
            &lt;AccordionItem id="border1" title="Item with Active Border" showActiveBorder defaultExpanded&gt;
            &lt;p class="tm-body"&gt;
            This accordion item has a vertical blue border on the left side when expanded.
            &lt;/p&gt;
            &lt;/AccordionItem&gt;
            &lt;AccordionItem id="border2" title="Another Item with Active Border" showActiveBorder&gt;
            &lt;p class="tm-body"&gt;
            All items with showActiveBorder prop will display the vertical indicator when expanded.
            &lt;/p&gt;
            &lt;/AccordionItem&gt;
            &lt;AccordionItem id="border3" title="Regular Item"&gt;
            &lt;p class="tm-body"&gt;
            This is a regular accordion item without the active border indicator for comparison.
            &lt;/p&gt;
            &lt;/AccordionItem&gt;
            &lt;/Accordion&gt;
        </code>
                            </div>
                        </section>

                        <!-- Active Border on Accordion -->
                        <section class="showcase-section mb-8">
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
                                    </AccordionItem>
                                    <AccordionItem id="accordBorder3" title="Override Example - No Active Border"
                                        :showActiveBorder="false">
                                        <p class="tm-body">
                                            Individual items can override the parent setting by explicitly setting
                                            showActiveBorder to false.
                                        </p>
                                    </AccordionItem>
                                </Accordion>
                            </div>

                            <div class="code-block p-4 rounded-lg mt-4">
                                <code class="block whitespace-pre-wrap">
            &lt;Accordion showActiveBorder&gt;
            &lt;AccordionItem id="accordBorder1" title="First Item" defaultExpanded&gt;
            &lt;p class="tm-body"&gt;
            All items in this accordion will show the active border when expanded.
            &lt;/p&gt;
            &lt;/AccordionItem&gt;
            &lt;AccordionItem id="accordBorder2" title="Second Item"&gt;
            &lt;p class="tm-body"&gt;
            No need to set showActiveBorder on each item individually.
            &lt;/p&gt;
            &lt;/AccordionItem&gt;
            &lt;AccordionItem id="accordBorder3" title="Override Example" :showActiveBorder="false"&gt;
            &lt;p class="tm-body"&gt;
            Individual items can override the parent setting.
            &lt;/p&gt;
            &lt;/AccordionItem&gt;
            &lt;/Accordion&gt;
        </code>
                            </div>
                        </section>

                        <!-- API Documentation -->
                        <Tab id="api" label="API">
                            <div class="mt-6">
                                <section class="showcase-section mb-8">
                                    <h2 class="tm-h2 mb-4">Accordion Component</h2>
                                    <p class="tm-body mb-4">
                                        The main container for accordion items.
                                    </p>

                                    <h3 class="tm-h3 mt-6 mb-2">Props</h3>
                                    <table class="w-full border-collapse">
                                        <thead>
                                            <tr class="border-b border-tm-gray-2">
                                                <th class="p-2 text-left">Prop</th>
                                                <th class="p-2 text-left">Type</th>
                                                <th class="p-2 text-left">Default</th>
                                                <th class="p-2 text-left">Description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="border-b border-tm-gray-2">
                                                <td class="p-2 font-mono">size</td>
                                                <td class="p-2 font-mono">'default' | 'compact'</td>
                                                <td class="p-2 font-mono">'default'</td>
                                                <td class="p-2">Size variant of the accordion</td>
                                            </tr>
                                            <tr class="border-b border-tm-gray-2">
                                                <td class="p-2 font-mono">borderless</td>
                                                <td class="p-2 font-mono">boolean</td>
                                                <td class="p-2 font-mono">false</td>
                                                <td class="p-2">Whether to display the accordion without a border</td>
                                            </tr>
                                            <tr class="border-b border-tm-gray-2">
                                                <td class="p-2 font-mono">allowMultiple</td>
                                                <td class="p-2 font-mono">boolean</td>
                                                <td class="p-2 font-mono">false</td>
                                                <td class="p-2">Whether multiple accordion items can be expanded at once
                                                </td>
                                            </tr>
                                            <tr class="border-b border-tm-gray-2">
                                                <td class="p-2 font-mono">showActiveBorder</td>
                                                <td class="p-2 font-mono">boolean</td>
                                                <td class="p-2 font-mono">false</td>
                                                <td class="p-2">Whether to show an active border on all accordion items
                                                    when expanded</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <h3 class="tm-h3 mt-6 mb-2">Slots</h3>
                                    <table class="w-full border-collapse">
                                        <thead>
                                            <tr class="border-b border-tm-gray-2">
                                                <th class="p-2 text-left">Name</th>
                                                <th class="p-2 text-left">Description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="border-b border-tm-gray-2">
                                                <td class="p-2 font-mono">default</td>
                                                <td class="p-2">Content for the accordion (AccordionItem components)
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </section>

                                <section class="showcase-section">
                                    <h2 class="tm-h2 mb-4">AccordionItem Component</h2>
                                    <p class="tm-body mb-4">
                                        Individual expandable/collapsible sections within an Accordion.
                                    </p>

                                    <h3 class="tm-h3 mt-6 mb-2">Props</h3>
                                    <table class="w-full border-collapse">
                                        <thead>
                                            <tr class="border-b border-tm-gray-2">
                                                <th class="p-2 text-left">Prop</th>
                                                <th class="p-2 text-left">Type</th>
                                                <th class="p-2 text-left">Default</th>
                                                <th class="p-2 text-left">Description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="border-b border-tm-gray-2">
                                                <td class="p-2 font-mono">id</td>
                                                <td class="p-2 font-mono">string</td>
                                                <td class="p-2 font-mono">required</td>
                                                <td class="p-2">Unique identifier for the accordion item</td>
                                            </tr>
                                            <tr class="border-b border-tm-gray-2">
                                                <td class="p-2 font-mono">title</td>
                                                <td class="p-2 font-mono">string</td>
                                                <td class="p-2 font-mono">required</td>
                                                <td class="p-2">Text to display in the accordion header</td>
                                            </tr>
                                            <tr class="border-b border-tm-gray-2">
                                                <td class="p-2 font-mono">icon</td>
                                                <td class="p-2 font-mono">string</td>
                                                <td class="p-2 font-mono">undefined</td>
                                                <td class="p-2">Optional icon to display before the title (uses Modus
                                                    icons)
                                                </td>
                                            </tr>
                                            <tr class="border-b border-tm-gray-2">
                                                <td class="p-2 font-mono">disabled</td>
                                                <td class="p-2 font-mono">boolean</td>
                                                <td class="p-2 font-mono">false</td>
                                                <td class="p-2">Whether the accordion item is disabled</td>
                                            </tr>
                                            <tr class="border-b border-tm-gray-2">
                                                <td class="p-2 font-mono">defaultExpanded</td>
                                                <td class="p-2 font-mono">boolean</td>
                                                <td class="p-2 font-mono">false</td>
                                                <td class="p-2">Whether the accordion item should be expanded by default
                                                </td>
                                            </tr>
                                            <tr class="border-b border-tm-gray-2">
                                                <td class="p-2 font-mono">showActiveBorder</td>
                                                <td class="p-2 font-mono">boolean</td>
                                                <td class="p-2 font-mono">false</td>
                                                <td class="p-2">Whether to show a vertical blue bar on the left side
                                                    when
                                                    expanded</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <h3 class="tm-h3 mt-6 mb-2">Slots</h3>
                                    <table class="w-full border-collapse">
                                        <thead>
                                            <tr class="border-b border-tm-gray-2">
                                                <th class="p-2 text-left">Name</th>
                                                <th class="p-2 text-left">Description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="border-b border-tm-gray-2">
                                                <td class="p-2 font-mono">default</td>
                                                <td class="p-2">Content inside the accordion item (displayed when
                                                    expanded)</td>
                                            </tr>
                                            <tr class="border-b border-tm-gray-2">
                                                <td class="p-2 font-mono">title</td>
                                                <td class="p-2">Custom content for the accordion header (replaces the
                                                    title
                                                    prop)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </section>
                            </div>
                        </Tab>

                        <Tab id="accessibility" label="Accessibility">
                            <div class="mt-6">
                                <section class="showcase-section">
                                    <h2 class="tm-h2 mb-4">Accessibility Considerations</h2>
                                    <p class="tm-body mb-4">
                                        The accordion component follows WAI-ARIA Authoring Practices for accordions,
                                        ensuring it's accessible to users of assistive technologies.
                                    </p>

                                    <h3 class="tm-h3 mt-6 mb-2">Keyboard Navigation</h3>
                                    <table class="w-full border-collapse">
                                        <thead>
                                            <tr class="border-b border-tm-gray-2">
                                                <th class="p-2 text-left">Key</th>
                                                <th class="p-2 text-left">Function</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="border-b border-tm-gray-2">
                                                <td class="p-2 font-mono">Enter / Space</td>
                                                <td class="p-2">Toggle the expansion state of the focused accordion item
                                                </td>
                                            </tr>
                                            <tr class="border-b border-tm-gray-2">
                                                <td class="p-2 font-mono">Tab</td>
                                                <td class="p-2">Move focus to the next focusable element</td>
                                            </tr>
                                            <tr class="border-b border-tm-gray-2">
                                                <td class="p-2 font-mono">Shift + Tab</td>
                                                <td class="p-2">Move focus to the previous focusable element</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <h3 class="tm-h3 mt-6 mb-2">ARIA Attributes</h3>
                                    <p class="tm-body mb-4">
                                        The accordion component uses appropriate ARIA attributes to ensure proper
                                        accessibility:
                                    </p>
                                    <ul class="list-disc pl-6 space-y-2">
                                        <li class="tm-body">
                                            <code>role="heading"</code> and <code>aria-level</code> for accordion
                                            headers
                                        </li>
                                        <li class="tm-body">
                                            <code>aria-expanded</code> to indicate the expansion state
                                        </li>
                                        <li class="tm-body">
                                            <code>aria-controls</code> to associate headers with their content
                                        </li>
                                        <li class="tm-body">
                                            <code>aria-disabled</code> for disabled accordion items
                                        </li>
                                        <li class="tm-body">
                                            <code>role="region"</code> and <code>aria-labelledby</code> for content
                                            panels
                                        </li>
                                    </ul>

                                    <h3 class="tm-h3 mt-6 mb-2">Best Practices</h3>
                                    <ul class="list-disc pl-6 space-y-2">
                                        <li class="tm-body">
                                            Use clear, descriptive titles for accordion items so users can understand
                                            the
                                            content without
                                            expanding
                                        </li>
                                        <li class="tm-body">
                                            Keep titles concise (ideally 5 words or fewer) to avoid wrapping
                                        </li>
                                        <li class="tm-body">
                                            Avoid nesting accordions within accordions, as this creates a confusing
                                            interface
                                        </li>
                                        <li class="tm-body">
                                            Ensure sufficient color contrast between text and background
                                        </li>
                                        <li class="tm-body">
                                            Don't hide critical content in accordions that might be missed by users
                                        </li>
                                    </ul>
                                </section>
                            </div>
                        </Tab>
                    </div>
                </Tab>

                <Tab id="api" label="API">
                    <div class="mt-6">
                        <section class="showcase-section mb-8">
                            <h2 class="tm-h2 mb-4">Accordion Component</h2>
                            <p class="tm-body mb-4">
                                The main container for accordion items.
                            </p>

                            <h3 class="tm-h3 mt-6 mb-2">Props</h3>
                            <table class="w-full border-collapse">
                                <thead>
                                    <tr class="border-b border-tm-gray-2">
                                        <th class="p-2 text-left">Prop</th>
                                        <th class="p-2 text-left">Type</th>
                                        <th class="p-2 text-left">Default</th>
                                        <th class="p-2 text-left">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b border-tm-gray-2">
                                        <td class="p-2 font-mono">size</td>
                                        <td class="p-2 font-mono">'default' | 'compact'</td>
                                        <td class="p-2 font-mono">'default'</td>
                                        <td class="p-2">Size variant of the accordion</td>
                                    </tr>
                                    <tr class="border-b border-tm-gray-2">
                                        <td class="p-2 font-mono">borderless</td>
                                        <td class="p-2 font-mono">boolean</td>
                                        <td class="p-2 font-mono">false</td>
                                        <td class="p-2">Whether to display the accordion without a border</td>
                                    </tr>
                                    <tr class="border-b border-tm-gray-2">
                                        <td class="p-2 font-mono">allowMultiple</td>
                                        <td class="p-2 font-mono">boolean</td>
                                        <td class="p-2 font-mono">false</td>
                                        <td class="p-2">Whether multiple accordion items can be expanded at once</td>
                                    </tr>
                                    <tr class="border-b border-tm-gray-2">
                                        <td class="p-2 font-mono">showActiveBorder</td>
                                        <td class="p-2 font-mono">boolean</td>
                                        <td class="p-2 font-mono">false</td>
                                        <td class="p-2">Whether to show an active border on all accordion items when
                                            expanded</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h3 class="tm-h3 mt-6 mb-2">Slots</h3>
                            <table class="w-full border-collapse">
                                <thead>
                                    <tr class="border-b border-tm-gray-2">
                                        <th class="p-2 text-left">Name</th>
                                        <th class="p-2 text-left">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b border-tm-gray-2">
                                        <td class="p-2 font-mono">default</td>
                                        <td class="p-2">Content for the accordion (AccordionItem components)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>

                        <section class="showcase-section">
                            <h2 class="tm-h2 mb-4">AccordionItem Component</h2>
                            <p class="tm-body mb-4">
                                Individual expandable/collapsible sections within an Accordion.
                            </p>

                            <h3 class="tm-h3 mt-6 mb-2">Props</h3>
                            <table class="w-full border-collapse">
                                <thead>
                                    <tr class="border-b border-tm-gray-2">
                                        <th class="p-2 text-left">Prop</th>
                                        <th class="p-2 text-left">Type</th>
                                        <th class="p-2 text-left">Default</th>
                                        <th class="p-2 text-left">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b border-tm-gray-2">
                                        <td class="p-2 font-mono">id</td>
                                        <td class="p-2 font-mono">string</td>
                                        <td class="p-2 font-mono">required</td>
                                        <td class="p-2">Unique identifier for the accordion item</td>
                                    </tr>
                                    <tr class="border-b border-tm-gray-2">
                                        <td class="p-2 font-mono">title</td>
                                        <td class="p-2 font-mono">string</td>
                                        <td class="p-2 font-mono">required</td>
                                        <td class="p-2">Text to display in the accordion header</td>
                                    </tr>
                                    <tr class="border-b border-tm-gray-2">
                                        <td class="p-2 font-mono">icon</td>
                                        <td class="p-2 font-mono">string</td>
                                        <td class="p-2 font-mono">undefined</td>
                                        <td class="p-2">Optional icon to display before the title (uses Modus icons)
                                        </td>
                                    </tr>
                                    <tr class="border-b border-tm-gray-2">
                                        <td class="p-2 font-mono">disabled</td>
                                        <td class="p-2 font-mono">boolean</td>
                                        <td class="p-2 font-mono">false</td>
                                        <td class="p-2">Whether the accordion item is disabled</td>
                                    </tr>
                                    <tr class="border-b border-tm-gray-2">
                                        <td class="p-2 font-mono">defaultExpanded</td>
                                        <td class="p-2 font-mono">boolean</td>
                                        <td class="p-2 font-mono">false</td>
                                        <td class="p-2">Whether the accordion item should be expanded by default</td>
                                    </tr>
                                    <tr class="border-b border-tm-gray-2">
                                        <td class="p-2 font-mono">showActiveBorder</td>
                                        <td class="p-2 font-mono">boolean</td>
                                        <td class="p-2 font-mono">false</td>
                                        <td class="p-2">Whether to show a vertical blue bar on the left side when
                                            expanded</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h3 class="tm-h3 mt-6 mb-2">Slots</h3>
                            <table class="w-full border-collapse">
                                <thead>
                                    <tr class="border-b border-tm-gray-2">
                                        <th class="p-2 text-left">Name</th>
                                        <th class="p-2 text-left">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b border-tm-gray-2">
                                        <td class="p-2 font-mono">default</td>
                                        <td class="p-2">Content inside the accordion item (displayed when expanded)</td>
                                    </tr>
                                    <tr class="border-b border-tm-gray-2">
                                        <td class="p-2 font-mono">title</td>
                                        <td class="p-2">Custom content for the accordion header (replaces the title
                                            prop)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>
                    </div>
                </Tab>

                <Tab id="accessibility" label="Accessibility">
                    <div class="mt-6">
                        <section class="showcase-section">
                            <h2 class="tm-h2 mb-4">Accessibility Considerations</h2>
                            <p class="tm-body mb-4">
                                The accordion component follows WAI-ARIA Authoring Practices for accordions,
                                ensuring it's accessible to users of assistive technologies.
                            </p>

                            <h3 class="tm-h3 mt-6 mb-2">Keyboard Navigation</h3>
                            <table class="w-full border-collapse">
                                <thead>
                                    <tr class="border-b border-tm-gray-2">
                                        <th class="p-2 text-left">Key</th>
                                        <th class="p-2 text-left">Function</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b border-tm-gray-2">
                                        <td class="p-2 font-mono">Enter / Space</td>
                                        <td class="p-2">Toggle the expansion state of the focused accordion item</td>
                                    </tr>
                                    <tr class="border-b border-tm-gray-2">
                                        <td class="p-2 font-mono">Tab</td>
                                        <td class="p-2">Move focus to the next focusable element</td>
                                    </tr>
                                    <tr class="border-b border-tm-gray-2">
                                        <td class="p-2 font-mono">Shift + Tab</td>
                                        <td class="p-2">Move focus to the previous focusable element</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h3 class="tm-h3 mt-6 mb-2">ARIA Attributes</h3>
                            <p class="tm-body mb-4">
                                The accordion component uses appropriate ARIA attributes to ensure proper accessibility:
                            </p>
                            <ul class="list-disc pl-6 space-y-2">
                                <li class="tm-body">
                                    <code>role="heading"</code> and <code>aria-level</code> for accordion headers
                                </li>
                                <li class="tm-body">
                                    <code>aria-expanded</code> to indicate the expansion state
                                </li>
                                <li class="tm-body">
                                    <code>aria-controls</code> to associate headers with their content
                                </li>
                                <li class="tm-body">
                                    <code>aria-disabled</code> for disabled accordion items
                                </li>
                                <li class="tm-body">
                                    <code>role="region"</code> and <code>aria-labelledby</code> for content panels
                                </li>
                            </ul>

                            <h3 class="tm-h3 mt-6 mb-2">Best Practices</h3>
                            <ul class="list-disc pl-6 space-y-2">
                                <li class="tm-body">
                                    Use clear, descriptive titles for accordion items so users can understand the
                                    content without
                                    expanding
                                </li>
                                <li class="tm-body">
                                    Keep titles concise (ideally 5 words or fewer) to avoid wrapping
                                </li>
                                <li class="tm-body">
                                    Avoid nesting accordions within accordions, as this creates a confusing interface
                                </li>
                                <li class="tm-body">
                                    Ensure sufficient color contrast between text and background
                                </li>
                                <li class="tm-body">
                                    Don't hide critical content in accordions that might be missed by users
                                </li>
                            </ul>
                        </section>
                    </div>
                </Tab>
            </Tabs>
        </div>
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
