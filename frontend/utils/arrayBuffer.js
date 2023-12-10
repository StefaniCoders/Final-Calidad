export function arrayBufferToBase64(buffer) {
  const uin8tArray = new Uint8Array(buffer);
  const base64String = btoa(String.fromCharCode.apply(null, uin8tArray));

  return `data:image/webp;base64,${base64String}`;
}
