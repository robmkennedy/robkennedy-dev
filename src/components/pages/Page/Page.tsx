import './Page.scss';

type PageProps = {
    children?: React.ReactNode
};

const Page = ({children}: PageProps) => {

    return (
        <div className='rk-page'>
            {children}
        </div>
    );
}

export default Page;