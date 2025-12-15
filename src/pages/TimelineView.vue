<!-- src/views/TimelineView.vue -->
<template>
  <div class="timeline-page">
    <h1 class="timeline-header">My Journey</h1>
    <p class="timeline-description">
      Explore the milestones of my career, projects, and growth. This interactive timeline highlights key moments in my work and achievements.
    </p>
    <div class="timeline-container">
      <!-- Embed the timeline iframe -->
      <iframe
        src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=v2%3A2PACX-1vRMkzQ3OzgSDxVq-X7Wa5jamX8xcxXX9xN3lyZS9Xwxs8GWFPmL2cFoH2ssEecE-QqYI6Y-oSVQjAop&font=Default&lang=en&initial_zoom=2&width=100%25&height=650"
        width="100%"
        height="650"
        frameborder="0"
        allowfullscreen
        title="My Career Timeline"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimelineView'
};
</script>

<style scoped>
.timeline-page {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Arial', sans-serif;
}

.timeline-header {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.timeline-description {
  text-align: center;
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 40px;
}

.timeline-container {
  /* Make sure the iframe is responsive and adapts to different screen sizes */
  width: 100%;
  overflow: hidden;
}

iframe {
  border: none;
  width: 100%;
  height: 650px;
  max-width: 100%;
}
</style>
