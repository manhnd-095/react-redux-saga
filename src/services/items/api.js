// import axios from 'axios';
// import { deserialise } from 'kitsu-core';

// const endPoints = {
//     items: 'items', // GET
// };

export const getItemsList = () => {
    return {
        data: [
            {
                id: 1,
                value: 'Hello'
            },
            {
                id: 2,
                value: 'I"m Redux Saga'
            }
        ]
    }
    // return new Promise((resolve, reject) => {
    //     axios
    //         .get(endPoints.banners)
    //         .then((result) => {
    //             return deserialise(result.data);
    //         })
    //         .then((res) => {
    //             resolve(res);
    //         })
    //         .catch((err) => {
    //             reject(err);
    //         });
    // });
};
