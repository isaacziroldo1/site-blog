import { useRouter } from "next/router"


//exemplo de rota dinamica
export default function Post() {
    const router = useRouter()
    

    return (
        <div>
            <h2>Post {router.query.slug}</h2>
        </div>
    )
}