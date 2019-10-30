import IStoriesDetails from '../models/StoriesDetails';

export default interface IStoriesDetailsAction {
    type: string;
    data: IStoriesDetails;
};
