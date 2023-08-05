import { NavLink } from "react-router-dom";
function Component()
{
    return <>
                <nav>
<ul>
    <li>
        <NavLink to="/">Home</NavLink>
    </li>
<li>
    <NavLink to="/AboutUs">AboutUs</NavLink>
</li>
<li>
    <NavLink to="/ContactUs">ContactUs</NavLink>
</li>
</ul>
        </nav>
    </>
}

export default Component;