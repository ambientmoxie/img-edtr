<script>
  import Post from "./lib/components/Main/Post.svelte";
  import Form from "./lib/components/Main/Form.svelte";
  import LastUpdate from "./lib/components/Main/LastUpdate.svelte";
  import { generateFavIcon } from "./lib/js/helpers";

  generateFavIcon("#000");
</script>

<header>
  <span>img.edtr</span> tool is running. <br />
  Pre-branded images editor <br />
  ensuring brand integrity.
</header>

<div id="notice">
  <p>
    Clients often ask for a way to produce simple graphic assets by themselves
    after receiving new branding guidelines. This tool provides a basic yet
    effective framework to meet that need. It's designed to allow users to
    easily edit predesigned images by changing text and colors while adhering to
    rules that protect the integrity of the brand. It is set with a basic range
    of configuration options and can be easily modified and augmented.
  </p>
</div>

<Post />

<Form />

<div id="terms">
  <p>
    This website is developed using svelte (without sveltekit) and generates a
    bundle of static assets. The tool is obviously free; you can play around
    with it, modify it, us it in your projects and so on. Sources are available
    on <a href="https://github.com/ambientmoxie/img-edtr" target="_blank">
      github</a
    >. It is offered as-is and may contain bugs.
  </p>
</div>

<LastUpdate />
