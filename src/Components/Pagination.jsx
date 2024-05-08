import React from 'react'

export const Pagination = ({productsPerPages,totalProduct,currentPage,setcurrentPage}) => {

    const pageNumbers = []

    console.log();

    for (let i = 1; i <= Math.ceil(totalProduct / productsPerPages); i++) {
        pageNumbers.push(i)
        
    }

    const onPreviusPages = () => {
        setcurrentPage(currentPage - 1)
    }
    const onNextPages = () => {
        setcurrentPage(currentPage + 1)
    }

    const onSpecificPage = (n) => [
        setcurrentPage(n)
    ]

  return (
    <nav 
        className="pagination is-centered mb-6" 
        role="navigation" 
        aria-label="pagination"
    >

        <a  className={`pagination-previous ${currentPage === 1 ? 'is-disabled' : ''}`} onClick={onPreviusPages}>Anterior</a>
        <a className={`pagination-next ${currentPage >= pageNumbers.length ? 'is-disabled' : ''}`} onClick={onNextPages}>Siguiente</a>
        <ul className="pagination-list">

            
            {
                pageNumbers.map(noPage =>(
                    <li key={noPage}>
                        <a  
                            className={`pagination-link 
                            ${noPage ===currentPage ? 'is-current' : ''

                            }`}  
                            onClick={() => onSpecificPage(noPage)}
                            >
                                {noPage}
                        </a> 
                        
                    </li>
                ))
            }
            
            
            
        </ul>
    </nav>
  )
}
