export const RECEIVE_TWEETS = 'RECEIVE_TWEETS' //action type

export function receiveTweets (tweets) { //action
    return {
        type: RECEIVE_TWEETS,
        tweets,
    }
}