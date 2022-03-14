export const retrieve = (offset) => {
    return fetch(`https://api.spaceflightnewsapi.net/v3/articles?_limit=10&_start=${offset}`).then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            console.log('mauvaise réponse');
        }
    })
}