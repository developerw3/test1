import IStoriesIds from '../models/StoriesIds';

export default interface IStoriesIdsAction {
    type: string;
    data: IStoriesIds;
};
