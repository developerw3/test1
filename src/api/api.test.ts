import axios from 'axios';
import { getStories, getDataTypeById } from "./api";

jest.mock('axios');

test('Should fetch stories ids', async() => {
  
    const stories = [111, 222, 333, 444, 555];

    const response = {data: stories};
    
    axios.get.mockResolvedValue(response);

    return getStories().then(data => expect(data.data).toEqual(stories));
});

test('should fetch story details', async() => {
  
    const story = {
            id: '111',
            by: 'Author 3',
            title: 'Title 3',
            kids: [233223, 104545, 29323, 29382398, 81837239, 1212],
            time: 3434123,
            url: 'www.weoiks.com',
        };

    const response = {data: story};
    
    axios.get.mockResolvedValue(response);

    return getDataTypeById(111).then(data => expect(data.data).toEqual(story));
});
