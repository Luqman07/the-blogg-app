import Skeleton from "react-loading-skeleton";
export const letter = (para) => para.split('')[0]
export const RightSideLoading = () => {
    return (
        <>
            
            <section className="mb-2">
                <Skeleton style={{borderRadius: '50%'}} className="mb-1" width={35} height={35}/>
                <Skeleton height={20} width={230}/>
            </section>
            <section>
                <Skeleton style={{borderRadius: '50%'}} className="mb-1" width={35} height={35}/>
                <Skeleton height={20} width={300}/>
            </section>
            <section>
                <Skeleton style={{borderRadius: '50%'}} className="mb-1" width={35} height={35}/>
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

export const topics = ['Sport', 'Football', 'Basketball', 'Golf', 'Snooker', 'Tennis', 'Swimming', 'Games'];