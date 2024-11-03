import { writable } from "svelte/store";

export let postConfig = writable({
  content: {
    title: "Software Engineer, Node/React, Experienced.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt ipsum at blandit molestie. Suspendisse condimentum tellus id mattis auctor. Sed tincidunt congue ipsum ullamcorper rhoncus. Etiam sodales auctor lacus, auctor scelerisque enim.",
    salary: "60K to 50K",
    location: "Paris and remote",
    contract: "Open-ended contract",
  },
  theme: { background: "#fff", text: "#000" },
  target: null,
});
