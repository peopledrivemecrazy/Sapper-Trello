import trello from './_posts.js';


const lookup = new Map();


export async function get(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
	const { slug } = req.params;
	let data = await trello()
	data.forEach(e => {
		lookup.set(e.slug, JSON.stringify(e));
	});
	if (lookup.has(slug)) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(lookup.get(slug));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}


}
