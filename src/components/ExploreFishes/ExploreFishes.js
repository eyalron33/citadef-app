import FishCards from "../FishCards/FishCards";
import ReactPaginate from 'react-paginate';
import { useEffect, useState } from 'react';





function ExploreFishes(props) {



    const itemsPerPage = 5;
    const [currentItems, setCurrentItems] = useState({});
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
    const [pageOffset, setPageOffset] = useState(0);
  
    useEffect(() => {
      // Fetch items from another resources.
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(Object.fromEntries(Object.entries(props.fishes).slice(itemOffset, endOffset)));
      //Object.fromEntries(Object.entries(data).slice(0, 3));
      setPageCount(Math.ceil(props.minted / itemsPerPage));
    }, [itemOffset, itemsPerPage, props.fishes]);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % props.minted;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
      setPageOffset(event.selected);
    };

    return ( 
         <section id="section-collections" className="pt30 pb30">
                <div className="container relative-position">
                    <div className="col-lg-12 top-100">
                        <h2 className="style-2">The Citadef Council -- number of fishes: {props.minted}</h2>
                        {(props.minted!==0) && (props.fishes!==[])&& (<h3 className="style-2">Page {pageOffset+1}</h3>)}
                    </div>
                    <div className="bg-main-middle-left d-none d-lg-block"></div>
                    <div className="bg-main-middle-right d-none d-lg-block"></div>
                    <FishCards fishes={currentItems}  />
                    {(props.minted!==0) && (props.fishes!==[]) && (<ReactPaginate
                        previousLabel="Previous"
                        nextLabel="Next"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakLabel="..."
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageClick}
                        containerClassName="pagination"
                        activeClassName="active"
                        forcePage={pageOffset}
                    />)}
                </div>
            </section>
    )
}

export default ExploreFishes;