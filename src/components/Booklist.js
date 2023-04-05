import Book from './Book'
import {books} from './books'




const Booklist = ()=> {
    return <div> 
        <h1>Amzazon Best Sellers</h1>
        <section className='book-list'>
        {books.map((book, index)=> {
            return <Book key={book.id} {...book} index={index + 1} />
        })}
    </section>
    </div>
}

export default Booklist;