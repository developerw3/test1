export interface IStoryDetail {
    id: string,
    by: string,
    title: string,
    kids: Array<number>,
    time: number,
    url: string,
}

export default interface IStoriesDetails extends Array<IStoryDetail>{};
