
export const listeNouvelles = async () => {
    const nouvellesURL = 'https://effix-commerce.bianka.devwebgarneau.com/wp-json/wp/v2/posts';
    const data = await (await (await fetch(nouvellesURL)).json());
    console.log(data);
    return data;
};
export default listeNouvelles;
