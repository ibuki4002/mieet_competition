import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css'; 
import ReactPlayer from 'react-player';




export default function Dashboard(props) {
    
    return (

        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">おすすめ講師一覧</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                      <div>
                       <div class="m-auto px-4 py-8 max-w-xl"> 
                       
                       <Splide
                           
                            options={{
                            autoplay: true,
                            interval: 3000, 
                            rewind: true,
                            width: '100%',
                            height: '100%'

                            
                            }}
                        >    

                       
                            <SplideSlide>
                               <div className="relative">
                              
                                 <form class="user flex items-center -ml-3 mt-8 mb-4 absolute top-2 left-2 w-full z-50" method="POST" action="{{ route('teacher_top') }}">
                                            <div class="user-logo">
                                                <img class="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-full mx-4  shadow" src="https://images.unsplash.com/photo-1607789382281-1152591ec0da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="avatar"/>
                                            </div>
                                            <a href="https://twitter.com/GressierCosme1" target="_blank" class="text-gray-500">ここに名前を入力</a>
                                            <button className="block uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded" type="submit" value="follow" name="request">フォローする</button>
                                            <button className="block uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded" type='submit' value="moreSee" name="request">もっと見る</button>
                                  </form>
                                  <img src={'piano.jpg'} alt="ピアノ写真" className='absolute top-0 left-0 object-cover'></img>
                               </div>
                            </SplideSlide>
                            <SplideSlide>
                                 <form class="user flex items-center -ml-3 mt-8 mb-4 absolute top-2 left-2 w-full z-50" method="POST" action="{{ route('teacher_top') }}">
                                            <div class="user-logo">
                                                <img class="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-full mx-4  shadow" src="https://images.unsplash.com/photo-1607789382281-1152591ec0da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="avatar"/>
                                            </div>
                                            <a href="https://twitter.com/GressierCosme1" target="_blank" class="text-gray-500">ここに名前を入力</a>
                                            <button className="block uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded" type="submit" value="follow" name="request">フォローする</button>
                                            <button className="block uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded" type='submit' value="moreSee" name="request">もっと見る</button>
                                  </form>
                                  <img src={'piano.jpg'} alt="ピアノ写真" className='absolute top-0 left-0 object-cover'></img>
                            </SplideSlide>
                            <SplideSlide>
                                <div class="bg-white shadow-2xl" >
                                    <div>
                                        <img src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"/>
                                    </div>
                                    <div class="px-4 py-2 mt-2 bg-white">
                                        <h2 class="font-bold text-2xl text-gray-800">ここにキャッチコピーを入力</h2>
                                            <p class="sm:text-sm text-xs text-gray-700 px-2 mr-1 my-3">
                                                ここにプロフィールを入力
                                            </p>
                                            <button class="block uppercase mx-auto shadow bg-red-600 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded">もっと見る</button>

                                        <div class="user flex items-center -ml-3 mt-8 mb-4">
                                            <div class="user-logo">
                                                <img class="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-full mx-4  shadow" src="https://images.unsplash.com/photo-1607789382281-1152591ec0da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="avatar"/>
                                            </div>
                                                <a href="https://twitter.com/GressierCosme1" target="_blank" class="text-gray-500">ここに名前を入力</a>
                                            <button class="block uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded">フォローする</button>
                                        </div>
                                    </div>
                                </div>
                           
                            </SplideSlide>
                        </Splide>



                           
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
