import {useEffect, useState} from "react";

export default function useFetch(url: string) {
    const [data, setData] = useState(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                setLoading(true);
                const rez = await fetch(url)
                if (!rez.ok) {
                    setError('Could not fetch data for that resource');
                } else {
                    const data = await rez.json();
                    setData(data);
                    setLoading(false);
                }
            } catch (err) {
                setLoading(false);
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("An unexpected error occurred");
                }
            }
        };

        const timeoutId = setTimeout(loadData, 1000);

        return () => clearTimeout(timeoutId);
    }, [url]);

    return {data, error, loading};
}