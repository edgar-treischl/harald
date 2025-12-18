<template>
  <v-container class="py-10">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <h1 class="text-h4 font-weight-bold mb-6">
          License
        </h1>

        <h2 class="text-h6 font-weight-medium mb-3">
          Written Content
        </h2>

        <p class="mb-4">
          Unless stated otherwise, all blog posts, articles, and original written
          content on this website are released under the
          <strong>
            Creative Commons Attribution-ShareAlike 4.0 International License
            (CC BY-SA 4.0)
          </strong>.
        </p>

        <p class="mb-4">You are free to:</p>

        <ul class="mb-6">
          <li>Share — copy and redistribute the material in any medium or format</li>
          <li>Adapt — remix, transform, and build upon the material</li>
        </ul>

        <p class="mb-4">Under the following terms:</p>

        <ul class="mb-8">
          <li>
            <strong>Attribution</strong> — You must give appropriate credit,
            provide a link to the license, and indicate if changes were made.
          </li>
          <li>
            <strong>ShareAlike</strong> — If you remix, transform, or build upon
            the material, you must distribute your contributions under the same
            license.
          </li>
        </ul>

        <p class="mb-8">
          The full license text is available at:
          <br />
          <a
            href="https://creativecommons.org/licenses/by-sa/4.0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://creativecommons.org/licenses/by-sa/4.0/
          </a>
        </p>

        <v-divider class="my-8" />

        <h2 class="text-h6 font-weight-medium mb-3">
          Source Code
        </h2>

        <p class="mb-8">
          Source code snippets, examples, and repositories published on this
          website, unless stated otherwise, are released under the
          <strong>MIT License</strong>.
        </p>

        <v-divider class="my-8" />

        <h2 class="text-h6 font-weight-medium mb-3">
          Media and Third-Party Content
        </h2>

        <p class="mb-8">
          Images, figures, diagrams, logos, and other media may be subject to
          different licensing terms. Third-party content is the property of
          their respective owners and is used in accordance with their licenses
          or with permission.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
