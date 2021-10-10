import {Result} from "antd";
import {Link} from "react-router-dom";

export default function Error404(){
    return(
        <Result
            status="404"
            title="404"
            subTitle="Извините, страница, которую вы посетели, не существует."
            extra={<Link to="/">Домой</Link>}
        />
    )
}