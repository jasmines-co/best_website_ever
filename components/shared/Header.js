import Link from 'next/link'
class Header extends React.Component {


    render(){
        return(
            <React.Fragment>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </React.Fragment>
        )
    }
}

export default Header;