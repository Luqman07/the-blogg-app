import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

export const letter = (para) => para.split('')[0]
export const Bookmark = () => <svg className="mx-auto " width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Lists"><path d="M4.5 6.25V21c0 .2.24.32.4.2l5.45-4.09a.25.25 0 0 1 .3 0l5.45 4.09c.16.12.4 0 .4-.2V6.25a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25z" stroke="currentColor" strokeLinecap="round"></path><path d="M8 6V3.25c0-.14.11-.25.25-.25h11.5c.14 0 .25.11.25.25V16.5" stroke="currentColor" strokeLinecap="round"></path></svg>
export const BookmarkFill = () => <svg className="mx-auto" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Lists"><path d="M4.5 6.25V21c0 .2.24.32.4.2l5.45-4.09a.25.25 0 0 1 .3 0l5.45 4.09c.16.12.4 0 .4-.2V6.25a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25z" fill="currentColor" stroke="currentColor" strokeLinecap="round"></path><path d="M8 6V3.25c0-.14.11-.25.25-.25h11.5c.14 0 .25.11.25.25V16.5" stroke="currentColor" strokeLinecap="round"></path></svg>
export const Home = () => <svg className="mx-auto" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Home"><path d="M4.5 10.75v10.5c0 .14.11.25.25.25h5c.14 0 .25-.11.25-.25v-5.5c0-.14.11-.25.25-.25h3.5c.14 0 .25.11.25.25v5.5c0 .14.11.25.25.25h5c.14 0 .25-.11.25-.25v-10.5M22 9l-9.1-6.83a1.5 1.5 0 0 0-1.8 0L2 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
export const HomeFill = () => <svg className="mx-auto" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Home"><path d="M4.5 21.25V10.87c0-.07.04-.15.1-.2l7.25-5.43a.25.25 0 0 1 .3 0l7.25 5.44c.06.04.1.12.1.2v10.37c0 .14-.11.25-.25.25h-4.5a.25.25 0 0 1-.25-.25v-5.5a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25v5.5c0 .14-.11.25-.25.25h-4.5a.25.25 0 0 1-.25-.25z" fill="currentColor" stroke="currentColor" strokeLinejoin="round"></path><path d="M22 9l-9.1-6.83a1.5 1.5 0 0 0-1.8 0L2 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
export const Write = () => <svg className="mx-auto" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Write"><path d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z" fill="currentColor"></path><path d="M17.5 4.5l-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2l2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2l2 2" stroke="currentColor"></path></svg>
export const dateFormatter = (timestamp) => {
    const d = new Date( timestamp * 1000 );   
    return d     
    // return  (d.getHours() <= 9 ? '0'+d.getHours() : d.getHours()) + ":" + d.getMinutes() + ', by ' + d.toDateString() ;
}

export const RightSideLoading = () => {
    return (
        <>
            <section className="mb-2">
                <Skeleton  className="mb-1 rounded-[50%] w-[1rem] h-[2rem]" />
                <Skeleton height={20} width={230}/>
            </section>
            <section>
                <Skeleton  className="mb-1 rounded-full w-10 h-10"/>
                <Skeleton height={20} width={300}/>
            </section>
            <section>
                <Skeleton  className="mb-1 rounded-[50%] w-10 h-10"/>
                <Skeleton height={20} width={200}/>
            </section>
        </>
    )
}
export const BlogCardLoading = () => {
    return (
        <>
            <div className="flex justify-between ">
                <section>
                    <section>
                        <section className="flex items-center">
                            <Skeleton className="w-[2rem] h-[2rem] rounded-full" />
                            <Skeleton className="ml-2" height={18} width={200}/>
                        </section>
                        <section className="mt-2">
                            <Skeleton className="mb-1" height={35} width={300}/>
                            <Skeleton className="mb-1" height={25} width={200}/>
                            <Skeleton className="mb-1" height={16} width={100}/>
                        </section>
                    </section>
                </section>
                <section className="">
                    <Skeleton className="ml-4 mr-10" height={140} width={180}/>
                </section>
            </div>

            
        </>
    )
}

export const BlogdetsLoading = () => {
    return (
        <>
            <section className="flex items-center mb-5">
                <Skeleton style={{borderRadius: '50%'}} width={60} height={60}/>
                <div>
                    <Skeleton className="ml-2"  width={250}/>
                    <Skeleton className="ml-2"  width={180}/>
                </div>
            </section>
            <section>
                <Skeleton className=""  height={480}/>
            </section>
            <Skeleton className="mt-10"  height={40} width={200}/>
            <Skeleton className=""  height={80} width={400} />
        </>
    );

}

