declare module '@sanity/image-url' {
  // Minimal type declarations to satisfy TypeScript when package doesn't export types
  export type SanityImageSource = any

  type ImageUrlBuilder = {
    (source: SanityImageSource): any
    image: (source: SanityImageSource) => any
  }

  const imageUrlBuilder: (client: any) => ImageUrlBuilder
  export default imageUrlBuilder
}
