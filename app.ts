interface IData{
    postId: number
    id: number
    name: string
    email: string
    body:string
}

const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

const getData = async (url:string):Promise<IData[]> => {
 const response = await fetch(url)
 const data = await response.json()
 return data
}

getData(COMMENTS_URL)
  .then(data => {
    console.log(data.map((item)=>{
        return {ID:item.id,Email:item.email}
    }))

  });

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */