import '../styles/globals.css';

function MyApp() {
    return (
        <div className='hero min-h-screen bg-base-200 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
            <div className='hero-content text-center'>
                <div className='max-w-md'>
                    <div className='card w-96 bg-base-100 py-10 shadow-xl flex items-center mb-9'>
                        <h1 className='text-5xl font-bold'>Fred Davison</h1>
                        <h2 className='text-3xl'>full-stack developer</h2>
                        <div className='avatar m-5'>
                            <div className='w-24 rounded-full'>
                                <img src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'/>
                            </div>
                        </div>
                        <div className={'flex justify-evenly'}>
                            <button className={'btn btn-secondary btn-lg m-2'}>GitHub</button>
                            <button className={'btn btn-secondary btn-lg m-2'}>LinkedIn</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyApp;
