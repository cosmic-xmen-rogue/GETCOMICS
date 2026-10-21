import {
    ContentRating,
    Source,
    SourceInfo,
    SourceIntents
} from '@paperback/types'

export const GetComicsInfo: SourceInfo = {
    version: '1.0.1',
    name: 'GetComics',
    icon: 'icon.png',
    author: 'S1MV3R',
    description: 'Test Paperback 0.8 source',
    contentRating: ContentRating.EVERYONE,
    websiteBaseURL: 'https://example.com',
    sourceTags: [],
    intents: SourceIntents.MANGA_CHAPTERS
}

export class GetComics extends Source {

}