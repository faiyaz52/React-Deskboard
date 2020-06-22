import React from 'react'

export const Navigation = () => {
    return (
        <div>
          
                <nav class="navbar navbar-expand-sm shadow navbar-dark">
                <ul class="navbar-nav">
                    <li class="">
                      <h2 className="logo">C C</h2>
                    </li>
                    <li class="nav-item">
                    <form class="form-inline" action="/action_page.php">
                        <input class="form-control hello"  type="text" placeholder="Search" style={{width:"400px",height:"40px"}}/>
                </form>
                    </li>
                </ul>
                <span class="navbar-text">
                    Navbar text
                </span>
                </nav>
        </div>
    )
}
