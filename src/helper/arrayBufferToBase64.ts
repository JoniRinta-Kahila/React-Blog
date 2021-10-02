export const ArrayBufferToBase64 = ( buffer: ArrayBuffer ) => {
  let binary: string = '';
  const bytes = new Uint8Array( buffer );
  const len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
      binary += String.fromCharCode( bytes[ i ] );
  }
  return window.btoa( binary );
};
