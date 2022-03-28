// Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

// Styles

const Layout = props => {
    return (
        <div className={styles.container}>
            <Header />
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;