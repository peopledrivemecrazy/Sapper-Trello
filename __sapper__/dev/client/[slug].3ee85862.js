import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as validate_each_argument, v as validate_slots, e as element, t as text, f as claim_element, g as children, h as claim_text, b as detach_dev, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, p as set_data_dev, a as space, q as query_selector_all, c as claim_space, n as noop, r as destroy_each } from './client.852e2202.js';

/* src\routes\posts\[slug].svelte generated by Svelte v3.24.1 */

const file = "src\\routes\\posts\\[slug].svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	return child_ctx;
}

// (100:0) {#each post.tags as tag}
function create_each_block(ctx) {
	let span;
	let t_value = /*tag*/ ctx[1].name + "";
	let t;
	let span_class_value;

	const block = {
		c: function create() {
			span = element("span");
			t = text(t_value);
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t = claim_text(span_nodes, t_value);
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span, "class", span_class_value = "tags " + /*tag*/ ctx[1].color + " svelte-1xd2thh");
			add_location(span, file, 99, 24, 2144);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span, anchor);
			append_dev(span, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*post*/ 1 && t_value !== (t_value = /*tag*/ ctx[1].name + "")) set_data_dev(t, t_value);

			if (dirty & /*post*/ 1 && span_class_value !== (span_class_value = "tags " + /*tag*/ ctx[1].color + " svelte-1xd2thh")) {
				attr_dev(span, "class", span_class_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(span);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(100:0) {#each post.tags as tag}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let title_value;
	let t0;
	let h1;
	let t1_value = /*post*/ ctx[0].title + "";
	let t1;
	let t2;
	let p;
	let t3_value = /*post*/ ctx[0].time + "";
	let t3;
	let t4;
	let t5;
	let div;
	let t6_value = /*post*/ ctx[0].desc + "";
	let t6;
	document.title = title_value = /*post*/ ctx[0].title;
	let each_value = /*post*/ ctx[0].tags;
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text(t1_value);
			t2 = space();
			p = element("p");
			t3 = text(t3_value);
			t4 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t5 = space();
			div = element("div");
			t6 = text(t6_value);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-iu3vwn\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, t1_value);
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			p = claim_element(nodes, "P", {});
			var p_nodes = children(p);
			t3 = claim_text(p_nodes, t3_value);
			p_nodes.forEach(detach_dev);
			t4 = claim_space(nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			t5 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			t6 = claim_text(div_nodes, t6_value);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file, 91, 0, 1950);
			add_location(p, file, 98, 0, 2100);
			attr_dev(div, "class", "content svelte-1xd2thh");
			add_location(div, file, 101, 0, 2203);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h1, anchor);
			append_dev(h1, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, p, anchor);
			append_dev(p, t3);
			insert_dev(target, t4, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, t5, anchor);
			insert_dev(target, div, anchor);
			append_dev(div, t6);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*post*/ 1 && title_value !== (title_value = /*post*/ ctx[0].title)) {
				document.title = title_value;
			}

			if (dirty & /*post*/ 1 && t1_value !== (t1_value = /*post*/ ctx[0].title + "")) set_data_dev(t1, t1_value);
			if (dirty & /*post*/ 1 && t3_value !== (t3_value = /*post*/ ctx[0].time + "")) set_data_dev(t3, t3_value);

			if (dirty & /*post*/ 1) {
				each_value = /*post*/ ctx[0].tags;
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(t5.parentNode, t5);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}

			if (dirty & /*post*/ 1 && t6_value !== (t6_value = /*post*/ ctx[0].desc + "")) set_data_dev(t6, t6_value);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(p);
			if (detaching) detach_dev(t4);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(t5);
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

async function preload({ params, query }) {
	// the `slug` parameter is available because
	// this file is called [slug].svelte
	const res = await this.fetch(`posts/${params.slug}.json`);

	const data = await res.json();

	if (res.status === 200) {
		return { post: data };
	} else {
		this.error(res.status, data.message);
	}
}

function instance($$self, $$props, $$invalidate) {
	let { post } = $$props;
	const writable_props = ["post"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<U5Bslugu5D> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("U5Bslugu5D", $$slots, []);

	$$self.$$set = $$props => {
		if ("post" in $$props) $$invalidate(0, post = $$props.post);
	};

	$$self.$capture_state = () => ({ preload, post });

	$$self.$inject_state = $$props => {
		if ("post" in $$props) $$invalidate(0, post = $$props.post);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [post];
}

class U5Bslugu5D extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { post: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Bslugu5D",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*post*/ ctx[0] === undefined && !("post" in props)) {
			console.warn("<U5Bslugu5D> was created without expected prop 'post'");
		}
	}

	get post() {
		throw new Error("<U5Bslugu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set post(value) {
		throw new Error("<U5Bslugu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default U5Bslugu5D;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3NsdWddLjNlZTg1ODYyLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL3Bvc3RzL1tzbHVnXS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XHJcbiAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZWxvYWQoeyBwYXJhbXMsIHF1ZXJ5IH0pIHtcclxuICAgIC8vIHRoZSBgc2x1Z2AgcGFyYW1ldGVyIGlzIGF2YWlsYWJsZSBiZWNhdXNlXHJcbiAgICAvLyB0aGlzIGZpbGUgaXMgY2FsbGVkIFtzbHVnXS5zdmVsdGVcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuZmV0Y2goYHBvc3RzLyR7cGFyYW1zLnNsdWd9Lmpzb25gKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICByZXR1cm4geyBwb3N0OiBkYXRhIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmVycm9yKHJlcy5zdGF0dXMsIGRhdGEubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgZXhwb3J0IGxldCBwb3N0O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuICAvKlxyXG5cdFx0QnkgZGVmYXVsdCwgQ1NTIGlzIGxvY2FsbHkgc2NvcGVkIHRvIHRoZSBjb21wb25lbnQsXHJcblx0XHRhbmQgYW55IHVudXNlZCBzdHlsZXMgYXJlIGRlYWQtY29kZS1lbGltaW5hdGVkLlxyXG5cdFx0SW4gdGhpcyBwYWdlLCBTdmVsdGUgY2FuJ3Qga25vdyB3aGljaCBlbGVtZW50cyBhcmVcclxuXHRcdGdvaW5nIHRvIGFwcGVhciBpbnNpZGUgdGhlIHt7e3Bvc3QuaHRtbH19fSBibG9jayxcclxuXHRcdHNvIHdlIGhhdmUgdG8gdXNlIHRoZSA6Z2xvYmFsKC4uLikgbW9kaWZpZXIgdG8gdGFyZ2V0XHJcblx0XHRhbGwgZWxlbWVudHMgaW5zaWRlIC5jb250ZW50XHJcblx0Ki9cclxuICAuY29udGVudCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmYzZTAwO1xyXG4gICAgYm94LXNoYWRvdzogMTVweCAxNnB4ICNmZjNlMDA7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgfVxyXG4gIC5jb250ZW50IDpnbG9iYWwoaDIpIHtcclxuICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQgOmdsb2JhbChwcmUpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gICAgcGFkZGluZzogMC41ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQgOmdsb2JhbChwcmUpIDpnbG9iYWwoY29kZSkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQgOmdsb2JhbCh1bCkge1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICB9XHJcblxyXG4gIC5jb250ZW50IDpnbG9iYWwobGkpIHtcclxuICAgIG1hcmdpbjogMCAwIDAuNWVtIDA7XHJcbiAgfVxyXG4gIDpnbG9iYWwoaW1nKSB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB3aWR0aDogNjQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC8qIC5mZWF0dXJlZC1pbWFnZXtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9ICovXHJcbiAgLnRhZ3Mge1xyXG4gICAgbWFyZ2luOiA0cHg7XHJcbiAgICBwYWRkaW5nOiAwIDFlbTtcclxuICB9XHJcbiAgOmdsb2JhbCgueWVsbG93KSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIDpnbG9iYWwoLmdyZWVuKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgOmdsb2JhbCgub3JhbmdlKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIDpnbG9iYWwoLmJsYWNrKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbjwvc3R5bGU+XHJcblxyXG48c3ZlbHRlOmhlYWQ+XHJcbiAgPHRpdGxlPntwb3N0LnRpdGxlfTwvdGl0bGU+XHJcbjwvc3ZlbHRlOmhlYWQ+XHJcblxyXG48aDE+e3Bvc3QudGl0bGV9PC9oMT5cclxuXHJcbjwhLS0gPGRpdiBjbGFzcz1cImZlYXR1cmVkLWltYWdlXCI+XHJcblx0eyNpZiBwb3N0LmltYWdlfSBcclxuXHRcdDxpbWcgc3JjPXtwb3N0LmltYWdlWzNdLnVybH0gYWx0PXtwb3N0LnRpdGxlfT5cclxuXHR7L2lmfVxyXG48L2Rpdj4gLS0+XHJcbjxwPntwb3N0LnRpbWV9PC9wPlxyXG57I2VhY2ggcG9zdC50YWdzIGFzIHRhZ308c3BhbiBjbGFzcz1cInRhZ3Mge3RhZy5jb2xvcn1cIj57dGFnLm5hbWV9PC9zcGFuPnsvZWFjaH1cclxuXHJcbjxkaXYgY2xhc3M9XCJjb250ZW50XCI+e3Bvc3QuZGVzY308L2Rpdj5cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozt1QkFtR3dELEdBQUcsSUFBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0VBQXJCLEdBQUcsSUFBQyxLQUFLOzs7Ozs7Ozs0REFBSSxHQUFHLElBQUMsSUFBSTs7d0ZBQXJCLEdBQUcsSUFBQyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJBUi9DLEdBQUksSUFBQyxLQUFLOzs7O3lCQU9YLEdBQUksSUFBQyxJQUFJOzs7Ozt5QkFHUyxHQUFJLElBQUMsSUFBSTs7eUNBYnJCLEdBQUksSUFBQyxLQUFLOzJCQVdiLEdBQUksSUFBQyxJQUFJOzs7O2dDQUFkLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUVBWEksR0FBSSxJQUFDLEtBQUs7Ozs7K0RBR2YsR0FBSSxJQUFDLEtBQUs7K0RBT1gsR0FBSSxJQUFDLElBQUk7OzswQkFDTixHQUFJLElBQUMsSUFBSTs7OzsrQkFBZCxNQUFJOzs7Ozs7Ozs7Ozs7Ozs7O29DQUFKLE1BQUk7OzsrREFFZ0IsR0FBSSxJQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQXBHUCxPQUFPLEdBQUcsTUFBTSxFQUFFLEtBQUs7OztPQUdyQyxHQUFHLFNBQVMsSUFBSSxDQUFDLEtBQUssVUFBVSxNQUFNLENBQUMsSUFBSTs7T0FDM0MsSUFBSSxTQUFTLEdBQUcsQ0FBQyxJQUFJOztLQUN2QixHQUFHLENBQUMsTUFBTSxLQUFLLEdBQUc7V0FDWCxJQUFJLEVBQUUsSUFBSTs7RUFFbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPOzs7OztPQU01QixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==