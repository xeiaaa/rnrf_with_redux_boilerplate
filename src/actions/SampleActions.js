import {
    SAMPLE_ACTION
} from './types';

export const doSampleAction = (data) => {
    return {
        type: SAMPLE_ACTION,
        payload: data
    }
}

export const doSampleAsyncAction = (data) => {
    return (dispatch) => {

        setTimeout(() => {
            dispatch({
                type: SAMPLE_ACTION,
                payload; data
            })
        }, 5000)

    }
}