import axios from "axios";
import { useEffect,useState } from "react";

function customuseFetch(arg) {
    const [data,setData] = useState(null);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios.get(arg)
        .then(res => {
            setData(res.data);
            setLoading(false);
        })
        .catch(err => {
            setError(err);
            setLoading(false);
        })
        .finally(() => {
            setLoading(false);
        })
    }, [arg])
    const refatch = () => {
        setLoading(true);
        axios.get(arg)
        .then(res => {
            setData(res.data);
            setLoading(false);
        })
        .catch(err => {
            setError(err);
            setLoading(false);
        })
        .finally(() => {
            setLoading(false);
        })
    }
    return ([data,error,loading,refatch])
}
export default customuseFetch;



