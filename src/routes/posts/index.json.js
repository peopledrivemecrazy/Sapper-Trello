import trello from "./_posts.js";

export async function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });
  let data = await trello();
  let posts = data;
  posts = posts.map((post) => {
    return {
      title: post.title,
      slug: post.slug,
      time: post.time,
      tags: post.tags,
    };
  });
  res.end(JSON.stringify(posts));
}
