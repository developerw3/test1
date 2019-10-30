export interface IComment {
    id: string,
    by: string,
    text: string,
}

export default interface IComments extends Array<IComment>{};
