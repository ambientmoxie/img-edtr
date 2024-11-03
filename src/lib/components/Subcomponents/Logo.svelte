<script>
  import { get } from "svelte/store";
  import { postConfig } from "../../js/stores";

  const intialColor = { ...get(postConfig).theme };
</script>

<svg
  width="20"
  height="30"
  viewBox="0 0 20 30"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g clip-path="url(#clip0_2040_70)">
    <path
      d="M7.84333 20.9269L8.97548 12.2228L2.18457 17.6499L0 13.7922L7.98087 10.4543L0.00398645 7.0961L2.18059 3.23842L8.96352 8.67166L7.84333 0H12.1427L10.9727 8.70008L17.7915 3.23639L19.9741 7.10625L11.9952 10.4299L19.9681 13.7943L17.7995 17.6499L10.9687 12.1964L12.1527 20.9269H7.84333Z"
      fill={$postConfig.theme.text || intialColor.text}
    />
    <path
      d="M20 26.2993H0V29.4119H20V26.2993Z"
      fill={$postConfig.theme.text || intialColor.text}
    />
  </g>
  <defs>
    <clipPath id="clip0_2040_70">
      <rect width="20" height="29.4118" fill="white" />
    </clipPath>
  </defs>
</svg>
