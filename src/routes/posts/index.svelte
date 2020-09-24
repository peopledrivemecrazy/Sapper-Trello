<script context="module">
  export async function preload({ params, query }) {
    return await this.fetch(`posts.json`)
      .then((r) => r.json())
      .then((posts) => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
  li {
    list-style-type: none;
    padding: 1em;
    border: 1px solid #ff3e00;
    margin: 2em 0;
    box-shadow: 15px 16px #ff3e00;
    font-size: 20px;
  }
  li:hover {
    border: 1px solid #033d2a;
    box-shadow: 8px 6px #033d2a;
    transition: box-shadow 0.3s ease-in-out;
    color: #033d2a;
  }
  a {
    text-decoration: none;
  }
  .date {
    color: #ff3e00;
  }
  .tags {
    margin: 4px;
    padding: 0 1em;
  }
  :global(.yellow) {
    background-color: yellow;
    color: black;
  }
  :global(.green) {
    background-color: green;
    color: black;
  }
  :global(.orange) {
    background-color: orange;
    color: black;
  }
  :global(.black) {
    background-color: black;
    color: white;
  }
</style>

<svelte:head>
  <title>Posts</title>
</svelte:head>

<h1>Recent posts</h1>

<ul>
  {#if posts.length != 0}
    {#each posts as post}
      <!-- we're using the non-standard `rel=prefetch` attribute to
			  tell Sapper to load the data for the page as soon as
			  the user hovers over the link or taps it, instead of
			  waiting for the 'click' event -->
      <a rel="prefetch" href="posts/{post.slug}">
        <li>
          {post.title}
          <p class="date">{post.time}</p>
          {#each post.tags as tag}
            <span class="tags {tag.color}">{tag.name}</span>
          {/each}
        </li>
      </a>
    {/each}
  {:else}
    <a href="https://trello.com/b/MNURR8Sv/blog-with-trello" target="_blank">
      <li>
        <p>No Posts yet, begin your journey on trello</p>
      </li>
    </a>
  {/if}
</ul>
