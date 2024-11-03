<script>
  import { postConfig } from "../../js/stores";
  import { downloadPost } from "../../js/helpers";
  import ColorPicker from "../Subcomponents/ColorPicker.svelte";

  // Handle store update on input
  function handleInput(key, e) {
    postConfig.update((config) => {
      return {
        ...config,
        content: {
          ...config.content,
          [key]: e.target.value,
        },
      };
    });
  }

  // Creates placeholder text for input fields
  const inputPlaceholder = {
    content: {
      title: "Job title",
      description: "Job description (short)",
      salary: "Salary",
      location: "Location",
      contract: "Type of contract",
    },
    theme: {
      background: "Background-color (ex:#FFF)",
      text: "Text color (ex:#000)",
    },
  };
</script>

<div id="form">
  <!-- Defining all the content inputs (wording) -->
  {#each Object.entries($postConfig.content) as [key, _]}
    {#if key !== "description"}
      <input
        on:input={(e) => handleInput(key, e)}
        placeholder={inputPlaceholder.content[key]}
      />
    {:else}
      <textarea
        on:input={(e) => handleInput(key, e)}
        placeholder={inputPlaceholder.content[key]}
      />
    {/if}
  {/each}

  <!-- Defining all the theme inputs (colors) -->
  {#each Object.entries($postConfig.theme) as [key, _]}
    <ColorPicker {key} placeholder={inputPlaceholder.theme[key]} />
  {/each}
</div>

<button on:click={() => downloadPost(2000, $postConfig.target)} class="download"
  >download</button
>

<style lang="scss">
  #form {
    display: grid;
    gap: var(--spacing-sm);
    width: 100%;
    max-width: 33rem;
  }

  textarea {
    resize: none;
    height: 10rem;
  }

  :global(input),
  :global(textarea) {
    border: 1px solid var(--border-color);
    background-color: var(--input-background);
    border-radius: 0%;
    padding: 1rem;
    color: var(--input-text-color);
    height: 4rem;

    &::placeholder {
      color: var(--input-placeholder-color);
    }

    &:hover {
      background-color: var(--input-background-active);
    }
    &:focus,
    &:focus-visible {
      border: 1px solid var(--border-color);
      background-color: var(--input-background-active);
      outline: none;
    }
  }
</style>
