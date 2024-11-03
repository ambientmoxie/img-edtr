// @ts-ignore
import { saveAs } from "file-saver";
import * as htmlToImage from "html-to-image";

// Handle target cloning
async function cloneImage(target, scale) {
  // Get the device pixel ratio.
  const dpr = window.devicePixelRatio || 1;
  // Setting correct width and height depending on scale and drp.
  const width = (target.offsetWidth * scale) / dpr;
  const height = (target.offsetHeight * scale) / dpr;

  // Creating the blob
  const dataUrl = await htmlToImage.toBlob(target, {
    quality: 1,
    width: width,
    height: height,
    style: {
      transform: `scale(${scale / dpr})`, // Dpr correction
      transformOrigin: "top left",
    },
  });

  return dataUrl;
}

// Download the post
export async function downloadPost(size, target) {
  // Get the width of the targeted post
  const rect = target.offsetWidth;
  // Calculate the scale factor based on desired size (2000x2000)
  const scale = size / rect;
  // Clone the image using the previous values
  const blob = await cloneImage(target, scale);
  saveAs(blob, "my-image.png");
}

/* Generate basic favicon */
export function generateFavIcon(color) {
  const canvas = document.createElement("canvas");
  // Set favicon size
  canvas.width = 64;
  canvas.height = 64;
  const context = canvas.getContext("2d");

  // Draw the shape
  context.beginPath();
  context.arc(32, 32, 32, 0, 2 * Math.PI);
  context.fillStyle = color;
  context.fill();

  // Create and append favicon link
  const link = document.createElement("link");
  link.rel = "icon";
  link.href = canvas.toDataURL("image/png");
  document.head.appendChild(link);
}
