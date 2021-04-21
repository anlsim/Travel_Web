import React,  {useState, useEffect} from 'react';
import updateContent from '../Updates-content/Update-content';
import UpdatesList from '../../pages/BlogPage/BlogPage';
import NotFoundPage from '../../pages/ErrorsPage/NotFoundPage';

const UpdatePage = ({match}) => {
    const stateName = match.params.stateName;
    const update = updateContent.find(update => update.stateName === stateName);
    const [updateInfo, setArticleInfo] = useState({likes: 0, comments: []});
    useEffect(()=>{
        const fetchData = async() => {
            const result = await fetch(`/api/articles/${update}`);
            const body = await result.json();
            console.log(body);
            setArticleInfo(body);
        }
        fetchData();
        setArticleInfo({likes: 3}, [update]);
    });
    if(!update) return <NotFoundPage />
    const otherUpdates = updateContent.filter(update => update.stateName !== stateName);
    return(
        <>

        <h1>{update.stateName}</h1>
        <h2>{update.title} </h2>
        <p>This Post has been like {updateInfo.likes} times</p>
        {update.content.map((paragraph, key)=>(
            <p key ={key}> {paragraph}</p>
        ))}
        <h3>Other updates of our trip:</h3>
        <UpdatesList updates = {otherUpdates}/>
        </>

    );
}
    


export default UpdatePage;