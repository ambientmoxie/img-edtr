<script>
  // @ts-nocheck

  import { clickOutside, capitalize } from "../js/helpers.js";
  import { postConfig } from "../js/stores.js";

  export let value = null;
  export let key = null;
  export let placeholder = null;
  export let defaultColor = null;

  // Predefined color set
  const values = [
    "#DAAFE9",
    "#C7DBF5",
    "#AAD5FB",
    "#ADE5DA",
    "#B0EDC3",
    "#FDF0A4",
    "#F8D6A2",
    "#C47ADA",
    "#90BAEE",
    "#75BAFA",
    "#72D5BF",
    "#73DE8C",
    "#FBE66E",
    "#F5B969",
    "#AE44B7",
    "#5E7ABC",
    "#4C6DAA",
    "#4DACA9",
    "#63B75A",
    "#EDBD4A",
    "#EC9740",
    "#501B87",
    "#021B6B",
    "#0C2794",
    "#337277",
    "#2F6A52",
    "#AE802F",
    "#AD6127",
  ];

  let ddActive = false;

  // Toggle dropdown visibility
  const toggleDropdown = () => (ddActive = !ddActive);

  // Close dropdown when clicked outside
  const clickOutsideDropdown = () => (ddActive = false);

  // Update color and store value
  const updateValue = (newValue) => {
    value = newValue;
    postConfig.update((config) => ({
      ...config,
      theme: {
        ...config.theme,
        [key]: value,
      },
    }));
    ddActive = false;
  };
</script>

<div class="color-picker-inner">
  <input
    type="text"
    {placeholder}
    on:input={(e) => updateValue(e.target.value)}
    bind:value
  />
  <button
    class="select-color"
    on:click={toggleDropdown}
    class:fake-focus={ddActive}
    style="background: {value || defaultColor};"
  >
  </button>
</div>

{#if ddActive}
  <div
    class="values-dropdown"
    use:clickOutside
    on:click_outside={clickOutsideDropdown}
  >
    <div class="values-dropdown-grid">
      {#each values as val}
        <button
          class:active={val === value}
          style="background: {val};"
          on:click={() => updateValue(val)}
          class="color-block"
        >
        </button>
      {/each}
    </div>
  </div>
{/if}

<style lang="scss">


  input {
    flex: 1;
  }

  .color-picker-inner {
    display: flex;
    gap: var(--spacing-sm);
  }

  .select-color {
    width: 4rem;
    aspect-ratio: 1/1;
    height: var(--input-height); // fallback
    border: 1px solid var(--border-color);
  }

  .active {
    box-shadow:
      inset 0 0 0 1px #fff,
      0 0 3px 1px rgba(0, 0, 0, 0.25);
  }

  .color-block {
    line-height: 0;
    font-size: 0;
  }

  .values-dropdown {
    padding: 1rem;
    z-index: 1;
    background: transparent;
    border: 1px solid var(--border-color);
  }

  .values-dropdown-grid {
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(4, 30px);
    grid-gap: 10px;
    display: grid;
  }

  .values-dropdown button {
    border: none;
  }
</style>
