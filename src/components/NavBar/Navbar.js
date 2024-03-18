import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    const {onSearchButtonClick} = props
    const [searchQuery, setSearchQuery] = useState('')


    const handleInputChange=(e)=>{
        const query=e.target.value;
        setSearchQuery(query)
    }


    const handleSearchClick =(e)=>{
            e.preventDefault()
            onSearchButtonClick(searchQuery)
            setSearchQuery(searchQuery)
    }


    useEffect(() => {
      const handleKeyPress=(e)=>{
        if(e.key === 'Enter'){
            e.preventDefault();
            onSearchButtonClick(searchQuery)
        }
      }
      document.addEventListener('keydown', handleKeyPress);
      return () => {
        document.removeEventListener('keydown', handleKeyPress);

      }
    }, [handleSearchClick])
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Products</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search" onSubmit={handleSearchClick}>
                            <input className="form-control me-2" type="text" placeholder="Search" aria-label="Search" value={searchQuery} onChange={handleInputChange}/>
                            <button className="btn btn-outline-success" type="submit" onClick={handleSearchClick}>Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar


