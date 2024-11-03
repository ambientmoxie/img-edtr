<script>
  import { onMount } from "svelte";
  import { get } from "svelte/store";
  import { postConfig } from "../../js/stores";
  import Logo from "../Subcomponents/Logo.svelte";

  let myPost;

  // Shallow copy. Freezes data at the initial point.
  const initialContent = { ...get(postConfig).content };

  // Return initial value if no text is provided
  function preventEmpty(content, key) {
    const contentIsEmpty = content.trim() === "";
    const currentContent = !contentIsEmpty ? content : initialContent[key];
    return currentContent;
  }

  onMount(() => {
    // We are setting the target to download immediately after the component is mounted
    postConfig.update((config) => {
      return {
        ...config,
        target: myPost,
      };
    });
  });
</script>

<div id="post-container">
  <div
    bind:this={myPost}
    id="post"
    style="background-color: {$postConfig.theme.background}; color: {$postConfig
      .theme.text}"
  >
    <div id="post-header">we are hiring</div>
    <div id="post-title">
      {preventEmpty($postConfig.content.title, "title")}
    </div>
    <div id="post-body">
      <div id="post-logo"><Logo /></div>
      <div id="post-wording">
        {preventEmpty($postConfig.content.description, "description")}
      </div>
    </div>
    <ul id="post-footer">
      <li>
        <ul>
          <li>Salary:</li>
          <li>Location:</li>
          <li>Contract</li>
        </ul>
      </li>
      <li>
        <ul>
          <li>
            {preventEmpty($postConfig.content.salary, "salary")}
          </li>
          <li>
            {preventEmpty($postConfig.content.location, "location")}
          </li>
          <li>
            {preventEmpty($postConfig.content.contract, "contract")}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>

<style lang="scss">
  @mixin lineConstrain($nbr) {
    display: -webkit-box;
    -webkit-line-clamp: $nbr;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  #post-container {
    width: 330px;
    aspect-ratio: 1/1;
    border: 1px solid var(--border-color);
  }

  #post {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: var(--spacing-rg);
    line-height: 1.1;
    pointer-events: none;
    overflow: hidden;

    ::selection {
      background-color: transparent;
    }

    #post-header {
      text-transform: uppercase;
      font-size: 1rem;
      margin-bottom: 3rem;
      line-height: 1;
    }
    #post-title {
      text-transform: uppercase;
      font-weight: 700;
      font-size: 1.9rem;
      margin-bottom: 1.5rem;
      @include lineConstrain(3);
    }

    #post-body,
    #post-footer {
      font-size: 1.1rem;
    }

    #post-body {
      display: flex;
      > * {
        flex: 1;
      }
      #post-logo {
        display: flex;
        align-items: flex-end;
      }
      #post-wording {
        @include lineConstrain(9);
      }
    }

    ul#post-footer {
      display: flex;
      margin-top: auto;
      > * {
        flex: 1;
      }
      > li:nth-child(2) ul > li {
        @include lineConstrain(1);
      }
    }
  }
</style>
