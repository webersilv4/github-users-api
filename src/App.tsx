import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


interface IError {
    response: { 
        data: { message: string } 
        status: number;
    };
    message: string
}

const App = () => {

    const { nickname } = useParams();

    const [user, setUser] = useState<IUser>();
    const [projects, setProjects] = useState<Array<IRepos>>();

    const [error, setError] = useState<Array<object>>([]);

    const ListUser = async () => {
       
        await axios.get(`https://api.github.com/users/${nickname}`)
            .then((response=> setUser(response.data)))
            .catch((error: IError)=> setError([
                { status: error.response.status, message: error.response.data.message }])
            );
        
        await axios.get(`https://api.github.com/users/${nickname}/repos`)
            .then((response=> setProjects(response.data)))
            .catch((error: IError)=> setError([
                { status: error.response.status, message: error.response.data.message }])
            );
    };

    useEffect(() => {
        ListUser();
    }, []);
  
    return (
        <>  
            { !error ? 

                <section className='text-center'>
                    <article className='text-white mt-5'>
                    
                        <h1>{user?.name}</h1>

                        <img src={user?.avatar_url} alt="image_avatar" className='avatar mt-3 mb-3' />

                        <br />
                        {user?.company ? 
                            <>
                                <span className='mr-3'>
                                    <b>Company: </b>{user.company}
                                </span>
                            </> 
                            : ''
                        }

                        <span className='mr-3'>
                            <b>Repositorios públicos: </b> {user?.public_repos}
                        </span>

                        <span className='mr-3'>
                            <b>Seguidores: </b> {user?.followers}
                        </span>

                        <span>
                            <b>Seguindo: </b> {user?.following}
                        </span>
                    
                        <br />
                        <span>
                            <b>Bio: </b> {user?.bio}
                        </span>


                    </article>

                    <article className='text-white mt-5 pt-5'>
                        <h1>Projetos</h1>
                    

                        <div className='row col-md-12 mx-auto'>

                            {projects?.map((response, key)=>(
                                <div key={key} className="mt-5 col-md-3 border p-5">
                        
                                    <h3 className='text-green-dft'>{response?.name}</h3>
                        
                                    <p><b>Número de estrelas: </b> {response.stargazers_count}</p>
                                    <p><b>Número de forks: </b> {response.forks_count}</p>
                                    <p><b>Contagem de observadores: </b> {response.watchers_count}</p>
                                    <p><b>Criado em: </b> {new Date(response.created_at).toLocaleDateString()}</p>
                                    <a href={response.clone_url} target="_blank" rel="noreferrer">
                                        <button className='botton-2'>Clone do projeto</button>
                                    </a>

                                </div>
                            ))}
                        </div>

                    </article>
                </section>
                
                : <section style={{ marginTop: '200px' }} className='text-center'>
                    {error.map((element, key)=> (
                        <article key={key}>
                            <h1 className='text-danger'>
                                {Object.values(element)[0]}
                            </h1>
                            <p className='text-white m-5 col-md-5 mx-auto'>
                                <b>{Object.values(element)[1]}</b>
                            </p>
                            <a href="/" className=''>Voltar</a>
                        </article>
                    ))}
                </section> 
            }
        </>
    );
};

export default App;
