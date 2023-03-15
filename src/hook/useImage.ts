import { useEffect, useState} from "react";

type Props = {
    fileName: number
}

const useImage = ({fileName}:Props) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<unknown>(null);
    const [image, setImage] = useState<any>(null);




    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await require(`./../assets/images/blogPost/${fileName}.jpg`) // change relative path to suit your needs
                setImage(response)
            } catch (err) {
                setError(err)
                console.log(err)
            } finally {
                setLoading(false)
            }
        }

        fetchImage();
    },[fileName]);

    return {
        loading,
        error,
        image,
    }
};

export default useImage;