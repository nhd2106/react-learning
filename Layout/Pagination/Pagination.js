import React from 'react';
import {Pagination,PaginationItem,PaginationLink} from 'reactstrap';
const PaginationComponent = ({
    currentPage,
    pageSize,
    totalCount,
    onChangePage
  }) => {
    const totalPage = Math.ceil(totalCount / pageSize);
    console.log(totalPage,'ádsdsd');
    
    //   Ví dụ totalPage = 5 => [0, 1, 2, 3, 4]
    const pages = [...Array(totalPage).keys()];
    
    
    return (
      <Pagination>
          <PaginationLink>
              {
                  pages.map(page=>(
                      <PaginationItem onClick={()=>onChangePage(page+1)}>
                          {page+1}
                      </PaginationItem>
                  ))
              }
          </PaginationLink>
      </Pagination>
    );
  };
export default PaginationComponent;
