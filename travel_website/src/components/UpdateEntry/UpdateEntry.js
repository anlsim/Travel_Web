import React,  {useState, useEffect} from 'react';
import updateContent from '../Updates-content/Update-content';
import UpdatesList from '../../pages/BlogPage/BlogPage';
import NotFoundPage from '../../pages/ErrorsPage/NotFoundPage';
import CommentList from '../CommentsList/CommentList';

const UpdatePage = ({match}) => {
    //const updateName = match.params.name;
    const updateId = match.params.ObjectId;
    console.log(updateId)
     //const update = updateContent.find(update => update.id === updateId);
    const [updateInfo, setUpdateInfo] = useState({likes: 0, comments: []});
    useEffect(()=> {
        const fetchData = async() => {
            console.log(updateId)
            const result = await fetch(`/api/updates/${updateId}`);
            const body = await result.json();
            console.log(body);
            setUpdateInfo(body);
        }
        fetchData();
    }, [updateId]);
        //setUpdateInfo({likes: 10}, [update]);
    //});
    if(!updateId) return <NotFoundPage />
    const otherUpdates = updateContent.filter(update => update.ObjectId !== updateId);
    return(
        <>

        <h1>{updateId.title} </h1>
        <p>This Post has been liked {updateInfo.likes} times</p>
        {updateId.content.map((paragraph, key)=>(
            <p key ={key}> {paragraph}</p>
        ))}
       <hr />
        <CommentList comments={updateInfo.comments}/>
        <h3>Other updates of our trip:</h3>
      
        <UpdatesList updates = {otherUpdates}/>
        </>

    );
}
    


export default UpdatePage;