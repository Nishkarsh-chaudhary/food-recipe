import React from 'react'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import SearchIcon from '@mui/icons-material/Search';

const Header = (props) => {
    const {search, onInputChange} = props;
    return (
        <>
            <div className="jumbotron m-4 p-5  text-white rounded">
                <h1 className='display-1'>
                    <i className='food-icon'>{<FastfoodIcon style={{ fontSize: '5rem', marginBottom: '3rem' }} />}</i> Food recipe
                </h1>
                <div className="inputGroup w-50 mx-auto">
                    <input 
                    type="text" 
                    className='form-control' 
                    placeholder='Search Your Recipe.....' 
                    value={search} onChange={onInputChange} />

                    <div className="inputGroup-append">
                        <button className='btn btn-dark m-3'>{<SearchIcon />}Search Recipe</button>
                    </div>
                </div>

            </div>


        </>
    )

}

export default Header
