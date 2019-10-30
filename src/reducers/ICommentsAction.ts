import IComments from '../models/Comments';

export default interface ICommentsAction {
    type: string;
    data: IComments;
};
