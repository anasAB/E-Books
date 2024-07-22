interface VolumeInfo {
  title: string
  authors: string[]
  subtitle: string
  publisher: string
  publishedDate: string | null
  description: string
  industryIdentifiers: { type: string; identifier: string }[] | null
  readingModes: { text: boolean; image: boolean }
  pageCount: number
  printType: string
  categories: string[] | null
  maturityRating: string
  allowAnonLogging: boolean
  contentVersion: string
  panelizationSummary: {
    containsEpubBubbles: boolean
    containsImageBubbles: boolean
  } | null
  imageLinks: {
    smallThumbnail: string
    thumbnail: string
  }
  language: string
  previewLink: string
  infoLink: string
  canonicalVolumeLink: string
  averageRating: number
  ratingsCount: number
}

interface SaleInfo {
  country: string
  saleability: string
  isEbook: boolean
  listPrice: { amount: number; currencyCode: string } | null
  retailPrice: { amount: number; currencyCode: string } | null
  buyLink: string
  offers:
    | {
        finskyOfferType: number
        listPrice: { amountInMicros: number; currencyCode: string }
        retailPrice: { amountInMicros: number; currencyCode: string }
        giftable: boolean
      }[]
    | null
}

interface AccessInfo {
  country: string
  viewability: string
  embeddable: boolean
  publicDomain: boolean
  textToSpeechPermission: string
  epub: { isAvailable: boolean; acsTokenLink: string }
  pdf: { isAvailable: boolean; acsTokenLink: string }
  webReaderLink: string
  accessViewStatus: string
  quoteSharingAllowed: boolean
}

interface SearchInfo {
  textSnippet: string
}

export interface BookObject {
  //TODO replace it wiht IBookObject
  kind: string
  id: string
  etag: string
  selfLink: string
  volumeInfo: VolumeInfo
  saleInfo: SaleInfo
  accessInfo: AccessInfo
  searchInfo: SearchInfo
}