export const InfoLoader = () => {
    return (
        <>
            
            <Skeleton style={{borderRadius: '50%'}} width={160} height={160}/>
            <Skeleton className="mt-4"  width={200} />
            <Skeleton className=""  width={120} />
        </>
    )
}

export const Test = () => {
    return(
        <div className="md:px-[7rem] md:py-[4rem] px-[1.2rem] py-[3rem]">
            <SkeletonTheme baseColor="#D3D3D3" highlightColor="#ffff">
                <div className="user flex items-center mb-[3rem]">
                    <Skeleton className='rounded-full w-[5rem] h-[5rem] mr-[5rem]'/>
                    <div className='user-name-date'>
                        <Skeleton className="w-[4rem] h-[.7rem]" />
                        <Skeleton className="w-[6rem] h-[.7rem]" />
                    </div>
                </div>
                <div className="mb-[.8rem] blog-title">
                    <Skeleton className='w-[10rem] h-[2rem]' />
                </div>
                <div className="blog-image mb-[2rem]">
                    <Skeleton className='w-full h-[40vh]'/>
                </div>
                <div className="blog-text">
                    <Skeleton className='w-full h-[.8rem]' />
                    <Skeleton className='w-full h-[.8rem]' />
                    <Skeleton className='w-full h-[.8rem]' />
                    <Skeleton className='w-full h-[.8rem]' />
                    <Skeleton className='w-full h-[.8rem]' />
                    <Skeleton className='w-full h-[.8rem]' />
                    <Skeleton className='w-full h-[.8rem]' />
                    <Skeleton className='w-full h-[.8rem]' />
                </div>
            </SkeletonTheme>
        </div>
    )
} 

export const blogs = [
    {
        id: 1,
        username: 'Luqman Adeniyi',
        title: 'I spent 15 in dall e 2 credits creating this ai image and heres what i learned',
        detail:  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, mollitia. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, mollitia.',
        snippet: 'lorem ipsum dolor sit amet consectrtue adipisiing elmat into yourum if the posted imha',
        category: 'Football',
        likes: 0,
        isLiked: false,
        isTrending: true,
        createdAt: 'Aug 13 . 7min ago'
    },
    {
        id: 2,
        username: 'Qaseem Adeniyi',
        title: 'I spent 10 in dall e 2 credits creating this ai image and heres what i learned',
        detail:  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, mollitia. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, mollitia.',
        snippet: 'lorem ipsum dolor sit amet consectrtue adipisiing elmat into yourum if the posted imha',
        category: 'Basketball',
        likes: 0,
        isLiked: false,
        isTrending: true,
        createdAt: 'Aug 13 . 7min ago'
    },
    {
        id: 3,
        username: 'Latifa Adeniyi',
        title: 'I spent 15 in dall e 2 credits creating this ai image and heres what i learned',
        detail:  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, mollitia. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, mollitia.',
        snippet: 'lorem ipsum dolor sit amet consectrtue adipisiing elmat into yourum if the posted imha',
        category: 'Netball',
        likes: 0,
        isLiked: false,
        isTrending: true,
        createdAt: 'Aug 13 . 7min ago'
    },
    {
        id: 4,
        username: 'Ridwan Adeniyi',
        title: 'I spent 12 in dall e 2 credits creating this ai image and heres what i learned',
        detail:  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, mollitia. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, mollitia.',
        snippet: 'lorem ipsum dolor sit amet consectrtue adipisiing elmat into yourum if the posted imha',
        category: 'Tennis',
        likes: 0,
        isLiked: false,
        isTrending: true,
        createdAt: 'Aug 10 . 7min ago'
    },
    {
        id: 5,
        username: 'Abdqudus Adeniyi',
        title: 'I spent 15 in dall e 2 credits creating this ai image and heres what i learned',
        detail:  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, mollitia. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, mollitia.',
        snippet: 'lorem ipsum dolor sit amet consectrtue adipisiing elmat into yourum if the posted imha',
        category: 'Games',
        likes: 0,
        isLiked: false,
        isTrending: true,
        createdAt: 'Aug 13 . 7min ago'
    },
    
    {
        id: 6,
        username: 'Abdullah Adeniyi',
        title: 'I spent 11 in dall e 2 credits creating this ai image and heres what i learned',
        detail:  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, mollitia. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, mollitia.',
        snippet: 'lorem ipsum dolor sit amet consectrtue adipisiing elmat into yourum if the posted imha',
        category: 'Games',
        likes: 0,
        isLiked: false,
        isTrending: true,
        createdAt: 'Aug 13 . 7min ago'
    }
];  

export const topics = ['Sport', 'Entertainment', 'Fashion'];