import { logDOM } from "@testing-library/react";

const Book =  ({ img, title, author, index })=> {
    return <article className='book'>
        <div className="index">#{index}</div>
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <h3>{author}</h3>
    </article>
}

export default Book;