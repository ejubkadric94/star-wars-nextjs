import useSWR, { Fetcher } from 'swr';

type Props = {
    filmsUrls: string[];
}

const fetcher = (url: string) => fetch(url).then(res => res.json())


const Films = ({ filmsUrls }: Props) => {
    const { data, isLoading, error } = useSWR(filmsUrls[0], fetcher);

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    console.log(JSON.stringify(data))

    return (
        <div>
            <span>This user stars in <i>{data.title}</i> movie from year </span>
            <span>{data.release_date}</span>
        </div>
    )
};

export default Films;
