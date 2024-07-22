export interface IBooks {
  kind: string
  id: string
  etag: string
  selfLink: string
  volumeInfo: IVolumeInfo
  saleInfo: ISaleInfo
  accessInfo: IAccessInfo
  searchInfo: ISearchInfo
}

interface IVolumeInfo {
  title: string
  subtitle: string
  authors: string[]
  publisher: string
  publishedDate: string
  description: string
  industryIdentifiers: [
    {
      type: string
      identifier: string
    }
  ]

  readingModes: {
    text: boolean
    image: boolean
  }

  pageCount: number
  printType: string
  categories: string[]
  maturityRating: string
  allowAnonLogging: boolean
  contentVersion: string
  imageLinks: {
    smallThumbnail: string
    thumbnail: string
  }

  language: string
  previewLink: string
  infoLink: string
  canonicalVolumeLink: string
}

interface ISaleInfo {
  country: string
  saleability: string
  isEbook: boolean
}

interface IAccessInfo {
  country: string
  viewability: string
  embeddable: boolean
  publicDomain: boolean
  textToSpeechPermission: string
  epub: {
    isAvailable: boolean
  }
  pdf: {
    isAvailable: boolean
  }
  webReaderLink: string
  accessViewStatus: string
  quoteSharingAllowed: boolean
}

interface ISearchInfo {
  textSnippet: string
}
